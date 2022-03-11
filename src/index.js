import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import FundoMobile from './FundoMobile';

function App() {
    return (
        <div>
            <Navbar />
            <FundoMobile />
        </div>
    );
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root); // elemento do código de cima