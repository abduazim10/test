let inp = document.getElementById('inp1')
let btn = document.getElementById('btn')
let body = document.querySelector('body')

btn.addEventListener( 'click' ,()=>{
    localStorage.setItem('Login',inp.value)
})
