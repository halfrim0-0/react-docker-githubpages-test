import { useState } from "react";
import { post } from "../logic/common/db";
import { normalButton } from "../utils/common/button";
import { normalTextForm } from "../utils/common/form";

function Page1() {
  const [text, setText] = useState<string>("");

  async function onClick() {
    await post(text);
  }

  return (
    <div>
      <h1>ここは Page1 です</h1>
      <div className="flex flex-row">
        <input
          type="text"
          className={normalTextForm}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className={normalButton} onClick={onClick}>
          投稿
        </button>
      </div>
    </div>
  );
}

export default Page1;
