import "./Pacote.css"
import type { PacoteType } from "./Types";

type Pacoteprops = {
pacote: PacoteType;
}
export default function Pacote({pacote}:Pacoteprops) {
    return (<div className="pacote">
            <dt>id</dt>

            <dd title = {pacote.id}>{pacote.id.substring(2)}</dd>
            <dt>Largura</dt>
            <dd>{pacote.largura}</dd>
            <dt>altura</dt>
            <dd>{pacote.altura}</dd>
            <dt>{Pacote.profundidade}</dt>
            <dd>{Pacote.peso}</dd>
            <dt></dt>
            <dd>2.34</dd>
        </div>)
}