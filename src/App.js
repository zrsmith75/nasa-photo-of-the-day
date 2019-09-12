import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import ImageContainer from "./components/ImageContainer.js";
import "./App.css";

const App = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        const imageData = response.data;
        // console.log(response);
        console.log(imageData);
        setImageData(imageData);
      })
      .catch(err => {
        console.log("The data was not returned", err);
      });
  }, []);

  return (
    <div className="container">
      <Header title={imageData.title} />
      <ImageContainer
        key={"image_" + 1}
        copyright={imageData.copyright}
        url={imageData.url}
        hdurl={imageData.hdurl}
      />
    </div>
  );
};

export default App;
