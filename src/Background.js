let buttonState = (chrome.storage.local.get(['buttonState'], function(result) {})) || "on"

const on = {
     type: "basic",
     title: "Boob Replacer", 
     message: "Enabled", 
     iconUrl: "../images/logo.jpg",
     silent: true
}

const off = {
     type: "basic",
     title: "Boob Replacer", 
     message: "Disabled", 
     iconUrl:"../images/logo.jpg",
     silent: true
}

chrome.browserAction.onClicked.addListener(function (tab) {
    if (buttonState === "on") {
        chrome.storage.local.set({['buttonState']: "off"}, function() {});
        buttonState = "off";
        chrome.notifications.create(off);
        // chrome.browserAction.setIcon({path:"images/UWWhite128x.png"});
    } 

    else if (buttonState === "off") {
        chrome.storage.local.set({['buttonState']: "on"}, function() {});
        buttonState = "on";
        chrome.notifications.create(on);
        // chrome.browserAction.setIcon({path:"images/UWYellow128x.png"});
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (buttonState === "on"){
        chrome.tabs.executeScript(tab.id, {file: "src/content.js"});
    }
});
