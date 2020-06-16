import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const NewProduct = () =>{
    
  const [produtos, setProdutos] = useState([])

   useEffect(() => {
      async function getProdutos() {

        const response = await api.get('produto')
        
        setProdutos(response.data)

      }
      
      getProdutos()

    }, [])

    async function handleDelete(data){
      
     const response = await api.delete('produto', {
       headers:{
          modelo: data
        }
      })
      setProdutos(produtos.filter( produto => produto.modelo !== data))
      console.log(response.data)
    }

   

    return (
      <div class="container">
      <div class="panel panel-heading">
        <h3 class="panel heading"> Detalhes do produto</h3>
      </div>
      <div class="panel-body">
        <table class="table table-strip">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Armazenamento</th>
              <th>Bateria</th>
              <th>Ram</th>
              <th>Cor</th>
              <th>Tela</th>
              <th>Imagem</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto =>
              <tr key={produto.modelo}>
                <td>{produto.modelo}</td>
                <td>{produto.marca}</td>
                <td>{produto.description}</td>
                <td>{produto.preco}</td>
                <td>{produto.armazenamento}</td>
                <td>{produto.bateria}</td>
                <td>{produto.ram}</td>
                <td>{produto.cor}</td>
                <td>{produto.tela}</td>
                <td>{produto.image}</td>
                <td><button variant="contained" onClick={() => handleDelete(produto.modelo)} color="primary">Excluir</button></td>
              </tr> 
              )}
          </tbody>

        </table>
      </div>
    </div>
    )

}

export default NewProduct