import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import BlogPost from './Pages/BlogPost';
import TrackGood from './Pages/TrackGood';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/track-goods" element={<TrackGood />} />

        </Routes>
      </BrowserRouter>

      );

  }

export default App;