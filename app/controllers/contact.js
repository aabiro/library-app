import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending your message in progress... ');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');

      //createRecord is not working - now it does the record name must match the template etc!!!
      const newContactForm = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContactForm.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')} Your message: ${response.get('message')}`);
      });
      //
      // saveContactForm(newContactForm) {
      //   newContactForm.save().then(() => this.transitionTo('contacts'));
      // };
    }
  }
});
