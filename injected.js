var replaced = $("body").html().replace(/Collection/g, 'replace');
$("body").html(replaced);

/*
var image = document.createElement("img");
image.src = chrome.extension.getURL("images/1.jpg");
document.getElementsByClassName("col-lg-12")[0].appendChild(image);
*/
var allImg = document.getElementsByClassName('list-group-image');
$(allImg).addClass('img-resize');
