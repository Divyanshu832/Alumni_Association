import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Blog_Home from './pages/Home';

const Blogs = () => {
  return (
    <div className='container'>
      <Blog_Home />
    </div>
  );
};

export default Blogs;
