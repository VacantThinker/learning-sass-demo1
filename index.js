const critical = require("critical");

critical.generate({
    inline: true,
    base: 'test/',
    src: 'index.html',
    target: 'index-critical.html',
    width: 1300,
    height: 900,
});
