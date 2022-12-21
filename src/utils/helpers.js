import axios from 'axios';

export function capitalizeFirstLetter(string) {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

export const Axios = axios.create({baseURL: 'https://frwdmauiapi.com:443'});