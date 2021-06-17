const { check } = require('express-validator');

module.exports = {
    validatorCadastro : [
        check('email')
        .isEmail()
        .withMessage('email invalido')
        .isEmpty()
        ,
        check('senha')
        .isStrongPassword({minLength: 8})
        .withMessage('senha precisa ter no minimo 8 caracters')
        .bail()
        
    ]

}
