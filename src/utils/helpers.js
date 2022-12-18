import axios from 'axios';

export function capitalizeFirstLetter(string) {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

export const Axios = axios.create({baseURL: 'http://ec2-35-160-33-27.us-west-2.compute.amazonaws.com:3000'});