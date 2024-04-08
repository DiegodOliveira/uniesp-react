import React from 'react'

const Campanha2 = (props) => {

    function message(mes){

        if(mes === "setembro"){
            return "Prevenção ao suicídio"
        }else if(mes === "outubro"){
            return "Prevenção ao câncer de mama"
        }else if(mes === "novembro"){
            return "Prevenção ao câncer de próstata"
        }
    }

    function corDoMes(mes){
        if(mes === "setembro"){
            return styles.setembroClass
        }else if(mes === "outubro"){
            return styles.outubroClass
        }else if(mes === "novembro"){  
            return styles.novembroClass
          }


  return (
    <div className={corDoMes(props.mes)}>
        {message(props.mes)}
    </div>
  )
}

export default Campanha2