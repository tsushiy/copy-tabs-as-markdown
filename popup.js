document.getElementById("currentTabCopy").onclick = function(){
  let bg = chrome.extension.getBackgroundPage();
  let command = 'copy-current-tab'
  bg.copyInFormat(command)
};

document.getElementById("allTabsCopy").onclick = function(){
  let bg = chrome.extension.getBackgroundPage();
  let command = 'copy-all-tabs'
  bg.copyInFormat(command)
};