import React from "react";
import Text from "../attoms/Text";
import Button from "../attoms/Button";
import Picture from "../attoms/Pictrue";
import mainPic from "@/public/assets/images/main/main.png";

export default function Main() {
  return (
    <div className="flex flex-col justify-center gap-main items-center flex-1 text-main my-5">
      <Picture src={mainPic} alt="mainPic"></Picture>
      <Text> کتابچه اداره پلیس لوس سانتوس</Text>
      <Button>
        <a
          target="new"
          href="https://docs.google.com/document/d/1DnH_fL6St6Zpz4Sh7Xx6rmCOA-hErYvj1itVxf6MT_k/edit?tab=t.0"
        >
          مشاهده کتابچه
        </a>
      </Button>
    </div>
  );
}
