# hexo-helper-ruby
help you insert `<ruby>` snippets in hexo templates.

帮助您在hexo模板中插入`<ruby>`代码片段。

Helpers are used in templates to help you insert snippets quickly. Helpers cannot be used in source files.

辅助函数帮助您在模版中快速插入内容。辅助函数不能在源文件中使用。

## Setup
via npm:
```bash
npm i hexo-helper-ruby
```

## Usage

- in your hexo templates (e.g.: `.ejs` files),
- 在您的模板文件中（例如：`.ejs`文件），
```javascript
<%- ruby('ruby_base', 'ruby_text') %>
```

e.g.:
```javascript
<%- ruby('初音未来', 'Hatsune Miku') %>
// '<ruby><rb>初音未来</rb><rp>(</rp><rt>Hatsune Miku</rt><rp>)</rp></ruby>'
```

## Changelog
## Tests
- there are no tests yet.
- 目前尚未有测试。

## Issues
- submit [any issues/bugs about this package here](https://github.com/issiki/hexo-helper-ruby/issues). Thank you!
- 有任何[与此包相关的疑问或者缺陷于此处提交](https://github.com/issiki/hexo-helper-ruby/issues)。感谢！

## License
MIT ©[Futaba Isshiki](https://futaba.love "一色双葉")
