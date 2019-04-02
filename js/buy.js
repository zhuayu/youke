var buy = {
  init: function () {
    this.bind()
  },
  bind: function () {
    $('#ITCatalogList li').hover(this.ITCatalogCheckout)
  },
  ITCatalogCheckout() {
    var index = $(this).index();
    var prevActiveIndex = $('#ITCatalogList .catalog-second-item--active').index();
    if (index === prevActiveIndex) return;
    $(this).addClass('catalog-second-item--active').siblings().removeClass('catalog-second-item--active');
    buy.checkoutITDetail(index);
  },
  checkoutITDetail(index) {
    var $elm = $('#ITDetailList ul').eq(index);
    $elm.addClass('catalog-third-list--active').siblings().removeClass('catalog-third-list--active');
  },
}

$(function () {
  buy.init()
})