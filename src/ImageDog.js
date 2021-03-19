import React, {useState, useEffect} from "react";
import "./ImageDog.scss";
import {useParams} from "react-router-dom";

const ImageDog = () => {
  const {breed} = useParams();
  const urlImage = `https://dog.ceo/api/breed/${breed}/images`;
  const [imageDogs, setImageDogs] = useState();

  const imageData = [];

  useEffect(() => {
    const asyncFunction = async() => {
      try {
        const dataDogs = await fetch(urlImage);
        const jsonData = await dataDogs.json();
        const jsonDataClean = jsonData.message;
        for (const element of jsonDataClean) {
          imageData.push(
            <img
              alt={`${element}`}
              className="img"
              src={`${element}`}
            />
          );
        }
      } catch (exception) {
        imageData.push(
          <img
            alt="null"
            src="null"
          />
        );
      }
      setImageDogs(imageData);
    };
    asyncFunction();
  }, [imageDogs]);
  return (
    <div className="imageList">
      {imageDogs}
    </div>
  );
};

export default ImageDog;