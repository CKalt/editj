// JsonArray.js
import React from "react";
import JsonNode from "./JsonNode";

const JsonArray = ({ json }) => {
  return (
    <div>
      [
      {json.map((item, index) => (
        <div key={index}>
          <JsonNode json={item} />
          {index < json.length - 1 ? "," : ""}
        </div>
      ))}
      ]
    </div>
  );
};

export default JsonArray;
