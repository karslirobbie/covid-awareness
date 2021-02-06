import axios from 'axios'

export const getAllCountriesData = async () => {
  const api = `https://covid-api.mmediagroup.fr/v1/cases`;
  const result = await axios.get(api);
  return result.data;
}