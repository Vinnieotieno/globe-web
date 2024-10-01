import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://globeflight.co.ke/wp-json/wp/v2/posts?slug=${slug}`)
      .then(response => {
        setPost(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        setError('Failed to load post');
        setLoading(false);
      });
  }, [slug]);

  return (
    <div>
      <Header />
      <div className="container my-5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          post && (
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;
