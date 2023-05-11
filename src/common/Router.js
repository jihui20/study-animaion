import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import BookmarkMain from 'pages/BookmarkMain';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/bookmark" element={<BookmarkMain />} />
    </Routes>
  );
}

export default RouterConfig;
