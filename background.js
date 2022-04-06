chrome.browserAction.onClicked.addListener(buttonclicked);

function buttonclicked(tab){
    console.log("sdfkshdfkj")
    let msg = {
        txt: "execute"
    }
    console.log(tab)
    chrome.tabs.sendMessage(tab.id, msg)
}