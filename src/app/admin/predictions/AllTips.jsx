"use client";
import React, { useEffect, useState } from "react";
import {
  deleteBlog,
} from "@/app/funcStore/controllers/blogs/blog_controllers";
import Link from "next/link";
import axios from "axios";
import AddBetsTips from "./AddBets";
import { formatDateTimeEAT } from "@/app/funcStore/toReadableTime";

const AllBetTips = () => {
  const [betTips, setBetTips] = useState([]);

  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false)
  const [disable, setDisable] = useState(false);
  const [indexing, setIndexing] = useState(0);


  const deleteTipOffer = async (tip_offer_id) => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/delete/${tip_offer_id}`);
      if (res) {
        return res;
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    setLoading(true);
    // self invocking func
    (async () => {
      const betting_tips_offers = await getAllTips();
      if (betting_tips_offers) {
        if (betting_tips_offers.data === "Empty tips") {
          setBetTips([]);
          setEmpty(true)
        } else {
          setBetTips(betting_tips_offers.data);
        }
      }
    })();
  }, []);

  const getAllTips = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/betting/tips/all_tips`);

      if (response.status === 200) {
        return response
      }
    } catch (error) {
      console.error('Error adding Bet Tip:', error);
    }
  };

  const deleteTips = async (id) => {
    try {
      setDisable(true);
      const res = await deleteTipOffer(id);
      if (res) {
        if (res.status === 200) {
          alert(res.data.message);
          setDisable(false);

          // refresh data
          const offers_ = await getAllTips();
          if (offers_) {
            if (offers_.data != "Empty tips") {
              setBetTips(offers_.data)
            } else {
              setBetTips([]);
              setEmpty(true)
            }
          } else {
            setEmpty(true)
          }
        } else if (res.status === 404) {
          setDisable(false);
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      setDisable(false);
    }
  };


  const handleDeleteTipOffer = (blog_obj_id, i) => {
    setIndexing(i);
    deleteTips(blog_obj_id);
  };

  const handleEditLink = (blog_obj_id) => {
    window.location.replace(`/admin/predictions/${blog_obj_id}`);
  };

  const [addTip, setAddTip] = useState(false)

  function formatIsoTimestamp(isoTimestamp) {
    const date = new Date(isoTimestamp);
    return date.toLocaleString(); // Adjust toLocaleString options if needed
  }
  return (
    <div>
      <div className="flex">
        <p className="bg-gray-100 px-3 py-1" onClick={() => setAddTip(prev => !prev)}>Add</p>
      </div>
      {
        addTip && <AddBetsTips />
      }
      {/* table--section */}
      {
        !addTip && <div className="relative overflow-x-auto shadow-md sm:rounded-lg sm:rounded-b-none bg-white ">
          <table className="w-full text-sm text-left text-gray-500 text-gray-400">
            <caption className="p-1 md:p-5 text-lg font-semibold text-left text-gray-900 bg-white bg-gray-100">
              Tips
            </caption>
            <thead className="text-xs text-gray-800 uppercase bg-gray-200 bg-gray-100 text-gray-400">
              <tr>
                <th scope="col" className="md:px-6 px-1 py-3">
                  Offer Name
                </th>
                <th scope="col" className="md:px-6 px-1 py-3">
                  Offer Id
                </th>
                <th scope="col" className="md:px-6 px-1 py-3">
                  Date Created
                </th>
                <th scope="col" className="md:px-6 px-1 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody id="betTips">
              {betTips.length > 0 ? (
                betTips.map((blog_doc, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b text-gray-700 border-gray-700"
                  >
                    <td className="md:px-6 px-1 py-4">
                      {blog_doc.betOfferName}
                    </td>

                    <th
                      scope="row"
                      className="md:px-6 px-1 py-4 font-medium text-gray-500 whitespace-nowrap"
                    >
                      <p
                        onClick={() => alert("Opening Property page")}
                        className="hover:underline"
                      >
                        {blog_doc._id}
                      </p>
                    </th>
                    <td className="md:px-6 px-1 py-4">
                      {formatIsoTimestamp(blog_doc.createdAt)}
                    </td>

                    <td className="md:px-6 px-1 py-4">
                      <div className="flex items-center text-white gap-2">
                        <p
                          className="bg-blue-500 rounded px-2 py-1 cursor-pointer"
                          onClick={() => handleEditLink(blog_doc._id)}
                        >
                          Edit
                        </p>
                        <p
                          className={`${disable && indexing === index
                            ? "bg-green-500"
                            : "bg-red-500"
                            } rounded px-2 py-1 cursor-pointer`}
                          onClick={() => handleDeleteTipOffer(blog_doc._id, index)}
                        >
                          Delete
                        </p>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="md:px-6 px-1 py-4">{empty ? "Empty" : "Loading..."}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default AllBetTips;
