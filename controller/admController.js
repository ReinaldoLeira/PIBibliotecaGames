//user
module.exports.painel = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: '', aba: 'user'})
}
module.exports.painelUserCadastrar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Cadastrar', aba: 'user'})
}
module.exports.painelUserEditar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Editar', aba: 'user'})
}
module.exports.painelUserBloq = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Bloquear', aba: 'user'})
}
module.exports.painelUserApagar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Apagar', aba: 'user'})
}
//jogo
module.exports.painelJogo = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: '', aba: 'jogo'})
}
module.exports.painelJogoCadastrar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Cadastrar', aba: 'jogo'})
}
module.exports.painelJogoEditar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Editar', aba: 'jogo'})
}
module.exports.painelJogoBloq = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Bloquear', aba: 'jogo'})
}
module.exports.painelJogoApagar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Apagar', aba: 'jogo'})
}
//analise
module.exports.painelAnalise = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: '', aba: 'analise'})
}
module.exports.painelAnaliseCadastrar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Cadastrar', aba: 'analise'})
}
module.exports.painelAnaliseEditar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Editar', aba: 'analise'})
}
module.exports.painelAnaliseBloq = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Bloquear', aba: 'analise'})
}
module.exports.painelAnaliseApagar = (req, res) => {
    res.render('./adm/painelAdmin', {selecionado: 'Apagar', aba: 'analise'})
}