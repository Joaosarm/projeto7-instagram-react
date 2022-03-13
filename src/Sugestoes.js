const sugestoes = [
    {userImg: 'assets/img/bad.vibes.memes.svg', userName: 'bad.vibes.memes', razao: 'Segue você'},
    {userImg: 'assets/img/chibirdart.svg', userName: 'chibirdart', razao: 'Segue você'},
    {userImg: 'assets/img/razoesparaacreditar.svg', userName: 'razoesparaacreditar', razao: 'Novo no Instagram'},
    {userImg: 'assets/img/adorable_animals.svg', userName: 'adorable_animals', razao: 'Segue você'},
    {userImg: 'assets/img/smallcutecats.svg', userName: 'smallcutecats', razao: 'Segue você'}
]

export default function Sugestoes(){
    return(
        <div className="sugestoes">
            <Titulo />
            {sugestoes.map(sugestao => Sugestao(sugestao))}
        </div>
    )
}

function Titulo(){
    return (
        <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
        </div>
    )
}

function Sugestao(props){
    const {userImg, userName, razao} = props;
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={userImg} />
                <div className="texto">
                  <div className="nome">{userName}</div>
                  <div className="razao">{razao}</div>
                </div>
            </div>

              <div className="seguir">Seguir</div>
        </div>
    )
}