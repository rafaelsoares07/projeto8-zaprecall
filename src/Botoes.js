import React from 'react';

export default function Botoes(props){
    
    

    function mudarFormatacao(props){
        props.setEstado('stage4'); 
        props.setFormatacaoCard(props.cor);
        props.setQtdRespostas(props.qtdRespostas+1)

        if(props.cor==='verde'){
            console.log('verde')
            props.setQtdCertas(props.qtdCertas+1)
            props.setBtnRespostas([...props.btnRespostas,'assets/img/verde.png'])
        }
        if(props.cor==='amarelo'){
            console.log('amarelo')
            props.setQtdCertas(props.qtdCertas+1)
            props.setBtnRespostas([...props.btnRespostas,'assets/img/amarelo.png'])
        }
    
        if(props.cor==='vermelho'){
            props.setBtnRespostas([...props.btnRespostas,'assets/img/vermelho.png'])
        }
    }


    return(
        <div onClick={()=> mudarFormatacao(props)} className={props.classCss}>
            {props.text}
        </div>
    )
}