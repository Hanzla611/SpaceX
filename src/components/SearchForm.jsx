import React, { useRef } from "react";
import "../styles/searchform.css";

const SearchForm = ({
  originalLaunchRef,
  statusRef,
  typeRef,
  handleSearchSubmit,
}) => {
  return (
    <form
      className="flex flex-col mt-12 items-end m-auto justify-end gap-4 md:flex-row md:mt-1 w-1/2"
      onSubmit={handleSearchSubmit}
    >
      {/* Original Launch Input
      <div className="field">
        <input
          ref={originalLaunchRef}
          placeholder="Original Launch"
          className="input-field p-4"
          type="text"
        />
      </div> */}
      {/* Status Input */}
      <div className="field w-full md:w-1/2">
        <select ref={statusRef} className="input-field p-4 ">
        <option className="bg-black text-white hover:bg-white" value="Show all">
            Show all
          </option>
          <option className="bg-black text-white hover:bg-white" value="true">
            Active
          </option>
          <option
            className="bg-black text-white hover:bg-white"
            value="false"
          >
            Inactive
          </option>
        </select>
      </div>

      {/* Type Input */}
      {/* <div className="field">
        <select ref={typeRef} className="input-field p-4 w-64">
          <option className="bg-black text-white hover:bg-white" >
            Rocket
          </option>
        </select>
      </div> */}

      <div className="btn w-full m-auto md:w-1/2">
        <button className="button1 text-white p-4 w-full py-7 px-8 rounded-3xl bg-black italic">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
