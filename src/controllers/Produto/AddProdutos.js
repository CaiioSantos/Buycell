import React from 'react';

//import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';



class Adicionar extends React.Component {
 /* constructor(props){
    super(props);
    this.ref = firebase.firestore().collection('Produtos')
    this.state = {
        name: '',
        description: '',
        preco: '',
        url: '',
        image: null,
    }
  }
  onChange = (e) => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
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
      const {image} = this.state;
      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(this.state.image)
      uploadTask.on('state_changed', (snapshot)=>{console.log('snapshot')},
      (error)=>{console.log(error);},
      () => {firebase.storage().ref('images').child(image.name).getDownloadURL().then(url=>this.setState({url}))})
      
  }
  onSubmit =(e) => 
  {
    e.preventDefault();
    const {name, description, preco} = this.state;
    this.ref.add({
        name,
        description,
        preco,
        url: this.state.url
    }).then((docRef)=>{
        this.setState({
            name:'',
            description:'',
            preco: '',
            url:''
        });
        this.props.history.push("/")
    })
    .catch((error)=>{
        console.error("Erro ao Adicionar:", error);
    })
  }
*/
  render(){
      
    return(
      <div className="container">
          <div>
          <div className="form-group">
              <label for="name">Nome do Produto</label>
              <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Coloque o Nome"></input>
          </div>
          <div className="form-group">
              <label for="name">Descrição</label>
              <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Descrição do Produto"></textarea>
          </div>
          <div className="form-group">
              <label for="name">Preço</label>
              <input className="form-control col-lg-2" name="preco"  onChange={this.onChange} placeholder="Preço do Produto"></input>
          </div>
          <div className="upload-btn-wrapper">
                <input type="file" name="myfile" onChange={this.hendleChange} />

          </div>
          </div>
          <div className = "upload-data">
              <img src={this.state.url} height="200" width="200" />

          </div>
          <div className="Buttons">
              <button className="Submit-button" onClick={this.hendleUpload}> Adicionar imagem primeiro</button>
              <button className="Submit-button" onClick={this.onSubmit}> Adicionar</button>

          </div>
       </div>
    )
  }
}
  
export default Adicionar;
