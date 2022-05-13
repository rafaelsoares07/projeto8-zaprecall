export default function TelaInicial({setStart, start}){
    
    return(
        <div className="container">
            <img className="logo" src="assets/img/logoP.png" alt="Logo do ZapRecall"/>
            <p className="name-logo">ZapRecall</p>
            <button onClick={()=> setStart(!start)} className="btn-start">Iniciar Recall</button>
        </div>
    )
}