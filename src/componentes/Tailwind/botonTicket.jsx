import React from "react";

function BotonTicket() {
  return (
      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined text-gradient-to-r from-cyan-700 to-blue-400"
            style={{ fontSize: "35px" }}
          >
            person
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <button className="bg-transparent text-black text-4xs font-semibold px-1 py-2 mt-3 rounded">
            <p className="font-bold">Dina Lamilla</p>
          </button>
        </div>
      </div>
  );
}

export default BotonTicket;
