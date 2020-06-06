const VkBotSdkApi = require('./api');
const VkBotSdkClient = require('./client');
const VkBotSdkCallback = require('./callback');

const events = require('./config/events');

const {
    Context, Keyboard, Attachment,
    Button, TextButton, LinkButton, LocationButton, VKPayButton, VKAppButton
} = require('./interfaces');


/**
 * @typedef {{
 *     type: AttachmentType,
 *     ?photo: Object,
 *     ?video: Object,
 *     ?audio: Object,
 *     ?doc: Object,
 *     ?link: Object,
 *     ?market: Object,
 *     ?market_album: Object,
 *     ?wall: Object,
 *     ?wall_reply: Object,
 *     ?sticker: Object,
 *     ?gift: Object
 * }} APIAttachmentObject
 *
 * @typedef {(
 *     'default' | 'primary' | 'positive' | 'negative'
 * )} ButtonColor
 *
 * @typedef {(
 *     'photo' | 'video' | 'audio' | 'doc' | 'link' | 'market' | 'market_album' |
 *     'wall' | 'wall_reply' | 'sticker' | 'gift'
 * )} AttachmentType
 *
 * @typedef {Function}                                  NextFunction
 * @typedef {number|string|number[]|string[]}           PeerParameter
 * @typedef {string}                                    TextParameter
 * @typedef {string|string[]|Attachment|Attachment[]}   AttachmentParameter
 * @typedef {Keyboard}                                  KeyboardParameter
 */

/**
 * CLass VkBotSdk
 *
 * @property {VkBotSdkClient}     client
 * @property {VkBotSdkApi}        api
 * @property {VkBotSdkCallback}   callback
 */
class VkBotSdk {
    constructor(options = {}) {
        this.client = new VkBotSdkClient(options);
        this.api = new VkBotSdkApi(this.client);
        this.callback = new VkBotSdkCallback(this.client);
    }

    /**
     * getApi()
     * @returns {VkBotSdkApi}
     */
    getApi() {
        return this.api;
    }

    /**
     * getCallback()
     * @returns {VkBotSdkCallback}
     */
    getCallback() {
        return this.callback;
    }

    /**
     * getClient()
     * @returns {VkBotSdkClient}
     */
    getClient() {
        return this.client;
    }
}

module.exports = VkBotSdk;

module.exports.VkBotSdk = VkBotSdk;

module.exports.events = events;
module.exports.context = Context;
module.exports.keyboard = Keyboard;
module.exports.attachment = Attachment;
module.exports.button = Button;
module.exports.textButton = TextButton;
module.exports.linkButton = LinkButton;
module.exports.locationButton = LocationButton;
module.exports.vkpayButton = VKPayButton;
module.exports.vkappButton = VKAppButton;


module.exports.Events = events;
module.exports.Context = Context;
module.exports.Keyboard = Keyboard;
module.exports.Attachment = Attachment;
module.exports.Button = Button;
module.exports.TextButton = TextButton;
module.exports.LinkButton = LinkButton;
module.exports.LocationButton = LocationButton;
module.exports.VKPayButton = VKPayButton;
module.exports.VKAppButton = VKAppButton;