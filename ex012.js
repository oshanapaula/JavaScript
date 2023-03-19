var agora = new Date()
var diaSem = agora.getDay()

/* switch é uma estrutura muito importante para testar dados pontuais 
(0, 1, 2, 3...) 
não intervalos, ele só funciona com numeros inteiros e caracteres
*/
switch(diaSem) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sabado')
    break
  default:
    console.log(ERRO)
}