import React from "react";

const FooterSmall = () => {
  return (
    <div className="flex items-center justify-between py-3 px-4 bg-footerBg2">
      <div className="font-medium text-xs text-white font-poppins cursor-pointer">
        Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.
      </div>
      <div className="size-12">
        <img
          src="https://rilstaticasset.akamaized.net/sites/default/files/2024-03/PNG_Download_Jio-Logo-Colour-Pink.png"
          alt="Jio Reliance logo"
        />
      </div>
    </div>
  );
};

export default FooterSmall;
