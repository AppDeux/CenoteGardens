import { useState } from "react";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

import mapPlanoData from "./mapPlanoData";
import MapPlanoModal from "./MapPlanoModal";
import MapPlanoBg from "@/assets/imgs/MapPlano.webp";
import MapPlanoBg300 from "@/assets/imgs/MapPlano/MapPlano300.webp";
import MapPlanoBg1056 from "@/assets/imgs/MapPlano/MapPlano1056.webp";
import MapPlanoBg1460 from "@/assets/imgs/MapPlano/MapPlano1460.webp";
import MapPlanoBg1780 from "@/assets/imgs/MapPlano/MapPlano1780.webp";
import MapPlanoBg2048 from "@/assets/imgs/MapPlano/MapPlano2048.webp";

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
          srcSet={`${MapPlanoBg300.src} 300w, ${MapPlanoBg.src} 960w, ${MapPlanoBg1056.src} 1056w, ${MapPlanoBg1460.src} 1460w, ${MapPlanoBg1780.src} 1780w, ${MapPlanoBg2048.src} 2048w`}
          sizes="(min-width: 1280px) 1056px, (min-width: 1040px) calc(50.91vw + 447px), (min-width: 780px) 100vw, (min-width: 680px) 640px, calc(94.44vw + 17px)"
          loading="lazy"
          className="absolute top-0 size-full object-cover"
          alt="mapCenote"
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
