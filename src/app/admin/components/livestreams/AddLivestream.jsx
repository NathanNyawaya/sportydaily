import React, { useState } from "react";
import { clubs } from "@/app/constants/clubs";

const AddLivestream = () => {
  const [formData, setFormData] = useState({
    club_home: {},
    club_away: {},
    livestream_link_1: "",
    livestream_link_2: "",
    livestream_link_3: "",
    kickoff_time: "",
    scores: "",
  });

  const css_1 =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic here to do something with the form data, such as sending it to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <select
          name="club_home"
          id="club_home"
          value={formData.club_home}
          onChange={handleInputChange}
          className={css_1}
        >
          <option value="">Select home team</option>
          {clubs.map((team, index) => (
            <option key={index} value={team}>
              {team.club_name}
            </option>
          ))}
        </select>

        <select
          name="club_away"
          id="club_away"
          value={formData.club_away}
          onChange={handleInputChange}
          className={css_1}
        >
          <option value="">Select away team</option>
          {clubs.map((team, index) => (
            <option key={index} value={team.club_name}>
              {team.club_name}
            </option>
          ))}
        </select>
      </div>
      {/* live links */}
      <div className="my-2 grid grid-cols-2 md:grid-cols-2">
        <div className="grid grid-cols-1">
          <div className=" my-2 gap-x-2 flex">
            <label htmlFor="livestream_link_1">Link #1</label>
            <input
              type="text"
              name="livestream_link_1"
              id="livestream_link_1"
              value={formData.livestream_link_1}
              onChange={handleInputChange}
              className="text-black p-1"
            />
          </div>
          <div className=" my-2 gap-x-2 flex">
            <label htmlFor="livestream_link_2">Link #2</label>
            <input
              type="text"
              name="livestream_link_2"
              id="livestream_link_2"
              value={formData.livestream_link_2}
              onChange={handleInputChange}
              className="text-black p-1"
            />
          </div>
          <div className=" my-2 gap-x-2 flex">
            <label htmlFor="livestream_link_3">Link #3</label>
            <input
              type="text"
              name="livestream_link_3"
              id="livestream_link_3"
              value={formData.livestream_link_3}
              onChange={handleInputChange}
              className="text-black p-1"
            />
          </div>
        </div>
        <div>
          <div className=" my-2 gap-x-2 flex">
            <label htmlFor="kickoff_time">Kickoff</label>
            <input
              type="text"
              name="kickoff_time"
              id="kickoff_time"
              value={formData.kickoff_time}
              onChange={handleInputChange}
              className="text-black p-1"
            />
          </div>
          <div className=" my-2 gap-x-2 flex">
            <label htmlFor="scores">Scores</label>
            <input
              type="text"
              name="scores"
              id="scores"
              value={formData.scores}
              onChange={handleInputChange}
              className="text-black p-1"
            />
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
};

export default AddLivestream;
