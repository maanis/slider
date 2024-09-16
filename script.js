let right = document.querySelector('.right')
let left = document.querySelector('.left')


right.addEventListener('click', ()=>{
    let item = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(item[0])
    
})

left.addEventListener('click',()=>{
    let item = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(item[item.length - 1])
})