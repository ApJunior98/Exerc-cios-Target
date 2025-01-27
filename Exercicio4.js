let objFaturamento = [{
    estado: "SP",
    valor: 67836.43,
},{
    estado: "RJ",
    valor: 36678.66,
},{
    estado: "MG",
    valor: 23229.88
},{
    estado: "ES",
    valor: 27165.48
},{
    estado: "Outros",
    valor: 19849.53
}]

let valorMensal = objFaturamento.reduce((valorTotal, item) => {
    return  valorTotal + item.valor
},0);

let porcentagemSP = Math.round(((objFaturamento[0].valor) / valorMensal) * 10000)/100
let porcentagemRJ = Math.round(((objFaturamento[1].valor) / valorMensal) * 10000)/100
let porcentagemMG = Math.round(((objFaturamento[2].valor) / valorMensal) * 10000)/100
let porcentagemES = Math.round(((objFaturamento[3].valor) / valorMensal) * 10000)/100
let porcentagemOutros = Math.round(((objFaturamento[0].valor) / valorMensal) * 10000)/100

let textoRetorno = `A porcentagem de SP é: ${porcentagemSP} %, A porcentagem de RJ é: ${porcentagemRJ} %, A porcentagem de MG é: ${porcentagemMG} %, A porcentagem de ES é: ${porcentagemES} %, A porcentagem de Outros é: ${porcentagemOutros} %, `

console.log(textoRetorno)