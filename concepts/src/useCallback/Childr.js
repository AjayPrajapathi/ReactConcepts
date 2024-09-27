import react, { memo } from "react";

const Childr = () => {
  console.log("child Component");
  return (
    <div>
      <h1>Child Components</h1>
    </div>
  );
};

export default memo(Childr);
