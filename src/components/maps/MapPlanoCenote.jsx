import { useState } from "react";
import mapPlanoData from "./mapPlanoData";
import MapPlanoModal from "./MapPlanoModal";

const MapPlanoCenote = () => {
  const [modal, setModal] = useState({
    data: {},
    show: false,
  });

  // Manejador para mostrar el modal
  const handlerOpenModal = (data) => {
    setModal({
      data,
      show: true,
    });
  };

  // Componente funcional que representa un círculo en el SVG
  function Path({ id, d, data }) {
    let fillColor;

    // Determinar el color de acuerdo a data.typology
    switch (data.typology) {
      case "Harmony":
        fillColor = "#4EA72E";
        break;
      case "Tranquility":
        fillColor = "#0F9ED5";
        break;
      case "Serenity":
        fillColor = "#0E2841";
        break;
      default:
        fillColor = ""; // Puedes establecer un color por defecto aquí si lo necesitas
    }
    return (
      <path
        className="cursor-pointer"
        id={id}
        d={d}
        onClick={() => handlerOpenModal(data)}
        fill={fillColor}
      />
    );
  }

  return (
    <section className="MapPlanoCenote block lg:px-8 xl:px-12 container">
      {modal.show && (
        <MapPlanoModal
          modal={modal}
          closeModal={() => setModal({ show: false })}
        />
      )}

      <svg
        className="md:w-full mb-8"
        viewBox="0 0 1440 878"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g clipPath="url(#clip0_405_806)">
          <rect width="1440" height="878" fill="#FFF9E1" />
          <rect width="1440" height="878" fill="#FFF9E1" />
          <g
            style={{
              mixBlendMode: "multiply",
            }}
          >
            <rect width="1439" height="878" fill="url(#pattern0_405_806)" />
          </g>

          {mapPlanoData.map((e) => (
            <Path key={e.id} {...e} />
          ))}

          {/* Sin numero */}
          <path
            d="M1037.95 850.885C1046.73 850.885 1053.85 843.777 1053.85 835.009C1053.85 826.241 1046.73 819.133 1037.95 819.133C1029.17 819.133 1022.06 826.241 1022.06 835.009C1022.06 843.777 1029.17 850.885 1037.95 850.885Z"
            fill="#"
          />
          <path
            d="M1151.88 850.885C1160.66 850.885 1167.77 843.777 1167.77 835.009C1167.77 826.241 1160.66 819.133 1151.88 819.133C1143.1 819.133 1135.99 826.241 1135.99 835.009C1135.99 843.777 1143.1 850.885 1151.88 850.885Z"
            fill="#"
          />
          <path
            d="M1265.81 850.885C1274.58 850.885 1281.7 843.777 1281.7 835.009C1281.7 826.241 1274.58 819.133 1265.81 819.133C1257.03 819.133 1249.91 826.241 1249.91 835.009C1249.91 843.777 1257.03 850.885 1265.81 850.885Z"
            fill="#"
          />
          <path
            d="M1379.73 850.885C1388.51 850.885 1395.63 843.777 1395.63 835.009C1395.63 826.241 1388.51 819.133 1379.73 819.133C1370.95 819.133 1363.84 826.241 1363.84 835.009C1363.84 843.777 1370.95 850.885 1379.73 850.885Z"
            fill="#"
          />
          {/* -------------- */}
        </g>
        <defs>
          <pattern
            id="pattern0_405_806"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_405_806"
              transform="scale(0.00069735 0.00114292)"
            />
          </pattern>
          <clipPath id="clip0_405_806">
            <rect width="1440" height="878" fill="white" />
          </clipPath>
          <image
            id="image0_405_806"
            width="1434"
            height="875"
          />
        </defs>
      </svg>

      <div className="flex items-center mt-8`">
        <a
          href="#contacto"
          className="max-w-56 mb-4 bg-accent-700  px-6 py-3 text-white m-auto text-center"
        >
          I want to know more
        </a>
      </div>
    </section>
  );
};
export default MapPlanoCenote;