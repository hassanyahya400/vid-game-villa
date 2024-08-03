import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../state-management/store";

interface Props {}

const SearchInput: FC<Props> = ({}: Props) => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    if (ref.current?.value) setSearchText(ref.current.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search vid games ..."
          variant="filled"
          borderRadius="20"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
