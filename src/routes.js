import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Cart from './pages/cart/Cart'
import Product from './pages/product/Product'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Checkout from './pages/checkout/Checkout'
import NewProduct from './pages/newProduct/NewProduct'
import ListarProdutos from './pages/listarProdutos/ListarProdutos'
import NewUsuario from './pages/newUsuario/NewUsuario'
import NewFuncionario from './pages/newFuncionario/NewFuncionario'
import ListarFuncionarios from './pages/listarFuncionarios/ListarFuncionarios'
import ListarUsuarios from './pages/listarUsuarios/ListarUsuarios'



import EditarFuncionario from './controllers/Funcionario/Editar&DeletarFuncionario'
import ShowFuncionarios from './controllers/Funcionario/ShowFuncionarios'


import EditarUsuario from './controllers/Usuario/Editar&DeletarUsuario'
import ShowUsuarios from './controllers/Usuario/ShowUsuarios'




export default function Routes() {
    return ( 
        <BrowserRouter>
        
       
            <Route path="/login"   component={Login}/>
            <Route path="/cart/"component={Cart}/>
            <Route path="/product/"component={Product}/>
            <Route path="/home" component={Home}/>
       
            <Route path="/signup" component={SignUp}/>
            <Route path="/checkout" component={Checkout}/>

            <Route path="/createProdutc" component={NewProduct}/>
            <Route path="/listarProdutos" component={ListarProdutos}/>

            <Route path="/createUser" component={NewUsuario}/>
            <Route path='/listarUsuarios' exact component={ListarUsuarios}/>

            <Route path="/createFuncionario" component={NewFuncionario}/>
            <Route path='/listarFuncionarios' exact component={ListarFuncionarios}/>

            

            <Route path="/editarFuncionario/:id"component={EditarFuncionario}/>
            <Route path="/mostrarFuncionario/:id"component={ShowFuncionarios}/>
            
        
            <Route path="/editarUsuario/:id"component={EditarUsuario}/>
            <Route path="/mostrarUsuario/:id"component={ShowUsuarios}/>
            
            

        </BrowserRouter>
    )
}