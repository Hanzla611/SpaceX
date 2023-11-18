import React, { useRef } from 'react';
import '../styles/searchform.css'

const SearchForm = () => {
  const statusRef = useRef('');
  const originalLaunchRef = useRef('');
  const typeRef = useRef('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Access the input values using the ref.current property
    const statusValue = statusRef.current.value;
    const originalLaunchValue = originalLaunchRef.current.value;
    const typeValue = typeRef.current.value;

    // Add your logic to handle the search submission using the input values
    console.log('Status:', statusValue);
    console.log('Original Launch:', originalLaunchValue);
    console.log('Type:', typeValue);
  };

  return (
    <form className="flex flex-col mt-12 items-center justify-end gap-4 md:flex-row md:mt-1" onSubmit={handleSearchSubmit}>

      {/* Status Input */}
      <div className="field">
      <select ref={originalLaunchRef} className="input-field p-4 w-64">
          <option className='bg-black text-white hover:bg-white' value="active">Active</option>
          <option className='bg-black text-white hover:bg-white' value="inactive">Inactive</option>
        </select>
      </div>

      {/* Original Launch Input */}
      <div className="field">
        <input
          ref={originalLaunchRef}
          placeholder="Original Launch"
          className="input-field p-4"
          type="text"
        />
      </div>

      {/* Type Input */}
      <div className="field">
      <select ref={originalLaunchRef} className="input-field p-4 w-64">
          <option className='bg-black text-white hover:bg-white' value="active">Rocket</option>
        </select>
      </div>

      <div className="btn">
        <button className="button1 backdrop-blur-3xl p-4 rounded-3xl px-8 py-5 bg-blue-950 italic">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
