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
import EditarProduto from './pages/editarProduto/EditarProduto'

import NewUsuario from './pages/newUsuario/NewUsuario'
import ListarUsuarios from './pages/listarUsuarios/ListarUsuarios'
import EditarUsuario from './pages/editarUsuario/EditarUsuario'

import NewFuncionario from './pages/newFuncionario/NewFuncionario'
import ListarFuncionarios from './pages/listarFuncionarios/ListarFuncionarios'
import EditarFuncionario from './pages/editarFuncionario/EditarFuncionario'


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
            <Route path="/editarProduto/:modelo"component={EditarProduto}/>

            <Route path="/createUser" component={NewUsuario}/>
            <Route path='/listarUsuarios' component={ListarUsuarios}/>
            <Route path="/editarUsuario/:cpf"component={EditarUsuario}/>

            <Route path="/createFuncionario" component={NewFuncionario}/>
            <Route path='/listarFuncionarios' component={ListarFuncionarios}/>
            <Route path="/editarFuncionario/:email"component={EditarFuncionario}/>
            
            
            

        </BrowserRouter>
    )
}