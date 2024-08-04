import { ReactElement } from "react";
import { BiMeh } from "react-icons/bi";
import { GiBullseye } from "react-icons/gi";
import { GoThumbsup } from "react-icons/go";

interface Props {
    rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  const emojiMap: {[key: number]: ReactElement} = {
    3: <BiMeh />,
    4: <GoThumbsup />,
    5: <GiBullseye />,
  };
  return emojiMap[rating_top];
};

export default Emoji;
