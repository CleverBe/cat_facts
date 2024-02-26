import axios from "axios";

export const getCatImageFn = async () => {
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/images/search"
  );

  return data;
};
