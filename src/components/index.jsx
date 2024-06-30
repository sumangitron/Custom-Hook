import useFetch from "./useFetch";

const HookTest = () => {
  const { apiData, loading } = useFetch("https://dummyjson.com/products", {});

  if (loading) {
    return <h3>loading data...</h3>;
  }

  return (
    <div>
      <h1>Testing useFetch custom hook</h1>
      {apiData?.products?.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </div>
  );
};

export default HookTest;
