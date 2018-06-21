const router = require('express').Router();

// admin sdk firebase

var admin = require("firebase-admin");

var serviceAccount = require("../concredito-58bff.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://concredito-58bff.firebaseio.com"
});


// request
router.post('/signup', (req, res, next) => {
    const userData = req.body;

    admin.auth().createUser({
        email: userData.email,
        emailVerified: false,
        password: '123456',
        disabled: false
    }).then((user) => {
        admin.database().ref('usuarios').child(user.uid).set({
            nombre : userData.nombre,
            email: userData.email
        });

        res.json(user);
    }).catch((err) => {
        res.json({error: err.code});
    });
});

router.post('/nueva', (req, res, next) => {
    const solicitud = req.body;
    
    admin.database().ref('solicitudes').push(solicitud).then(() => {
        res.json(solicitud);
    });
});

module.exports = router;