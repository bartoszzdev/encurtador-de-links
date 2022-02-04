import axios from 'axios'

export const key = '9107d954e4d91ff23c11e5b8725417f9b937ea0f'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api