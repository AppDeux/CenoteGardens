const FormEmbed = ({ lang }) => {
  const formID =
    lang === "en"
      ? "20ea62af-851f-404d-85f2-3c54d4e8dcb0"
      : "97b84d5a-6b1c-430d-a867-7d85e0205f93";

  return (
    <div
      className="flex justify-center"
      dangerouslySetInnerHTML={{
        __html: `<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
          hbspt.forms.create({
            region: "na1",
            portalId: "44724690",
            formId: "${formID}"
          });
        </script>
        `,
      }}
    >
      {/* Aquí puedes colocar contenido adicional si es necesario */}
    </div>
  );
};

export default FormEmbed;
