import React from "react";
import JsonScalar from "./JsonScalar";
import JsonArray from "./JsonArray";
import JsonObject from "./JsonObject";

const JsonNode = ({ json }) => {
  if (typeof json === "object" && json !== null) {
    if (Array.isArray(json)) {
      return <JsonArray json={json} />;
    } else {
      return <JsonObject json={json} />;
    }
  } else {
    return <JsonScalar json={json} />;
  }
};

export default JsonNode;
