import { useParams } from "react-router-dom";
const UseParamsEx = () => {
  const { id } = useParams();
  return (
    <>
      <h2>{id}</h2>
      <h3>This is the Request Parameter</h3>
    </>
  );
};
export default UseParamsEx;
