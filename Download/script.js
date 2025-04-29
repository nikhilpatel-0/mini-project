let btn = document.querySelector('button')
let percent = document.querySelector('h5')
let progress = document.querySelector('.progress')
var grow = 0

btn.addEventListener('click', function(){

    if(btn.disabled) return;

    var int = setInterval(function(){
        grow++
        percent.innerHTML = grow + '%'
        progress.style.width = grow + '%'

        if(grow >= 100){
            clearInterval(int)
            btn.innerHTML = 'Downloaded'
            btn.style.opacity = 0.5
            btn.disabled = true
        }
    }, 50)
})