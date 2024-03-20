import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolherRenderizacao(oQueRenderizar){
        if(oQueRenderizar == "h1"){
            return <h1>Texto em h1</h1>
        }else{
            return <h2>Texto em h2</h2>
        }
    }

    return(
        <div>
            {escolherRenderizacao('h1')}
            {escolherRenderizacao('h2')}
        </div>
    )
}

export default RenderizandoComFuncoes