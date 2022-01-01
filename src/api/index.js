import axios from "axios";
const END_POINT = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getLoctions = async (ne, sw) => {
  try {
    const { data: { data } } = await axios.get(END_POINT, {
      params: {
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        bl_latitude: sw.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'cd6903d289mshd2e9ecfd0bc645ep15201cjsnd280fe675ee2'
      }
    })
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
}
