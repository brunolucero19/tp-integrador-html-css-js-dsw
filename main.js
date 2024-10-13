import { setInLocalStorage } from './src/persistence/localstorage'
import { renderCategories } from './src/services/categories'
import './style.css'

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

const openModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'flex'
}

const closeModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'none'
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

  let product = {
    id: new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categoria,
  }

  setInLocalStorage(product)

  closeModal()
}
