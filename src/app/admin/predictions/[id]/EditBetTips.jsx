"use client"

import React, { useEffect, useState } from "react";
import { clubs } from "@/app/constants/clubs";
import axios from "axios";
import { useParams } from "next/navigation";

const EditBetTips = () => {
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
  const id = useParams().id
  useEffect(() => {
    const fetchBetTipsById = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/${id}`);

        if (response.status === 200) {
          // Set the fetched data to the state
          setFormData(response.data.offer_data);
        } else {
          console.error('Failed to fetch Bet Tips by ID');
        }
      } catch (error) {
        console.error('Error fetching Bet Tips by ID:', error);
      }
    };

    // Fetch bet tips by ID when the component mounts
    if (id) {
      fetchBetTipsById();
    }
  }, [id]);

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
      console.log(formData)
      // Send data to the backend using axios
      const response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/update/${id}`, formData);

      if (response.status === 200) {
        console.log('Bet Tip updated successfully');
        await getAllTips()
      } else {
        console.error('Failed to add Bet Tip');
      }

    } catch (error) {
      console.error('Error adding Bet Tip:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="border my-4 p-3 rounded">
      {/* Bet Offer Name */}
      <div className="my-2 gap-x-2 flex" >
        <label htmlFor="betOfferName" className="text-[0.8rem] text-black">Offer Name</label>
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
      {
        <div className="flex flex-col">
          <div className="flex flex-col border rounded p-3 mb-2">

            {
              formData.events.map(((event_, index) => (
                <div className=" grid grid-cols-6" key={index}>
                  {/* team */}
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                      <label className="text-[0.7rem] text-black">Home</label>
                      <input
                        type="text"
                        placeholder="Home"
                        name="home"
                        id={`home`}
                        value={event_.club_home}
                        onChange={(e) => handleEventChange(index, e)}
                        className="rounded px-2 text-black p-1 w-full"
                      />
                    </div>

                    <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                      <label className="text-[0.7rem] text-black">Away</label>
                      <input
                        type="text"
                        placeholder="Away"
                        name="away"
                        id={`away`}
                        value={event_.club_away}
                        onChange={(e) => handleEventChange(index, e)}
                        className="rounded px-2 text-black p-1 w-full"
                      />
                    </div>
                    {/* other info */}
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Selection</label>
                    <input
                      type="text"
                      placeholder="Selection"
                      name="selection"
                      id={`selection_`}
                      value={event_.selection}
                      onChange={(e) => handleEventChange(index, e)}
                      className="rounded px-2 text-black p-1 w-full"
                    />
                  </div>
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Odds</label>
                    <input
                      type="text"
                      placeholder="Odds"
                      name="odds"
                      id={`odds_`}
                      value={event_.odds}
                      onChange={(e) => handleEventChange(index, e)}
                      className="rounded px-2 text-black p-1 w-full"
                    />
                  </div>
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Date</label>
                    <input
                      type="text"
                      placeholder="Date"
                      name="kickoff_date"
                      id={`kickoff_date_`}
                      value={event_.kickoff_date}
                      onChange={(e) => handleEventChange(index, e)}
                      className="rounded px-2 text-black p-1 w-full"
                    />
                  </div>
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Time</label>
                    <input
                      type="text"
                      placeholder="Time"
                      name="kickoff_time"
                      id={`kickoff_time_`}
                      value={event_.kickoff_time}
                      onChange={(e) => handleEventChange(index, e)}
                      className="rounded px-2 text-black p-1 w-full"
                    />
                  </div>
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Scores</label>
                    <input
                      type="text"
                      placeholder="Scores"
                      name="scores"
                      id={`scores_`}
                      value={event_.scores}
                      onChange={(e) => handleEventChange(index, e)}
                      className="rounded px-2 text-black p-1 w-full"
                    />
                  </div>
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Outcome</label>
                    <input
                      type="text"
                      placeholder="Outcome"
                      name="outcome"
                      id={`outcome_`}
                      value={event_.outcome}
                      onChange={(e) => handleEventChange(index, e)}
                      className="rounded px-2 text-black p-1 w-full"
                    />
                  </div>
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Price</label>
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
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Status</label>
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
                  <div className="m-2 gap-x-2 flex col-span-3 flex-col">
                    <label className="text-[0.7rem] text-black">Passcode</label>
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
              )))
            }
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
      }

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

export default EditBetTips;
