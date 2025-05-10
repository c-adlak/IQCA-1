'use client';

import { useState } from 'react';

const BoardMembers = () => {
  const [openSection, setOpenSection] = useState<null | string>(null);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    about: '',
    profileImg: '',
  });

  const [memberId, setMemberId] = useState('');

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Add Board Member:', formData);
  };

  const handleRemove = () => {
    console.log('Remove Member ID:', memberId);
  };

  const handleUpdate = () => {
    console.log('Update Member ID:', memberId);
    console.log('Updated Details:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Board Members Management</h2>

      {/* Add Member */}
      <div className="bg-gray-100 rounded-xl shadow">
        <button
          onClick={() => toggleSection('add')}
          className="w-full text-left px-4 py-3 bg-gray-300 rounded-t-xl text-black font-semibold"
        >
          Add Member
        </button>
        {openSection === 'add' && (
          <form onSubmit={handleAdd} className="p-4 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <textarea
              name="about"
              placeholder="About"
              value={formData.about}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              name="profileImg"
              placeholder="Profile Image URL"
              value={formData.profileImg}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
              Add Member
            </button>
          </form>
        )}
      </div>

      {/* Remove Member */}
      <div className="bg-gray-100 rounded-xl shadow">
        <button
          onClick={() => toggleSection('remove')}
          className="w-full text-left px-4 py-3 bg-gray-300 rounded-t-xl text-black font-semibold"
        >
          Remove Member
        </button>
        {openSection === 'remove' && (
          <div className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Member ID to Remove"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="border p-2 w-full rounded"
            />
            <button onClick={handleRemove} className="bg-blue-600 text-white py-2 px-4 rounded">
              Remove Member
            </button>
          </div>
        )}
      </div>

      {/* Update Member */}
      <div className="bg-gray-100 rounded-xl shadow">
        <button
          onClick={() => toggleSection('update')}
          className="w-full text-left px-4 py-3 bg-gray-300 rounded-t-xl text-black font-semibold"
        >
          Update Member
        </button>
        {openSection === 'update' && (
          <div className="p-4 space-y-4">
            <input
              type="text"
              placeholder="Member ID to Update"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="border p-2 w-full rounded"
            />

            <input
              type="text"
              name="name"
              placeholder="Updated Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              name="designation"
              placeholder="Updated Designation"
              value={formData.designation}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <textarea
              name="about"
              placeholder="Updated About"
              value={formData.about}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              name="profileImg"
              placeholder="Updated Profile Image URL"
              value={formData.profileImg}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
            <button onClick={handleUpdate} className="bg-blue-600 text-white py-2 px-4 rounded">
              Update Member
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardMembers;
