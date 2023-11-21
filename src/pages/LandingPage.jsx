import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import Banner from "../components/Banner";
import RocketGrid from "../components/RocketGrid";
import RocketPopup from "../components/Modal";
import Spinner from "../components/Spinner";

function LandingPage() {
  const [rockets, setRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 

  const statusRef = useRef("");
  // const originalLaunchRef = useRef("");
  // const typeRef = useRef("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const statusValue = statusRef.current.value;

    console.log("Status:", statusValue);

    let updatedData;

    if (statusValue === "true" || statusValue === "false") {
      const activeStatus = statusValue === "true";
      updatedData = rockets.filter((data) => data?.active === activeStatus);
    } else {
      updatedData = rockets;
    }

    setFilteredRockets(updatedData);
    setCurrentPage(1); 
  };

  const handleClick = (rocket) => {
    console.log("clicked");
    setSelectedRocket(rocket);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedRocket(null);
    setModalOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRockets.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setRockets(data);
        setFilteredRockets(data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [statusRef]);

  return (
    <div className=" pb-12">
      <section className="font-Barlow pb-24">
        <Nav />
        <div className="md:container px-2 pt-5 md:text-left text-center">
          <Banner />
          <SearchForm
            // originalLaunchRef={originalLaunchRef}
            statusRef={statusRef}
            // typeRef={typeRef}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
      </section>
      <hr className="w-1/6 mx-auto my-8 mb-20 border-gray-200" />
      {loading && (
        <p>
          <Spinner />
        </p>
      )}

      {error && <p>Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-12 pb-12">
        {currentItems.length > 0 &&
          currentItems.map((rocket) => (
            <div
              className="cursor-pointer"
              key={rocket.id}
              onClick={() => handleClick(rocket)}
            >
              <RocketGrid details={rocket} src={rocket?.flickr_images[0]} />
            </div>
          ))}
      </div>
      {currentItems.length > 10 && (
        <div className="flex justify-end mr-12 mt-4 text-3xl">
          <ul className="flex space-x-4 rounded bg-black text-white w-32 p-4 text-center justify-center opacity-60">
            {Array.from(
              { length: Math.ceil(filteredRockets.length / itemsPerPage) },
              (_, i) => (
                <li
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`cursor-pointer border-2 border-white px-2 ${
                    currentPage === i + 1
                      ? "text-blue-500 font-bold text-4xl"
                      : ""
                  }`}
                >
                  {i + 1}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {modalOpen && selectedRocket && (
        <RocketPopup rocketDetails={selectedRocket} handleClose={handleClose} />
      )}
    </div>
  );
}

export default LandingPage;
