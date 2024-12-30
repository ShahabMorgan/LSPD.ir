import React from "react";
import Image, {StaticImageData} from "next/image";

interface image_Interface {
  alt: string;
  src: StaticImageData;
  className?: string;
}
export default function Picture({src, alt, className}: image_Interface) {
  return (
    <div>
      <Image src={src} alt={alt} className={className}></Image>
    </div>
  );
}
