let right = document.querySelector('.right')
let left = document.querySelector('.left')
document.body.style.backgroundImage
let slider = document.querySelector('.slider')
let tl = gsap.timeline()

console.log(slider.style.background.src)
var check = 1
right.addEventListener('click', () => {
    let item = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(item[0])
    console.log(item[2].style.backgroundImage)
    document.querySelector('.hero-img').style.background = `${item[2].style.backgroundImage} no-repeat center center/cover`
    gsap.from('.head',{
        y:25
    })
})

left.addEventListener('click', () => {
    let item = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(item[item.length - 1])
    document.querySelector('.hero-img').style.background = `${item[0].style.backgroundImage} no-repeat center center/cover`
})