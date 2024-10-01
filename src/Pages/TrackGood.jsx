import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Form, Button, ProgressBar, Alert } from 'react-bootstrap';

const TrackGood = () => {
  const [consignmentNumber, setConsignmentNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stages = [
    'Created',
    'Collected',
    'Departed',
    'In Transit',
    'Arrived at Destination',
    'Out for Delivery',
    'Delivered',
  ];

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(`Fetching data for consignment number: ${consignmentNumber}`);
      const response = await axios.get(`https://globeflight.co.ke/wp-json/wpcargo/v1/track?consignment_number=${consignmentNumber}`);
      console.log('API Response:', response.data);
      if (response.data) {
        setTrackingData(response.data);
      } else {
        throw new Error('No data returned from the API');
      }
    } catch (err) {
      console.error('Error fetching tracking information:', err);
      setError('Failed to fetch tracking information. Please check your consignment number.');
    } finally {
      setLoading(false);
    }
  };

  const getProgress = () => {
    if (!trackingData) return 0;
    const currentStage = stages.findIndex(stage => stage.toLowerCase() === trackingData.status.toLowerCase());
    return (currentStage + 1) * (100 / stages.length);
  };

  return (
    <div>
      <Header />
      <Container className="my-5">
        <h1 className="text-center">Track Your Goods</h1>
        <Form onSubmit={handleTrack} className="my-4">
          <Form.Group controlId="formConsignmentNumber">
            <Form.Label>Consignment Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter consignment number"
              value={consignmentNumber}
              onChange={(e) => setConsignmentNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
            {loading ? 'Tracking...' : 'Track'}
          </Button>
        </Form>

        {error && <Alert variant="danger">{error}</Alert>}

        {trackingData && (
          <div className="tracking-result mt-5">
            <h4>Shipment Number: {trackingData.shipment_number}</h4>
            <p><strong>Origin:</strong> {trackingData.origin}</p>
            <p><strong>Destination:</strong> {trackingData.destination}</p>
            <ProgressBar
              animated
              now={getProgress()}
              label={`${getProgress().toFixed(0)}%`}
              className="mb-4"
            />
            <ul className="list-group">
              {stages.map((stage, index) => (
                <li
                  key={index}
                  className={`list-group-item ${trackingData.status.toLowerCase() === stage.toLowerCase() ? 'active' : ''}`}
                >
                  {stage}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default TrackGood;
