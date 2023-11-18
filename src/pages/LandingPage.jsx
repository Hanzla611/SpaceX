// LandingPage.js

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import Banner from "../components/Banner";
import RocketGrid from "../components/RocketGrid";
import RocketPopup from "../components/Modal";

function LandingPage() {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRocket, setSelectedRocket] = useState(null);

  const handleClick = (rocket) => {
    console.log("clicked");
    setSelectedRocket(rocket);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedRocket(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setRockets(data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      <section className="font-Barlow pb-24">
        <Nav />
        <div className="md:container px-2 pt-5 md:text-left text-center">
          <Banner />
          <SearchForm />
        </div>
      </section>
      <hr className="w-1/6 mx-auto my-8 mb-20 border-gray-200" />
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <div className="flex px-44 pb-12">
        {rockets.length > 0 &&
          rockets.map((rocket) => (
            <>
              <div
                className="flex w-screen"
                key={rocket.id}
                onClick={() => handleClick(rocket)}
              >
                <RocketGrid
                  className="cursor-pointer"
                  name={rocket.name}
                  src={rocket?.flickr_images[0]}
                  handleClose={handleClose}
                />
              </div>
            </>
          ))}
      </div>
      {modalOpen && selectedRocket && (
        <RocketPopup rocketDetails={selectedRocket} handleClose={handleClose} />
      )}
    </div>
  );
}

export default LandingPage;
