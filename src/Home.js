import React from "react";
import Data from "./Data";
import Prepaid from "./Prepaid";

function Home() {
  return (
    <>
      {Data.map((value) => {
        return <Prepaid value={value} />;
      })}
    </>
  );
}

export default Home;
