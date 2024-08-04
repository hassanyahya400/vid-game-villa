import { Box, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {}

const NavBar: FC<Props> = ({}: Props) => {
  return (
    <Box >
      <HStack
        justifyContent="space-between"
        padding="3"
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="1"
      >
        {/* <Image src={logo} boxSize={20} /> */}
        <Text>VidGame Logo</Text>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
