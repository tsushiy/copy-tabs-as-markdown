function createTextbox() {
  let textbox = document.createElement("textarea");
  document.body.appendChild(textbox);
  return textbox;
}

function executeCopy(textbox, text) {
  textbox.value = text;
  textbox.select();
  document.execCommand('Copy');
  document.body.removeChild(textbox);
}

function excapeUrl(url) {
  url = decodeURI(url);
  return url
  .replace(/\(/g, escape)
  .replace(/\)/g, escape)
  .replace(/\[/g, escape)
  .replace(/\]/g, escape)
  .replace(/\ /g, escape);
}

window.onload = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.storage.sync.get({
      currentTabFormat: '[${title}](${url})',
    }, function (options) {
      let textbox = createTextbox()
      let url = excapeUrl(tabs[0].url);
      let title = tabs[0].title;
      let text = options.currentTabFormat.replace('${title}', title).replace('${url}', url);
      executeCopy(textbox, text);
    });
  });
}