document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-d1006a2c03378524a2bad8f05b286964.css">')
document.write('<div id=\"gist9458772\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-remote-html-L1\" rel=\"file-remote-html-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-remote-html-L2\" rel=\"file-remote-html-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-remote-html-L3\" rel=\"file-remote-html-L3\">3<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-remote-html-LC1\"><span class=\"nt\">&lt;div<\/span> <span class=\"na\">id=<\/span><span class=\"s\">&quot;remote&quot;<\/span><span class=\"nt\">&gt;<\/span><\/div><div class=\"line\" id=\"file-remote-html-LC2\">  <span class=\"nt\">&lt;input<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&quot;typeahead&quot;<\/span> <span class=\"na\">type=<\/span><span class=\"s\">&quot;text&quot;<\/span> <span class=\"na\">placeholder=<\/span><span class=\"s\">&quot;Oscar winners for Best Picture&quot;<\/span><span class=\"nt\">&gt;<\/span><\/div><div class=\"line\" id=\"file-remote-html-LC3\"><span class=\"nt\">&lt;/div&gt;<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/jharding/9458772/raw/remote.html\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/jharding/9458772#file-remote-html\">remote.html<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-remote-js-L1\" rel=\"file-remote-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L2\" rel=\"file-remote-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L3\" rel=\"file-remote-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L4\" rel=\"file-remote-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L5\" rel=\"file-remote-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L6\" rel=\"file-remote-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L7\" rel=\"file-remote-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L8\" rel=\"file-remote-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L9\" rel=\"file-remote-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L10\" rel=\"file-remote-js-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L11\" rel=\"file-remote-js-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L12\" rel=\"file-remote-js-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L13\" rel=\"file-remote-js-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-remote-js-L14\" rel=\"file-remote-js-L14\">14<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-remote-js-LC1\"><span class=\"kd\">var<\/span> <span class=\"nx\">bestPictures<\/span> <span class=\"o\">=<\/span> <span class=\"k\">new<\/span> <span class=\"nx\">Bloodhound<\/span><span class=\"p\">({<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC2\">  <span class=\"nx\">datumTokenizer<\/span><span class=\"o\">:<\/span> <span class=\"nx\">Bloodhound<\/span><span class=\"p\">.<\/span><span class=\"nx\">tokenizers<\/span><span class=\"p\">.<\/span><span class=\"nx\">obj<\/span><span class=\"p\">.<\/span><span class=\"nx\">whitespace<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;value&#39;<\/span><span class=\"p\">),<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC3\">  <span class=\"nx\">queryTokenizer<\/span><span class=\"o\">:<\/span> <span class=\"nx\">Bloodhound<\/span><span class=\"p\">.<\/span><span class=\"nx\">tokenizers<\/span><span class=\"p\">.<\/span><span class=\"nx\">whitespace<\/span><span class=\"p\">,<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC4\">  <span class=\"nx\">prefetch<\/span><span class=\"o\">:<\/span> <span class=\"s1\">&#39;../data/films/post_1960.json&#39;<\/span><span class=\"p\">,<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC5\">  <span class=\"nx\">remote<\/span><span class=\"o\">:<\/span> <span class=\"s1\">&#39;../data/films/queries/%QUERY.json&#39;<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC6\"><span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC7\">&nbsp;<\/div><div class=\"line\" id=\"file-remote-js-LC8\"><span class=\"nx\">bestPictures<\/span><span class=\"p\">.<\/span><span class=\"nx\">initialize<\/span><span class=\"p\">();<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC9\">&nbsp;<\/div><div class=\"line\" id=\"file-remote-js-LC10\"><span class=\"nx\">$<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;#remote .typeahead&#39;<\/span><span class=\"p\">).<\/span><span class=\"nx\">typeahead<\/span><span class=\"p\">(<\/span><span class=\"kc\">null<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC11\">  <span class=\"nx\">name<\/span><span class=\"o\">:<\/span> <span class=\"s1\">&#39;best-pictures&#39;<\/span><span class=\"p\">,<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC12\">  <span class=\"nx\">displayKey<\/span><span class=\"o\">:<\/span> <span class=\"s1\">&#39;value&#39;<\/span><span class=\"p\">,<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC13\">  <span class=\"nx\">source<\/span><span class=\"o\">:<\/span> <span class=\"nx\">bestPictures<\/span><span class=\"p\">.<\/span><span class=\"nx\">ttAdapter<\/span><span class=\"p\">()<\/span><\/div><div class=\"line\" id=\"file-remote-js-LC14\"><span class=\"p\">});<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/jharding/9458772/raw/remote.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/jharding/9458772#file-remote-js\">remote.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')