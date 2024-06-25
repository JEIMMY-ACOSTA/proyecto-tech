import React from "react";

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
        <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
          Hackathons
        </button>
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
        <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
            Job Connections
        </button>
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
        <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
            Marketplace
        </button>
      </div>
    </div>
    </>

      
  );
}

export default BotoneSec2;
