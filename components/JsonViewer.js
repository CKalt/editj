
import React from "react";
import JsonNode from "./JsonNode";

const JsonViewer = ({ json }) => {
  return (
    <div>
      <JsonNode json={json} />
    </div>
  );
};

export default JsonViewer;
