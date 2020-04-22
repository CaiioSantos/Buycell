import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListarProduto from './controllers/Produto/ListarProduto';
import AddProdutos from './controllers/Produto/AddProdutos';
import ShowProdutos from './controllers/Produto/ShowProdutos';
import EditarProdutos from './controllers/Produto/Editar&DeletarProduto';

export default function Routes() {
    return <BrowserRouter>
        <Route path='/' exact component={ListarProduto}/>
        <Route path="/adicionar"component={AddProdutos}/>
        <Route path="/mostrar/:id"component={ShowProdutos}/>
        <Route path="/editar/:id"component={EditarProdutos}/>
    </BrowserRouter>
}