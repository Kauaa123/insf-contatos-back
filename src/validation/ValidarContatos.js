import { inserirContato } from "../repository/ContatosRepository.js";

export default function ValidarContatos(req) {
    if(!req.body.titulo) throw new Error('O parâmetro título está inválido.')
    if(!req.body.informacoes) throw new Error('O parâmetro Informações está inválido.')
    if(!req.body.impacto) throw new Error('O parâmetro Impacto está inválido.')
    if(req.body.ocorrencia == null) throw new Error('O parâmetro Ocorrencia está inválido.')    
    if(!req.body.atribuir) throw new Error('O parâmetro Atribuir está inválido.')
}