import axios from "axios";

const catFactAPIURL = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const { data } = await axios.get(catFactAPIURL);

  return data;
};
