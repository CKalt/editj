// JsonScalar.js
import React, { useState } from "react";

const JsonScalar = ({ json }) => {
  const [value, setValue] = useState(json);
  const handleChange = (e) => setValue(e.target.value);

  return <input type="text" value={value} onChange={handleChange} />;
};

export default JsonScalar;
