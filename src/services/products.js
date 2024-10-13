import { setInLocalStorage } from "../persistence/localstorage"
import { closeModal } from "../views/modal"
import { handleGetProductsToStore } from "../views/store"

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
    handleGetProductsToStore()
    closeModal()
}