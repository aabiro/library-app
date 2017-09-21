import Ember from 'ember';

export default Ember.Controller.extend({

  _author: (function () {
  this.get( 'author' ).then( function ( author ) {
    attribute.get( '_author' );
  });
})._author( '' )

});
