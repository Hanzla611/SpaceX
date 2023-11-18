// components/ItemDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();

  return (
    <div className="item-detail p-4">
      <p className="text-xl font-bold mb-4">Item Details for ID: {id}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ItemDetail;
