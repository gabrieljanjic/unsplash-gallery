import { useState } from "react";

const InputField = ({ searchCategory, setSearchCategory }) => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="input-div">
      <input type="text" className="input" placeholder="Enter Category" onChange={handleInput} />
      <button
        type="button"
        className="btn"
        onClick={() => {
          setSearchCategory(value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default InputField;
