import { useEffect, useState } from "react";
import User from "./User";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function PersonList({ data, deletePerson }) {
  const [show, setShow] = useState(() => {
    const saved = localStorage.getItem("visible");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("visible", show.toString());
  }, [show]);

  return (
    <>
      <h1>จำนวนประชากร {data.length}</h1>

      <span onClick={() => setShow(!show)}>
        {show ? <FaRegEyeSlash size={30} /> : <FaRegEye size={30} />}
      </span>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deletePerson={deletePerson} />
          ))}
      </ul>
    </>
  );
}

export default PersonList;
