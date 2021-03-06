const { VkBotSdk, Keyboard, TextButton, LinkButton } = require('../index');

const keyboard = new Keyboard([
    [ new TextButton('index', 'primary', ['payload_action', ['arg1']]) ],
    [ new LinkButton('link', 'https://google.com') ]
]);

const main = async () => {
    const sdk = new VkBotSdk({
        debug: true,
        group_id: 0,
        access_token: ''
    });

    const bot = sdk.getCallback();

    bot.payload('payload_action', (ctx, params, next) => {
        console.log('payload_action', params[0]);
        ctx.reply('payload_action');
    });

    bot.command(/index/, (ctx, params, next) => {
        const user_id = ctx.from_id;
        const peer_id = ctx.peer_id;

        ctx.replyKeyboard(`reply to ${user_id} in ${peer_id}`, keyboard);
    });

    bot.defaultReply((ctx, params) => {
        ctx.replyKeyboard(`Default reply`, keyboard);
    });

    bot.initLongPoll();
};


main().then(() => {
    console.log('Initialized');
}).catch((e) => {
    console.error(e);
});
