import axios from 'axios';

export function capitalizeFirstLetter(string) {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

export function getLastTwoDigitsOfYear() {
  let date = new Date();
  return date.getFullYear() % 2000;
}

export function convertDate(d) {
  let date = new Date(d);
  return date.toISOString().slice(0, 10);
};

//export const Axios = axios.create({baseURL: 'https://frwdmauiapi.com:443'});
export const Axios = axios.create({baseURL: 'http://localhost:3000'});