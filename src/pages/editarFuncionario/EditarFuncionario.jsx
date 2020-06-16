import React, { useState, useEffect } from 'react'
import api from '../../services/api'


const EditarFuncionario = (props) =>{
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    })

    useEffect(() => {
        const { email } = props.match.params
        
        async function getFuncionario() {
            const response = await api.get(`/funcionario/${email}`)

            setFormData(response.data)
        }
        
        getFuncionario()

    }, [props.match.params])

    async function handleSubmit(event) {
        event.preventDefault()

        const { name,
            email,
            number,
            password  
        } = formData
        
        const resp = await api.put('/funcionario',{
            name,
            email,
            number,
            password
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
                    <label for="password">Senha</label>
                    <input
                        type ="password"
                        className="form-control" 
                        name="password"
                        onChange={handleInputChange}
                        value={formData.password}
                        placeholder="Senha"
                        />
                </div>

            </div>
          
            <div className="Buttons">
                <button className="Submit-button" type="submit" onClick={handleSubmit}> Salvar</button>
            </div>

          </form>
       </div>
    )

}

export default EditarFuncionario