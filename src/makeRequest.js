import axios from "axios";

export const makeRequest = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // baseURL: "http://localhost:1337/api",
    headers: {
        // Authorization:  "bearer" + process.env.REACT_APP_STRIP_APP_TOKAN,
         Authorization:  ` bearer ${import.meta.env.VITE_API_STRAPI}`,
        // Authorization: "bearer" + "59afd5a49d9e89ba2f9ea5654cc18f565562a5e0e9e987d04929e25be3ea7d8f742473b57d14e80e2fb1584c5ff1eaa47d08144c4c3b7e487fdfdf55fc247bad723df543f433bd2772667163b8c2ded4798f87d5a3be96b19dbfcf91127cbb1044656b5e2ea858cb78a07444bf57c2c28ace43986c824fc8790bd2de21cee75c",
      },
});

// export const makeRequest = axios.create({
//   baseURL: import.meta.env.VITE_API_UPLOAD_URL,
//   // baseURL: "http://localhost:1337/api",
//   headers: {
//       // Authorization:  "bearer" + process.env.REACT_APP_STRIP_APP_TOKAN,
//        Authorization:  ` bearer ${import.meta.env.VITE_API_STRAPI}`,
//       // Authorization: "bearer" + "59afd5a49d9e89ba2f9ea5654cc18f565562a5e0e9e987d04929e25be3ea7d8f742473b57d14e80e2fb1584c5ff1eaa47d08144c4c3b7e487fdfdf55fc247bad723df543f433bd2772667163b8c2ded4798f87d5a3be96b19dbfcf91127cbb1044656b5e2ea858cb78a07444bf57c2c28ace43986c824fc8790bd2de21cee75c",
//     },
// });

