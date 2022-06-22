import React, { useRef } from "react";
import Input from "../Input/Input";

function Parent() {
  const inputRef = useRef();
  const doFocuse = () => inputRef.current.focus();

  return (
    <div>
      <span>Parent</span>
      <Input ref={inputRef} />
      <button onClick={doFocuse}>Focus</button>
    </div>
  );
}

export default Parent;
