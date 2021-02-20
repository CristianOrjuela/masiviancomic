//Libraries
import React, {useEffect, useState} from 'react';

//Design Libraries
import {Rate} from 'antd';

//Subcomponents
import openNotification from '../message/Message';
import {defaultRanking} from '../../utils/Constants';

//Services
import getComic from '../../services/getComics';

//Styles
import './comic.css';


export default function Comic() {

  const [randomJSONComic, setRandomJSONComic] = useState('');
  const [currentRate, setRate] = useState(defaultRanking);
  
  useEffect( () => {
    
    getComic().then(data => setRandomJSONComic(data));
     
  }, []);
  
  return(
    <div className="comic-content">
      <p className="comic-title">
        {randomJSONComic.title}
      </p>
      <p className="comic-title">
        <img src={randomJSONComic.img}/>
      </p>
      <div>
        <Rate className="rate-design" allowHalf value={currentRate} onChange={(value) => {setRate(value); openNotification(value);}}/> 
      </div>
    </div>         
  );
  
};