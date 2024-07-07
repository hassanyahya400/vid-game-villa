import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/vid-game-villa-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding={3}>
      {/* <Image src={logo} boxSize={20} /> */}
      <Text>VidGame Logo</Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
