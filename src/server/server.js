const express = require('express');
const apilist = require('./apilist');
let bodyParse = require('body-parser');
const path = require('path');
let app = express();

const ejs = require('ejs');
app.engine('html',ejs.__express);
app.set('view engine','html');
app.use(express.static(path.resolve(process.cwd()+'/../')))


app.use(bodyParse.json())
app.all('*', function (req, res, next) {
    res.header({
        'Access-Control-Allow-Origin': 'http://localhost:8080',
         'Access-Control-Allow-Headers':'Content-Type'
    })
    next()
})
//定义接口
apilist(app)
app.listen('3000', function () {
    console.log('server start at:3000')
})