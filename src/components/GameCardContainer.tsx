import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer: FC<Props> = ({ children }: Props) => {
  return (
    <Box
      borderRadius="15"
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .5s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
