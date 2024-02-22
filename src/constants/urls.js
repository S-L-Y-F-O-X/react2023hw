const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode'
const characters = '/character'

const urls = {
    episode,
    characters:{
        byId: (id) => `${characters}/${id}`
    }
}

export {
    urls,
    baseURL
}