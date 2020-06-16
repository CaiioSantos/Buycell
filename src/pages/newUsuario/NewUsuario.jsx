import React, { useState } from 'react'
import api from '../../services/api'


const NewUser = () =>{
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        cpf: ''
        
    })
    async function handleSubmit(event) {
        event.preventDefault()

        const { name,
            email,
            number,
            password,
            cpf,  
        } = formData
        
        const resp = await api.post('/usuario',{
            name,
            email,
            number,
            password,
            cpf
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
                    <label for="name">Nome</label>
                    <input type="text" 
                        onChange={handleInputChange}
                        className="form-control" 
                        name="name"   
                        placeholder="Coloque o nome"
                        />
                </div>

                <div className="form-group">
                    <label for="email">E-mail</label>
                    <input type="text" 
                        onChange={handleInputChange}
                        className="form-control" 
                        name="email"   
                        placeholder="Coloque a Marca"
                        />
                </div>
            
                <div className="form-group">
                    <label for="number">Número de celular</label>
                    <input className="form-control col-lg-2" 
                        name="number"
                        onChange={handleInputChange}  
                        type="number" 
                        placeholder="Numero"
                        />
                </div>

                <div className="form-group">
                    <label for="cpf">CPF</label>
                    <input className="form-control col-lg-2" 
                        name="cpf"
                        onChange={handleInputChange}  
                        type="number" 
                        placeholder="Cpf"
                        />
                </div>
            
                <div className="form-group">
                    <label for="password">Senha</label>
                    <input
                        type ="password"
                        className="form-control" 
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Senha"
                        />
                </div>

            </div>
          
            <div className="Buttons">
                <button className="Submit-button" type="submit" onClick={handleSubmit} > Adicionar</button>
            </div>

          </form>
       </div>
    )

}

export default NewUser