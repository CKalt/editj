import React from "react";
import JsonViewer from "../../components/JsonViewer";

const json = {
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "pets": ["dog", "cat"]
};

export default function Home() {
  return (
    <div>
      <h1>JSON Editor</h1>
      <JsonViewer json={json} />
    </div>
  );
}
