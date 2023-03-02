// components/JsonViewer.js
import React, { useState, useEffect } from "react";
import JsonScalar from "./JsonScalar";
import JsonArray from "./JsonArray";
import JsonObject from "./JsonObject";

const JsonViewer = ({ json }) => {
  const [cursor, setCursor] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("key down");
      if (e.key === "ArrowUp") {
        console.log("up arrow pressed");
        setCursor((prevCursor) => {
          if (prevCursor.length === 0) {
            return [0];
          } else {
            const newIndex = prevCursor[prevCursor.length - 1] - 1;
            return [...prevCursor.slice(0, -1), newIndex];
          }
        });
      } else if (e.key === "ArrowDown") {
        console.log("down arrow pressed");
        setCursor((prevCursor) => {
          if (prevCursor.length === 0) {
            return [0];
          } else {
            const newIndex = prevCursor[prevCursor.length - 1] + 1;
            return [...prevCursor.slice(0, -1), newIndex];
          }
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleCursorChange = (newCursor) => {
    setCursor(newCursor);
  };

  const handleDelete = (key) => {
    const newJson = Array.isArray(json)
      ? [...json.slice(0, key), ...json.slice(key + 1)]
      : { ...json, [key]: undefined };
    setCursor([]);
    setFocused(false);
    onJsonChange(newJson);
  };

  const handleInsert = (key, value) => {
    const newJson = Array.isArray(json)
      ? [...json.slice(0, key + 1), value, ...json.slice(key + 1)]
      : { ...json, [key]: value };
    setCursor([]);
    setFocused(false);
    onJsonChange(newJson);
  };

  const onJsonChange = (newJson) => {
    console.log(newJson);
  };

  const renderNode = (json, key) => {
    const nodeProps = {
      json,
      cursor,
      onCursorChange: handleCursorChange,
      onDelete: () => handleDelete(key),
      onInsert: (value) => handleInsert(key, value),
      focused,
      onFocus: handleFocus,
      onBlur: handleBlur
    };

    if (typeof json === "string" || typeof json === "number") {
      return <JsonScalar {...nodeProps} />;
    } else if (Array.isArray(json)) {
      return <JsonArray {...nodeProps} />;
    } else {
      return <JsonObject {...nodeProps} />;
    }
  };

  return <div>{renderNode(json)}</div>;
};

export default JsonViewer;
