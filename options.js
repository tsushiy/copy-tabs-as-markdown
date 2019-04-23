// Saves options to chrome.storage
function save_options() {
  var currentTabFormat = document.getElementById('currentTabFormat').value;
  var allTabsFormat = document.getElementById('allTabsFormat').value;
  chrome.storage.sync.set({
    currentTabFormat: currentTabFormat,
    allTabsFormat: allTabsFormat
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Default value.
  chrome.storage.sync.get({
    currentTabFormat: '[${title}](${url})',
    allTabsFormat: '* [${title}](${url})',
  }, function (options) {
    document.getElementById('currentTabFormat').value = options.currentTabFormat;
    document.getElementById('allTabsFormat').value = options.allTabsFormat;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);