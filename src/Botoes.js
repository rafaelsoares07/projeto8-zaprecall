import React from 'react';

export default function Botoes(props){
    
    function mudarFormatacao(props){
        props.setEstado('stage4'); 
        props.setFormatacaoCard(props.cor);
        props.setQtdRespostas(props.qtdRespostas+1)

        if(props.cor==='verde'){
            props.setQtdCertas(props.qtdCertas+1)
        }
    }


    return(
        <div onClick={()=> mudarFormatacao(props)} className={props.classCss}>
            {props.text}
        </div>
    )
}