import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID rpCoqGG0jggKP5P9XJqFoTxU9B0lrfPQtnb2v7EJpbI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
