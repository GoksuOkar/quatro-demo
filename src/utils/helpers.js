import axios from 'axios';

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
  let date = new Date(d.slice(0, 10));
  if (!isNaN(date.getTime())) {
      let day = date.getDate() + 1;
      day = day.toString();
      let month = (date.getMonth() + 1).toString();

      return (month[1] ? month : '0' + month[0]) + '-' +
         (day[1] ? day : '0' + day[0]) + '-' + 
         date.getFullYear();
  }
}

// export const Axios = axios.create({baseURL: 'https://frwdmauiapi.com:443'});
export const Axios = axios.create({baseURL: 'http://localhost:3000'});
