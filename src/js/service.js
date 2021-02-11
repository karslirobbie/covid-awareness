import axios from 'axios'

const api = `https://covid-api.mmediagroup.fr/v1`;

export const getAllCountriesData = async () => {
  const result = await axios.get(`${api}/cases`);
  return result.data;
}

export const getDeathHistory = async () => {
  const result = await axios.get(`${api}/history?country=Global&status=deaths`)
  const { All: { dates } } = result.data
  return dates;
}

export const getCaseHistory = async () => {
  const result = await axios.get(`${api}/history?country=Global&status=confirmed`)
  const { All: { dates } } = result.data
  return dates;
}
