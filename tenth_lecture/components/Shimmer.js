const Shimmer = () => {
  return (
    <div className="shimmer-parent">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-container" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
