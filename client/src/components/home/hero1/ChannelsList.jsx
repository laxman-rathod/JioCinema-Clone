import React from "react";
import { v4 as uuidv4 } from "uuid";

const ChannelsList = () => {
  const channels = [
    {
      name: "viacom",
      url: "/assets/channels_viacom.png",
      id: uuidv4(),
    },
    {
      name: "news18India",
      url: "/assets/new_18_india.jpeg",
      id: uuidv4(),
    },
    { name: "mtv", url: "/assets/channel-mtv-1712766852178.png", id: uuidv4() },
    {
      name: "cnnNews18",
      url: "/assets/channels-cnn-news-18.jpg",
      id: uuidv4(),
    },
    {
      name: "colorsKannada",
      url: "/assets/channel-kannada-1712766915268.png",
      id: uuidv4(),
    },
    {
      name: "hbo",
      url: "/assets/hbo-1712766657151.png",
      id: uuidv4(),
    },
    {
      name: "nick",
      url: "/assets/channel-nick-1712767223433.png",
      id: uuidv4(),
    },
    {
      name: "coorsMarathi",
      url: "/assets/channels-colors-marathi.png",
      id: uuidv4(),
    },
    {
      name: "peacook",
      url: "/assets/channel-peacock-hub-1712767042516.png",
      id: uuidv4(),
    },
    {
      name: "paramount",
      url: "/assets/channel-paramount-plus-1712767180334.png",
      id: uuidv4(),
    },
  ];
  return (
    <div className="flex place-items-center gap-[0.6rem] ml-6 mt-11">
      {channels.map((chh) => (
        <img
          key={chh.id}
          src={chh.url}
          alt={`${chh.name} channel logo`}
          className="size-28 rounded-2xl cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ChannelsList;
