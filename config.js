const config = require('config');

// App Secret can be retrieved from the App Dashboard
const APP_SECRET = (process.env.APP_SECRET) ?
    process.env.MESSENGER_APP_SECRET :
    config.get('appSecret');

// Arbitrary value used to validate a webhook
const VALIDATION_TOKEN = (process.env.VALIDATION_TOKEN) ?
    (process.env.MESSENGER_VALIDATION_TOKEN) :
    config.get('validationToken');

// Generate a page access token for your page from the App Dashboard
const PAGE_ACCESS_TOKEN = (process.env.PAGE_ACCESS_TOKEN) ?
    (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
    config.get('pageAccessToken');

// URL where the app is running (include protocol). Used to point to scripts and
// assets located at this address.
const SERVER_URL = (process.env.SERVER_URL) ?
    (process.env.SERVER_URL) :
    config.get('serverURL');

if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && SERVER_URL)) {
  console.error('Missing config values');
  var configMissing = [];
  if (!APP_SECRET) configMissing.push('APP_SECRET');
  if (!VALIDATION_TOKEN) configMissing.push('VALIDATION_TOKEN');
  if (!PAGE_ACCESS_TOKEN) configMissing.push('PAGE_ACCESS_TOKEN');
  if (!SERVER_URL) configMissing.push('SERVER_URL');

  console.error(configMissing.toString())
  process.exit(1);
}

module.exports = {
  APP_SECRET: APP_SECRET,
  PAGE_ACCESS_TOKEN: PAGE_ACCESS_TOKEN,
  SERVER_URL: SERVER_URL,
  VALIDATION_TOKEN: VALIDATION_TOKEN,
};
