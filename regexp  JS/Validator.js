class Validator{
    constructor(strUser){
        this.strUser = strUser
    }
    validateUsername(){
        if (this.strUser.match(/^[a-z][a-z,\-,\_,\d.]+[a-z]$/gm) != null){
            if (this.strUser.search(/\d{4}/gm) == -1){
                return 'логин корректен'
            }
            else{
                return 'логин не корректен (цифры идут подряд более 4 раз)'
            }
        }
        else{
            return 'логин не корректен (есть запрещенный символ)'
        }
    }
}
module.exports = Validator
