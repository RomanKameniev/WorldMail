const UrkPoshta = require('../models/ukrposhta');
const NP = require('../models/novaposhta');


async function getPackage(id) {
    const responce = []
    const UP = UrkPoshta.getUkrPoshtaData
    try {
        await new Promise(async (res, req) => {
            UP(id).then(data => {
                if (!data.err) {
                    responce.push(data)
                    return res()
                }
                return req(data.code)
            })
                .catch(err => {
                    return req(false)
                })
        })
    } catch (err) {
        console.log('err=>', err)
    } finally {
        console.log('in finally', responce)

        return responce.length > 0 ? responce : { data: "No track was found" }
    }

}


exports.getPackage = getPackage