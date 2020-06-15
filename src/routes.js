import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import ListarProduto from './controllers/Produto/ListarProduto';
//import AddProdutos from './controllers/Produto/AddProdutos';
//import ShowProdutos from './controllers/Produto/ShowProdutos';
//import EditarProdutos from './controllers/Produto/Editar&DeletarProduto';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Checkout from './pages/checkout/Checkout'
import NewProduct from './pages/newProduct/NewProduct'

//import AddFuncionario from './controllers/Funcionario/AddFuncionario';
import ListarFuncionario from './controllers/Funcionario/ListarFuncionarios';
import EditarFuncionario from './controllers/Funcionario/Editar&DeletarFuncionario';
import ShowFuncionarios from './controllers/Funcionario/ShowFuncionarios';
//import AddUsuario from './controllers/Usuario/AddUsuario';
import ListarUsuario from './controllers/Usuario/ListarUsuarios';
import EditarUsuario from './controllers/Usuario/Editar&DeletarUsuario';
import ShowUsuarios from './controllers/Usuario/ShowUsuarios';

//<Route path="/adicionarFuncionario"component={AddFuncionario}/><Route path="/mostrar/:id"component={ShowProdutos}/>
      // <Route path="/editar/:id"component={EditarProdutos}/> <Route path="/editar/:id"component={EditarProdutos}/>
//<Route path="/mostrar/:id"component={ShowProdutos}/> <Route path='/listarProduto' exact component={ListarProduto}/>  <Route path="/adicionar"component={AddProdutos}/>


export default function Routes() {
    return <BrowserRouter>
        
       
       
        <Route path="/cart/"component={Cart}/>
        <Route path="/product/"component={Product}/>
        <Route path="/home" component={Home}/>
       
        <Route path="/signup" component={SignUp}/>
        <Route path="/checkout" component={Checkout}/>

        <Route path="/" exact component={NewProduct}/>
        
        <Route path="/login"   component={Login}/>
        <Route path="/editarFuncionario/:id"component={EditarFuncionario}/>
        <Route path="/mostrarFuncionario/:id"component={ShowFuncionarios}/>
        <Route path='/listarFuncionarios' exact component={ListarFuncionario}/>
       
        <Route path="/editarUsuario/:id"component={EditarUsuario}/>
        <Route path="/mostrarUsuario/:id"component={ShowUsuarios}/>
        <Route path='/listarUsuarios' exact component={ListarUsuario}/>
        

    </BrowserRouter>
}