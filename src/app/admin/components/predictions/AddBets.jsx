"use client"

import React, { useState } from "react";
import { clubs } from "@/app/constants/clubs";
import axios from "axios";

const AddBetsTips = () => {
  const [formData, setFormData] = useState({
    betOfferName: "",
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

  const getAllTips = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/all_tips`);

      if (response.status === 200) {
        console.log('Bet Tip added successfully');
        console.log(response)
      } else {
        console.error('Failed to add Bet Tip');
      }
    } catch (error) {
      console.error('Error adding Bet Tip:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend using axios
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/add_tip`, formData);

      if (response.status === 200) {
        console.log('Bet Tip added successfully');
        await getAllTips()
      } else {
        console.error('Failed to add Bet Tip');
      }
      
    } catch (error) {
      console.error('Error adding Bet Tip:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {/* Bet Offer Name */}
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

      {/* Events */}
      {formData.events.map((event, index) => (
        <div key={index}>
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
          <div className="my-2 gap-x-2 flex">
            <label htmlFor={`selection_${index}`}>Selection</label>
            <input
              type="text"
              name="selection"
              id={`selection_${index}`}
              value={event.selection}
              onChange={(e) => handleEventChange(index, e)}
              className="text-black p-1"
            />
          </div>
          <div className="my-2 gap-x-2 flex">
            <label htmlFor={`odds_${index}`}>Odds</label>
            <input
              type="text"
              name="odds"
              id={`odds_${index}`}
              value={event.odds}
              onChange={(e) => handleEventChange(index, e)}
              className="text-black p-1"
            />
          </div>
          <div className="my-2 gap-x-2 flex">
            <label htmlFor={`kickoff_date_${index}`}>Kickoff Date</label>
            <input
              type="text"
              name="kickoff_date"
              id={`kickoff_date_${index}`}
              value={event.kickoff_date}
              onChange={(e) => handleEventChange(index, e)}
              className="text-black p-1"
            />
          </div>
          <div className="my-2 gap-x-2 flex">
            <label htmlFor={`kickoff_time_${index}`}>Kickoff Time</label>
            <input
              type="text"
              name="kickoff_time"
              id={`kickoff_time_${index}`}
              value={event.kickoff_time}
              onChange={(e) => handleEventChange(index, e)}
              className="text-black p-1"
            />
          </div>
          <div className="my-2 gap-x-2 flex">
            <label htmlFor={`scores_${index}`}>Scores</label>
            <input
              type="text"
              name="scores"
              id={`scores_${index}`}
              value={event.scores}
              onChange={(e) => handleEventChange(index, e)}
              className="text-black p-1"
            />
          </div>
          <div className="my-2 gap-x-2 flex">
            <label htmlFor={`outcome_${index}`}>Outcome</label>
            <input
              type="text"
              name="outcome"
              id={`outcome_${index}`}
              value={event.outcome}
              onChange={(e) => handleEventChange(index, e)}
              className="text-black p-1"
            />
          </div>
          <button type="button" onClick={() => handleRemoveEvent(index)}>
            Remove Event
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddEvent}>
        Add Event
      </button>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
};

export default AddBetsTips;
