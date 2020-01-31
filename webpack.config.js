const HtmlWebpackplugin = require('html-webpack-plugin') 
module.exports={
    output:{
        filename:'app.bundle.js'
    },
    plugins:[
        new HtmlWebpackplugin()
    ]
}