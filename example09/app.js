(function($){

  var PagesView = Backbone.View.extend({
    el: 'section',

    nav: false,
    navView: false,

    initialize: function(){
      _.bindAll(this, 'render', 'changePage');
      this.render();
    },

    render: function(){
      $(this.el).html(JST['pages/home']());
      return this;
    },

    changePage: function(page){
      $(this.el).html(JST['pages/'+page]());
    }
  });

  var pagesView = new PagesView();

  var AppRouter = Backbone.Router.extend({
    routes: {
      "*page": "getPage"
    }
  });

  var appRouter = new AppRouter;
  appRouter.on('route:getPage', function(page) {
    console.log('page:'+page);
    pagesView.changePage(page);
  });

  Backbone.history.start()

})(jQuery);