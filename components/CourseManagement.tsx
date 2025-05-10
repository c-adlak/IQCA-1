'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CourseManagement = () => {
  const [openSection, setOpenSection] = useState<null | string>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Course Management</h2>

      {/* Add Course */}
      <div className="bg-gray-100 rounded-xl shadow">
        <button
          onClick={() => toggleSection('add')}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-300 rounded-t-xl text-black font-semibold"
        >
          Add Course
          <ChevronDown
            className={`transition-transform duration-300 ${
              openSection === 'add' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSection === 'add' && (
          <form className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Course Name"
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Description"
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Instructor"
              className="border p-2 w-full rounded"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
              Add Course
            </button>
          </form>
        )}
      </div>

      {/* Remove Course */}
      <div className="bg-gray-100 rounded-xl shadow">
        <button
          onClick={() => toggleSection('remove')}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-300 rounded-t-xl text-black font-semibold"
        >
          Remove Course
          <ChevronDown
            className={`transition-transform duration-300 ${
              openSection === 'remove' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSection === 'remove' && (
          <div className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Course ID to Remove"
              className="border p-2 w-full rounded"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Remove Course
            </button>
          </div>
        )}
      </div>

      {/* Update Course */}
      <div className="bg-gray-100 rounded-xl shadow">
        <button
          onClick={() => toggleSection('update')}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-300 rounded-t-xl text-black font-semibold"
        >
          Update Course
          <ChevronDown
            className={`transition-transform duration-300 ${
              openSection === 'update' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSection === 'update' && (
          <div className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Course ID to Update"
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Updated Course Name"
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Updated Description"
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Updated Instructor"
              className="border p-2 w-full rounded"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Update Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseManagement;
