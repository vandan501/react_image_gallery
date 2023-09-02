import React, { useEffect, useState } from "react";
import axios from "axios";
import './ImageResults.css';

function ImageResults() {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageURL, setImageURL] = useState('https://api.slingacademy.com/v1/sample-data/photos?limit=20');

  async function downloadImages() {
    try {
      setIsLoading(true);

      const response = await axios.get(imageURL);
      const imageResults = response.data;

      // Extract relevant data from the API response
      const imageListResult = imageResults.photos.map(image => ({
        id: image.id,
        title: image.title,
        url: image.url,
      }));

      console.log(imageListResult);
      setImageList(imageListResult);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    downloadImages();
  }, []);

  return (
    <div className="image-wrapper">
      {isLoading ? 'Loading...' : (
        imageList.map(image => (
          <div key={image.id} className="image-container">
            <img className="image" src={image.url} alt={`Image ${image.title}`} />

          </div>
        ))
      )}
    </div>
  );
}

export default ImageResults;
