import React from "react"
import Pergunta from "./Pergunta"

function Header(){
    return(
    <div>
        <div className="header">
            <img className="img-header" src="assets/img/logo.png" alt="imagem do logo"/>
            <span className="name-logo">ZapRecall</span>
        </div>
        
    </div>
    )
}

function AreaQuestions(props){

const Perguntas = [
    
{question:"O que é JSX ?", responseQuestion:"Uma extensão de linguagem do JavaScript"},
{question:"O React é ?", responseQuestion:"uma biblioteca JavaScript para construção de interfaces"},
{question:"Componentes devem iniciar com", responseQuestion:"letra maiúscula"},
{question:"Podemos colocar _____ dentro do JSX ?", responseQuestion:"expressões"},
{question:"O ReactDOM nos ajuda ______ ?", responseQuestion:"nteragindo com a DOM para colocar componentes React na mesma"},
{question:"Usamos o npm para _____", responseQuestion:"gerenciar os pacotes necessários e suas dependências"},
{question:"Usamos props para _____ ", responseQuestion:"Uma extensão de linguagem do JavaScript"},
{question:" Usamos estado (state) para ____", responseQuestion:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]


function comparador(){
    return Math.random() - 0.5; 
}

const PerguntasSort = Perguntas.sort(comparador)

    return(
        <div className="area-perguntas">

        {PerguntasSort.map((item, i) => <Pergunta btnRespostas={props.btnRespostas} setBtnRespostas={props.setBtnRespostas} qtdCertas={props.qtdCertas} setQtdCertas={props.setQtdCertas} qtdRespostas={props.qtdRespostas} setQtdRespostas={props.setQtdRespostas} key={i} indice={i} pergunta={item.question} resposta={item.responseQuestion}/>)}
            
        </div>
    )
}



function Footer(props){
    console.log(props)
    function FormatacaoCondicionalFooter(){
        
        if(props.qtdRespostas<8 ){
            return(
                <div className="footer">
                    <p className="p-footer">{props.qtdRespostas}/8 Concluidos!</p> 
                    
                    <div>
                    {props.btnRespostas.map((item) =>  <img className="item-response" src={item}/>)}
                    </div>
                   
                   
                </div>
                
            )
        }
        if(props.qtdRespostas===8 && props.qtdCertas===8){
            return(
                <div className="footer-sucess">
                    <div className="div">
                        <img src="assets/img/party.png"/>
                        <span>Parabéns</span>
                        <p>Você não esqueceu nenhum FlashCard</p>
                        <p className="p-footer">{props.qtdRespostas}/8 Concluidos!</p>
                        
                    </div>

                    <div className="div-resul">
                        {props.btnRespostas.map((item) =>  <img className="item-response" src={item}/>)}
                    </div>
                   
                </div>
            )
        }
        if(props.qtdRespostas ===8 && props.qtdCertas<8){
            return(
                <div className="footer-fail">
                    <div className="div">
                        <img src="assets/img/sad.png"/>
                        <span>Putss</span>
                        <p>Você não acertou todas, mas continue tentando!</p>
                        <p className="p-footer">{props.qtdRespostas}/8 Concluidos!</p>
                       
                    </div>
                    <div className="div-resul">
                        {props.btnRespostas.map((item) =>  <img className="item-response" src={item}/>)}
                    </div>
                   
                </div>
            )
        }

        
        
    }

    return(
        <>{FormatacaoCondicionalFooter()}</>
    )
    
}

export default function TelaDoJogo(){
    const [qtdRespostas, setQtdRespostas] = React.useState(0)
    const[qtdCertas , setQtdCertas] = React.useState(0)
    const[btnRespostas, setBtnRespostas] = React.useState([])

    
       
    return(
        <div className="container">
           
            <Header />
            <AreaQuestions btnRespostas={btnRespostas} setBtnRespostas={setBtnRespostas} qtdRespostas={qtdRespostas} setQtdRespostas={setQtdRespostas} qtdCertas={qtdCertas} setQtdCertas={setQtdCertas} />
            <Footer btnRespostas={btnRespostas} qtdRespostas={qtdRespostas} qtdCertas={qtdCertas} />
            
        </div>
    )
}