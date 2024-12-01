const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,//关闭eslint校验
  transpileDependencies: true,
  //配置代理跨域
  devServer:{
    proxy:{
      "/api":{
        target:"http://gmall-h5-api.atguigu.cn"
      }
    }
  }
})
