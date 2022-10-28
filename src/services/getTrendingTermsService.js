import { GIPHY_API_URL, GIPHY_API_KEY } from './settings'


const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export default function getTrendingTerms () {
  const apiURL = `${GIPHY_API_URL}/trending/searches?api_key=${GIPHY_API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

//min 16