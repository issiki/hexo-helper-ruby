'use strict';
hexo.extend.helper.register('ruby', function(ruby_base, ruby_text){
  if (!ruby_text) {
    return ruby_base;
  }
  return '<ruby><rb>' + ruby_base + '</rb><rp>(</rp><rt>' + ruby_text + '</rt><rp>)</rp></ruby>';
});
