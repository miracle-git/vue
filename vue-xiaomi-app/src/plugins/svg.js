const req = require.context('assets/svg', true, /\.svg$/)
req.keys().map(req)
