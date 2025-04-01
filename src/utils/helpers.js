import axios from "axios";

export function capitalizeFirstLetter(string) {
  if (string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }
}

export function getLastTwoDigitsOfYear() {
  let date = new Date();
  return date.getFullYear() % 2000;
}

export function convertDate(d) {
  if (d) {
    let date = new Date(d).toString().slice(4, 15);
    return date;
  }
}

export function createTodaysDate() {
  let date = new Date().toString().slice(4, 15);
  return date;
}

export function futureDate6() {
  let date = new Date();
  date.setDate(date.getDate() + 42);
  return date.toString().slice(4, 15);
}

export function futureDate7() {
  let date = new Date();
  date.setDate(date.getDate() + 49);
  return date.toString().slice(4, 15);
}

export const Axios = axios.create({ baseURL: "https://frwdmauiapi.com:443" });
// export const Axios = axios.create({ baseURL: "http://localhost:3000" });
