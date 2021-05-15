const usersController = {

    analise: (req, res) => {
        res.render('./users/analise');
    },

    login: (req, res) => {
        res.render('./users/login');
    },
    registrar:(req, res) => {
        res.render('./users/cadastrar'); 
    },
    formAnalise:(req, res) => {
        res.render('./users/form-analise')
    },
    meusJogos: (req, res) => {
        res.render('./users/meusJogos')
    },
    posts: (req, res) => {
        res.render('./users/posts')
    },
    usuario: (req, res) => {
        res.render('./users/usuario')
    }

}

module.exports = usersController