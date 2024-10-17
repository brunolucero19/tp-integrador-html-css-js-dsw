import { setProductoActivo } from '../../main'
import { handleGetProductLocalStorage } from '../persistence/localStorage'
import { openModal } from '../views/modal'

//Funcion para obtener los productos de la tienda y renderizarlos
export const handleGetProductsToStore = () => {
  const products = handleGetProductLocalStorage()
  handleRenderList(products)
}

//Funcion para renderizar secciones con las categorias de los productos
export const handleRenderList = (productsIn) => {
  const burgers = productsIn.filter(
    (product) => product.categoria === 'Hamburguesas'
  )
  const papas = productsIn.filter((product) => product.categoria === 'Papas')
  const gaseosas = productsIn.filter(
    (product) => product.categoria === 'Gaseosas'
  )

  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productosHTML = products.map((product, index) => {
        return `
                <div class='containerCardItem' id='product-${product.categoria}-${index}'>
                    <img src="${product.imagen}" alt="imagen">
                    <div class='containerText'>
                        <h2>${product.nombre}</h2>
                        <p class='cardPriceText'><b>Precio: </b> $ ${product.precio}</p>
                    </div>
                </div>
                `
      })
      return `
             <section class='sectionStore'>
                <h3>${title}</h3>
                <div class='containerProductStore'>
                ${productosHTML.join('')}
                </div>
            </section>
            `
    } else {
      return ''
    }
  }

  //Renderizar cada uno de los productos en la tienda
  const storeContainer = document.getElementById('storeContainer')
  storeContainer.innerHTML = `
        ${renderProductGroup(burgers, 'Hamburguesas')}
        ${renderProductGroup(papas, 'Papas')}
        ${renderProductGroup(gaseosas, 'Gaseosas')}
    `

  //Agregar eventos a los productos
  const addEvents = (productsIn) => {
    productsIn.forEach((element, index) => {
      const productContainer = document.getElementById(
        `product-${element.categoria}-${index}`
      )
      productContainer.addEventListener('click', () => {
        setProductoActivo(element)
        openModal()
      })
    })
  }

  addEvents(burgers)
  addEvents(papas)
  addEvents(gaseosas)
}
