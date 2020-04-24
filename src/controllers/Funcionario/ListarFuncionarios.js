import React from 'react';

import firebase from '../../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'



class ListarFuncionarios extends React.Component {
  constructor(props){
    super(props);
    this.ref = firebase.firestore().collection("Funcionarios");
    this.unsubscribe = null;
    this.state = {
    funcionarios : []
    };
  }
  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onCollectionUpdate = (querySnapshot) => {
    const funcionarios = [];
    querySnapshot.forEach((doc) => {
      const {name, login,email , password} = doc.data();
      funcionarios.push({
        key: doc.id,
        name, 
        login,
        email , 
        password
    });
   });
   this.setState({
    funcionarios
   })
  }

  render(){
    return(
      <div class="container">
        <div class="panel panel-heading">
          <h3 class="panel heading"> Funcionarios</h3>
        </div>
        <div class="panel-body">
          <table class="table table-strip">
            <thead>
              <tr>
                <th> Nome </th>
                <th>Login</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.funcionarios.map(funcionario =>
                <tr>
                  <td><Link to = {`/mostrarFuncionario/${funcionario.key}`}>{funcionario.name}</Link></td>
                  <td>{funcionario.login}</td>
                  <td>{funcionario.email}</td>
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
  
export default ListarFuncionarios;
