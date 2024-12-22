import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1 className="error-heading">
        {err.status}: {err.statusText}
      </h1>
      <h2 className="error-h2">Oops!!! You ran into error</h2>
    </div>
  );
};

export default Error;
