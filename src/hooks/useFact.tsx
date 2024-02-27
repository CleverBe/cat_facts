import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

const useFact = () => {
  const [fact, setFact] = useState<null | string>(null);
  const [firstWords, setFirstWords] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const getNewFact = async () => {
    setIsLoading(true);

    try {
      const response = await getRandomFact();

      setFact(response.fact);

      const words = response.fact.split(" ").slice(0, 3).join(" ");

      setFirstWords(words);
    } catch (error) {
      setError("Error getting the cat fact");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNewFact();
  }, []);

  return { fact, firstWords, isLoading, getNewFact, error };
};

export default useFact;
