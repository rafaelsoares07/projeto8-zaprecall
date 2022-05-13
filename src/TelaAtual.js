import React from 'react';
import TelaDoJogo from './TelaDoJogo';
import TelaInicial from './TelaInicial';


export default function TelaAtual(){

    const [start, setStart] = React.useState(false)

    
    return(
        <>
            {
                start? <TelaDoJogo />: <TelaInicial setStart={setStart} start={start}/>
            }
           
       
        </>
       
    )
}