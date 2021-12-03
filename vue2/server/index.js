'use strict'

const titbit = require('titbit')
const fs = require('fs')

const app = new titbit()

app.get('/bundle.js', async c => {
    c.res.body = fs.readFileSync('./dist/bundle.js').toString('utf-8')
})

app.get('/', async c => {
    c.res.body = fs.readFileSync('./dist/index.html').toString('utf-8')
})

router.post('/upload', async c => {

    let f = c.getFile('image')

    //此函数是助手函数，makeName默认会按照时间戳生成名字，extName解析文件的扩展名。
    //let fname = `${c.helper.makeName()}${c.helper.extName(f.filename)}`

    //根据原始文件名解析扩展名并生成时间戳加随机数的唯一文件名。

    let fname = c.helper.makeName(f.filename)

    try {
        c.res.body = await c.moveFile(f, fname)
    } catch (err) {
        c.res.body = err.message
    }

}, 'upload-image'); //给路由命名为upload-image，可以在c.name中获取。


app.run(3680)