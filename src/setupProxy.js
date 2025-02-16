const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/news',
        createProxyMiddleware({
            target: 'https://gorlovka-shkola-41.gosuslugi.ru/roditelyam-i-uchenikam/novosti',
            changeOrigin: true,
            pathRewrite: {
                '/news$': '/roditelyam-i-uchenikam/novosti', // Удаляет '/api/news' из запроса
            },
        })
    );

    app.use(
        '/api/events',
        createProxyMiddleware({
            target: 'https://gorlovka-shkola-41.gosuslugi.ru/roditelyam-i-uchenikam/meropriyatiya',
            changeOrigin: true,
            pathRewrite: {
                '/events$': '/roditelyam-i-uchenikam/meropriyatiya', // Удаляет '/api/events' из запроса
            },
        })
    );
};
