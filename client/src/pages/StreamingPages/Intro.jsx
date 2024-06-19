// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const Intro = () => {
//   const [streamInfo, setStreamInfo] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   let currentMovieTitle = null;
//   let currentShowsTitle = null;

//   const contentType = useSelector(
//     (store) => store.currentStreamInfo.contentType
//   );

//   contentType === "Movie"
//     ? (currentMovieTitle = useSelector(
//         (store) => store.currentStreamInfo.MoviesTitle
//       ))
//     : (currentShowsTitle = useSelector(
//         (store) => store.currentStreamInfo.showsTitle
//       ));
//   console.log(currentShowsTitle);
//   // if (contentType === "Movie") {
//   //   currentMovieTitle = useSelector(
//   //     (store) => store.currentStreamInfo.MoviesTitle
//   //   );
//   // } else {
//   //   currentShowsTitle = useSelector(
//   //     (store) => store.currentStreamInfo.showsTitle
//   //   );
//   // }

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = `http://localhost:8000/api/${
//         contentType === "Movie" ? "movies" : "tv-shows"
//       }/${
//         contentType === "Movie" ? currentMovieTitle : currentShowsTitle
//       }`.replace(" ", "%20");

//       console.log("URL: " + url);

//       try {
//         const currentStreamData = await axios.get(url);
//         setStreamInfo(currentStreamData.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(streamInfo);
//   if (loading) console.log("loading...");
//   if (error) console.log("error..", error);

//   return (
//     <div className="size-full">
//       <div
//         className="h-screen mt-[4.6rem] w-full absolute inset-0 bg-cover bg-top bg-no-repeat relatives"
//         style={{
//           backgroundImage: `url(${streamInfo.thumbnail})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-55"></div>
//       </div>
//       <div className="relative pb-[5.5rem] h-screen flex flex-col justify-end text-white font-poppins">
//         <div className="w-full flex justify-between items-start gap-10 p-8 relative z-10">
//           <div className="flex items-center justify-center gap-2 cursor-pointer bg-pink hover:brightness-150 px-10 py-[0.72rem] rounded-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="size-6"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <button className="font-semibold text-xs">WATCH</button>
//           </div>
//           <div>
//             <h1 className="text-4xl font-black">{streamInfo.title}</h1>
//             <div className="text-[0.95rem] pt-2 font-medium text-semiWhite leading-5">
//               {/* • Romance • Drama*/}
//               <p className="mb-1">{streamInfo.genres} </p>
//               <p>{streamInfo.description}</p>
//             </div>
//           </div>
//           <div className="text-semiWhite leading-5">
//             <h1 className="mb-1 text-lg">Cast</h1>
//             <p className="text-[0.95rem]">
//               Nandamuri Balakrishna, Sreeleela, Kajal Aggarwal, Arjun Rampal
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Intro = () => {
  const [streamInfo, setStreamInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const contentType = useSelector(
    (store) => store.currentStreamInfo.contentType
  );

  const currentMovieTitle = useSelector(
    (store) => store.currentStreamInfo.MoviesTitle
  );

  const currentShowsTitle = useSelector(
    (store) => store.currentStreamInfo.showsTitle
  );

  useEffect(() => {
    const fetchData = async () => {
      const title =
        contentType === "Movie" ? currentMovieTitle : currentShowsTitle;
      const encodedTitle = encodeURIComponent(title);
      const url = `http://localhost:8000/api/${
        contentType === "Movie" ? "movies" : "tv-shows"
      }/${encodedTitle}`;
      console.log("Title: " + title);
      console.log("URL: " + url);

      try {
        const currentStreamData = await axios.get(url);
        setStreamInfo(currentStreamData.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType, currentMovieTitle, currentShowsTitle]);

  if (loading) console.log("loading...");

  if (error) console.log("error..");

  return (
    <div className="size-full">
      <div
        className="h-screen mt-[4.6rem] w-full absolute inset-0 bg-cover bg-top bg-no-repeat relatives"
        style={{
          backgroundImage: `url(${streamInfo.thumbnail})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>
      <div className="relative pb-[5.5rem] h-screen flex flex-col justify-end text-white font-poppins">
        <div className="w-full flex justify-between items-start gap-10 p-8 relative z-10">
          <div className="flex items-center justify-center gap-2 cursor-pointer bg-pink hover:brightness-150 px-10 py-[0.72rem] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
            <button className="font-semibold text-xs">WATCH</button>
          </div>
          <div>
            <h1 className="text-4xl font-black">{streamInfo.title}</h1>
            <div className="text-[0.95rem] pt-2 font-medium text-semiWhite leading-5">
              {/* <p className="mb-1">{streamInfo.genres.join(" • ")}</p> */}
              <p>{streamInfo.description}</p>
            </div>
          </div>
          <div className="text-semiWhite leading-5">
            <h1 className="mb-1 text-lg">Cast</h1>
            {/* <p className="text-[0.95rem]">{streamInfo.cast.join(", ")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
