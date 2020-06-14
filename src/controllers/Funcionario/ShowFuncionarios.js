import React from 'react';

//import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class MostrarFuncionario extends React.Component {
   /* constructor(props) {
        super(props);
        this.state = {
            funcionario: [],
            key: ''
        }
    }
    componentDidMount () {
        const ref = firebase.firestore().collection('Funcionarios').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                this.setState({
                    funcionario: doc.data(),
                    key: doc.id,
                    isLoading: false

                })
            }else {
                console.log("Nao Existe");
            }
        })
    }
    delete(id) {
        
        firebase.firestore().collection('Funcionarios').doc(id).delete().then(()=> {
            console.log("Documento Deletado com Sucesso")
            this.props.history.push('/listarFuncionarios')
        }).catch((error) =>{
            console.error("Erro é ", error);
        });
        
    }
*/
    render() {

        return (
            <div className="container">
                <div className="Buttons">
                    <Link to="/listarFuncionarios">
                        <button className="Edit-Button">Listar Funcionarios</button>
                    </Link>
                </div>


                
                <div className="container">
                    <div className="panel panel-default">
                        <h3 className="panel panel-title">{this.state.funcionario.login}</h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Nome</dt>
                            <dd>{this.state.funcionario.name} </dd>
                        </dl>
                        <dl>
                            <dt>Email</dt>
                            <dd>{this.state.funcionario.email} </dd>
                        </dl>
                        <dl>
                            <dt>Password</dt>
                            <dd>{this.state.funcionario.password} </dd>
                        </dl>
                        <Link to = {`/editarFuncionario/${this.state.key}`} class ="btn btn-success">Editar</Link>
                        <button onClick = {this.delete.bind(this, this.state.key)} class ="btn btn-danger">Deletar</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default MostrarFuncionario;