import type { PacoteType} from "./types";
export type AcaoPacote = acaoPacoteExcluir || acaoPacoteRepetir;

export type acaoPacoteExcluir = {
type: "excluir",
id: string
}
export type acaoPacoteRepetir = {}
type "repetir",
id: string;
dimensao: string
}

export function pacoteReducer(state: Array<PacoteType>, action: acaoPacoteExcluir){
switch(action.type){
case "excluir":
   return state.filter(p=> p.id !== action.id);

   case "repetir":
    if(action.dimensao === "altura")
        return state.map(p =>{
if(p.id === action.id ){
    return{ 
            ...p, profundidade: p.altura,  largura: p.altura})
        else return p
        }
    );
}
    break;

    default:
        return state;
}

