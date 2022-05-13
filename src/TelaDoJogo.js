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



function AreaQuestions(){

const Perguntas = [
    
{question:"O que é JSX1?", responseQuestion:"Uma extensão de linguagem do JavaScript"},
{question:"O React é?", responseQuestion:"uma biblioteca JavaScript para construção de interfaces"},
{question:"Componentes devem iniciar com", responseQuestion:"letra maiúscula"},
{question:"Podemos colocar __ dentro do JSX?", responseQuestion:"expressões"},
{question:"O ReactDOM nos ajuda __?", responseQuestion:"nteragindo com a DOM para colocar componentes React na mesma"},
{question:"Usamos o npm para __", responseQuestion:"gerenciar os pacotes necessários e suas dependências"},
{question:"Usamos props para __ ", responseQuestion:"Uma extensão de linguagem do JavaScript"},
{question:" Usamos estado (state) para __", responseQuestion:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

    return(
        <div className="area-perguntas">

        {Perguntas.map((item, i) => <Pergunta indice={i} pergunta={item.question} resposta={item.responseQuestion}/>)}
            
        </div>
    )
}


function Footer(){
    return(
        <div className="footer">
            <p>0/8 Concluidos</p>
        </div>
    )
    
}

export default function TelaDoJogo(){
    return(
        <div className="container">
           
            <Header />
            <AreaQuestions/>
            <Footer />
            
        </div>
    )
}