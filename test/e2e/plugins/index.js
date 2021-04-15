const { startDevServer } = require('@cypress/webpack-dev-server')
const { getWebpackConfig } = require('nuxt')

/**
 * @type Cypress.PluginConfig
 */
module.exports = (on, config) => {
  on('dev-server:start', async (options) => {
    const webpackConfig = await getWebpackConfig('client', {
      for: 'dev'
    })

    // cleanup the webpack css from everything we do not need for testing components
    delete webpackConfig.output
    webpackConfig.plugins = webpackConfig.plugins.filter(a => a.constructor.name !== 'HtmlWebpackPlugin')

    return startDevServer({
      options,
      webpackConfig
    })
  })

  return config
}
