module.exports = {
	entry: './src/main.ts',
	output: {
		path: __dirname+'/dist',
		filename:'main.js',
	},
	module:{
		 rules: [
	      {
	        test: /\.ts$/,
	        use: 'ts-loader',
	        exclude: /node_modules/
	      },
	      {
	+         test: /\.css$/,
	+         use: [
	+           'style-loader',
	+           'css-loader'
	+         ]
	+       }
	    ]
	},
	resolve:{
		extensions:[".ts",".js"]
	}

}