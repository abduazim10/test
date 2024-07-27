let inp = document.getElementById('inp1')
let btn = document.getElementById('btn')
let body = document.querySelector('body')

btn.addEventListener( 'click' ,()=>{
    let h1 = document.createElement('h1')
    h1.innerHTML = inp.value
    body.appendChild(h1)
    h1.classList.add('h1a')
})
