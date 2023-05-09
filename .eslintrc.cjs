/*
 * @Description: 
 * @Date: 2023-05-09 10:14:26
 * @LastEditTime: 2023-05-09 10:51:22
 */
module.exports = {
    // 环境 浏览器 最新的es6语法 node环境
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    }, 
    // 代码所用的那些规则
    // 扩展eslint规范语法，可以被继承的规则；字符串数组：每一个配置继承它前面的配置
    // 分别是eslint-plugin-vue提供
    // eslint-config-airbnb-base提供的
    // eslint-config-prettier提供的
    // eslint-config- 前缀可以简写
    "extends": [
        "plugin:vue/vue3-strongly-recommended",
        "airbnb-base",
        "prettier"
    ],
    "overrides": [
    ],
    // 校验
    "parser": "vue-eslint-parser",
    // 解析器的配置项
    "parserOptions": {
         // es的版本号 或年份
        "ecmaVersion": "latest",
        "parser":"@typescript-eslint/parser",
        // 源码类型 默认是script es模块使用module
        "sourceType": "module",
        // 额外的语言类型
        "ecmaFeatures":{
          tsx:true,
          jsx:true
        }
    },
    // 全局定义的宏，这样在源文件中使用全局变量就不会报错或警告
    "globals":{
    //  defineProps:"readonly",
      defineEmits:"readonly",
      defineExpose:"readonly",
      withDefaults:"readonly"
    },

    // 插件
    // 前缀eslint-plugin-可以省略
    // vue官方提供一个Eslint 插件 eslint-plugin-vue 它提供parser和rules
    // parser为vue-eslint-parser，放在上面parser字段里，rules放在extends字段里，选择合适的规则
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "settings":{
      // 设置项目内的别名
      "import/resolver":{
        alias:{
            map:[["@","./src"]]
        }
      },
      // 允许的拓展名
      "import/extensions":[".js",".jsx",".ts",".tsx",".mjs"]
    },
    // 自定义规则，覆盖上面extends继承的第三方的规则，灵活定义
    "rules": {
        "import/no-extraneous-dependencies":0,
        "no-param-reassign":0,
        "vue/multi-word-component-names":0,
        "vue/attribute-hyphenation":0,
        "vue/v-on-event-hyphenation":0,
    }
}
