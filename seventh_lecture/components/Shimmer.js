const Shimmer = () => {
  return (
    <div className="shimmer-parent">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer-container"></div>
        ))}
    </div>
  );
};
export default Shimmer;
