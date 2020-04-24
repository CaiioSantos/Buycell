import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';



const tutorialSteps = [
  {
    
    imgPath:
      'https://bit.ly/3bhSEkK',
  },
  {
    
    imgPath:
      'https://bit.ly/34W87om',
  },
  {
    
    imgPath:
      'https://bit.ly/2S06vox',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
   minWidth: 675,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    maxWidth: 500,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 1100,
  },
}));

function createData(text1, text2) {
  return { text1, text2 };
}

const rows = [
  createData('Sistema Operacional', 'iOS 13', ),
  createData('Processador', 'A13 Bionic Neural Engine de terceira geração'),
  createData('Memória interna', '64GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instalados'),
  createData('Cor','Prata' ),
  createData('Tela', 'Super Retina XDR de 6,5 polegadas" '),
  createData('Resolução câmera frontal', '12 MP Abertura ƒ/2.2'),
  createData('Resolução câmera traseira 3x', '12 MP (Ultra-angular: abertura ƒ/2.4 e campo de visão de 120° / Grande-angular: abertura ƒ/1.8 / Teleobjetiva: abertura ƒ/2.0 )'),

];

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
      <div className="container">
        <div className="row mt-5"> 
        <div className="col-lg-6">

 
  
      <Typography component="h1" variant="h5" color="secondary" >
      iPhone 11 Pro Max 512GB Prata 6,5"
      </Typography>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Próxima
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Anterior
          </Button>
        }
      />

        </div>


        <div className="col-lg-6" style={{marginTop:50}}>
     
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          De:
        </Typography>
        <Typography variant="h6" component="p" color="secondary">
          R$7.599,00
        </Typography>
        <Typography component="h1" variant="h4" color="secondary" >
          Por: R$5.999,90
          <Button variant="contained" color="secondary" size="large" style={{ marginLeft:130}}>
        COMPRAR
      </Button>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
          Em 1x no cartão de crédito
        </Typography>
        <Button variant="outlined" color="secondary" size="small" style={{ marginLeft:400}}>
        ADICIONAR AO CARRINHO
        <ShoppingCartIcon>ShoppingCartIcon</ShoppingCartIcon>
      </Button>
        <Typography className={classes.pos} color="textSecondary">
          ou:
        </Typography>
        <Typography variant="h6" color="Primary" component="p">
          R$6.999,00
          <Typography className={classes.pos} color="textSecondary">
          ou até 12x de R$583,25 sem juros
        </Typography>
        </Typography>
      </CardContent>
      <CardActions>

        
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Informe seu CEP" size="small" variant="outlined" />
      <Button variant="contained" color="secondary" size="small" style={{ marginLeft:5, marginTop:5, marginBottom:150}}>
        Ok
      </Button>
      <Typography className={classes.pos} color="textSecondary">
        
      2x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$3.499,50	<br/>
      3x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$2.333,00	<br/>
      4x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$1.749,75	<br/>
      5x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$1.399,80	<br/>
      6x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$1.166,50	<br/>
      7x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$999,86	<br/>
      8x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$874,88	<br/>
      9x sem juros &nbsp;&nbsp;&nbsp;&nbsp; R$777,67	<br/>
      10x sem juros &nbsp;&nbsp;&nbsp; R$699,90	<br/>
      11x sem juros &nbsp;&nbsp;&nbsp; R$636,27	<br/>
      12x sem juros &nbsp;&nbsp;&nbsp; R$583,25	<br/>

      </Typography>
    </form>
      </CardActions>
    </Card>
        </div>
        </div>

        <div className="row col-md-5" style={{marginTop:200}}>
          <Box boxShadow={5}>
        <Typography className={classes.pos} component="h1" variant="h4" color="textSecondary">
            Características
          </Typography>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.text1}>
              <TableCell component="th" scope="row">
                {row.text1}
              </TableCell>
              <TableCell align="right">{row.text2}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
            </Box>
        </div>
      </div>

      
  );
  
}
