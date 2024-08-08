import { Box, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {}

const NavBar: FC<Props> = ({}: Props) => {
  return (
    <Box>
      <HStack
        justifyContent="space-between"
        padding="5"
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="1"
      >
        {/* <Image src={logo} boxSize={20} /> */}
        <Link to="/games">
          <Text>VidGame Logo</Text>
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
