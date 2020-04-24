import React from 'react';

import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


class AdicionarFuncionario extends React.Component {
    
  constructor(props){
      
    super(props);
    this.ref = firebase.firestore().collection('Funcionarios')
    this.state = {
        name: '',
        email: '',
        password: '',
        login: '',
    }
  }
  onChange = (e) => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
  }

  onSubmit =(e) => 
  {
    e.preventDefault();
    const {name, email,password, login} = this.state;
    this.ref.add({
        name,
        email,
        password,
        login
    }).then((docRef)=>{
        this.setState({
            name: '',
            email: '',
            password: '',
            login: '',
        });
        this.props.history.push("/listarFuncionarios")
    })
    .catch((error)=>{
        console.error("Erro ao Adicionar:", error);
    })
  }

  render(){
      const {name, email, password, login} = this.state;
      return(
        <div className="container">
            <div>
            <div className="form-group">
                <label for="name">Nome </label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Nome"></input>
            </div>
            <div className="form-group">
                <label for="name">Email</label>
                <input className="form-control" name="email" onChange={this.onChange} placeholder="Email"></input>
            </div>
            <div className="form-group">
                <label for="name">Login</label>
                <input className="form-control col-lg-2" name="login"  onChange={this.onChange} placeholder="Login"></input>
            </div>
            <div className="form-group">
                <label for="name">Password</label>
                <input className="form-control col-lg-2" name="password"  onChange={this.onChange} placeholder="Password"></input>
            </div>
            </div>

            <div className="Buttons">
                
                <button className="Submit-button" onClick={this.onSubmit}> Adicionar</button>
  
            </div>
         </div>
      );
  }
}
  
export default AdicionarFuncionario;
