import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material/";
import { styled } from "@mui/system";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import React from "react";
import GenericTemplate from "../templates/Layout";

const createData = (
  id: number,
  date: string,
  title: string,
  urlTitle: String,
  site: string,
  urlSite: String,
) => {
  return { date, title, site };
};
  
  const rows = [
    createData(1, "08/10 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(2, "08/11 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(3, "08/12 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(4, "08/13 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(5, "08/14 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(6, "08/15 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(7, "08/16 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(8, "08/17 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(9, "08/18 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(10, "08/19 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
    createData(11, "08/20 07:00", "ページのタイトル", "https://www.google.com/", "サイトの名前", "https://www.google.com/"),
  ];

  


const HomePage: React.FC = () => {

    const styledTable = styled(Table)(() => ({
          // minWidth: 650,
      }));
      
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };


    return (
        <GenericTemplate title="RSS一覧">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>公開年月日</TableCell>
                  <TableCell>タイトル</TableCell>
                  <TableCell>サイト</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(
                  rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row) => (
                  <TableRow key={row.date}>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell>
                      <a href="a">{row.title}</a>
                      </TableCell>
                    <TableCell>{row.site}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    labelRowsPerPage="表示件数:"
                    rowsPerPageOptions={[10, 30, 50, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'rows per page',
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </GenericTemplate>
    );
};

export default HomePage;