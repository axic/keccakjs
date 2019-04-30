try {
  module.exports = require('sha3').Keccak
} catch (err) {
  module.exports = require('./browser')
}
