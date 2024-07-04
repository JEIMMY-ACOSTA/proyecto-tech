// import React from "react";
// import { Link } from "react-router-dom";

// export default function BotonRecursos() {
//   return (
//     <>
//       <div className="flex flex-row">
//         <div className="flex flex-col justify-center text-center items-center ">
//           <span
//             class="material-symbols-outlined"
//             style={{ color: "#063970", fontSize: "25px" }}
//           >
//             terminal
//           </span>
//         </div>
//         <div className="flex flex-col justify-center">
//           <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
//             Kit del programador
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-row">
//         <div className="flex flex-col justify-center text-center items-center ">
//           <span
//             class="material-symbols-outlined"
//             style={{ color: "#063970", fontSize: "25px" }}
//           >
//             local_library
//           </span>
//         </div>
//         <div className="flex flex-col justify-center">
//           <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
//             Actividades estudiantes
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-row">
//         <div className="flex flex-col justify-center text-center items-center ">
//           <span
//             class="material-symbols-outlined"
//             style={{ color: "#063970", fontSize: "25px" }}
//           >
//             library_books
//           </span>
//         </div>
//         <div className="flex flex-col justify-center">
//           <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
//             Material de clase
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-row">
//         <div className="flex flex-col justify-center text-center items-center ">
//           <span
//             class="material-symbols-outlined"
//             style={{ color: "#063970", fontSize: "25px" }}
//           >
//             sentiment_content
//           </span>
//         </div>
//         <div className="flex flex-col justify-center">
//           <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
//             Contenido temático
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-row mb-5">
//         <div className="flex flex-col justify-center text-center items-center ">
//           <span
//             class="material-symbols-outlined"
//             style={{ color: "#063970", fontSize: "25px" }}
//           >
//             sort_by_alpha
//           </span>
//         </div>
//         <div className="flex flex-col justify-center">
//           <button className="bg-transparent text-dark font-regular py-2 px-3  rounded">
//             Tutorias componente técnico
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function BotonRecursos() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            className="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            terminal
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://drive.google.com/file/d/1QAFWnkiZ3kZrCSPFTy1800lreDEClO_2/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-dark font-regular py-2 px-3 rounded"
          >
            Kit del programador
          </a>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            className="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            local_library
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://drive.google.com/drive/folders/1vEl-HnbMpQeY0L4GBC07a5n4XlxU2cpA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-dark font-regular py-2 px-3 rounded"
          >
            Actividades estudiantes
          </a>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            className="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            library_books
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://drive.google.com/drive/folders/1Hg_7lXKC_06-7DxqDCdaYDgwl2ELMzer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-dark font-regular py-2 px-3 rounded"
          >
            Material de clase
          </a>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            className="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            sentiment_content
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://drive.google.com/file/d/1hYciXmYBUHL-PV61E73yIlIliO1AiY_O/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-dark font-regular py-2 px-3 rounded"
          >
            Contenido temático
          </a>
        </div>
      </div>

      <div className="flex flex-row mb-5">
        <div className="flex flex-col justify-center text-center items-center ">
          <span
            className="material-symbols-outlined"
            style={{ color: "#063970", fontSize: "25px" }}
          >
            sort_by_alpha
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://drive.google.com/drive/folders/1BYMMus2Bcf5RgeRO1nVsC_BFvgMYPm3J"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-dark font-regular py-2 px-3 rounded"
          >
            Tutoriales componente técnico
          </a>
        </div>
      </div>
    </>
  );
}
