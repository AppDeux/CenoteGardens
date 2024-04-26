import React, { useEffect, useRef } from "react";

const FormEmbed = ({ lang }) => {
  const formID =
    lang === "en"
      ? "20ea62af-851f-404d-85f2-3c54d4e8dcb0"
      : "97b84d5a-6b1c-430d-a867-7d85e0205f93";

  const formContainerRef = useRef(null);

  useEffect(() => {
    // Creamos un nuevo script dinámicamente
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;

    // Función para cargar el formulario después de cargar el script
    const loadForm = () => {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "44724690",
        formId: formID,
        target: `#${formContainerRef.current.id}`,
      });
    };

    // Escuchamos el evento de carga del script
    script.onload = loadForm;

    // Agregamos el script al final del body para que se ejecute
    document.body.appendChild(script);

    // Remover el script del DOM cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, [formID]); // Ejecutar useEffect solo cuando formID cambia

  return (
    <div className="hbspt-form" ref={formContainerRef} id={`form-${formID}`}>
      {/* Contenedor para el formulario generado dinámicamente */}
    </div>
  );
};

export default FormEmbed;
