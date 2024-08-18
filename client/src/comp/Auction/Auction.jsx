import React from "react";
import { useParams } from "react-router-dom";

const Auction = () => {
  let params = useParams();
  params = JSON.stringify(params.teamId);
  return (
    <div
      style={{
        marginTop: "20vh",
      }}
    >
      Team ID : {params}
    </div>
  );
};

export default Auction;
