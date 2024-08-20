const container = document.querySelector('#container')

const content = document.createElement('div')
content.classList.add('content')
content.textContent = "This is the glorious text-content!"
container.appendChild(content)

const redP = document.createElement('p')
redP.style = "color: red"
redP.textContent = "Hey I'm red!"
container.appendChild(redP)

const blueH3 = document.createElement('h3')
blueH3.style = "color: blue"
blueH3.textContent = "I'm a blue h3!"
container.appendChild(blueH3)

const newDiv = document.createElement('div')
const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
newDiv.appendChild(h1)
const p = document.createElement('p')
p.textContent = "ME TOO!"
newDiv.appendChild(p)
container.appendChild(newDiv)
