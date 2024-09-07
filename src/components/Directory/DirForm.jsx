import React, { useState } from 'react';

const DirForm = () => {
  const [formData, setFormData] = useState({
    postedOn: '',
    title: '',
    company: '',
    type: '',
    experience: '',
    location: '',
    skills: [''], // Ensure this is initialized as an array
    job_link: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillChange = (index, event) => {
    const newSkills = formData.skills.map((skill, i) => {
      if (i === index) {
        return event.target.value;
      }
      return skill;
    });
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  const addSkillField = () => {
    setFormData({
      ...formData,
      skills: [...(formData.skills || []), ''], // Ensure it spreads an array
    });
  };

  const removeSkillField = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Position"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Company"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Job Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Job Type"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Experience required"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Job Link</label>
            <input
              type="url"
              name="job_link"
              value={formData.job_link}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Paste the job link here"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Posted On</label>
            <input
              type="date"
              name="postedOn"
              value={formData.postedOn}
              onChange={handleChange}
              className="w-full p-3 border rounded-md font-medium focus:outline-none focus:ring focus:border-blue-300"
              placeholder="2024-08-28"
            />
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Skills</label>
          {(formData.skills || []).map((skill, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
                className="w-full p-3 border font-medium rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder={`Skill ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeSkillField(index)}
                className="ml-2 p-2 bg-purple-400 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSkillField}
            className="mt-2 p-3 bg-green-300 text-white rounded-md"
          >
            Add Skill
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DirForm;