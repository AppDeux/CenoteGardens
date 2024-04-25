import { useEffect } from "react";

const HubSpotForm = ({ lang }) => {
  useEffect(() => {
    const loadHubSpotForm = () => {
      const script = document.createElement("script");
      script.src = `//js.hsforms.net/forms/embed/v2.js`;
      script.async = true;
      document.getElementById("hubspot-form-container").appendChild(script);

      script.onload = () => {
        hbspt.forms.create({
          region: "na1",
          portalId: "44724690",
          formId:
            lang === "en"
              ? "20ea62af-851f-404d-85f2-3c54d4e8dcb0"
              : "97b84d5a-6b1c-430d-a867-7d85e0205f93",
        });
      };
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadHubSpotForm();
          observer.disconnect(); // Desconecta el observador una vez que el formulario se ha cargado
        }
      });
    });

    const target = document.getElementById("hubspot-form-container");
    if (target) {
      observer.observe(target);
    }

    // Limpia el observador al desmontar el componente
    return () => observer.disconnect();
  }, [lang]);

  return <div id="hubspot-form-container"></div>;
};

export default HubSpotForm;
