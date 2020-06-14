import React from 'react';

//import Entidades from './controllers/Entidades';
//import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'



class Listar extends React.Component {
  /*constructor(props){
    super(props);
    this.ref = firebase.firestore().collection("Produtos");
    console.log(this.ref)
    this.unsubscribe = null;
    this.state = {
    produtos : []
    };
  }
  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    console.log(this.unsubscribe)
  }

  onCollectionUpdate = (querySnapshot) => {
    const produtos = [];
    querySnapshot.forEach((doc) => {
      const {name, description, preco} = doc.data();
      produtos.push({
        key: doc.id,
        doc,
        name,
        description,
        preco
    });
   });
   this.setState({
     produtos
   })
   console.log(produtos)
  }*/

  render(){
    return(
      <div class="container">
        <div class="panel panel-heading">
          <h3 class="panel heading"> Detalhes do produto</h3>
        </div>
        <div class="panel-body">
          <table class="table table-strip">
            <thead>
              <tr>
                <th> Nome do produto</th>
                <th>Descrição do produto</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map(produto =>
                <tr key={produto.id}>
                  <td><Link to = {`/mostrar/${produto.key}`}>{produto.name}</Link></td>
                  <td>{produto.description}</td>
                  <td>{produto.preco}</td>
                  <Button type="submit" variant="contained" color="primary">TELA DE MOSTRAR</Button>
                </tr> 
                )}

            </tbody>

          </table>
        </div>
      </div>
    )
  }
}
  
export default Listar;
