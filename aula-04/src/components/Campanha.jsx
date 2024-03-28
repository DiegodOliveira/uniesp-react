import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMesagem(mes){
        if (mes === "setembro"){
            return "Prevenção ao suícidio"
        }else if(mes === "outubro"){
            return "Prevenção ao câncer de mama"
        }else{
            return "Prevenção ao câncer de próstata"
        }
    }

    function defineCorDeFundo(mes){
        if(mes === "setembro"){
            return styles.setembroClass
        }else if(mes === "outubro"){
            return styles.outubroClass
        }else{
            return styles.novembroClass
        }
    }




  return (
    <div className={defineCorDeFundo(props.mes)}>
        {defineMesagem(props.mes)}
    </div>
  )
}

export default Campanha