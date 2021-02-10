import { getAllCountriesData } from './service'
import { thousandFormat } from './utility'

export const countriesData = {

  all: {},
  global: {},
  allAbbreviation: {},

  async getAllData () {
    this.all = await getAllCountriesData()
    return this.all;
  },

  getGlobalData () {
    this.global = this.all.Global.All;
    const { confirmed, recovered, deaths } = this.global;
    return {
      all: this.global,
      confirmed: thousandFormat(confirmed),
      recovered: thousandFormat(recovered),
      deaths: thousandFormat(deaths)
    }
  },

  getMapData () {
    Object.entries(this.all)
      .map((country) => {
        const { abbreviation, confirmed, recovered, deaths } = country[1].All;
        this.allAbbreviation[abbreviation] = { confirmed, recovered, deaths };
      })

    return this.allAbbreviation;
  },

  getSelectedCountry (countryCode) {

    let deaths = "Not Available",
      recovered = "Not Available",
      confirmed = "Not Available";

    if (!this.allAbbreviation[countryCode]) {
      console.log("not available")
    } else {
      deaths = thousandFormat(this.allAbbreviation[countryCode].deaths)
      recovered = thousandFormat(this.allAbbreviation[countryCode].recovered)
      confirmed = thousandFormat(this.allAbbreviation[countryCode].confirmed)
    }
    return {
      deaths,
      recovered,
      confirmed
    }

  },

  getWhiteCountry () {
    return {
      ph: this.getSelectedCountry('PH').confirmed,
      cn: this.getSelectedCountry('CN').confirmed
    }
  },

  getBlackCountry () {
    return {
      au: this.getSelectedCountry('AU').confirmed,
      jp: this.getSelectedCountry('JP').confirmed
    }
  }
}
