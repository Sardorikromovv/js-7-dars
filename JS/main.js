/* replace in JS */

/*let matn = "Salom hammaga! salom berdim hammaga!"*/

/*console.log(matn.replace(/salom|hammaga/gi,'alik'))*/

/*let yangimatn = matn.replace(/salom|hammaga/gi,function (soz){
    if (soz == "Salom"|| soz == "salom"){
        return "alik";
    }
    else if ( soz == "hammaga"){
        return "barchaga"
    }
})*/
/*console.log(yangimatn)*/

/* Pop & Push in JS */

/*let list = []
list.push('Madina')
console.log(list.length)
console.log(list)
list.push('Xayitqulova')
console.log(list.length)
console.log(list)
list.push('25 yoshda')
console.log(list.length)
console.log(list)
list.push("Qozozgistonda yashaydi")
console.log(list.length)
console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list)*/

/* Unshift & Shift in JS */

/*let list  = []
list.unshift("Baxtiyor")
console.log(list.length)
console.log(list)
list.unshift("Qochqorov")
console.log(list.length)
console.log(list)
list.unshift("16 yoshda")
console.log(list.length)
console.log(list)
list.unshift("OZbekistonda yashshaydi")
console.log(list.length)
console.log(list)

console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)*/

/* Sort in JS */

/*let list = ["TOxir","Madina","Xurshida","Zarina","Nigora","Sardor","Baxodr","Farxod"]
console.log(list.sort().reverse())*/

/*let sonlar = [11,8,55,619,27,777,150,69]*/
/*let tartiblangansonlar = sonlar.sort(function (a, b){
    return a-b
})*/


/*console.log(tartiblangansonlar.reverse())*/

/*let belgilar = "0123456789";

function prolber(){
    let i = 0
    let parol = ''
    while (i < 6) {
        let son = parseInt(Math.random() * belgilar.length)
        parol += belgilar[son]
        i++
    }
    document.querySelector('input').value = parol
}*/

document.querySelector('.tugma').addEventListener('click',function (){
    let ekran = document.querySelector('.ekran')
    console.log(typeof parseInt(ekran.value))
    ekran.value = parseInt(ekran.value) +1
})
document.querySelector('.nolga').addEventListener('click',function (){
    document.querySelector('.ekran').value = 0
})



