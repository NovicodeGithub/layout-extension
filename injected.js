var replaced = $("body").html().replace(/Collection/g, 'replace');
$("body").html(replaced);

var image = document.createElement("img");
image.src = chrome.extension.getURL("images/1.jpg");
document.getElementsByTagName("body")[0].appendChild(image);
