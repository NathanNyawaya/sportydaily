"use client"

import React, { useState } from "react";
import { clubs } from "@/app/constants/clubs";
import axios from "axios";

const AddBetsTips = () => {
  const [formData, setFormData] = useState({
    betOfferName: "",
    price: "",
    status: "",
    passcode: "",
    events: [
      {
        club_home: "",
        club_away: "",
        selection: "",
        odds: "",
        kickoff_date: "",
        kickoff_time: "",
        scores: "",
        outcome: "",
      },
    ],
  });

  const css_1 =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEventChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEvents = [...formData.events];
    updatedEvents[index][name] = value;

    setFormData((prevData) => ({
      ...prevData,
      events: updatedEvents,
    }));
  };

  const handleAddEvent = () => {
    setFormData((prevData) => ({
      ...prevData,
      events: [...prevData.events, {}],
    }));
  };

  const handleRemoveEvent = (index) => {
    const updatedEvents = [...formData.events];
    updatedEvents.splice(index, 1);

    setFormData((prevData) => ({
      ...prevData,
      events: updatedEvents,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend using axios
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/add_tip`, formData);

      if (response.status === 200) {
        alert('Bet Tip added successfully');
      } else {
        alert('Failed to add Bet Tip')
      }

    } catch (error) {
      console.error('Error adding Bet Tip:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="border my-4 p-3 rounded">
      {/* Bet Offer Name */}
      <div className="border my-2 rounded p-2">
        <div className="my-2 gap-x-2 flex">
          <label htmlFor="betOfferName">Offer Name</label>
          <input
            type="text"
            name="betOfferName"
            id="betOfferName"
            value={formData.betOfferName}
            onChange={handleInputChange}
            className="text-black p-1"
          />
        </div>
        <div className="grid grid-cols-6">
          <div className="m-2 gap-x-2 flex col-span-3">
            <input
              type="text"
              placeholder="Price"
              name="price"
              id={`price_`}
              value={formData.price}
              onChange={handleInputChange}
              className="rounded px-2 text-black p-1 w-full"
            />
          </div>
          <div className="m-2 gap-x-2 flex col-span-3">
            <input
              type="text"
              placeholder="Status"
              name="status"
              id={`status_`}
              value={formData.status}
              onChange={handleInputChange}
              className="rounded px-2 text-black p-1 w-full"
            />
          </div>
          <div className="m-2 gap-x-2 flex col-span-3">
            <input
              type="text"
              placeholder="Passcode"
              name="passcode"
              id={`passcode_`}
              value={formData.passcode}
              onChange={handleInputChange}
              className="rounded px-2 text-black p-1  w-full"
            />
          </div>
        </div>
      </div>

      {/* Events */}
      {formData.events.map((event, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-col border rounded p-3 mb-2">
            <div className="flex gap-1">
              <select
                name="club_home"
                id={`club_home_${index}`}
                value={event.club_home || ""}
                onChange={(e) => handleEventChange(index, e)}
                className={css_1}
              >
                <option value="">Select home team</option>
                {clubs.map((team, teamIndex) => (
                  <option key={teamIndex} value={team.club_name}>
                    {team.club_name}
                  </option>
                ))}
              </select>

              <select
                name="club_away"
                id={`club_away_${index}`}
                value={event.club_away || ""}
                onChange={(e) => handleEventChange(index, e)}
                className={css_1}
              >
                <option value="">Select away team</option>
                {clubs.map((team, teamIndex) => (
                  <option key={teamIndex} value={team.club_name}>
                    {team.club_name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" grid grid-cols-6">
              <div className="m-2 gap-x-2 flex col-span-3">
                <input
                  type="text"
                  placeholder="Selection"
                  name="selection"
                  id={`selection_${index}`}
                  value={event.selection}
                  onChange={(e) => handleEventChange(index, e)}
                  className="rounded px-2 text-black p-1 w-full"
                />
              </div>
              <div className="m-2 gap-x-2 flex col-span-3">
                <input
                  type="text"
                  placeholder="Odds"
                  name="odds"
                  id={`odds_${index}`}
                  value={event.odds}
                  onChange={(e) => handleEventChange(index, e)}
                  className="rounded px-2 text-black p-1 w-full"
                />
              </div>
              <div className="m-2 gap-x-2 flex col-span-3">
                <input
                  type="text"
                  placeholder="Date"
                  name="kickoff_date"
                  id={`kickoff_date_${index}`}
                  value={event.kickoff_date}
                  onChange={(e) => handleEventChange(index, e)}
                  className="rounded px-2 text-black p-1 w-full"
                />
              </div>
              <div className="m-2 gap-x-2 flex col-span-3">
                <input
                  type="text"
                  placeholder="Time"
                  name="kickoff_time"
                  id={`kickoff_time_${index}`}
                  value={event.kickoff_time}
                  onChange={(e) => handleEventChange(index, e)}
                  className="rounded px-2 text-black p-1 w-full"
                />
              </div>
              <div className="m-2 gap-x-2 flex col-span-3">
                <input
                  type="text"
                  placeholder="Scores"
                  name="scores"
                  id={`scores_${index}`}
                  value={event.scores}
                  onChange={(e) => handleEventChange(index, e)}
                  className="rounded px-2 text-black p-1 w-full"
                />
              </div>
              <div className="m-2 gap-x-2 flex col-span-3">
                <input
                  type="text"
                  placeholder="Outcome"
                  name="outcome"
                  id={`outcome_${index}`}
                  value={event.outcome}
                  onChange={(e) => handleEventChange(index, e)}
                  className="rounded px-2 text-black p-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 py-4 mt-4 border-t-2 border-gray-500 justify-end">
              <div className="flex">
                <button type="button" className="rounded bg-red-500 text-white p-2" onClick={() => handleRemoveEvent(index)}>
                  Remove Event
                </button>
              </div>
              <div className="flex">
                <button type="button" className="rounded bg-green-500 text-white p-2" onClick={handleAddEvent}>
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col">
        <div className="flex hidden">
          <button type="button" className="bg-green-500 text-white p-2" onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex">
          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>


      </div>
    </form>
  );
};

export default AddBetsTips;
