// src/WordPressPosts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WordPressPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://globeflight.co.ke/wp-json/wp/v2/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
            ))}
        </div>
    );
};

export default WordPressPosts;
