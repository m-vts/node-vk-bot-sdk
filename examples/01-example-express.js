const express = require('express');

const VkBotSdk = require('../index');

const main = async () => {
    const app = express();

    const sdk = new VkBotSdk({
        debug: true,
        group_id: 0,
        secret: '',
        confirmation: '',
        access_token: ''
    });

    const bot = sdk.getCallback();

    bot.defaultReply((ctx, params, next) => {
        ctx.reply('Default reply');
    });

    app.use(express.json())
    app.all('/callback', bot.eventsCallback);

    app.listen(8000);
};

main().then(() => {
    console.log('Initialized');
}).catch((e) => {
    console.error(e);
});
