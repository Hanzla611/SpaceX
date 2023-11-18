import React from 'react'

function Modal({handleClose,rocketDetails}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-2"></h2>
            {/* Display necessary details from rocketDetails object */}
            <p></p>
            <p>Cost per Launch: $</p>
            {/* Add more details as needed */}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      );
}

export default Modal
