import { Pagination } from "@mui/material";
import { useState } from "react";

type PaginationCustomProps = {
    count: number,
    defaultPage?: number
    onChange: (page: number) => void
}
const PaginationCustom: React.FC<PaginationCustomProps> = ({ count, defaultPage = 1, onChange }) => {
    const [page, setPage] = useState<number>(defaultPage);
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
        onChange(page)
    };
    return (
        <Pagination count={count}  page={page} onChange={handleChange} />

    );
};

export default PaginationCustom;