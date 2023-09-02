import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ImageDetails from './Components/ImageDetails/Imagedetails'; 
import ImageResults from './Components/ImageResults/ImageResults'; 

function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageResults />} />
        <Route path="/image/:id" element={<ImageDetails />} /> {/* Make sure the path matches */}
      </Routes>
    </Router>
  );
}

export default CustomRoutes;
