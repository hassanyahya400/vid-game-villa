import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/vid-game-villa-logo.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={20}/>
      <Text>Nav bar</Text>
    </HStack>
  );
};

export default NavBar;
