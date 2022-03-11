export default function Navbar(){
    return (
        <div className="navbar">
            <Container />
        </div>
    )
}

function Container(){
    return (
        <div className="container">
            <Logo />
            <Logomobile />
            <Instagrammobile />
            <Pesquisa />
            <Icones />
            <Iconesmobile />
        </div>
    )
}

function Logo(){
    return (
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" alt="Logo do Instagram"/>
        </div>
    )
}

function Logomobile(){
    return (
        <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function Instagrammobile(){
    return (
        <div className="instagram-mobile">
            <img src="assets/img/logo.png" alt="Logo do Instagram"/>
        </div>
    )
}

function Pesquisa(){
    return (
        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function Icones(){
    return(
        <div className="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}

function Iconesmobile(){
    return(
        <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}