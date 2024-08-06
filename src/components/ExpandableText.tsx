import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpandableText: FC<Props> = ({ children }: Props) => {
  const [isExpanded, setisExpanded] = useState<boolean>(false);
  const limit = 350;

  if (!children) return null;

  const textToDisplay = isExpanded
    ? children
    : children.substring(0, limit) + "...";

  return (
    <>
      <Text>{textToDisplay}</Text>
      <Button
        onClick={() => setisExpanded((prev) => !prev)}
        colorScheme="yellow"
        marginY="2"
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </>
  );
};

export default ExpandableText;
