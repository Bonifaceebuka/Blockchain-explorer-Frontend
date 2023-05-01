module.exports = {
    module: {
      rules: [
        {
          // this tells webpack to searhc through .css
          test: /\.css$/, 
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,  // possible image files
            use: ['file-loader'],
          },
      ]
    }
  };