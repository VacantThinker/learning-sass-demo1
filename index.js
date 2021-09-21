const critical = require("critical");

critical
    .generate(
        {
            src: 'index.html',
            css: 'index.css',
            inline: true,
            base: 'dist/',
            width: 1300,
            height: 900,
            target: {
                css: 'index.css',
                html: 'index.html'
            },
        },
        null)
    .then(r => null);
