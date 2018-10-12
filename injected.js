var replaced = $("body").html().replace(/Collection/g,'replace');
$("body").html(replaced);
var imgURL = chrome.extension.getURL("images/1.jpg");
document.getElementsByClassName("list-group-image").src = imgURL;
