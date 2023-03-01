// JsonObject.js
import React from "react";
import JsonNode from "./JsonNode";

const JsonObject = ({ json }) => {
  return (
    <div>
      {"{"}
      {Object.keys(json).map((key, index) => (
        <div key={index}>
          <span>"{key}": </span>
          <JsonNode json={json[key]} />
          {index < Object.keys(json).length - 1 ? "," : ""}
        </div>
      ))}
      {"}"}
    </div>
  );
};

export default JsonObject;
