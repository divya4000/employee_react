import React,{useEffect,useState} from 'react';
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
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
const Empdetails = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const {id}= useParams();
    const getProductData = async () => {
      try {
        const data = await axios.get(
          "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
        );
        const item = data.data.filter(thisProject => thisProject.id === id);
        console.log(item);
        setProduct(item);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      getProductData();
    }, []);
  return (
    <div className="App">
    <Link to="/"><button style={{"marginTop" : "15px"}}>Go to Home</button></Link>
      <h1 style={{"color":"royalblue"}}>Employee {id} Record</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Field</StyledTableCell>
              <StyledTableCell>Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      ID
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.id}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      First Name
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.first_name}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      Last Name
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.last_name}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                     Date of Birth
                    </StyledTableCell>
                    <StyledTableCell>
                    {item.date_of_birth}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      Address
                    </StyledTableCell>
                    <StyledTableCell>
                    {item.address}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      Date of Joining
                    </StyledTableCell>
                    <StyledTableCell>
                    {item.date_of_joining}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                     Salary
                    </StyledTableCell>
                    <StyledTableCell>
                    {item.salary}
                      </StyledTableCell>
                      </StyledTableRow>
                );
              })}
          </TableBody>
          <TableBody>
            {product
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>
                      Designation
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
  )
}

export default Empdetails