const baseUrlJson = 'https://jsonplaceholder.typicode.com'
const baseUrlSpaseX = 'https://api.spacexdata.com/v3'

const posts = '/posts'
const spaseX = '/launches'

const urls = {
    posts:{
        base: posts,
        byId: (id) => `${posts}/${id}`
    },
    spaseX
}


export {
    baseUrlJson,
    baseUrlSpaseX,
    urls
}