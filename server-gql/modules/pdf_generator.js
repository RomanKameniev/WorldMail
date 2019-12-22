const PDF = require('pdfkit');
const fs = require('fs');

const doc = new PDF;

let name = "name1.pdf"
doc.pipe(fs.createWriteStream('../data/'+name,))
//doc.pipe(res);

doc.text('Hello World!!', 100, 100)


doc.end();