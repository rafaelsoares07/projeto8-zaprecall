import React from "react"
import Botoes from "./Botoes"

function ButtonPergunta(props) {
    return (
        <div onClick={() => props.setEstado('stage2')} className="caixa-pergunta">
            <p>Pergunta {props.propriedades.indice + 1}</p>
            <img src="assets/img/Vector(4).png" />
        </div>
    )
}

function MostraPergunta(props) {
    return (
        <div className="card-pergunta" onClick={() => props.setEstado('stage3')}>

            <p>{props.propriedades.pergunta}</p>
            <img className="setinha" src="assets/img/setinha.png"  alt='setinha'/>
        </div>
    )
}

function MostraTelaZap(props) {

    return (
        <div className="card-pergunta">
            <p>{props.propriedades.resposta}</p>

            <div className='container-btn'>
                <Botoes qtdRespostas={props.qtdRespostas} setQtdRespostas={props.setQtdRespostas} estado={props.estado} setEstado={props.setEstado} formatacaoCard={props.formatacaoCard} setFormatacaoCard={props.setFormatacaoCard} cor='vermelho' text='Não lembro' classCss="btn-vermelho" />
                <Botoes qtdRespostas={props.qtdRespostas} setQtdRespostas={props.setQtdRespostas} estado={props.estado} setEstado={props.setEstado} formatacaoCard={props.formatacaoCard} setFormatacaoCard={props.setFormatacaoCard} cor='amarelo' text='Quase não lembrei' classCss="btn-amarelo" />
                <Botoes qtdCertas={props.qtdCertas} setQtdCertas={props.setQtdCertas} qtdRespostas={props.qtdRespostas} setQtdRespostas={props.setQtdRespostas} estado={props.estado} setEstado={props.setEstado} formatacaoCard={props.formatacaoCard} setFormatacaoCard={props.setFormatacaoCard} cor='verde' text='Zap' classCss="btn-verde" />
            </div>

        </div>
    )
}



function MostraTelaRespondida(props) {

    function FormatacaoCondicional() {
        if (props.formatacaoCard === 'verde') {
            
            return (
                <div className="caixa-pergunta-final">
                    <p>Pergunta {props.propriedades.indice + 1}</p>
                    <img src="assets/img/verde.png" />
                </div>
            )
        }

        if (props.formatacaoCard === 'amarelo') {
            return (
                <div className="caixa-pergunta-final">
                    <p>Pergunta {props.propriedades.indice + 1}</p>
                    <img src="assets/img/amarelo.png" />
                </div>
            )
        }
        if (props.formatacaoCard === 'vermelho') {
            return (
                <div className="caixa-pergunta-final">
                    <p>Pergunta {props.propriedades.indice + 1}</p>
                    <img src="assets/img/vermelho.png" />
                </div>
            )
        }
    }

    return (<>{FormatacaoCondicional()}</>)
}



export default function Pergunta(props) {

    const [estado, setEstado] = React.useState('stage1')
    const [formatacaoCard, setFormatacaoCard] = React.useState('')
    

   
    return (

        <>
            {estado === 'stage1' ? <ButtonPergunta estado={estado} setEstado={setEstado} propriedades={props} /> : ' '}
            {estado === 'stage2' ? <MostraPergunta estado={estado} setEstado={setEstado} propriedades={props} /> : ' '}
            {estado === 'stage3' ? <MostraTelaZap qtdCertas={props.qtdCertas} setQtdCertas={props.setQtdCertas} qtdRespostas={props.qtdRespostas} setQtdRespostas={props.setQtdRespostas} estado={estado} setEstado={setEstado} formatacaoCard={formatacaoCard} setFormatacaoCard={setFormatacaoCard} propriedades={props} /> : ' '}
            {estado === 'stage4' ? <MostraTelaRespondida formatacaoCard={formatacaoCard} setFormatacaoCard={setFormatacaoCard} propriedades={props} /> : ''}
        </>

    )
}