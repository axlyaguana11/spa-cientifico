import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'       /* Poner .js es opcional */
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

/* Rutas */

const routes = {
    '/': Home,
    '/:id': Character,      /* Se pone :id porque es dinámico */
    '/contact': 'Contact'
}

/* Router. Muestra la lógica de las rutas */

const router = async () => {
    /* Establishing templates to DOM */
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404 
    content.innerHTML = await render()
}

export default router