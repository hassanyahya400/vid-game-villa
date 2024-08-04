import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer: FC<Props> = ({ children }: Props) => {
  return (
    <Box borderRadius="15" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
