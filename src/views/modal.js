import { setProductoActivo, productoActivo } from "../../main"

//Modal
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