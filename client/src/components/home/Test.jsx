// import React from "react";
// import axios from "axios";

// const Test = () => {
//   const test = async () => {
//     const options = {
//       method: "GET",
//       url: "https://chillflix.p.rapidapi.com/movie_list",
//       headers: {
//         "x-rapidapi-key": "7352b8aa12msha4d1a1976ef54bdp1395a9jsnaa48ceb784e7",
//         "x-rapidapi-host": "chillflix.p.rapidapi.com",
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   test();
//   return <div></div>;
// };

// export default Test;

import React from "react";
import axios from "axios";

const Test = () => {
  const options = {
    method: "GET",
    url: "https://moviedatabase8.p.rapidapi.com/Filter",
    // params: {
    //   MinRating: '6.1',
    //   MaxRating: '6.9',
    //   MinYear: '2020',
    //   MaxYear: '2023',
    //   MinRevenue: '1000000',
    //   MaxRevenue: '100000000',
    //   Genre: 'Action',
    //   MinRuntime: '110',
    //   MaxRuntime: '180',
    //   OriginalLanguage: 'en',
    //   SpokenLanguage: 'English',
    //   Limit: '30'
    // },
    headers: {
      "x-rapidapi-key": "a402d87d12msha64fcd9bd1c6fbfp134b74jsnd71eb2fd6ee8",
      "x-rapidapi-host": "moviedatabase8.p.rapidapi.com",
    },
  };

  const data = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  data();
  return <div></div>;
};

export default Test;
