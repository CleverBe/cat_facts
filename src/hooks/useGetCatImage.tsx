import { useEffect, useState } from "react";
import { getCatImageFn } from "../services/catImage";

const useGetCatImage = () => {
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCatImage = async () => {
    setIsLoading(true);
    try {
      const response = await getCatImageFn();
      setImageUrl(response?.[0]?.url);
    } catch (error) {
      setError("Error getting the cat image");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCatImage();
  }, []);

  return {
    imageUrl: imageUrl ?? undefined,
    getCatImage,
    isLoading,
    error,
  };
};

export default useGetCatImage;
