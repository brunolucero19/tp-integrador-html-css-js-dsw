import { renderCategories } from './src/services/categories'
import { handleGetProductsToStore } from './src/views/store'
import { openModal } from './src/views/modal'
import './style.css'
import { handleSearchProductByName } from './src/services/searchBar'

//Aplicacion

export let categoriaActiva = null
export const setCategoriaActiva = (categoria) => {
  categoriaActiva = categoria
}

export let productoActivo = null
export const setProductoActivo = (producto) => {
  productoActivo = producto
}

handleGetProductsToStore()
renderCategories()

//Header
//Boton agregar producto
const buttonAdd = document.getElementById('buttonAddElement')

buttonAdd.addEventListener('click', () => {
  openModal()
})

//Barra de busqueda
const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener('click', () => {
  handleSearchProductByName()
})
