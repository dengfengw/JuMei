'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
          '/api': {
              target: 'http://s.mobile.jumei.com',
              host: 's.mobile.jumei.com',
              changeOrigin:true,
              // pathRewrite: {
              //     '^/v4/api': '/v4/api'
              //   }
          },
          '/index': {
              target: 'http://h5.jumei.com',
              host: 'h5.jumei.com',
              changeOrigin:true,
              headers:{

                Cookie:'sid=0f17a2c9ff78784338026196f17adfc4; route=6cf9ffe4014f0bf241681c1db92a3674; session_id=5ad7f5b41bf673292; account=P2GztAHz0Nszf2oqfAUfB3o6a3gPBxf3J0XNkhC2nGW7DwxAbUYbW4DPuAYuQncrBi57A5z7YB25VKJ9dcOZ29I9YC9mfII1Hn8NXhJAlybLU7iKPaw6tx%2BEoL2N7krTn5WCU9YJk9snMiYQQ%2B%2FifMw4BtOi69DuO1plPV7BEsv%2B8yWMUlarV3ASSmfnVDkbyb2Dlp4r1Ph6sfFjXzi2MA%3D%3D; tk=f172cbc061563c4ccfc8904fd4a09701aad50e8c; uid=344494958; v_uid=344494958; nickname=-_-uQTj; token=M8LhrDvAc6Jt82ib9nY0THmwqegFiCpG7xJwHpGfO1fj4Py9XxdEKNcWb5ZBsQLSPlnRNzsvWIQeoVUFaUOghSZIEM1X4mu0dkqrCuTjtaKo373YAzDRk26BVBONZHCP; session=khFObUZ2qQyfMHNcCVK6SejxTCvUSCHW; privilege_group=0; register_time=1524100336; cookie_ver=1; login_account_name=18983844868; last_reg=1524102671; cookie_uid=089a9abfe51524102671; login_mode=h5_dynamic_login; client_addr=%E9%87%8D%E5%BA%86%E5%B8%82-%E9%87%8D%E5%BA%86%E5%B8%82; PHPSESSID=e30a3cabe99cfb14362076d3da206963; referer_site_cps=wap_touch_; guide_download_show=1; from_source=browser; referer_site=wap_browser_wap_touch_; has_download=1; Hm_lvt_884477732c15fb2f2416fb892282394b=1524013890,1524040819,1524100198,1524102502; Hm_lpvt_884477732c15fb2f2416fb892282394b=1524103164; platform=wap; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22162dba0b7fa23e-0780bc461480cb-574e6e46-250125-162dba0b7fb295%22%7D; sensorsdata_is_new_user=true; jmdl14=2; jml14=2; device_platform=other'
              }
              // pathRewrite: {
              //     '^/v4/api': '/v4/api'
              //   }
          }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
