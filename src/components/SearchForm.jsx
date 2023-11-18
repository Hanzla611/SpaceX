import React, { useRef } from "react";
import "../styles/searchform.css";

const SearchForm = () => {
  const statusRef = useRef("");
  const originalLaunchRef = useRef("");
  const typeRef = useRef("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const statusValue = statusRef.current.value;
    const originalLaunchValue = originalLaunchRef.current.value;
    const typeValue = typeRef.current.value;
    console.log("Status:", statusValue);
    console.log("Original Launch:", originalLaunchValue);
    console.log("Type:", typeValue);
  };

  return (
    <form
      className="flex flex-col mt-12 items-center justify-end gap-4 md:flex-row md:mt-1"
      onSubmit={handleSearchSubmit}
    >
      {/* Original Launch Input */}
      <div className="field">
        <input
          ref={originalLaunchRef}
          placeholder="Original Launch"
          className="input-field p-4"
          type="text"
        />
      </div>
      {/* Status Input */}
      <div className="field">
        <select ref={originalLaunchRef} className="input-field p-4 w-64">
          <option className="bg-black text-white hover:bg-white" value="active">
            Active
          </option>
          <option
            className="bg-black text-white hover:bg-white"
            value="inactive"
          >
            Inactive
          </option>
        </select>
      </div>

      {/* Type Input */}
      <div className="field">
        <select ref={originalLaunchRef} className="input-field p-4 w-64">
          <option className="bg-black text-white hover:bg-white" value="active">
            Rocket
          </option>
        </select>
      </div>

      <div className="btn">
        <button className="button1 text-white p-4 w-54 py-7 px-8 rounded-3xl bg-black italic">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
