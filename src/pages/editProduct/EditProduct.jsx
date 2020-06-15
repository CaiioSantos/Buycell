import React, { useState } from 'react'
import api from '../../services/api'


const NewProduct = () =>{
    
    const [formData, setFormData] = useState({
        modelo: '',
        marca: '',
        preco: '',
        description: '',
        image: '',
        tela: '',
        cor: '',
        bateria: '',
        so: '',
        armazenamento: '',
        ram: '',
    })
    async function handleSubmit(event) {
        event.preventDefault()

        const { modelo,
            marca,
            preco,
            description,
            image,
            tela,
            cor,
            bateria,
            so,
            armazenamento,
            ram
        } = formData
        
        const resp = await api.post('/produto',{
            modelo,
            marca,
            preco,
            description,
            image,
            tela,
            cor,
            bateria,
            so,
            armazenamento,
            ram
            }
        )
             
        console.log(resp)

        //await api.post('points',data)
        //setResult(true)
        //setTimeout(() => {history.push('/')},500)
    }

    function handleInputChange(event) {
        const { name, value } = event.target
        
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="container">
          <form type="submit">
          <div>
          
          <div className="form-group">
              <label for="name">Modelo</label>
              <input type="text" 
                onChange={handleInputChange}
                className="form-control" 
                name="modelo"   
                placeholder="Coloque o Modelo"
                />
          </div>

          <div className="form-group">
              <label for="name">Marca</label>
              <input type="text" 
                onChange={handleInputChange}
                className="form-control" 
                name="marca"   
                placeholder="Coloque a Marca"
                />
          </div>
          
          <div className="form-group">
              <label for="name">Preço</label>
              <input className="form-control col-lg-2" 
                name="preco"
                onChange={handleInputChange}  
                type="number" 
                placeholder="Preço do Produto"
                />
          </div>
          
          <div className="form-group">
              <label for="name">Descrição</label>
              <textarea 
                className="form-control" 
                name="description"
                onChange={handleInputChange}
                placeholder="Descrição do Produto"
                />
          </div>
        
          <div className="form-group">
              <label for="name">Imagem</label>
              <input 
                className="form-control col-lg-2" 
                name="image"   
                onChange={handleInputChange}
                placeholder="Imagem do Produto"
                />
          </div>
         
          <div className="form-group">
              <label for="name">Tela</label>
              <input className="form-control col-lg-2" 
                name="tela"
                id="tela"
                onChange={handleInputChange}
                placeholder="Tamanho da tela"
                />
          </div>
         
          <div className="form-group">
              <label for="name">Cor</label>
              <input className="form-control col-lg-2"
                name="cor"
                id="cor"
                onChange={handleInputChange}
                placeholder="Cor do Produto"
                />
          </div>
          
          <div className="form-group">
              <label for="name">Bateria</label>
              <input className="form-control col-lg-2" 
                name="bateria"   
                id="bateria"
                onChange={handleInputChange}
                placeholder="Bateria do Produto"
                />
          </div>
         
          <div className="form-group">
              <label for="name">Sistema Operacional</label>
              <input type="text" 
                className="form-control" 
                name="so"   
                id="so"
                onChange={handleInputChange}
                placeholder="Sistema Operacional"
                />
          </div>
          
          <div>Armazenamento
              <select onChange={handleInputChange} 
                    name="armazenamento" 
                    id="armazenamento">
                  <option value="8">8GB</option>
                  <option value="16">16GB</option>
                  <option value="32">32GB</option>
                  <option value="64">64GB</option>
                  <option value="128">128GB</option>
                  <option value="256">256GB</option>
                  <option value="512">512GB</option>
              </select>
          </div>
       
          <div>Ram
              <select onChange={handleInputChange} 
                name="ram" 
                id="ram">
              <option value="1">1GB</option>
                  <option value="2">2GB</option>
                  <option value="3">3GB</option>
                  <option value="4">4GB</option>
                  <option value="6">6GB</option>
                  <option value="8">8GB</option>
                  <option value="16">16GB</option>
              </select>
          </div>   
          </div>
          
          <div className="Buttons">
              <button className="Submit-button" type="submit" onClick={handleSubmit} > Adicionar</button>
          </div>
          </form>
       </div>
    )

}

export default NewProduct