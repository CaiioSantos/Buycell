import React from 'react';

import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class Mostrar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: [],
            key: ''
        }
    }
    componentDidMount () {
        const ref = firebase.firestore().collection('Produtos').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                this.setState({
                    produto: doc.data(),
                    key: doc.id,
                    isLoading: false

                })
            }else {
                console.log("Nao Existe");
            }
        })
    }
    delete(id) {
        var desertRef = firebase.storage().refFromURL(this.state.produto.url)
        firebase.firestore().collection('Produtos').doc(id).delete().then(()=> {
            console.log("Documento Deletado com Sucesso")
            this.props.history.push('/')
        }).catch((error) =>{
            console.error("Erro é ", error);
        });
        desertRef.delete().then(function(){
            console.log('Arquivo deletado')
        }).catch(function(error){
            console.log('erro enquanto estava deletendo o arquivo')
        })
    }

    render() {

        return (
            <div className="container">
                <div className="Buttons">
                    <Link to="/">
                        <button className="Edit-Button">Listar Protudos</button>
                    </Link>
                </div>

                <div className = "upload-data">
                    <img src={this.state.produto.url} height="200" width="200" />
                </div>
                
                <div className="container">
                    <div className="panel panel-default">
                        <h3 className="panel panel-title">{this.state.produto.name}</h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Descrição</dt>
                            <dd>{this.state.produto.description} </dd>
                        </dl>
                        <dl>
                            <dt>Preço</dt>
                            <dd>{this.state.produto.preco} </dd>
                        </dl>
                        <Link to = {`/editar/${this.state.key}`} class ="btn btn-success">Editar</Link>
                        <button onClick = {this.delete.bind(this, this.state.key)} class ="btn btn-danger">Deletar</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default Mostrar;