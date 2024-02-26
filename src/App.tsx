import useFact from "./hooks/useFact";
import useGetCatImage from "./hooks/useGetCatImage";

const App = () => {
  const {
    fact,
    // firstWords,
    getNewFact,
    isLoading: isLoadingFact,
    error: errorFact,
  } = useFact();

  const {
    imageUrl,
    getCatImage,
    isLoading: isLoadingImg,
    error: errorImg,
  } = useGetCatImage();

  if (errorImg || errorFact) {
    return (
      <h1 className="mt-5 text-4xl font-bold text-center text-red-500">
        {errorImg}
        {errorFact}
      </h1>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-2 p-5">
      <h1 className="text-2xl font-bold">APP DE GATITOS</h1>
      <button
        className="px-2 py-1 text-white bg-blue-400 rounded-md hover-bg-blue-500"
        onClick={async () => {
          await getNewFact();
          await getCatImage();
        }}
      >
        Get new Fact
      </button>
      {isLoadingFact ? <h2>Loading fact</h2> : <p>{fact}</p>}
      {isLoadingImg ? (
        <h2>Loading image</h2>
      ) : (
        <img
          className="max-w-md max-h-96"
          src={imageUrl}
          alt={`Image extracted from TheCatApi`}
        />
      )}
    </main>
  );
};

export default App;
