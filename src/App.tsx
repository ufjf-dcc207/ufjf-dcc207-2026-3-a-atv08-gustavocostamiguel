import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './Types'

const data:Array<PacoteType> = [
{
  id:"", 
  largura: 20.0, 
  altura: 30.0, 
  profundidade: 40.0, 
  peso: 2.34
}
]
export default function App() {
  return (<section>
      <h2>Pacotes</h2>
      <div className="pacotes">
        <Pacote pacote={data[0]} />
      </div>
    </section>
  )
}
