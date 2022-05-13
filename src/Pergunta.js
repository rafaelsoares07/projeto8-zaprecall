import React from "react"
import BotoesZap from "./BotoesZap"

function ButtonPergunta(props){
    return(
    <div onClick={()=> props.setEstado('stage2')} className="caixa-pergunta">
        <p>Pergunta {props.propriedades.indice + 1}</p>
        <img src="assets/img/Vector(4).png" />   
    </div>
    )
}

function MostraPergunta(props){
    return(
        <div className="card-pergunta" onClick={()=>props.setEstado('stage3')}>
    
            <p>{props.propriedades.pergunta}</p>
        </div>
    )
}

function MostraTelaZap(props){
    return(
        <div className="card-pergunta">
            <p>{props.propriedades.resposta}</p>
        </div>
    )
}



export default function Pergunta(props){

    const [estado, setEstado] = React.useState('stage1')

return(
<>
<BotoesZap />
{estado==='stage1'? <ButtonPergunta estado={estado} setEstado={setEstado} propriedades={props}/>:' '}
{estado==='stage2'? <MostraPergunta estado={estado} setEstado={setEstado} propriedades={props}/>:' '}
{estado==='stage3'? <MostraTelaZap estado={estado} setEstado={setEstado} propriedades={props}/>:' '}
</>
)
}