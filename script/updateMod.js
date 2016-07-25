var request = require('request'),
    fs = require('fs');

var ERIS_URL = 'https://raw.githubusercontent.com/liriliri/eris/master/doc.md';

request(ERIS_URL, function (err, res, body)
{
    var data = '---\nlayout: module.jade\ntitle: Module\n---\n\n' + body;

    fs.writeFile('src/module.md', data, 'utf-8');
});