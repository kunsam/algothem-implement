const withTypescript = require('@zeit/next-typescript')

const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withLess(withTypescript({
  webpack(config, options) {
    return config
  }
})));