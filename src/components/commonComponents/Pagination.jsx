import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination() {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const handleChangePage = (
    //     event: React.MouseEvent<HTMLButtonElement> | null,
    //     newPage: number,
    // ) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    return (
        <TablePagination
            component="div"
            count={27}
            page={page}
            // onPageChange={}
            rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}