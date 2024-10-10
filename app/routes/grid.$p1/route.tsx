import { useParams } from "@remix-run/react";

const index = () => {
  const param = useParams();
  console.log("pi", param);

  return <div>Task Done - {param.p1}.</div>;
};

export default index;
