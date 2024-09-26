var tl = gsap.timeline()

tl
.to('.loader',{
    height:0,
    duration:2,
    delay:2,
    ease:Expo.easeInOut
})
.to('.green',{
    height:"100%",
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
})
.to('.white',{
    height:"100%",
    duration:2,
    delay:-1.6,
    ease:Expo.easeInOut
})
