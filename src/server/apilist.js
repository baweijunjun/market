const fs = require('fs');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.resolve(__dirname+'/upload'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.'+file.originalname.split(".")[1])
    }
})
const upload = multer({ storage: storage })

let jwt = require('jsonwebtoken');
//定义接口
module.exports = function (app) {
    const goodsPath = path.resolve(__dirname + '/goodslist')
    app.get('/index/recommend.action', (req, res) => {
        let list1 = fs.readFileSync(goodsPath + `/list${req.query.page}.json`, 'utf-8')
        setTimeout(() => {
            res.json(list1)
        }, 2000)
    })


    //注册接口
    app.post('/api/register', (req, res) => {
        console.log(req.body)
        let loginsPath = path.resolve('user')
        let content = JSON.parse(fs.readFileSync(loginsPath + '/userlist.json', 'utf-8'))
        content.push(req.body);
        fs.writeFile(loginsPath + '/userlist.json', JSON.stringify(content), (err) => {
            if (err) {
                res.json({
                    code: 1,
                    msg: "success"
                })
            }
        })
    })

    //登录接口     
    app.post('/api/login', (req, res) => {
        let loginsPath = path.resolve('user');
        let loginCon = JSON.parse(fs.readFileSync(loginsPath + '/userlist.json', 'utf-8'))
        if (loginCon.some(item => {
            return req.body.username == item.username
        })) {
            let token = jwt.sign(req.body, '1601E', { expiresIn: 60 * 60 })
            res.json({
                code: 1,
                msg: 'success',
            })
        } else {
            res.json({
                code: 0,
                msg: '输入正确用户名'
            })
        }
    })

    //添加购物车
    // app.post('/api/shopcars', (req, res) => {
    //     console.log(req.body);
    //     let cons = path.resolve('addshop');
    //     let txt = JSON.parse(fs.readFileSync(cons + '/addshops.json', 'utf-8'))
    //     txt.push(req.body);
    //     fs.writeFile(cons + '/addshops.json', JSON.stringify(txt));
    // })


    //添加购物车
    app.post('/api/shopcars', (req, res) => {
        jwt.verify(req.body.token, '1601E', (err, decode) => {
            let cons = path.resolve('addshop');
            let txt = JSON.parse(fs.readFileSync(cons + '/addshops.json', 'utf-8'))
            txt.push(req.body)
            fs.writeFile(cons + '/addshops.json', JSON.stringify(txt), (err) => {
                if (err) {
                    res.json({
                        code: 0,
                        msg: '写入失败'
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: '添加成功'
                    })
                }
            })

        })

    })

    //读取购物车数据
    const goodsPaths = path.resolve(__dirname + '/addshop')
    app.get('/api/shoplist', (req, res) => {
        let shoplists = JSON.parse(fs.readFileSync(goodsPaths + `/addshops.json`, 'utf-8'))
        res.json(shoplists)
    })


    //修改购物车数量
    app.post('/api/shopcar/count', (req, res) => {
        const carpath = __dirname + '/addshop/addshops.json'
        let shoplist = JSON.parse(fs.readFileSync(carpath, 'utf-8'))
        //操作数据库
        goodslist = goodslist.map((item, index) => {
            if (item.wname == req.body.goodsname) {
                item.count = req.body.count
            }
            return item
        })
        fs.writeFile(carpath, JSON.stringify(shoplist), (err) => {
            if (err) {
                res.json({
                    msg: '写入错误',
                    code: '0'
                })
            } else {
                res.json({
                    msg: '修改成功',
                    code: 1
                })
            }
        })
    })

    //删除购物车
    app.post('/api/shopcar/del', (req, res) => {
        jwt.verify(req.body.token, '1601E', (err, decoded) => {
            const carpath = __dirname + '/addshop/addshops.json'
            let shoplist = JSON.parse(fs.readFileSync(carpath, 'utf-8'))
            let goodslist = shoplist[decoded.username]
            //操作数据库
            let delindex = []
            goodslist = goodslist.forEach((item, index) => {
                req.body.goodsname.forEach((v, i) => {
                    if (item.wname == v) {
                        delindex.push(index)
                    }
                })
            })
            for (let i = 0; i < goodslist.length; i++) {
                for (let j = 0; j < delindex.length; j++) {
                    if (i == delindex[j]) {
                        goodslist.splice(i, 1);
                    }
                }
            }
            goodslist.splice(delindex, 1)
            shoplist[decoded.username] = goodslist

            fs.writeFile(carpath, JSON.stringify(shoplist), (err) => {
                if (err) {
                    res.json({
                        msg: '写入错误',
                        code: '0'
                    })
                } else {
                    res.json({
                        msg: '删除成功',
                        code: 1
                    })
                }
            })
        })
    })

    //请求省市区
    const goodsCitys = path.resolve(__dirname + '/city')
    app.get('/api/city', (req, res) => {
        let citys = JSON.parse(fs.readFileSync(goodsCitys + `/city.json`, 'utf-8'))
        res.json(citys)
    })



    //添加邮递地址
    app.post("/api/addaddr", (req, res) => {
        let addr = path.resolve('addr');
        let addrs = JSON.parse(fs.readFileSync(addr + '/addr.json', 'utf-8'));
        addrs.push(req.body);
        fs.writeFile(addr + '/addr.json', JSON.stringify(addrs), (err) => {
            if (err) {
                res.json({
                    code: 0,
                    msg: '写入失败'
                })
            } else {
                res.json({
                    code: 1,
                    msg: '添加成功'
                })
            }
        })
    })

    //读取邮递地址
    const address = path.resolve(__dirname + '/addr')
    app.get('/addr/addrlist', (req, res) => {
        console.log(req.body.data);
        let addressStree = JSON.parse(fs.readFileSync(address + `/addr.json`, 'utf-8'))
        res.json(addressStree)
    })


    //图片上传接口
    app.post('/api/upload', upload.single('img'), (req, res) => {
        console.log(req.file);
        res.json({
            code: 0,
            msg: "success",
            url:'http://localhost:3000/server/upload/'+req.file.filename
        })
    })


}




