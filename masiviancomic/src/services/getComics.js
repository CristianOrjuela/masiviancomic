//Libraries
import axios from 'axios';

//Subcomponents
import {baseURL} from '../utils/Constants';

export default function getComic () {

    return axios.get(baseURL)
      .then(({data}) => {
        //handle success
        return data;
      })
      .catch(error => {
        //handle error
        console.log(error);
      });

};