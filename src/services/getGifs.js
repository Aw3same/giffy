const GIPHY_API_KEY = 'BpUiyT8Jamz28tPf0nt5wu8zu7Fo2COt'

export default function getGifs({ keyword = 'luffy' } = {}) {  
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
 
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        return gifs
      }
    })
}
