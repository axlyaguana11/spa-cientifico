import getData from '../utils/getData'  /* Hecho en la clase 11 */

const Home = async () => {
    const characters = await getData()  /* Hecho en la clase 11 */
    const view = `
    <div class="Characters">
        ${characters.results.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}    
    </div>
    `
    return view
}

export default Home;