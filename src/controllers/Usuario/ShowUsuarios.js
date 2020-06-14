import React from 'react';

//import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class MostrarUsuario extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            usuario: [],
            key: ''
        }
    }
    componentDidMount () {
        const ref = firebase.firestore().collection('Usuarios').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                this.setState({
                    usuario: doc.data(),
                    key: doc.id,
                    isLoading: false

                })
            }else {
                console.log("Nao Existe");
            }
        })
    }
    delete(id) {
        
        firebase.firestore().collection('Usuarios').doc(id).delete().then(()=> {
            console.log("Documento Deletado com Sucesso")
            this.props.history.push('/listarUsuarios')
        }).catch((error) =>{
            console.error("Erro é ", error);
        });
        
    }
*/
    render() {

        return (
            <div className="container">
                <div className="Buttons">
                    <Link to="/listarUsuarios">
                        <button className="Edit-Button">Listar usuarios</button>
                    </Link>
                </div>


                
                <div className="container">
                    <div className="panel panel-default">
                        <h3 className="panel panel-title">{this.state.usuario.login}</h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Nome</dt>
                            <dd>{this.state.usuario.name} </dd>
                        </dl>
                        <dl>
                            <dt>Email</dt>
                            <dd>{this.state.usuario.email} </dd>
                        </dl>
                        <dl>
                            <dt>CPF</dt>
                            <dd>{this.state.usuario.cpf} </dd>
                        </dl>
                        <Link to = {`/editarUsuario/${this.state.key}`} class ="btn btn-success">Editar</Link>
                        <button onClick = {this.delete.bind(this, this.state.key)} class ="btn btn-danger">Deletar</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default MostrarUsuario;