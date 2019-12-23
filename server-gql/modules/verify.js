const axios = require('axios');


function verifyUser(uuid) {
    axios.get({ url: "https://www.googleapis.com/admin/directory/v1/users/" + uuid }).then((data) => {
        console.log('data=> ', data)
    })
}


//verifyUser("")