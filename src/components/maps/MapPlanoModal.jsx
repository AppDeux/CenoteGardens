const MapPlanoModal = ({ modal, closeModal }) => {
  let bgAvailable;
  let txtAvailable;

  switch (modal.data.available) {
    case 0:
      bgAvailable = "#4EA72E";
      txtAvailable = "Available";
      break;
    case 1:
      bgAvailable = "#CF4141";
      txtAvailable = "Sold";

      break;
    case 2:
      bgAvailable = "#888888";
      txtAvailable = "Reserved";
      break;
    default:
      bgAvailable = "#888888";
      txtAvailable = "Available";
  }

  return (
    <div
      className={`
      transition-all z-20
      MapPlanoCenote__modal ${modal.display} 
      grid grid-cols-2 items-center bg-slate-200 gap-0.5
      w-3/4 md:w-1/2 lg:w-1/3 font-semibold
      text-center
    `}
    >
      <div className="col-span-2 flex justify-end pr-2 bg-white">
        <span onClick={closeModal} className="cursor-pointer text-lg">
          X
        </span>
      </div>
      <div className="py-3 bg-white">{modal.data.lote}</div>
      <div
        className="text-center py-3"
        style={{
          backgroundColor: bgAvailable,
        }}
      >
        {txtAvailable}
      </div>
      <div className="flex flex-col items-center py-2 bg-white h-full">
        <h5 className="font-light text-sm mb-1">Typology</h5>
        <p>{modal.data.typology}</p>
      </div>
      <div className="flex flex-col items-center py-2 bg-white h-full">
        <h5 className="font-light text-sm mb-1">Surface</h5>
        <p>
          {modal.data.surface} M<sup>2</sup>
        </p>
      </div>
      <div className="flex flex-col items-center py-2 bg-white h-full">
        <h5 className="font-light text-sm mb-1">
          USD/M<sup>2</sup>
        </h5>
        <p>${modal.data.USDm2}</p>
      </div>
      <div className="flex flex-col items-center py-2 bg-white h-full">
        <h5 className="font-light text-sm mb-1">Allowed levels</h5>
        <p>
          {modal.data.levels} M<sup>2</sup>
        </p>
      </div>
      <div className="flex flex-col items-center py-2 bg-white  h-full">
        <h5 className="font-light text-sm mb-1">Allowed Height</h5>
        <p>{modal.data.height} meters</p>
      </div>
      <div className="flex flex-col items-center py-2 bg-white h-full">
        <h5 className="font-light text-sm mb-1">Allowed Construction Area</h5>
        <p>
          {modal.data.area} M<sup>2</sup>
        </p>
      </div>

      <div className="flex flex-col items-center py-2 col-span-2 bg-white">
        <h5 className="font-light text-base mb-1">Price USD</h5>
        <p className="text-xl mb-4">
          ${modal.data.price} M<sup>2</sup>
        </p>

        <a
          href="#contacto"
          className="w-4/6 mb-4 bg-accent-700 hover:bg-accent-800   px-6 py-3 text-white"
        >
          I want to know more
        </a>
      </div>
    </div>
  );
};

export default MapPlanoModal;
