import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const NewProduct = () =>{
    const [selectedFile, setSelectedFile] = useState()

    async function handleSubmit(event) {
        event.preventDefault()
        console.log("")
        //await api.post()
    }

    return (
        <div className="container">
          <form type="submit">
          <div>
          
          <div className="form-group">
              <label for="name">Modelo</label>
              <input type="text" 
                className="form-control" 
                name="modelo"   
                placeholder="Coloque o Modelo"/>
          </div>

          <div className="form-group">
              <label for="name">Marca</label>
              <input type="text" 
                className="form-control" 
                name="marca"   
                placeholder="Coloque a Marca"/>
          </div>
          
          <div className="form-group">
              <label for="name">Preço</label>
              <input className="form-control col-lg-2" 
                name="preco"  
                type="number" 
                placeholder="Preço do Produto"/>
          </div>
          <div className="form-group">
              <label for="name">Descrição</label>
              <textarea className="form-control" name="description"  placeholder="Descrição do Produto"></textarea>
          </div>
          <div className="form-group">
              <label for="name">Imagem</label>
              <input className="form-control col-lg-2" name="preco"   placeholder="Imagem do Produto"></input>
          </div>
          <div className="form-group">
              <label for="name">Tela</label>
              <input className="form-control col-lg-2" 
                name="tela"
                id="tela"
                placeholder="Tamanho da tela"></input>
          </div>
          <div className="form-group">
              <label for="name">Cor</label>
              <input className="form-control col-lg-2"
                name="cor"
                id="cor"
                placeholder="Cor do Produto"/>
          </div>
          <div className="form-group">
              <label for="name">Bateria</label>
              <input className="form-control col-lg-2" 
                name="bateria"   
                id="bateria"
                placeholder="Bateria do Produto"/>
          </div>
          <div className="form-group">
              <label for="name">Sistema Operacional</label>
              <input type="text" 
                className="form-control" 
                name="so"   
                id="so"
                placeholder="Sistema Operacional"/>
          </div>
          <div>
              <select name="armazenamento" id="armazenamento">
                  <option value="8">8GB</option>
                  <option value="16">16GB</option>
                  <option value="32">32GB</option>
                  <option value="64">64GB</option>
                  <option value="128">128GB</option>
                  <option value="256">256GB</option>
                  <option value="512">512GB</option>
              </select>
          </div>
          <div>
              <select name="ram" id="ram">
              <option value="1">1GB</option>
                  <option value="2">2GB</option>
                  <option value="3">3GB</option>
                  <option value="4">4GB</option>
                  <option value="6">6GB</option>
                  <option value="8">8GB</option>
                  <option value="16">16GB</option>
              </select>
          </div>
          <div className="upload-btn-wrapper">
                <input type="file" name="myfile"  />

          </div>
          </div>
          
          <div className="Buttons">
              <button className="Submit-button" > Adicionar imagem primeiro</button>
              <button className="Submit-button" type="submit" onClick={handleSubmit} > Adicionar</button>

          </div>
          </form>
       </div>
    )

}

export default NewProduct