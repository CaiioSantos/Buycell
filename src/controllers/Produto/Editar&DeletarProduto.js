import React from 'react';

import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class Editar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            key: '',
            name: '',
            description: '',
            preco: '',
            url: '',
            image: null
        }
    }
    componentDidMount () {
        const ref = firebase.firestore().collection('Produtos').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                const document = doc.data();
                this.setState({
                    key: doc.id,
                    name: document.name,
                    description: document.description,
                    preco: document.preco,
                    url: document.url
                })
            }else {
                console.log("Nao Existe");
            }
        })
    }
    hendleChange = (e) => {
        if (e.target.files[0]){
            this.setState({
                image: e.target.files[0]
            })
        }
        console.log(e.target.files[0]);
    }
    hendleUpload = () => 
  {
      const {image, url} = this.state;
      var desertRef = firebase.storage().refFromURL(url)

      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(this.state.image)
      uploadTask.on('state_changed', (snapshot)=>{console.log('snapshot')},
      (error)=>{console.log(error);},
      () => {firebase.storage().ref('images').child(image.name).getDownloadURL().then(url=>this.setState({url}))})
      
      desertRef.delete().then(function(){
        console.log('Arquivo deletado')
    }).catch(function(error){
        console.log('erro enquanto estava deletendo o arquivo')
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
  const {name, description, preco, url} = this.state;
  const updateRef = firebase.firestore().collection('Produtos').doc(this.state.key);

  updateRef.set({
      name,
      description,
      preco,
      url
  }).then((docRef)=>{
      this.setState({
          key:'',
          name:'',
          description:'',
          preco: '',
          url:''
      });
      this.props.history.push("/mostrar/"+this.props.match.params.id)
  })
  .catch((error)=>{
      console.error("Erro ao Editar:", error);
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
                    <img src={this.state.url} height="200" width="200" />
                </div>

                <div className="upload-btn-wrapper">
                <input type="file" onChange={this.hendleChange} />

                </div>

                <div className="Buttons">
              <button className="Submit-button" onClick={this.hendleUpload}> Upload image first</button>

              <div className="container">
                    <div className="panel panel-default">

                    
                    <div className="panel-body">
                       <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="name">Nome do Produto</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Coloque o Nome"></input>
                            </div>
                            <div className="form-group">
                                <label for="name">Descrição</label>
                                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Descrição do Produto">{this.state.description}</textarea>
                            </div>
                            <div className="form-group">
                                <label for="name">Preço</label>
                                <input className="form-control col-lg-2" name="preco"  onChange={this.onChange} placeholder="Preço do Produto"></input>
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
export default Editar;