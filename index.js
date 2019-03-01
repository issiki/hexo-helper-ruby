'use strict';
hexo.extend.helper.register('ruby', function(ruby_base, ruby_text){
  return '<ruby><rb>' + ruby_base + '</rb><rp>(</rp><rt>' + ruby_text + '</rt><rp>)</rp></ruby>';
});
