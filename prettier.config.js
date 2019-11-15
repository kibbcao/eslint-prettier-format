module.exports = {
    // 开启eslint支持
    eslintIntegration: true,
    // 不让prettier使用tslint的代码格式进行校验
    tslintIntegration: false,
    // tab缩进大小,默认为2
    tabWidth: 4,
    // 使用tab缩进，默认false
    useTabs: false,
    // 使用分号, 默认true
    semi: false,
    // 指定代码换行的行长度(默认80)。
    // 单行代码宽度超过指定的最大宽度，将会换行，如果都不想换，可以添加 "proseWrap": "never"
    printWidth: 160,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    singleQuote: true,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    trailingCooma: 'none',
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    bracketSpacing: false,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    jsxBracketSameLine: false,
    // 箭头函数参数括号 默认avoid 可选 avoid | always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: 'always',
    // 指定 HTML 文件的全局空白区域敏感度
    // 有效选项：
    // "css"- 遵守CSS display属性的默认值。
    // "strict" - 空格被认为是敏感的。
    // "ignore" - 空格被认为是不敏感的。
    htmlWhitespaceSensitivity: 'strict',
    // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    ignorePath: '.prettierignore'
}
