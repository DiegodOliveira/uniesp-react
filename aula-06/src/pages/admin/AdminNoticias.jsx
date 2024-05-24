import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Button, List, ListItem, ListItemText, Typograph} from '@mui/material'

const url = "http://localhost:3000"

const AdminNoticias = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        async function fetchData(){
          try{
            const res = await axios.get(url)
            setNoticias(res.data)
          }catch(error){
            console.error("Erro ao buscar notícias: ", error)
          }
    
        }
        fetchData()
      }, [])
    
      const removerNoticia = async(id) => {
        try{
            await axios.delete(`${url}/${id}`)
            setNoticias(noticias.filter(noticia => noticia.id !== id))
        }catch(error){
            console.error("Erro ao remover a notícia: ", error)
        }
      }

  return (
    <div>AdminNoticias</div>
  )
}

export default AdminNoticias