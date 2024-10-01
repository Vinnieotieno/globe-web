import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://globeflight.co.ke/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=${postsPerPage}`)
      .then(response => {
        setPosts(response.data);
        setTotalPages(parseInt(response.headers['x-wp-totalpages']));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts');
        setLoading(false);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div
        style={{
          height: '50vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://your-image-url.com/hero-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
       <p><h1>Our Blog</h1> </p>
    
      
        <p>Insights, updates, and stories from our company</p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-center">Blog</h1>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <>
                <div className="row">
                  {posts.map(post => (
                    <div key={post.id} className="col-md-12 mb-4">
                      <div className="card">
                        {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                          <img
                            src={post._embedded['wp:featuredmedia'][0].source_url}
                            alt={post.title.rendered}
                            className="card-img-top"
                          />
                        )}
                        <div className="card-body">
                          <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          <p className="card-text">
                            <small className="text-muted">
                              Posted on {new Date(post.date).toLocaleDateString()}
                            </small>
                          </p>
                          <p className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                          <a href={`/blog/${post.slug}`} className="btn btn-primary">Read More</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      className={`btn ${index + 1 === currentPage ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Search</h5>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <button className="btn btn-primary" type="button">Go</button>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Recent Posts</h5>
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <ul className="list-unstyled">
                    {posts.slice(0, 5).map(post => (
                      <li key={post.id}>
                        <a href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Recent Comments</h5>
                <p>Display recent comments here (requires additional API call).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
