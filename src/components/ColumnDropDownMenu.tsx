"use client";

import { useEffect, useRef, useState } from "react";

const ColumnDropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='cursor-pointer inline-block items-center justify-center p-1.5 bg-transparent rounded-lg hover:bg-gray-50 transition-colors'
        type='button'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-ellipsis-icon lucide-ellipsis'
        >
          <circle cx='12' cy='12' r='1' />
          <circle cx='19' cy='12' r='1' />
          <circle cx='5' cy='12' r='1' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-1/2 translate-x-1/2 mt-1 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44'>
          <ul className='py-1'>
            {["Edit", "Duplicate", "Delete"].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`block text-left text-sm w-full px-4 py-2 hover:bg-gray-100  transition-colors ${
                    item.toLowerCase() === "delete"
                      ? "text-red-400"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ColumnDropDownMenu;
