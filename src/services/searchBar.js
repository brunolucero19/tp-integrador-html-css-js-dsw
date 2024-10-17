import { handleGetProductLocalStorage } from '../persistence/localStorage'
import { handleRenderList } from '../views/store'

export const handleSearchProductByName = () => {
  const inputSearch = document.getElementById('inputSearch')
  const products = handleGetProductLocalStorage()

  const results = products.filter((product) =>
    product.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
  )
  handleRenderList(results)
  inputSearch.value = ''
}
