import { setInLocalStorage } from './src/persistence/localstorage'
import { renderCategories } from './src/services/categories'
import { handleGetProductsToStore } from './src/views/store'
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

//Products
const buttonAdd = document.getElementById('buttonAddElement')

buttonAdd.addEventListener('click', () => {
  openModal()
})

//Pop Up- Modal
const cancelButton = document.getElementById('cancelButton')

cancelButton.addEventListener('click', () => {
  handleCancelButton()
})

const handleCancelButton = () => {
  closeModal()
}

export const openModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'flex'

  if (productoActivo) {
    const nombre = document.getElementById('nombre'),
      imagen = document.getElementById('img'),
      precio = document.getElementById('precio'),
      categoria = document.getElementById('categoria')
    nombre.value = productoActivo.nombre
    imagen.value = productoActivo.imagen
    precio.value = productoActivo.precio
    categoria.value = productoActivo.categoria
  }
}

export const closeModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'none'
  setProductoActivo(null)
  resetModal()
}

const resetModal = () => {
  const nombre = document.getElementById('nombre'),
    imagen = document.getElementById('img'),
    precio = document.getElementById('precio'),
    categoria = document.getElementById('categoria')
  nombre.value = ''
  imagen.value = ''
  precio.value = '0'
  categoria.value = 'Seleccione una categoria'
}

//Guardar o modificar elementos

const acceptButton = document.getElementById('acceptButton')
acceptButton.addEventListener('click', () => {
  handleSaveOrModifyElements()
})

const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById('nombre').value,
    imagen = document.getElementById('img').value,
    precio = document.getElementById('precio').value,
    categoria = document.getElementById('categoria').value
  let product = null
  if (productoActivo) {
    product = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categoria,
    }
  } else {
    product = {
      id: new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categoria,
    }
  }

  setInLocalStorage(product)
  handleGetProductsToStore()
  closeModal()
}
