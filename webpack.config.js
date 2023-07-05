const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    resolve: {
        alias: {
            '@': resolve('src'),
            '@assets': resolve('src/assets'),
            '@comp': resolve('src/components'),
            '@img': resolve('src/assets/images')
        }
    }
}
