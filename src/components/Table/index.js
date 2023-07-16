import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MedicationIcon from '@mui/icons-material/Medication';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import Data from '../../data';


const data = Data["Medications"];
console.log(data);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow> 
            
            <StyledTableCell>Drug Name</StyledTableCell >
            <StyledTableCell align="left">Drug class</StyledTableCell>
            <StyledTableCell align="left">Taken Through</StyledTableCell>
            <StyledTableCell align="left">Dosage</StyledTableCell>
            <StyledTableCell align="left">Side Effects</StyledTableCell>
            <StyledTableCell align="left">Consult Doctor If</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.drugname}>
              <StyledTableCell component="th" scope="row">
                {row.drugname}
              </StyledTableCell>
              <StyledTableCell align="left">{row.drugClass}</StyledTableCell>
              <StyledTableCell align="left">{row.takenThrough}</StyledTableCell>
              <StyledTableCell align="left">{row.dosage}</StyledTableCell>
              <StyledTableCell align="left">
                {Array.isArray(row.sideEffects) ? (
                  row.sideEffects.map((effect, index) => (
                    <span key={index}>{effect}</span>
                  ))
                ) : (
                  <span>{row.sideEffects}</span>
                )}
              </StyledTableCell>
              <StyledTableCell align="left">
                {Array.isArray(row.consultDoctorIf) ? (
                  row.consultDoctorIf.map((condition, index) => (
                    <span key={index}>{condition}</span>
                  ))
                ) : (
                  <span>{row.consultDoctorIf}</span>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
