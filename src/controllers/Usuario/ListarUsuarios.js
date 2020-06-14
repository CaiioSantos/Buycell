import React from 'react';

//import firebase from '../../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'



class ListarUsuarios extends React.Component {
  /*constructor(props){
    super(props);
    this.ref = firebase.firestore().collection("Usuarios");
    this.unsubscribe = null;
    this.state = {
    usuarios : []
    };
  }
  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onCollectionUpdate = (querySnapshot) => {
    const usuarios = [];
    querySnapshot.forEach((doc) => {
      const {name, login,email , password,cpf} = doc.data();
      usuarios.push({
        key: doc.id,
        name, 
        login,
        email ,
        cpf, 
        password
    });
   });
   this.setState({
    usuarios
   })
  }
*/
  render(){
    return(
      <div class="container">
        <div class="panel panel-heading">
          <h3 class="panel heading"> Usuarios</h3>
        </div>
        <div class="panel-body">
          <table class="table table-strip">
            <thead>
              <tr>
                <th> Nome </th>
                <th>Login</th>
                <th>Email</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usuarios.map(usuario =>
                <tr>
                  <td><Link to = {`/mostrarUsuario/${usuario.key}`}>{usuario.name}</Link></td>
                  <td>{usuario.login}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.cpf}</td>
                </tr> 
                )}

            </tbody>

          </table>
        </div>
      </div>
    )
  }
}
  
export default ListarUsuarios;
