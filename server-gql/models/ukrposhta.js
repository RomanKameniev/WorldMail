const axios = require('axios');
const { ukrposhta_track } = require('../config.json');

const getApi = axios.create({
    baseURL: "https://www.ukrposhta.ua/status-tracking/0.0.1/",
    headers: {
        "Content-Type": "applocation/json",
        "Authorization": "Bearer " + ukrposhta_track,
    }
})


async function getUkrPoshtaData(barcode) {
    if (barcode) return {data: "rere"}
        return await getApi.get(`/statuses?barcode=${barcode}&lang=en`)
            .then(({ data }) => {
                data = data.map(i => {
                    return {
                        date: i.date,
                        status: i.eventName,
                        country: i.country,
                        barcode: i.barcode
                    }
                })
                console.log('urkPoshta data=>', data)
                return {
                    code: 200,
                    data
                }
            })
            .catch(function (error) {
                console.log('###urkPoshta error###')
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
                return {
                    code: 404,
                    err: error.response.data
                }
            });
}

exports.getUkrPoshtaData = getUkrPoshtaData
//getData("SA092039504EE")