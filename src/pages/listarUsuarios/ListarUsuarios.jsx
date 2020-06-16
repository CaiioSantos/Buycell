import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const NewProduct = () =>{
    
  const [usuarios, setUsuarios] = useState([])

   useEffect(() => {

      async function getUsuarios() {
        const response = await api.get('usuario') 
        setUsuarios(response.data)
      }
   
      getUsuarios()
    }, [])

    async function handleDelete(data){
      
     const response = await api.delete('usuario', {
       headers:{
          cpf: data
        }
      })
      setUsuarios(usuarios.filter( usuario => usuario.cpf !== data))
      console.log(response.data)
    }

   

    return (
      <div class="container">
      <div class="panel panel-heading">
        <h3 class="panel heading"> Usuarios Cadastrados</h3>
      </div>
      <div class="panel-body">
        <table class="table table-strip">
          <thead>
            <tr>
              <th>CPF</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario =>
              <tr key={usuario.cpf}>
                <td>{usuario.cpf}</td> 
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.number}</td>
                <td>
                    <button 
                        variant="contained" 
                        onClick={() => 
                            handleDelete(usuario.cpf)
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