const path = require('path');

module.exports = {
  devServer: {
    open: true,
    openPage: [
      'static1',
      'static2',
      'static3',
    ],
    static: [
      {
        directory: path.join(__dirname, 'static1'),
        publicPath: '/static1',
      },
      {
        directory: path.join(__dirname, 'static2'),
        publicPath: '/static2',
      },
      {
        directory: path.join(__dirname, 'static3'),
        publicPath: '/static3',
      },
    ],
  }
}
