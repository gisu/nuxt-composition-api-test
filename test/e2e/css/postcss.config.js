module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 1,
      // autoprefixer: {
      //   grid: true
      // },
      features: {
        'focus-within-pseudo-class': false,
        'nesting-rules': true
      }
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
