import React from "react";

interface Text_Interface {
  children: React.ReactNode;
  props?: any;
}

export default function Text({children, props}: Text_Interface) {
  return <p {...props}>{children}</p>;
}
