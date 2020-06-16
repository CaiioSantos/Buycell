import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const NewProduct = () =>{
    
  const [funcionarios, setFuncionarios] = useState([])

   useEffect(() => {

      async function getProdutos() {
        const response = await api.get('funcionario') 
        setFuncionarios(response.data)
      }
   
      getProdutos()
    }, [])

    async function handleDelete(data){
      
     const response = await api.delete('funcionario', {
       headers:{
          email: data
        }
      })
      setFuncionarios(funcionarios.filter( funcionario => funcionario.email !== data))
      console.log(response.data)
    }

   

    return (
      <div class="container">
      <div class="panel panel-heading">
        <h3 class="panel heading"> Funcionarios Cadastrados </h3>
      </div>
      <div class="panel-body">
        <table class="table table-strip">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map(funcionario =>
              <tr key={funcionario.email}>
                <td>{funcionario.name}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.number}</td>
                <td>
                    <button 
                        variant="contained" 
                        onClick={() => 
                            handleDelete(funcionario.email)
                        } 
                        color="primary">Excluir
                    </button>
                </td>
              </tr> 
              )}
          </tbody>

        </table>
      </div>
    </div>
    )

}

export default NewProduct