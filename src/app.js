const express = require('express'), cors = require('cors'), path = require('path'), creditFriendsRoutesApi = require('./routes/credit-friends-api'),
        viewsRoutes = require('./routes/views');
const app = express();


// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/cfapi', creditFriendsRoutesApi);
app.use(viewsRoutes);

// server
app.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'));
});
