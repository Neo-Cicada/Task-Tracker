'use client'
import React, { useEffect } from 'react';

interface PopUpProps {
  popUp: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ popUp, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (popUp) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [popUp, onClose]);

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
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOutsideClick}
    >
      <div className='flex flex-col p-6 bg-gray-700 rounded-md' onClick={handleInsideClick}>
        {children}
        {/* Add form or content for the pop-up here */}
        <div className='flex items-center justify-between'>
          <button onClick={onClose}>Close</button>
          <button >Save</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
