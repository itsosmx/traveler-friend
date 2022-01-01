import axios from "axios";
const END_POINT = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getLoctions = async (ne, sw) => {
  try {
    setTimeout(async () => {
      const { data: { data } } = await axios.get(END_POINT, {
        params: {
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          bl_latitude: sw.lat,
        },
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
      })
      console.log(data)
      return data;
    }, 10000)
  } catch (error) {
    console.log(error)
  }
}
