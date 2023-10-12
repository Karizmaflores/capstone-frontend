import { useEffect, useState } from "react";
import "../css/dashboard.css";
// import axios from 'axios';
import Image from "./Images";
import AddCouch from "./AddCouch";

function ShowCouchPics(props) {
  const [images, setImages] = useState([]);
  const unsplashApiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;
  console.log(props.setData, "props.setData");

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/collections/8700800/photos/?client_id=${unsplashApiKey}`
      );
      const data = await response.json();
      setImages(data);
      // console.log(data);
    };
    fetchImages();
  }, []);

  return (
    <>
      <div className="images">
        {!images.length ? (
          <h2 className="LoadingImagesText">Loading...</h2>
        ) : (
          <section className="couchList">
            <AddCouch couches={props.data} setCouches={props.setData} />
            <div className="couchDisplay">
              {props.data &&
                props.data.map((couch, index) => (
                  <div key={index}>
                    <h2>{couch.material}</h2>

                    <Image
                      key={images[Math.floor(Math.random() * 10)].id}
                      {...images[Math.floor(Math.random() * 10)]}
                    />
                  </div>
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default ShowCouchPics;
