import { Box, Heading } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem: FC<Props> = ({ term, children }: Props) => {
  return (
    <Box marginY="5">
      <Heading as="dt" color="gray.500" fontSize="sm" marginY="1">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
