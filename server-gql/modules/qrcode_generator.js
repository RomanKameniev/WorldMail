var QRCode = require('qrcode')

/*QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})
*/
QRCode.toString('SAO131412313 !', { type: 'terminal' }, function (err, url) {
    console.log(url)
})