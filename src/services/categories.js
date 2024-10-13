export const renderCategories = () => {
  const ulList = document.getElementById('listFilter')
  ulList.innerHTML = `
    <li id="all">Todos los productos</li>
    <li id="hamburguesas">Hamburguesas</li>
    <li id="papas">Papas</li>
    <li id="gaseosa">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
  `

  const liElements = ulList.querySelectorAll('li')
  liElements.forEach((li) => {
    li.addEventListener('click', () => {
      handleClick(li)
    })
  })

  const handleClick = (element) => {
    liElements.forEach((li) => {
      if (li.classList.contains('liActive')) {
        li.classList.remove('liActive')
      } else {
        if (element === li) {
          li.classList.add('liActive')
        }
      }
    })
  }
}
