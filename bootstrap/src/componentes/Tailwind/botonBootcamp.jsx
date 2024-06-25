import React from "react";
import { Link } from "react-router-dom";

export default function BotonBootcamp() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center text-center items-center ">
        <span
          class="material-symbols-outlined"
          style={{ color: "#063970", fontSize: "25px" }}
        >
          bookmarks
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <Link
          type="button"
          className="btn btn-outline-none font-semibold"
          to={"/"}
        >
          Bootcamps
        </Link>
      </div>
    </div>
  );
}
