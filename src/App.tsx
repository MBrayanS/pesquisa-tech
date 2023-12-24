import './App.css'

import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'

function App() {

    return ( <>
        <Cabecalho consultas='857' />

        <div className='main'></div>

        <Rodape/>

    </> )
}

export default App