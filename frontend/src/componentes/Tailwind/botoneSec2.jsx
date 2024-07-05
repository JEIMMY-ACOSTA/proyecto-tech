import React from "react";
import { Link } from "react-router-dom";

function BotoneSec2() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            data_object
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <Link
            type="button"
            className="btn btn-outline-none font-semibold"
            to={"/PgProgreso"}
          >
            Hackathons
          </Link>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            work_alert
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <Link
            type="button"
            className="btn btn-outline-none font-semibold"
            to={"/PgProgreso"}
          >
            Job Connections
          </Link>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            add_shopping_cart
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <Link
            type="button"
            className="btn btn-outline-none font-semibold"
            to={"/PgProgreso"}
          >
            Marketplace
          </Link>
        </div>
      </div>
    </>
  );
}

export default BotoneSec2;
