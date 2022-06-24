import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Button, TextField } from "@mui/material";
import { Settings, Close, Done } from "@material-ui/icons";
import { setBottomSheetContent, setBSO } from "../../App";
import { Card } from "@material-ui/core";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function createData(
  process,
  date,
  number,
  status,
  confirmdate,
  registerdate,
  price,
  paid,
  payment,
  view,
  voucher,
  id
) {
  return {
    process,
    date,
    number,
    status,
    confirmdate,
    registerdate,
    price,
    paid,
    payment,
    view,
    voucher,
    id,
  };
}

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "process",
    numeric: true,
    disablePadding: false,
    label: "Process",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "paid",
    numeric: true,
    disablePadding: false,
    label: "Paid",
  },
];

function EnhancedTableHead(props) {
  return (
    <TableHead style={{ width: "100%" }}>
      <TableRow style={{ width: "100%" }}>
        <TableCell
          key={1}
          align={"center"}
          padding={"normal"}
          sortDirection={false}
        >
          <TableSortLabel direction={"asc"}>Row</TableSortLabel>
        </TableCell>
        <TableCell
          key={1}
          align={"center"}
          padding={"normal"}
          sortDirection={false}
        >
          <TableSortLabel direction={"asc"}>Room</TableSortLabel>
        </TableCell>
        <TableCell
          key={1}
          align={"center"}
          padding={"normal"}
          sortDirection={false}
        >
          <TableSortLabel direction={"asc"}>Count</TableSortLabel>
        </TableCell>
        <TableCell
          key={1}
          align={"center"}
          padding={"normal"}
          sortDirection={false}
        >
          <TableSortLabel direction={"asc"}>Action</TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Request List
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ServicesTransfers(props) {
  const rows = [];
  return (
    <Box sx={{ width: "100%", minHeight: 300 }}>
      <Paper
        sx={{ width: "100%", height: "100%" }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={"medium"}
            style={{ maxWidth: "100%" }}
          >
            <EnhancedTableHead />
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">...</TableCell>
                <TableCell align="center"><TextField defaultValue={'0'} /></TableCell>
                <TableCell align="center">
                  <Button>Add</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
