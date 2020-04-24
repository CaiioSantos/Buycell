import React from 'react';

import firebase from '../../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class EditarUsuario extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            key: '',
            nome: '',
            login: '',
            senha: '',
            cpf: '',
            email: '',
        }
    }
    componentDidMount () {
        const ref = firebase.firestore().collection('Usuarios').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                const document = doc.data();
                this.setState({
                    key: doc.id,
                    name: document.name,
                    login: document.login,
                    email: document.email,
                    cpf: document.cpf,
                    password: document.password
                })
            }else {
                console.log("Nao Existe");
            }
        })
    }
    
    
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({document:state});
}
onSubmit =(e) => 
{
  e.preventDefault();
  const {email, login, name, password,cpf} = this.state;
  const updateRef = firebase.firestore().collection('Usuarios').doc(this.state.key);

  updateRef.set({
    email, login, name, password,cpf
  }).then((docRef)=>{
      this.setState({
          key:'',
          email:'',
          login:'',
          name: '',
          cpf: '',
          password:''
      });
      this.props.history.push("/mostrarUsuario/"+this.props.match.params.id)
  })
  .catch((error)=>{
      console.error("Erro ao Editar:", error);
  })
}
    render() {

        return (

            <div className="container">
                <div className="Buttons">
                    <Link to="/listarUsuarios">
                        <button className="Edit-Button">Listar Usuarios</button>
                    </Link>
                </div>



                <div className="Buttons">


              <div className="container">
                    <div className="panel panel-default">

                    
                    <div className="panel-body">
                       <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="name">Login</label>
                                <input type="text" className="form-control" name="login" value={this.state.login} onChange={this.onChange} placeholder="Coloque o Nome"></input>
                            </div>
                            <div className="form-group">
                                <label for="name">Email</label>
                                <input className="form-control" name="email" onChange={this.onChange} value={this.state.email} ></input>
                            </div>
                            <div className="form-group">
                                <label for="name">Nome</label>
                                <input className="form-control" name="name" onChange={this.onChange} value={this.state.name} ></input>
                            </div>
                            <div className="form-group">
                                <label for="name">CPF</label>
                                <input className="form-control" name="cpf" onChange={this.onChange} value={this.state.cpf} ></input>
                            </div>
                            <div className="form-group">
                                <label for="name">Senha</label>
                                <input className="form-control col-lg-2" type='password' name="password"  onChange={this.onChange} value={this.state.password} placeholder="Preço do Produto"></input>
                            </div>
                            <button type="submit" className="btn btn-success">Salvar</button>
                       </form>
                    </div>
                    </div>
                </div>
          </div>
            </div>
        )
    }
}
export default EditarUsuario;