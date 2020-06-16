import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const EditarUsuario = (props) =>{
    
    const [formData, setFormData] = useState({
        cpf: '',
        email: '',
        name: '',
        number: '',
        password: ''
    })

    useEffect(() => {
        const { cpf } = props.match.params
        
        async function getUsuario() {
            const response = await api.get(`/usuario/${cpf}`)

            setFormData(response.data)
        }
        
        getUsuario()

    }, [props.match.params])

    async function handleSubmit(event) {
        event.preventDefault()

        const { name,
            email,
            number,
            password,
            cpf,  
        } = formData
        
        const resp = await api.put('/usuario',{
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
                        value={formData.name}
                        className="form-control" 
                        name="name"   
                        placeholder="Coloque o nome"
                        />
                </div>

                <div className="form-group">
                    <label for="email">E-mail</label>
                    <input type="text" 
                        onChange={handleInputChange}
                        value={formData.email}
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
                        value={formData.number}  
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
                        disabled="true"
                        value={formData.cpf} 
                        placeholder="Cpf"
                        />
                </div>
            
                <div className="form-group">
                    <label for="password">Senha</label>
                    <input
                        type ="password"
                        className="form-control" 
                        name="password"
                        value={formData.password}
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

export default EditarUsuario