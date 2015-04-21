$(document).ready(function(event) {
  var halfCardView = Backbone.View.extend({
    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      var row = $('.row')[1];
      $(row).append(this.$el)
    }
  })

  var thirdCardView = Backbone.View.extend({
    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      var row = $('.row')[2];
      $(row).append(this.$el)
    }
  })

  var quarterCardView = Backbone.View.extend({
    tagName: "article",
    className: "block-quarter shadow",
    style: "<%= id %>",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      var row = $('.row')[3];
      $(row).append(this.$el)
    }
  })

  var data = { title: "This is a 50% title", content: "This is some content", id: "done"}
  var data2 = { title: "This is a 50% title", content: "This is some content", id: "dtwo"}
  var newCard = new halfCardView(data);
  var newCard = new halfCardView(data2);

  var dataThird = {title: "This is one-third", content: "There's some text in here", id: "dtone"}
  var dataThird2 = {title: "This is one-third", content: "There's some text in here", id: "dttwo"}
  var dataThird3 = {title: "This is one-third", content: "There's some text in here", id: "dtthree"}
  var aThirdCard = new thirdCardView(dataThird)
  var aThirdCard = new thirdCardView(dataThird2)
  var aThirdCard = new thirdCardView(dataThird3)

  var dataQuarter = {title: "This is one-quarter", content: "There's some text in here", id: "dqone"}
  var dataQuarter2 = {title: "This is one-quarter", content: "There's some text in here", id: "dqtwo"}
  var dataQuarter3 = {title: "This is one-quarter", content: "There's some text in here", id: "dqthree"}
  var dataQuarter4 = {title: "This is one-quarter", content: "There's some text in here", id: "dqfour"}
  var aQuarterCard = new quarterCardView(dataQuarter)
  var aQuarterCard = new quarterCardView(dataQuarter2)
  var aQuarterCard = new quarterCardView(dataQuarter3)
  var aQuarterCard = new quarterCardView(dataQuarter4)
});
