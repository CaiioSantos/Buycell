import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const EditarProduto = (props) =>{
    
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
    
    useEffect(() => {
        const { modelo } = props.match.params
        
        async function getProduto() {
            const response = await api.get(`/produto/${modelo}`)

            setFormData(response.data)
        }
        
        getProduto()

    }, [props.match.params])

    console.log(formData)

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
        
        const resp = await api.put('/produto',{
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
             
        console.log(resp.data.message)

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
                value={formData.modelo}
                name="modelo"   
                placeholder="Coloque o Modelo"
                />
          </div>

          <div className="form-group">
              <label for="name">Marca</label>
              <input type="text" 
                onChange={handleInputChange}
                className="form-control" 
                value={formData.marca}
                name="marca"   
                placeholder="Coloque a Marca"
                />
          </div>
          
          <div className="form-group">
              <label for="name">Preço</label>
              <input className="form-control col-lg-2" 
                name="preco"
                onChange={handleInputChange}
                value={formData.preco}  
                type="number" 
                placeholder="Preço do Produto"
                />
          </div>
          
          <div className="form-group">
              <label for="name">Descrição</label>
              <textarea 
                className="form-control" 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descrição do Produto"
                />
          </div>
        
          <div className="form-group">
              <label for="name">Imagem</label>
              <input 
                className="form-control col-lg-2" 
                name="image"   
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Imagem do Produto"
                />
          </div>
         
          <div className="form-group">
              <label for="name">Tela</label>
              <input className="form-control col-lg-2" 
                name="tela"
                id="tela"
                value={formData.tela}
                onChange={handleInputChange}
                placeholder="Tamanho da tela"
                />
          </div>
         
          <div className="form-group">
              <label for="name">Cor</label>
              <input className="form-control col-lg-2"
                name="cor"
                id="cor"
                value={formData.cor}
                onChange={handleInputChange}
                placeholder="Cor do Produto"
                />
          </div>
          
          <div className="form-group">
              <label for="name">Bateria</label>
              <input className="form-control col-lg-2" 
                name="bateria"   
                id="bateria"
                value={formData.bateria}
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
                value={formData.so}
                onChange={handleInputChange}
                placeholder="Sistema Operacional"
                />
          </div>
          
          <div>Armazenamento
              <select onChange={handleInputChange} 
                    name="armazenamento" 
                    id="armazenamento"
                    value={formData.armazenamento}
                    >
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
                id="ram"
                value={formData.ram}
                >
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
              <button className="Submit-button" type="submit" onClick={handleSubmit}>Salvar</button>
          </div>
          </form>
       </div>
    )

}

export default EditarProduto