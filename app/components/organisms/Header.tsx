import React from "react";
import Picture from "../attoms/Pictrue";
import lspdLogo from "@/public/assets/images/header/lspd-logo.svg";
export default function Header() {
  return (
    <div className="flex justify-center items-center py-headerY">
      <Picture alt="lspd logo" src={lspdLogo}></Picture>
    </div>
  );
}
