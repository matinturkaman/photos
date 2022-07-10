import axios from 'axios'

const ACCESS_TOKEN = 'EM1UglZUn0d1etVFCX6hGg2dfPUmai5MTQduC1bHWew'
const client = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_TOKEN}`,
  },
})

const getAllData = async () => {
  const { data } = await client.get('/photos?page=1&per_page=30')
  return data
}

export { getAllData }
