import ReactDOM from 'react-dom';

function Lista() {
    return (
        <ul>
            <li>Topico 1</li>
            <li>Topico 2</li>
            <li>Topico 3</li>
        </ul>
    );
}

const lista = Lista();
const elemento = document.querySelector(".root");
ReactDOM.render(lista, elemento); // elemento do código de cima