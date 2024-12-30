import React from "react";
interface Button_Interface {
  children: React.ReactNode;
  className?: string;
  props?: object;
}

export default function Button({props, children}: Button_Interface) {
  return (
    <button
      {...props}
      className="rounded-button px-buttonX py-buttonY bg-buttonColor text-button  "
    >
      {children}
    </button>
  );
}
