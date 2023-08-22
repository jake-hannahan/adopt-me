import { useState, useContext } from "react";
import Modal from "./Modal";
import AdoptedPetContext from "./AdoptedPetContext";

const PetCart = ({ adoptedPet }) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  return (
    <div>
      {adoptedPet ? (
        <div className="w-fill my-6 mx-0 flex h-32 flex-row-reverse items-center justify-center overflow-hidden border-2 border-[#333] bg-orange-100 p-0 shadow-lg">
          <div className="h-full">
            <button
              className="relative ml-4 mb-20 block"
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <img
            className="min-h-24 w-24"
            src={adoptedPet.images[0]}
            alt={adoptedPet.name}
          />
          <h1 className="mx-4">{adoptedPet.name}</h1>
        </div>
      ) : null}
      {showModal ? (
        <Modal>
          <div className="max-w-lg rounded-3xl bg-orange-100 p-4 text-center">
            <h1>Do you still want to adopt {adoptedPet.name}?</h1>
            <div className="max-w-lg rounded-3xl bg-orange-100 p-4 text-center">
              <button
                className="mr-4 rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Yes
              </button>
              <button
                className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
                onClick={() => {
                  setAdoptedPet(null);
                  setShowModal(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default PetCart;
