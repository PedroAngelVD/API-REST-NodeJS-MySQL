const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes/products.routes');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(router);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Serve in port', app.get('port'));
});