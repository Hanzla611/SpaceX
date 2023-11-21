import { useState } from "react";


function Modal({ handleClose, rocketDetails }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === rocketDetails.flickr_images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? rocketDetails.flickr_images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed backdrop-blur-md top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-80 ">
      <div className="bg-[#ffffff14] p-4 rounded-lg max-w-4xl  bg-opacity-80 backdrop-blur-md">
        <span className="flex w-full justify-between">
          {" "}
          <h2 className="text-3xl mb-2 text-white font-extrabold">
            {rocketDetails?.name}
          </h2>
          <img
            className="h-10 w-10 cursor-pointer hover:rotate-90 hover:scale-150"
            src="/close.svg"
            alt="close-icon"
            onClick={handleClose}
          />
        </span>

        <div className="mb-4">
          <img
            src={rocketDetails?.flickr_images[imageIndex]}
            alt={rocketDetails.name}
            className="w-full h-auto object-cover rounded mb-2"
          />
          {rocketDetails.flickr_images?.length > 1 && (
            <div className="flex justify-between">
              <button
                className="text-gray-300 hover:text-white"
                onClick={prevImage}
              >
                Previous
              </button>
              <button
                className="text-gray-300 hover:text-white"
                onClick={nextImage}
              >
                Next
              </button>
            </div>
          )}
        </div>
        <p className="text-gray-300 mb-2 text-xl">Type: {rocketDetails?.type}</p>
        <p className="text-gray-300 mb-2 text-xl">Country: {rocketDetails?.country}</p>
        <p className="text-gray-300 mb-2 text-xl">
          Cost per Launch: ${rocketDetails?.cost_per_launch.toLocaleString()}
        </p>
        <p className="text-gray-300 mb-2 text-xl">Mass: {rocketDetails?.mass.kg}{" "}kg</p>
        <p className="text-gray-300 mb-2 text-xl">Material: {rocketDetails?.landing_legs?.material ? rocketDetails?.landing_legs.material : "Stainless steel" }</p>
        <p className="text-gray-300 mb-4 text-xl">
          Success Rate: {rocketDetails.success_rate_pct}%
        </p>
   
        <p className="text-gray-300 mb-4 text-xl">{rocketDetails?.description}</p>
      </div>
    </div>
  );
}

export default Modal;
