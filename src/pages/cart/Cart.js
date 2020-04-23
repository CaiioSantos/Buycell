import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';


const TAX_RATE = 0.07;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
   // color: 'red',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    //backgroundColor: 'secondary',

    },
}
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((Total, i) => Total + i, 0);
}

const rows = [
  createRow('iPhone 11 Pro Max 256GB Prata', 1, 5999.90),
//   createRow('Paper (Case)'),
//   createRow('Waste Basket'),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
      <Container>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell color="blue">Produto</TableCell>
            <TableCell color="blue" align="right">Quantidade</TableCell>
            <TableCell color="blue" align="right">Valor Unit. (R$)</TableCell>
            <TableCell color="blue" align="right">Total (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal (R$)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Subtotal (R$)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Subtotal (R$)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell colSpan={2}>Total (R$)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Calcule o frete" variant="outlined" />
      <Button variant="contained" color="secondary" style={{ marginTop: 20}}>
        Consultar
      </Button>
    </form>

    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Cupom" variant="outlined" />
      <Button variant="contained" color="secondary" style={{ marginTop: 20}}>
        Utilizar
      </Button>
    </form>
    </div>    
    </Container>
  );
}
