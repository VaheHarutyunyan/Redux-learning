import React, { useRef } from "react";

const Register = () => {
  const inputRef = useRef("");
  let defaultValue = "default value";
  function onChangeInput(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  console.log(inputRef.current.value);
  return (
    <div>
      <p>Register</p>
      <div>
        <form onSubmit={onChangeInput}>
          <input type="text" defaultValue={defaultValue} ref={inputRef} />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
