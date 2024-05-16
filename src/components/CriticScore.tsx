import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 40 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={1.5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
