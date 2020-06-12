const path = require('path');

module.exports = {
  devServer: {
    open: true,
    openPage: [
      'static1',
      'static2',
      'static3',
    ],
    contentBase: [
      path.join(__dirname, 'static1'),
      path.join(__dirname, 'static2'),
      path.join(__dirname, 'static3'),
    ],
    contentBasePublicPath: [
      '/static1',
      '/static2',
      '/static3',
    ],
  }
}
