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
},{id:"", 
  largura: 20.0, 
  altura: 30.0, 
  profundidade: 40.0, 
  peso: 2.34},
]
export default function App() {
  return (<section>
      <h2>Pacotes</h2>
      <div className="pacotes">
{data.map(p => <Pacote pacote ={p}, key ={p.id}/>)}

function(p){return <Pacote pacote = {p}}

<Pacote pacote={data[0]} />
         <Pacote pacote={data[1]} />
      </div>
    </section>
  )
}
