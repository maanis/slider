let revealClass = () => {
    document.querySelectorAll('.reveal').forEach((elem) => {
        console.log(elem)

        let parent = document.createElement('span')
        let child = document.createElement('span')

        parent.classList.add('parent')
        child.classList.add('child')

        child.innerHTML = elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML = ''
        elem.appendChild(parent)


    })
}
revealClass()

document.querySelector('.main').addEventListener('mousemove',(dets)=>{
    
    gsap.to('.cursor',{
        x:dets.x,
        y:dets.y,
        // opacity:0,
        duration:.3,
        // display:'block',
        backgroundColor:"#14CF93",
    })
})
document.querySelector('.boxB').addEventListener('mousemove',()=>{
    gsap.to('.cursor',{
        scale:1,
        opacity:.8

    })
})
document.querySelector('.boxB').addEventListener('mouseleave',()=>{
    gsap.to('.cursor',{
        scale:0,
        opacity:0
        // duration:0,
    })
})