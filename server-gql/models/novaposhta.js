const axios = require('axios');
const { novaposhta_track } = require('../config.json')

const apiGet = axios.create({
    baseURL: "https://api.novaposhta.ua/v2.0/json"
})

function getNovaPoshtaData(barcode) {
    apiGet.post('/', {
        "apiKey": novaposhta_track,
        "modelName": "TrackingDocument",
        "calledMethod": "getStatusDocuments",
        "methodProperties": {
            "Documents": [
                {
                    "DocumentNumber": barcode,
                    "Phone": ""
                },
            ]
        }

    })
        .then(({ data }) => {
            console.log(' novaposhta data =>', data)
            return {
                code: 200,
                data
            }
        })
        .catch(err => {
            console.log('err= >', ere)
            return {
                code: 404,
                data
            }
        })
}

module.export = getNovaPoshtaData
//getData("AENM0000312894NPI")