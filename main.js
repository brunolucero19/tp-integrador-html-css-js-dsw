import { renderCategories } from './src/services/categories'
import { handleGetProductsToStore } from './src/views/store'
import { openModal } from './src/views/modal'
import './style.css'

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

const buttonAdd = document.getElementById('buttonAddElement')

buttonAdd.addEventListener('click', () => {
    openModal()
})


