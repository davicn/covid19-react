import { axios } from 'axios'

const url = 'https://thevirustracker.com/'

export class Corona {

    static getGlobalStats() {
        axios.get(url + `free-api?global=stat`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    static getCountryStats(country) {
        axios.get(url + `free-api?countryTotal=${country}`)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }
}