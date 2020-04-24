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
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';


//const TAX_RATE = 0.07;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

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
  createRow('iPhone 11 Pro Max 256GB Prata 6,5"', 1, 5999.90),
];

const invoiceSubtotal = subtotal(rows);
//const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceSubtotal;
const invoiceFrete = 0;
const invoiceCupom = 0;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <Box boxShadow={5}>
      <Container style={{ marginTop:130}}>
        <Typography component="h1" variant="h4" color="secondary" style={{ marginBottom: 50}}>
          Meu Carrinho
          </Typography>
    <TableContainer component={Paper} style={{ marginBottom: 50}}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Produto</strong></TableCell>
            <TableCell  align="right"><strong>Quantidade</strong></TableCell>
            <TableCell  align="right"><strong>Valor Unit. (R$)</strong></TableCell>
            <TableCell  align="right"><strong>Total (R$)</strong></TableCell>
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
            <TableCell colSpan={2}>Frete (R$)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceFrete)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Cupom (R$)</TableCell>
            <TableCell align="right">{ccyFormat(invoiceCupom)}</TableCell>
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
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}><strong>Total (R$)</strong></TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <div className="row">
          <div className="col-10">
          <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Calcule o frete" variant="outlined" size="small" style={{ marginTop: 15}} />
      <Button variant="contained" color="secondary" size="small" style={{ marginTop: 20}}>
        Consultar
      </Button>
    </form>
          </div>
          <div className="col-2">
          <Button variant="contained" color="secondary" size="large" style={{ marginTop: 20}}>
            <ShoppingCartIcon>ShoppingCartIcon</ShoppingCartIcon>
            Finalizar Compra
          </Button>
          </div>
    </div>
    <div className="row">
          <div className="col-12">
          <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Cupom" variant="outlined" size="small" />
          <Button variant="contained" color="secondary" size="small" style={{ marginTop: 15, marginBottom:50}}>
            Utilizar
          </Button>
        </form>
          </div>
    </div>   
    </Container>
    </Box>
  );
}
