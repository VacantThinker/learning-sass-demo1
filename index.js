const critical = require("critical");

critical.generate({
    src: 'index.html',
    inline: true,
    base: 'test/',
    target: 'index-critical.html',
    width: 1300,
    height: 900,
});
