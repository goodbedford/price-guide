
var productHeader = $(".product__header");
var menuLinks = $(".menu__link");
var activate = activate;
var animation = {
  rock: "ani-rock",
  shake: "ani-shake",
  border: "ani-border-bottom"
};

activate();

function activate() {
  productHeader.hover( productHoverHandler, productHoverRemoveHandler, animation );
  menuLinks.hover(menuLinkHoverHandler, menuLinkHoverRemoveHandler, animation)
}
function productHoverHandler(event) {
  console.log("added hover", animation.shake);
  $(this).addClass(animation.shake);
}
function productHoverRemoveHandler(event) {
  console.log("removed hover", animation.shake);
  $(this).removeClass(animation.shake);
}

function menuLinkHoverHandler(event) {
  console.log("added hover", animation.border);
  console.log($(this));
  var div = $("<div>");
  $(this).append(div.addClass(animation.border));
}
function menuLinkHoverRemoveHandler(event) {
  $(this).find("div").removeClass(animation.border);
   console.log("removed hover", animation.border, $(this).find("div"));
}
