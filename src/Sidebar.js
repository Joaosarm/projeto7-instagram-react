import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario";


const usuario = [
    {userImg: 'assets/img/catanacomics.svg', user: 'catanacomics', name: 'Catana'}
];

export default function Sidebar(){
    return(
        <div className="sidebar">
            {usuario.map(user => Usuario(user))}
            <Sugestoes />
            <Links />
            <Copyrigth />
        </div>
    );
}

function Links(){
    return(
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyrigth(){
    return(
        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}