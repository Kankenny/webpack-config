const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|gif|svg|jpe?g)$/i,
				use: [
					{
						loader: 'file-loader', // images loader
						options: {
							name: '[name].[ext]', // this will keep the original name and extension
						},
					},
					{
						loader: 'image-webpack-loader', // image compression => contains loaders for different types of images
						options: {
							gifsicle: {
								// gif loader
								interlanced: false,
							},
							optipng: {
								// png loader
								optimizationLevel: 7,
							},
							pngquant: {
								// png loader
								quality: '65-90',
								speed: 4,
							},
							mozjpeg: {
								// jpg loader
								progressive: true,
								quality: 65,
							},
						},
					},
				],
			},
		],
	},
}
