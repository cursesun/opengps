'use strict'

const gps = require('../index')

const reqAccu = "https://www.opengps.cn/Data/IP/IPLocHiAcc.ashx"
const reqNorm = "https://www.opengps.cn/Data/IP/IPSearch.aspx"

describe('request ip address', () => {
    it('#1 normal ip request should OK', function * () {
        const ip = '116.22.135.246'
        console.log('wwwip', ip)
        // const ipResult = yield gps.getAddress(ip)
        // console.log(ipResult)
        // ipResult.values[0].should.be.equal(161)
    })
    it('#2 no detail ip request should not have detail', function * () {
        const ip = '8.8.8.8'
        // const ipResult = yield gps.getAddress(ip)
        // console.log(ipResult)
        // ipResult.values[0].should.be.equal(167)
    })
})

// co(function*() {
//     const re = yield this.getAddress('116.22.135.245');
//     console.log('result:',re)    
// }).then(function (value) {
//     console.log(value);
// }, function (err) {
//     console.error(err.stack);
// });

