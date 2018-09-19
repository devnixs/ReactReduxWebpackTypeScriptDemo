let path = require('path');
let babelOptions = {
    "presets": ["es2015", "react"]
};

module.exports = {
  entry: './src/Index.tsx',
  context: __dirname,

  plugins: [
   
  ],
  module: {
    rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader' 1st 
            // then 'babel-loader'
            // NOTE : loaders run right to left (think of them as a cmd line pipe)
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: 'babel-loader',
                      options: babelOptions
                  },
                  {
                      loader: 'awesome-typescript-loader'
                  }
                ]
            },

			
			// All files with a .css extenson will be handled by 'css-loader'
            {
                test: /\.css$/,
				include: [
					/node_modules/,
					/node_modules\/bootstrap/
				],
                loader: ['css-loader?importLoaders=1'],
            },

			 // All files with a .scss|.sass extenson will be handled by 'sass-loader'
            {
                test: /\.(sass|scss)$/,
				include: [
					/node_modules/,
					/node_modules\/bootstrap/
				],
                loader: ['css-loader', 'sass-loader']
            },

            // All files with a '.js' extension will be handled by 'babel-loader'.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: 'babel-loader',
                      options: babelOptions
                  }
                ]
            },

            { 
                test: /\.png$/, 
				include: /node_modules/,
                loader: "url-loader?limit=100000" 
            },
      
            { 
                test: /\.jpg$/, 
				include: /node_modules/,
                loader: "file-loader" 
            },

            {
                test: /\.woff(\?.*)?$/,
				include: /node_modules/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },

            {
                test: /\.woff2(\?.*)?$/,
				include: /node_modules/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
            },

            {
                test: /\.ttf(\?.*)?$/,
				include: /node_modules/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },

            {
                test: /\.eot(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=fonts/[name].[ext]'
            },

            {
                test: /\.svg(\?.*)?$/,
				include: /node_modules/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
  },
  resolve: {
	extensions: [".tsx", ".ts", ".js", ".jsx"],
	modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};