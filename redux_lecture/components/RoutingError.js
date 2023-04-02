import { useRouteError } from "react-router-dom";

const RoutingError = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>an error occured</h1>
      <h2>
        {error.status} - {error.statusText}
      </h2>
    </div>
  );
};
export default RoutingError;
