//CATEGORIA

import { categoriaActiva } from '../../main'
import { handleGetProductLocalStorage } from '../persistence/localStorage.js'
import { handleRenderList } from '../views/store'

const handleFilterProductsByCategory = (category) => {
  const products = handleGetProductLocalStorage()
  switch (category) {
    case categoriaActiva:
      handleRenderList(products)
      break
    case 'All':
      handleRenderList(products)
      break
    case 'Hamburguesas':
    case 'Papas':
    case 'Gaseosas':
      const filterProducts = products.filter(
        (product) => product.categoria === category
      )
      handleRenderList(filterProducts)
    default:
      break
    case 'mayorPrecio':
      const filterProductsMayor = products.sort((a, b) => b.precio - a.precio)
      handleRenderList(filterProductsMayor)
      break
    case 'menorPrecio':
      const filterProductsMenor = products.sort((a, b) => a.precio - b.precio)
      handleRenderList(filterProductsMenor)
  }
}

//Renderiza las categorias en el DOM
export const renderCategories = () => {
  const ulList = document.getElementById('listFilter')
  ulList.innerHTML = `
    <li id="All">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
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
    handleFilterProductsByCategory(element.id)
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
