let right = document.querySelector('.right')
let left = document.querySelector('.left')

let item = document.querySelectorAll('.item')
var check = 0
right.addEventListener('click', ()=>{
if(check === 0){
    document.querySelector('.slider').appendChild(item[0])
    check = 1
}
if(check === 1){
    document.querySelector('.slider').appendChild(item[1])
    check = 2
}
if(check === 2){
    document.querySelector('.slider').appendChild(item[2])
    check = 3
}
})

left.addEventListener('click',()=>{
    document.querySelector('.slider').prepend(item[item.length - 1])
})