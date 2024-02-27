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
    <main className="flex flex-col items-center justify-center h-screen gap-2 p-5 bg-slate-300">
      <h1 className="text-2xl font-bold">APP DE GATITOS</h1>
      <button
        className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={async () => {
          await getNewFact();
          await getCatImage();
        }}
      >
        Get new Fact
      </button>
      <div className="bg-slate-500 p-2 rounded-md">
        <div className="max-w-2xl text-center">
          {isLoadingFact ? <p>Loading fact</p> : <p>{fact}</p>}
        </div>
        <div className="flex justify-center">
          {isLoadingImg ? (
            <p>Loading image</p>
          ) : (
            <img
              className="max-w-md max-h-96"
              src={imageUrl}
              alt={`Image extracted from TheCatApi`}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
