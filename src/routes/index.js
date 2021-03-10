import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error from '../pages/Error404'       /* Poner .js es opcional */

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
}

export default router