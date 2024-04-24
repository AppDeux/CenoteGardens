import { useState } from "react";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

import mapPlanoData from "./mapPlanoData";
import MapPlanoModal from "./MapPlanoModal";
import MapPlanoBg from "@/assets/imgs/MapPlano.webp";

const MapPlanoCenote = ({ url }) => {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const [modal, setModal] = useState({
    data: {},
    show: false,
  });

  // Handler para mostrar el modal
  const handlerOpenModal = (data) => {
    setModal({
      data,
      show: true,
    });
  };

  // Componente funcional que representa un círculo en el SVG
  function Path({ id, dCircle, dNumber, data }) {
    let fillColor;

    // Determinar el color de acuerdo a data.typology
    switch (data.typology) {
      case "Harmony":
        fillColor = "#fff9e1";
        break;
      case "Tranquility":
        fillColor = "#fff9e1";
        break;
      case "Serenity":
        fillColor = "#fff9e1";
        break;
      default:
        fillColor = ""; // Puedes establecer un color por defecto aquí si lo necesitas
    }

    data.available === 1 ? (fillColor = "#FF6262") : "";

    return (
      <g id={id} onClick={() => handlerOpenModal(data)}>
        {/* Circle */}
        <path className="cursor-pointer" d={dCircle} fill={fillColor} />

        {/* Number */}
        <path className="cursor-pointer" d={dNumber} fill={"#222222"} />
      </g>
    );
  }

  return (
    <section className="MapPlanoCenote block w-full lg:px-8 xl:px-12 container md:max-w-6xl">
      {modal.show && (
        <MapPlanoModal
          modal={modal}
          closeModal={() => setModal({ show: false })}
          url={url}
        />
      )}
      <div className="relative mb-8">
        <img
          src={MapPlanoBg.src}
          loading="lazy"
          className="absolute top-0 size-full object-cover"
        />
        <svg
          loading="lazy"
          className="md:w-full relative z-10"
          viewBox="0 0 1440 878"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g clipPath="url(#clip0_837_1042)">
            {/* 14 circle */}
            {mapPlanoData.map((e) => (
              <Path key={e.id} {...e} />
            ))}
          </g>
        </svg>
      </div>

      <div className="flex items-center mt-8`">
        <a
          href="#contact"
          className="max-w-56 mb-4 bg-accent-700 hover:bg-accent-800  px-6 py-3 text-white m-auto text-center"
        >
          {t("btnToContact")}
        </a>
      </div>
    </section>
  );
};
export default MapPlanoCenote;
