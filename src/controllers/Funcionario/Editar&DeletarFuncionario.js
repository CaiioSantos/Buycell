import React from 'react';

import firebase from '../../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class EditarFuncionario extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            key: '',
            nome: '',
            login: '',
            senha: '',
            email: '',
        }
    }
    componentDidMount () {
        const ref = firebase.firestore().collection('Funcionarios').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                const document = doc.data();
                this.setState({
                    key: doc.id,
                    name: document.name,
                    login: document.login,
                    email: document.email,
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
  const {email, login, name, password} = this.state;
  const updateRef = firebase.firestore().collection('Funcionarios').doc(this.state.key);

  updateRef.set({
    email, login, name, password
  }).then((docRef)=>{
      this.setState({
          key:'',
          email:'',
          login:'',
          name: '',
          password:''
      });
      this.props.history.push("/mostrarFuncionario/"+this.props.match.params.id)
  })
  .catch((error)=>{
      console.error("Erro ao Editar:", error);
  })
}
    render() {

        return (

            <div className="container">
                <div className="Buttons">
                    <Link to="/listarFuncionario">
                        <button className="Edit-Button">Listar Funcionarios</button>
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
                                <textarea className="form-control" name="email" onChange={this.onChange} value={this.state.email} ></textarea>
                            </div>
                            <div className="form-group">
                                <label for="name">Nome</label>
                                <textarea className="form-control" name="name" onChange={this.onChange} value={this.state.name} ></textarea>
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
export default EditarFuncionario;