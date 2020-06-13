import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';




const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 3,
  },
  cardMedia: {
    width: 225,
    
    
  },
  
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green["A400"]),
    backgroundColor: green["A400"],
    '&:hover': {
      backgroundColor: green["A400"],
    },
  },
}))(Button);

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={10} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="inherit" color="textSecondary">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="h4" color="secondary" style={{marginBottom: 22}}> 
                {post.preco}
              </Typography>
              <Grid container >
              <ColorButton variant="contained" style={{marginRight: 22}} className={classes.margin}
              >Comprar
              </ColorButton>
              <Button variant="outlined" color="secondary" style={{marginRight: 22}} className={classes.margin}
              >Detalhes
              </Button>
              </Grid>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.url} title={post.imageTitle} />
          </Hidden>
        </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
