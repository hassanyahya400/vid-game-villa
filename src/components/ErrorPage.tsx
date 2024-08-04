import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

interface Props {}

const ErrorPage: FC<Props> = (props: Props) => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box marginY="20" marginX="10">
        <Heading>Ooops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page not found"
            : "an unexpected error occured. Please reload after some time"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
