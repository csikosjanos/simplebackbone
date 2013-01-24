(function($){

  Backbone.sync = function(method, model, success, error){ 
    success();
  }

  var Nav = Backbone.Model.extend({
    defaults: {
      //elements: ['home','about'],
      clicked: 'home'
    }
  });

  var NavView = Backbone.View.extend({
    el: 'nav',

    events: {
      'click li.home': 'homePage',
      'click li.about': 'aboutPage'
    },

    initialize: function() {
      _.bindAll(this, 'render', 'homePage', 'aboutPage');
      this.render();
    },

    render: function() {
      $(this.el).html(JST['nav']());
      return this;
    },

    homePage: function() {
      console.log('home clicked');
      this.model.set({clicked:'home'});
    },

    aboutPage: function() {
      console.log('about clicked');
      this.model.set({clicked:'about'});
    }

  });

  var PagesView = Backbone.View.extend({
    el: 'section',

    nav: false,
    navView: false,

    initialize: function(){
      _.bindAll(this, 'render', 'changePage');
      this.nav = new Nav();
      this.navView = new NavView({model: this.nav});
      this.nav.bind('change', this.changePage);
      this.render();
    },

    render: function(){
      $(this.el).html(JST['pages/home']());
      return this;
    },

    changePage: function(){
      $(this.el).html(JST['pages/'+this.nav.get('clicked')]());
    }
  });

  var pagesView = new PagesView();      
})(jQuery);