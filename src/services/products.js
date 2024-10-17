import {
  handleGetProductLocalStorage,
  setInLocalStorage,
} from '../persistence/localStorage'
import { closeModal } from '../views/modal'
import { handleGetProductsToStore, handleRenderList } from '../views/store'
import { productoActivo } from '../../main'
import Swal from 'sweetalert2'

//PRODUCTS

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
  Swal.fire({
    title: 'Todo correcto!',
    text: 'Su producto fue guardado correctamente.',
    icon: 'success',
  })
  handleGetProductsToStore()
  closeModal()
}

//Eliminar producto

export const handleDeleteProduct = () => {
  Swal.fire({
    title: '¿Estás seguro de eliminar éste producto?',
    text: 'Si lo eliminas, la acción no podrá ser revertida',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage()
      const result = products.filter(
        (product) => product.id !== productoActivo.id
      )
      //Setear en local storage el array sin el producto eliminado
      localStorage.setItem('products', JSON.stringify(result))
      const newProducts = handleGetProductLocalStorage()
      handleRenderList(newProducts)
      closeModal()
    } else {
      closeModal()
    }
  })
}
