import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    if (ref.current?.value) onSearch(ref.current.value);
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
