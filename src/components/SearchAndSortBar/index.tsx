import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import { TextField } from "@mui/material";


const SearchAndSortBar: React.FC = (props) => {
  const [productSelected, setProductSelected] = useState<IProduct>();

//   const mystore = useSelector((state: RootState) => state.mystore);

  const onSelect = (product: IProduct) => {
    setProductSelected({ ...product });
  };
  return (
    <div className="search-bar-tool">
      <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      </div>
    </div>
  );
};

export default SearchAndSortBar;
