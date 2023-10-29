import axios from "axios";
import React, { useEffect, useState } from "react";

const MatchLinks = () => {
  const [streamLinks, setStreamLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLinks = async (S_ID) => {
    const options = {
      method: "GET",
      url: "https://football-live-stream-api.p.rapidapi.com/stream.php",
      params: { matchid: S_ID },
      headers: {
        "X-RapidAPI-Key": "a91c39ba04msh138dde153e692afp15cff6jsnbd732b41d133",
        "X-RapidAPI-Host": "football-live-stream-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      if (response.data.length > 0) {
        setStreamLinks(response.data);
      } else {
        setStreamLinks([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getStreamLinks = async () => {
    const stream_id = localStorage.getItem("s_id");
    if (stream_id) {
      await fetchLinks(stream_id);
    }
  };

  useEffect(() => {
    getStreamLinks();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-x-2">
      <div className="col-span-12">
        <div className="flex flex-col justify-center">
          {loading ? (
            <p>Loading ...</p>
          ) : streamLinks.length > 0 ? (
            streamLinks.map((stream, index) => {
              // console.log(streamLinks);
              return (
                <div
                  key={index}
                  className="bg-white text-black p-3 my-2 flex justify-between items-center"
                >
                  <p className="text-black">{stream.name}</p>
                  <p className="text-black">{"> > > >"}</p>
                  <p className="bg-black px-3 py-1 rounded text-white col-span-2 text-[.9rem]">
                    <a
                      href={stream.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Now
                    </a>
                  </p>
                </div>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchLinks;

// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const MatchLinks = () => {
//   const [streamLinks, setStreamLinks] = useState([]);

//   const fetchLinks = async (S_ID) => {
//     const options = {
//       method: "GET",
//       url: "https://football-live-stream-api.p.rapidapi.com/stream.php",
//       params: { matchid: `${S_ID}` },
//       headers: {
//         "X-RapidAPI-Key": "a91c39ba04msh138dde153e692afp15cff6jsnbd732b41d133",
//         "X-RapidAPI-Host": "football-live-stream-api.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       // console.log(response)
//       // return response;
//       if (response) {
//         if (response.data.length > 0) {
//           console.log(response);
//           setStreamLinks(response.data);
//         } else {
//           setStreamLinks(["empty"]);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getStreamLinks = async () => {
//     const stream_id = localStorage.getItem("s_id");
//     await fetchLinks(stream_id);
//     // if (stream_id) {
//     //   try {
//     //     const res = await axios.get(
//     //       `${process.env.NEXT_PUBLIC_SERVER}/api/livestreams/${stream_id}`
//     //     );
//     //     if (res) {
//     //       if (res.data.length > 0) {
//     //         console.log(res);
//     //         // setStreamLinks(res.data);
//     //       } else {
//     //         setStreamLinks(["empty"]);
//     //       }
//     //     }
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     // }
//   };

//   useEffect(() => {
//     getStreamLinks();
//   }, []);
//   return (
//     <div className="grid  grid-cols-12 gap-x-2">
//       {/* links */}

//       <div className="col-span-12">
//         <div className="flex flex-col justify-center">
//           {streamLinks.length > 0 && streamLinks[0] != "empty" ? (
//             streamLinks.map((stream, index) => (
//               <div
//                 key={index}
//                 className="bg-white text-black p-3 my-2 flex justify-between items-center"
//               >
//                 <p className="text-black">{stream.name}</p>
//                 <p className="text-black">{"> > > >"}</p>

//                 <p className="bg-black px-3 py-1 rounded text-white col-span-2 text-[.9rem]">
//                   <a href={stream.link} target="_blank">
//                     Watch Now
//                   </a>
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div className="text-white">
//               {streamLinks[0] === "empty" ? (
//                 <p>No data found</p>
//               ) : (
//                 <p>Loading ...</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatchLinks;
