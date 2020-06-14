import React,{ useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './ConfigPost';
import Sidebar from './Sidebar';
import api from '../../services/api'
import Bottom from './Bottom';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(10),
  },
}));

const sections = [
  { title: 'Apple', url: '#' },
  { title: 'Asus', url: '#' },
  { title: 'Huawei', url: '#' },
  { title: 'LG', url: '#' },
  { title: 'Motorola', url: '#' },
  { title: 'Nokia', url: '#' },
  { title: 'OnePlus', url: '#' },
  { title: 'Samsung', url: '#' },
  { title: 'Sony', url: '#' },
  { title: 'Xiaomi', url: '#' },
];

const mainFeaturedPost = {
  title: 'Os melhores preços e smartphones você encontra aqui!',
  description:
    "Na BuyCell você encontra as melhores promoções e diversos smartphones ao seu estilo!",
  image: 'https://bit.ly/2K1hrxB',
  imgText: 'main image description',
};

const sidebar = {
  title: 'About',
  description:
    'BuyCell é uma Loja de Smartphones fundada em Abril de 2020.',
  
 
};

const Home = () => {
  const classes = useStyles();
 
  const [ produtos, setProdutos ] = useState([])

  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get('/produtos')
      setProdutos(response.data)
    }

    loadProdutos()
  },[])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="BuyCell" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={3}>
            {produtos.map((produto) => (
              <FeaturedPost key={produto.id} post={produto} />
            ))}
          </Grid>
          <Grid container spacing={2} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            />
          </Grid>
        </main>
      </Container>
      <Bottom title="BuyCell" description="Tudo que você sempre sonhou!" />
    </React.Fragment>
  );
}

export default Home