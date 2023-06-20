function validateSearch(strT) {                      //search проверяет встречается ли хотя бы один раз 
    return strT.search(/\d{4}/gm)
    }
function validateMatch(strT) {                       //match проверяет полное совпадение
    return strT.match(/^[a-z][a-z,\-,\_,\d.]+[a-z]$/gm)
    } 
    
const strTest = `agh329hfg-j_kkljz`
let result = ''

result = validateSearch(strTest)
if (result == '-1'){
    console.log('Ввод корректен')
}
else{
    console.log('Ввод не корректен:более 3 цифр подряд')
}
result = validateMatch(strTest)
if (result == null){
    console.log('Ввод не корректен: есть запрещенные символы')
}
else{
    console.log('Ввод корректен')
}