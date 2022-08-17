import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const Employee = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="App">
      <h1>Employee Records</h1>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{"marginBottom":"10px", "backgroundColor":"lightblue"}}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Date of Birth</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Date of joining</StyledTableCell>
              <StyledTableCell>Salary</StyledTableCell>
              <StyledTableCell>Designation</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product     
              .filter((item) => {     //filter by firstname,lastname,address,designation
                if (search == "") {
                  return item;
                } else if (
                  item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) 
                  || item.address.toLowerCase().includes(search.toLowerCase()) 
                  || item.designation.toLowerCase().includes(search.toLowerCase())   
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      <Link to={`/empdetails/${item.id}`}>
                      {item.id}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.first_name}
                    </StyledTableCell>
                    <StyledTableCell >
                      {item.last_name}
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.date_of_birth}
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.address}
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.date_of_joining}
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.salary}
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.designation}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employee;