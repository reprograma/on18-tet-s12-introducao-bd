function verificarItensObrigatorios(body) {
    if (!body.nome) {
        return `O campo nome é obrigatório`
    }
    if (!body.telefone) {
        return `O campo telefone é obrigatório`
    }
    if (!body.endereco) {
        return `O campo endereco é obrigatório`
    }
    return false
}

function validarPlanoDeSaude(body) {
    if (typeof body.plano_saude_numero !== "number") {
        return `O campo plano_saude_numero deve ser um número. Preencha o número da sua carteira do plano.`
    }
    return false
}

function validarNumeroDoPlanoDeSaude() {
    ////se já tiver o numero de plano cadastrado não permitir cadastrar novamente
}

module.exports = {
    verificarItensObrigatorios,
    validarPlanoDeSaude,
    validarNumeroDoPlanoDeSaude
}