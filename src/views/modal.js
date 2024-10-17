import { setProductoActivo, productoActivo } from '../../main'
import { handleDeleteProduct } from '../services/products'

//Modal
const cancelButton = document.getElementById('cancelButton')
cancelButton.addEventListener('click', () => {
  closeModal()
})

const deleteButton = document.getElementById('deleteButton')
deleteButton.addEventListener('click', () => {
  handleDeleteProduct()
})

//Abrir modal
export const openModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'flex'

  if (productoActivo) {
    deleteButton.style.display = 'block'
  } else {
    deleteButton.style.display = 'none'
  }
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

//Cerrar modal
export const closeModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'none'
  setProductoActivo(null)
  resetModal()
}

//Resetear modal
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
