module.exports = class FbBot {
  constructor(app, config) {
    this.app = app;
    this.config = config;
  }

  setUpWebhooks() {
    this.setupGetWebhook();
    this.setupPostWebhook();
  }

  setupGetWebhook() {
    this.app.get('/webhook', function (req, res) {
      if (req.query['hub.mode'] === 'subscribe' &&
          req.query['hub.verify_token'] === this.config.VALIDATION_TOKEN) {
        console.log('Validating webhook');
        res.status(200).send(req.query['hub.challenge']);
      } else {
        console.error('Failed validation. Make sure the validation tokens match.');
        res.sendStatus(403);
      }
    });
  }

  setupPostWebhook() {

  }
}

