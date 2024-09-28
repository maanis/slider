let revealClass = () => {
    document.querySelectorAll('.reveal').forEach((elem) => {
        console.log(elem)

        let parent = document.createElement('span')
        let child = document.createElement('span')

        parent.classList.add('parent')
        child.classList.add('child')

        child.innerHTML = elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML = ''
        elem.appendChild(parent)


    })
}
revealClass()