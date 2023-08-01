let tooggleBar=document.querySelector(".three_dot")
let totalNavbar=document.querySelector(".navbar-nav")

tooggleBar.addEventListener('click',()=>{
    tooggleBar.classList.toggle("enablecross")
    totalNavbar.classList.toggle("active_nav")
})

let borderCreation=document.querySelectorAll(".grid_main_menus li")

borderCreation[0].addEventListener('click', (e)=>{
    borderCreation[0].firstElementChild.classList.add("border")
    borderCreation[1].firstElementChild.classList.remove("border")
    borderCreation[2].firstElementChild.classList.remove("border")
    borderCreation[3].firstElementChild.classList.remove("border")
    borderCreation[4].firstElementChild.classList.remove("border")
})
borderCreation[1].addEventListener('click', (e)=>{
    borderCreation[1].firstElementChild.classList.add("border")
    borderCreation[0].firstElementChild.classList.remove("border")
    borderCreation[2].firstElementChild.classList.remove("border")
    borderCreation[3].firstElementChild.classList.remove("border")
    borderCreation[4].firstElementChild.classList.remove("border")
})
borderCreation[2].addEventListener('click', (e)=>{
    borderCreation[2].firstElementChild.classList.add("border")
    borderCreation[0].firstElementChild.classList.remove("border")
    borderCreation[1].firstElementChild.classList.remove("border")
    borderCreation[3].firstElementChild.classList.remove("border")
    borderCreation[4].firstElementChild.classList.remove("border")
})
borderCreation[3].addEventListener('click', (e)=>{
    borderCreation[3].firstElementChild.classList.add("border")
    borderCreation[0].firstElementChild.classList.remove("border")
    borderCreation[1].firstElementChild.classList.remove("border")
    borderCreation[2].firstElementChild.classList.remove("border")
    borderCreation[4].firstElementChild.classList.remove("border")
})



borderCreation[4].addEventListener('click', (e)=>{
    borderCreation[4].firstElementChild.classList.add("border")
    borderCreation[0].firstElementChild.classList.remove("border")
    borderCreation[1].firstElementChild.classList.remove("border")
    borderCreation[2].firstElementChild.classList.remove("border")
    borderCreation[3].firstElementChild.classList.remove("border")

})

let firstWrapper=document.querySelector('.container1_wrapper')
let secondWrapper=document.querySelector('.container2_wrapper')
let thirdWrapper=document.querySelector('.container3_wrapper')
let fourthWrapper=document.querySelector('.container4_wrapper')
let fifthWrapper=document.querySelector('.container5_wrapper')

borderCreation[0].addEventListener('click', (e)=>{
    firstWrapper.classList.replace('hide_box','active_box')
    secondWrapper.classList.remove('active_box')
    thirdWrapper.classList.remove('active_box')
    fourthWrapper.classList.remove('active_box')
    fifthWrapper.classList.remove('active_box')

})

borderCreation[1].addEventListener('click', (e)=>{
    e.stopPropagation()
    secondWrapper.classList.add('active_box')
    secondWrapper.classList.replace('hide_box','active_box')
    firstWrapper.classList.add('hide_box')
    thirdWrapper.classList.add('hide_box')
    fourthWrapper.classList.add('hide_box')
    fifthWrapper.classList.add('hide_box')
})

borderCreation[2].addEventListener('click', (e)=>{
    e.stopPropagation()
    thirdWrapper.classList.add('active_box')
    thirdWrapper.classList.replace('hide_box','active_box')
    firstWrapper.classList.add('hide_box')
    secondWrapper.classList.add('hide_box')
    fourthWrapper.classList.add('hide_box')
    fifthWrapper.classList.add('hide_box')
})

borderCreation[3].addEventListener('click', (e)=>{
    e.stopPropagation()
    fourthWrapper.classList.add('active_box')
    fourthWrapper.classList.replace('hide_box','active_box')
    firstWrapper.classList.add('hide_box')
    secondWrapper.classList.add('hide_box')
    thirdWrapper.classList.add('hide_box')
    fifthWrapper.classList.add('hide_box')
})

borderCreation[4].addEventListener('click', (e)=>{
    e.stopPropagation()
    fifthWrapper.classList.add('active_box')
    fifthWrapper.classList.replace('hide_box','active_box')
    firstWrapper.classList.add('hide_box')
    secondWrapper.classList.add('hide_box')
    thirdWrapper.classList.add('hide_box')
    fourthWrapper.classList.add('hide_box')
})


// switch item box start

// switch item box start