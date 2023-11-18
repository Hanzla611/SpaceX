// components/DataGrid.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataGrid = () => {
  const [data, setData] = useState([]);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Fetch SpaceX data and update state
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching SpaceX data:', error));

    // Add scroll event listener to track scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById('dataGridSection');

      if (element) {
        const elementTop = element.getBoundingClientRect().top;

        // Adjust the threshold as needed
        const threshold = window.innerHeight * 0.4;

        setIsTextVisible(elementTop < threshold);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <div
            id="dataGridSection"
            className="h-full bg-cover bg-center bg-no-repeat overflow-y-auto relative"
            style={{ backgroundImage: `url(${item?.flickr_images[1]})` }}
          >
            <div
              className={` w-1/2 absolute inset-0 bg-gradient-to-r from-black py-16 pl-24 px-32 text-white flex flex-col justify-center ${
                isTextVisible ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'
              }`}
            >
              <p className="text-6xl font-bold">{item.name}</p>
              <p className="text-4xl font-semibold">{item.country}</p>
              {/* Hide description on small devices */}
              <p className="text-2xl font-semibold hidden md:block">{item.description}</p>
              <button className='btn border-2 mt-2 border-white p-3 w-40 font-bold'>Learn More...</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DataGrid;
