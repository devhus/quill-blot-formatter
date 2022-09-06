module.exports = {
  entry: './dist/index.js',
  output: {
    filename: 'quill-blot-formatter.min.js',
    path: `${__dirname}/dist`,
    libraryTarget: 'commonjs',
    library: 'QuillBlotFormatter',
  },
  externals: {
    quill: 'Quill',
  },
};
