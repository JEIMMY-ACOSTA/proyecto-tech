import React from 'react'

export default function BotonInicio() {
  return (
    <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            class="material-symbols-outlined"
            style={{ color:"#063970", fontSize: "35px" }}
          >
            person
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <button className="bg-transparent text-black text-4xs font-regular px-1 py-2 mt-3 rounded">
            <p className="font-bold">{sessionStorage.getItem("Nombres")}</p>
          </button>
        </div>
      </div>
  )
}
