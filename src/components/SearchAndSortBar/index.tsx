import { Button, TextField } from "@mui/material";

type SearchAndSortBarProps = {
  onSort?: () => void,
  onCreate?: () => void
}
const SearchAndSortBar: React.FC<SearchAndSortBarProps> = ({ onCreate, onSort }) => {

  return (
    <div className="search-bar-tool">
      <div className="flex row gap-l">
        <Button color={"success"} variant={"contained"} onClick={onCreate}>Add</Button>
        <TextField label="Search" variant="filled" />
      </div>
    </div>
  );
};

export default SearchAndSortBar;
