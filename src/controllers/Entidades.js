import React, { useState, useEffect, Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';



import { firebase } from '../Firebase';


function Produto (){

    const [produ, setProduto] = useState([]);
    


    const handleSubmit = (event) => {
        event.preventDefault()
        const value = event.target.content.value
        if ( value !== '' ) {
            const obj = { content: value }
            addProduto(obj)
            event.target.content.value = '';
        }
    }

    const addProduto = (obj) =>{
        firebase.collection('produtos').add(obj)
        .then((doc)=> {
            console.log(doc.id)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        const unsubscribe = firebase.collection('produtos')
        .onSnapshot((query) => {
            let docs = [];
            query.forEach((doc) => {
                const { content, done } = doc.data();
                docs.push({
                    id: doc.id,
                    content: content, 
                    done: done
                })
            })
            setProduto(docs)
        })
        return unsubscribe;
    },[])



    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6">
                    TODO List
                </Typography>
                </Toolbar>
            </AppBar>
            <form onSubmit={handleSubmit}>
                <hr />
                <TextField
                    type="text" 
                    name="content" 
                    label="Digite uma tarefa" 
                    variant="outlined"
                    fullWidth />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: 10 }}>
                    ADICIONAR TAREFA
                </Button>
            </form>
        </div>
    )

}

