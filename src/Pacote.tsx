import "./Pacote.css"
import type { PacoteType } from "./Types";

type Pacoteprops = {
pacote: PacoteType;
}
export default function Pacote() {
    return (<div className="pacote">
            <dt>id</dt>
            <dd title = {Pacote.id}>pacote.id.substring(2)</dd>
            <dt>L{Pacote.largura}</dt>
            <dd>20</dd>
            <dt>A{Pacote.altura}</dt>
            <dd>30</dd>
            <dt>{Pacote.profundidade}</dt>
            <dd>{Pacote.peso}</dd>
            <dt></dt>
            <dd>2.34</dd>
        </div>)
}