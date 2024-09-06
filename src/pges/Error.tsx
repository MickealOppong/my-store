import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;
  console.log(error);



  return <div>
    <h2>Oops, There was an error</h2>
    <p>{error.message}</p>
  </div>
}
export default Error;