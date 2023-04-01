const Shimmer = () => {
  return (
    <div className="flex flex-wrap  justify-around my-6 ">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className=" w-52 h-48 p-2 m-2 bg-gray-300" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
