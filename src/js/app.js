"use strict";
var $productHeader = $(".product__header");
var $menuLinks = $(".menu__link");
var activate = activate;
var animation = {
    rock: "ani-rock",
    shake: "ani-shake",
    border: "ani-border-bottom"
};
var activate = activate;
var productHoverHandler = productHoverHandler;
var productHoverRemoveHandler = productHoverRemoveHandler;
var menuLinkHoverHandler = menuLinkHoverHandler;
var menuLinkHoverRemoveHandler = menuLinkHoverRemoveHandler;

activate();

function activate() {
    $productHeader.hover(productHoverHandler, productHoverRemoveHandler, animation);
    $menuLinks.hover(menuLinkHoverHandler, menuLinkHoverRemoveHandler, animation);
}

function productHoverHandler(event) {
    console.log("added",event.type, animation.shake);
    $(this).addClass(animation.shake);
}

function productHoverRemoveHandler(event) {
    console.log("removed", event.type, animation.shake);
    $(this).removeClass(animation.shake);
}

function menuLinkHoverHandler(event) {
    console.log("added", event.type, animation.border);
    console.log($(this));
    var $div = $("<div>");
    $(this).append($div.addClass(animation.border));
}

function menuLinkHoverRemoveHandler(event) {
    $(this).find("div").removeClass(animation.border);
    console.log("removed", event.type, animation.border, $(this).find("div"));
}
