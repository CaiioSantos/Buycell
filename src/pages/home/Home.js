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

const featuredPosts = [
  {
    title: 'iPhone 11 Pro Max',
     title2: 'Características',
    description:
      'Capacidade: 512 GB, Cor: Prata',
    description2:
      'Câmera: 3x 12mp, Tela: 6.50"',  
    description3:
      'Apple A13 Bionic Six-Core 2.1 GHz',
    image: 'https://bit.ly/34JQTdJ',
    preco: 'R$ 5.999,90',
  },
  {
    title: 'Samsung Galaxy S20',
    title2: 'Características',
    description:
      'Capacidade: 128 GB, Cor: Preto',
    description2:
      'Câmera: 64mp+ 2x 12mp, Tela: 6.20"',  
    description3:
      'Exynos 990 Octa-Core 2.3 GHz',
    image: 'https://bit.ly/34BVCht',
    preco: 'R$ 4.949,90',
  },
  {
    title: 'Xiaomi Mi 9',
    title2: 'Características',
    description:
      'Capacidade: 64 GB, Cor: Azul',
    description2:
      'Câmera: 48mp+20mp, Tela: 6.39"',  
    description3:
      'Snapdragon 855 Octa-Core 2.2 GHz',
    image: 'https://bit.ly/2XGeOcK',
    preco: 'R$ 1.999,90',
  },
  {
    title: 'OnePlus 7 Pro ',
    title2: 'Características',
    description:
      'Capacidade: 128 GB, Cor: Prata',
    description2:
      'Câmera: 48mp+16mp, Tela: 6.67"',  
    description3:
      'Snapdragon 855 Octa-Core 2.2 GHz',
    image: 'https://bit.ly/2XIcS38',
    preco: 'R$ 4.199,90',
  },
];


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