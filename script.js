// function image(){
//     for(let eachImage = 0; eachImage<6; eachImage++){
//         var image = document.querySelectorAll('.image')[eachImage]
//         console.log(image.innerHTML)
//     }
// }
// image()




// The next thing to fo now is to create an array for the image list, give the images letters A to F, then delete the paragrapghs
//in the  html file. Loop through the array as the left and right arrows are clicked. remember to use the reverse image list as an array for
// the right button. then check the drum.js file if you get lost 
// function left(){
//     var left = document.querySelector('#left');
//     left.addEventListener('click', function(){
//         var left = document.querySelector('#left');
//         var newImage = document.querySelector('#image')
//         var imageArray = ['A', 'B', 'C', 'D', 'E']
//         for(let index = 0; index < imageArray.length; index++){
//             var extension = '.jpg'
//             var imageExtension = imageArray[index] + extension
//             newImage.setAttribute('src', imageExtension)
//             console.log(imageExtension)
//             var shift = imageArray.shift()
//             // console.log(imageArray)
//             // console.log(shift)
//             var push = imageArray.push(shift)
//             console.log(imageArray)
//             console.log(newImage)
//         } 
//     })
// }
// left()

// function right(){
//     var right = document.querySelector('#right');
//     right.addEventListener('click', function(){
//         var left = document.querySelector('#right');
//         var newImage = document.querySelector('#image')
//         var imageArray = ['E', 'D', 'C', 'B', 'A']
//         if( imageArray.length < 6){
//             var extension = '.jpg'
//             var imageExtension = imageArray[0] + extension
//             console.log(imageExtension)
//             newImage.setAttribute('src', imageExtension)
//             var shift = imageArray.shift()
//             console.log(imageArray)
//             console.log(shift)
//             imageArray.push(shift)
//             console.log(imageArray)
//             console.log(newImage)
//         }
//         console.log(imageArray)
    
//     })
// }
// right()

// function  imageList(){
//     var imageList = document.querySelectorAll('#imageList')
//     console.log(imageList)
// }
// imageList

// var image = document.querySelectorAll('.image').length
// for(let eachImage = 0; eachImage < image; eachImage++){
//     document.querySelectorAll('.image')[eachImage]
// }


// const images = document.querySelector('.images');
// const buttons = document.querySelectorAll('.button');
// const numberOfImages = document.querySelectorAll('.images img').length
// let imageIndex = 1;
// let position = 0;

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         if (event.target.id === 'left'){
//             if(imageIndex !== 1){
//                 imageIndex--;
//                 position +=300
//             }
//         }else{
//             if(imageIndex !== numberOfImages){
//                 imageIndex++
//                 position -=300
//             }
//         }
//     });
// })

// images.getElementsByClassName.transform = `position(${position}px)`




const buttons = document.querySelectorAll('[data-carousel-button]')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})