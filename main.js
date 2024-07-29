let inp = document.getElementById('inp1')
let btn = document.getElementById('btn')
let body = document.querySelector('body')

btn.addEventListener( 'click' ,()=>{
    sessionStorage.setItem("login",inp.value)
})
