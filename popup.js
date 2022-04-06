function sendexecute(tabs){
    console.log("sdfkshdfkj")
    let msg = {
        txt: "execute"
    }
    console.log(tabs)
    chrome.tabs.sendMessage(tabs[0].id, msg)
}

function getdatetime(){
    d = new Date()
    let datestr = d.getFullYear().toString() + '-' + (d.getMonth()+1).toString() + '-' + d.getDate().toString()
    let timestr = d.getHours().toString() +'-'+ d.getMinutes().toString() +'-'+ d.getSeconds().toString()
    let titlestr = datestr + ' ' + timestr
    return titlestr
}



params = {
    active:true,
    currentWindow:true
}
chrome.tabs.query(params, sendexecute)

function gotMessage(request, sender, sendResponse) {
    console.log("jlasjdlkjasld")
    if (request.txt == "namelist") {
        console.log(request.data)
        var templist = []
        listofpeople = document.getElementById("poo")
        for (elem in request.data) {
            
            if (templist.includes(request.data[elem])==false){
                let newperson = document.createElement('li')
                newperson.innerHTML = request.data[elem]
                templist.push(request.data[elem])
                console.log(elem)
                listofpeople.appendChild(newperson)
            }
        }
        //document.getElementById("poo").innerHTML = request.data[0]
        console.log(templist)
        let title = getdatetime()
        let csvdata = "data:text/csv;charset=utf-8," + encodeURIComponent(templist.join("\n"))
        document.getElementById("download").setAttribute("href", csvdata)
        document.getElementById("download").setAttribute("download", title)
        console.log(csvdata) 
    }
}

chrome.runtime.onMessage.addListener(gotMessage)

