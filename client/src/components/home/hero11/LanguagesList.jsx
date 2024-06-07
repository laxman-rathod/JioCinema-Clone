import React from "react";
import { v4 as uuidv4 } from "uuid";

const LanguagesList = () => {
  const languagesList = [
    {
      name: "kannada",
      url: "/assets/kannada_1x1-1709298556759.jpg",
      id: uuidv4(),
    },
    {
      name: "bengali",
      url: "/assets/bengali_1x1-1709298573558.jpg",
      id: uuidv4(),
    },
    {
      name: "gujrati",
      url: "/assets/gujaratii_1x1-1709298589321.jpg",
      id: uuidv4(),
    },
    {
      name: "tamil",
      url: "/assets/tamil_1x1-1709298607091.jpg",
      id: uuidv4(),
    },
    {
      name: "hindi",
      url: "/assets/hindi_1x1-1709298653281.jpg",
      id: uuidv4(),
    },
    {
      name: "englist",
      url: "/assets/english-1694341614686.jpg",
      id: uuidv4(),
    },
    {
      name: "marathi",
      url: "/assets/marathi_1x1-1709298637014.jpg",
      id: uuidv4(),
    },
    {
      name: "talugu",
      url: "/assets/telugu_1x1-1709298686761.jpg",
      id: uuidv4(),
    },
    {
      name: "malyalam",
      url: "/assets/malayalam_1x1-1709298710540.jpg",
      id: uuidv4(),
    },
  ];

  return (
    <div className="flex place-items-center gap-3">
      {languagesList.map((lang) => (
        <div key={lang.id} className="rounded-xl bg-black cursor-pointer">
          <img
            key={lang.id}
            src={lang.url}
            alt={`${lang.name} language image`}
            className="h-28 rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default LanguagesList;
