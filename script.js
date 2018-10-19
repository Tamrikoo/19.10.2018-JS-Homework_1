var num = document.createElement ( 'input' )
num.type = 'number'
document.body.appendChild ( num )
num.placeholder = 'Введите число'

var btn = document.createElement ( 'button' )
document.body.appendChild ( btn )
btn.innerHTML = ' Результат '

var result = document.createElement ( 'span' )
document.body.appendChild ( result )



btn.onclick = function ( event ) {
    if (num.value < 0 ) {
     result.innerHTML="Число отрицательное"

    }
    else {
    result.innerHTML = "Число положительное"+ "<br>"

    }
}
