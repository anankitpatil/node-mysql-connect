module.exports = {
  header: function () {
    $('body').append('<header class="header"></header>');
  },
  content: function() {
    $('body').append('<div class="content"></div>');
  },
  footer: function () {
    $('body').append('<footer class="footer"></footer>')
  }
}
