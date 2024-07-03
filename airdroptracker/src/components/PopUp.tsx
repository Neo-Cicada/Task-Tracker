'use client'
import React from 'react';

interface PopUpProps {
  popUp: boolean;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ popUp, onClose }) => {
  if (!popUp) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  const handleInsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOutsideClick}
    >
      <div className='p-6 bg-white rounded-md' onClick={handleInsideClick}>
        <h2>Add New Task</h2>
        {/* Add form or content for the pop-up here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
