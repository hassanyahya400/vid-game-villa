import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import useFindPlatform from "../hooks/useFindPlatform";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../state-management/store";

interface Props {}

const PlatformSelector: FC<Props> = ({}: Props) => {
  const {
    gameQuery: { platformId: selectedPlatformId },
    setPlatformId,
  } = useGameQueryStore();
  const { data, error } = usePlatform();
  const selectedPlatform = useFindPlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
