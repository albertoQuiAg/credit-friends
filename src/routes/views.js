var express = require('express');
var path = require('path');
var router = express.Router();
 

// renderiza desde el build los archivos estaticos
router.use('/', express.static('src/dist/views', { redirect: false }));

// necesario para que cuando hay un refresh regrese a index.html y angular maneje los deepsLinks
router.get('*', function (req, res, next) {
    res.sendFile(path.resolve('src/dist/views/index.html'));
});
 
module.exports = router;