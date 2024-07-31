const fs = require('fs')

module.exports = {
    devServer: {

        // 測試機
        allowedHosts: 'all', // or specify specific hosts if needed
        https: false, // Enable HTTPS if needed
        host: 'localhost', // or '0.0.0.0' for external access
        port: 8081, // Default port or change to your preferred port
        open: true, // Automatically open the browser

        // proxy: {
        //     '/holidayDessert': {
        //       target: 'http://localhost:8080',
        //       changeOrigin: true,
        //       ws: true,
        //       secure: false,
        //       pathRewrite: { '^/holidayDessert': '' }
        //     }
        // }

        // 正式機
        // https: {
        //   key: fs.readFileSync('./certs/private.key'),
        //   cert: fs.readFileSync('./certs/certificate.crt'),
        // },
        // public: 'https://your domain or IP:8080/',
        // disableHostCheck: true

    }
}