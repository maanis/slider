var tl = gsap.timeline()

tl
    .to('.loader-img', {
        rotate: 360,
        duration: .9,
        y: -'100%',
        repeat: -1,
        ease: 'none',
    })
    .from('.child span', {
        // opacity:0,
        x: '70',
        stagger: .2,
        duration: 1.4,
        delay: -1,
        ease: Power3.easeInOut
    })
    .to('.reveal .parent .child', {
        y: '-100%',
        duration: 1,
        // delay:1,
        ease: Circ.easeInOut
    })

    .to('.reveal .parent .child', {
        display: 'none'
    })
    .to('.loader-img', {
        y: -'100%',
        opacity: 0
    })
    .to('.loader', {
        height: 0,
        duration: 2,
        delay: -1.2,
        ease: Expo.easeInOut
    })

    .to('.green', {
        height: "100%",
        duration: 2,
        delay: -2.2,
        ease: Expo.easeInOut
    })
    .to('.white', {
        height: "100%",

        duration: 1.8,
        delay: -1.6,
        ease: Expo.easeInOut
    })
tl.from('.boxB', {
    scale: 1.3,
    opacity: 0,
    delay: -.4,
    duration: .5
})
tl.to('.boxB', {
    top: 0,
    right: 0,
    duration: .7,
    ease: Power4.easeOut,
    left: '100%',
    transform: 'translate(-100%,0)',

})
gsap.from('.nav', {
    scale: 0,
    opacity: 0,
    // duration:2,
    ease: Circ.easeOut,
    delay: 5.25,
    x: 165,
    y: 50
})
gsap.from('.boxA', {
    scale: 0,
    opacity: 0,
    ease: Circ.easeOut,
    x: 320,
    y: 145,
    delay: 5.25,
})
gsap.from('.boxC', {
    scale: 0,
    ease: Circ.easeOut,
    opacity: 0,
    x: 255,
    y: -115,
    delay: 5.25,
})
gsap.from('.boxD', {
    scale: 0,
    ease: Circ.easeOut,
    opacity: 0,
    x: 122,
    y: -110,
    delay: 5.25,
})
gsap.from('.boxE', {
    scale: 0,
    ease: Circ.easeOut,
    opacity: 0,
    x: -200,
    y: -200,
    delay: 5.25,
})
gsap.from('.boxF', {
    scale: 0,
    ease: Circ.easeOut,
    opacity: 0,
    x: -165,
    y: -68,
    delay: 5.25,
})

gsap.from('.logo', {
    opacity: 0,
    x: -45,
    delay: 3
})
// gsap.from('li',{
//     opacity:0,
//     y:45,
//     delay:5.3,
//     stagger:.2
// })
gsap.from('.boxA-text', {
    y: 45,
    opacity: 0,
    delay: 5.3,
    duration: 1
})
gsap.from('i', {
    scale: 0,
    opacity: 0,
    delay: 5.7
})
gsap.from('.boxc-text', {
    opacity: 0,
    y: 95,
    delay: 5.3,
    duration: 1,
    stagger: .6
})

gsap.from('.img', {
    scale: 0,
    duration: .5,
    opacity: 0,
    delay: 5.3
})
gsap.from('input', {
    y: 20,
    opacity: 0,
    delay: 5.7,
    duration: 1,
    stagger: .4
})
