import React, {useState, useEffect} from 'react';
import "./ImageDog.scss";
import {useParams} from "react-router-dom";

const ImageDog = () => {
  let { breed } = useParams();
  const urlImage = `https://dog.ceo/api/breed/${breed}/images`;
  const [imageDogs, setImageDogs] = useState();

  let imageData=[];

  useEffect(() => {
    const asyncFunction = async() => {
        try {
            const dataDogs = await fetch(urlImage);
            const jsonData = await dataDogs.json();
            const jsonDataClean = jsonData.message;
            console.log(jsonDataClean);
            for (const element of jsonDataClean) {
              imageData.push(
                <img class="img" src={`${element}`} alt={`${element}`}/>
              )
            }
            
        } catch (e) {
            imageData.push(
              <img src=""/>
            );
        }
        setImageDogs(imageData);
        console.log(imageData);
    }
    asyncFunction();
}, [])
  return (
    <div className="image-list">
      {imageDogs}
    </div>
  );
}

export default ImageDog;