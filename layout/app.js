// var tl = gsap.timeline()

// tl.from('.boxB',{
//     scale:1.3,
//     opacity:0,
//     delay:1,
//     duration:.5
// })
// tl.to('.boxB',{
//     top:0,
//     right:0,
//     duration:.7,
//     left:'100%',
//     transform: 'translate(-100%,0)',
    
// })
// gsap.from('.nav',{
//     scale:0,
//     opacity:0,
//     // duration:2,
//     delay:2.3,
//     x:165,
//     y:50
// })
// gsap.from('.boxA',{
//     scale:0,
//     opacity:0,
//     x:320,
//     y:145,
//     delay:2.3,
// })
// gsap.from('.boxC',{
//     scale:0,
//     opacity:0,
//     x:255,
//     y:-115,
//     delay:2.3,
// })
// gsap.from('.boxD',{
//     scale:0,
//     opacity:0,
//     x:122,
//     y:-110,
//     delay:2.3,
// })
// gsap.from('.boxE',{
//     scale:0,
//     opacity:0,
//     x:-200,
//     y:-200,
//     delay:2.3,
// })
// gsap.from('.boxF',{
//     scale:0,
//     opacity:0,
//     x:-165,
//     y:-68,
//     delay:2.3,
// })

// gsap.from('.logo',{
//     opacity:0,
//     x:-45,
//     delay:3
// })
// gsap.from('.boxA-text',{
//     y:45,
//     opacity:0,
//     delay:3,
//     duration:1
// })
// gsap.from('i',{
//     scale:0,
//     opacity:0,
//     delay:3.4
// })
// gsap.from('.boxc-text',{
//     opacity:0,
//     y:95,
//     delay:3,
//     duration:1,
//     stagger:.6
// })

// gsap.from('.img',{
//     scale:0,
//     duration:.5,
//     opacity:0,
//     delay:3
// })
// gsap.from('input',{
//     y:20,
//     opacity:0,
//     delay:3.4,
//     duration:1,
//     stagger:.4
// })

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