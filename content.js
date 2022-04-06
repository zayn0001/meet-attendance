console.log("hyelooo")

//let para = document.body
//para = para.querySelectorAll("div > div")[3].querySelectorAll("div > div")[13]
//jump = para[3]
//let x = para.innerHTML
//jumpdivs = jump.querySelectorAll("div")
//console.log(para)
//console.log(jump)
//console.log(jumpdivs)
//let para2 = document.querySelectorAll("div span")

//console.log(x)
//let rrr = document.querySelector("div[aria-label='Participants']");
//console.log(rrr)
//console.log(para[0][children])
//let participantsdiv = para[0].children[0].children[0].children[8].children[2].children[3].children[1].children[1].children[1].children[2].children[1]
//console.log(participantsdiv)


///html/body/div[1]/c-wiz/div[1]/div/div[9]/div[3]/div[4]/div[2]/div[2]/div[2]/div[3]/div/div/div[1]/div[2]/div[1]/span[1]
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
    let actualnames = []
    
    if (request.txt == "execute") {
        console.log("ohayo")
        //let participants = document.querySelectorAll("c-wiz > div > div > div > div > div")[4].querySelectorAll("div")[18].querySelectorAll("div")[34]
        //para = para.querySelectorAll("div > div")[3].querySelectorAll("div > div")[13]
        //console.log(participants)
        let participantdiv = document.querySelector("div[role='listitem']")
        //const persons = participants.querySelectorAll("div > div > div > div >span")
        let spansinparti = participantdiv.querySelectorAll("span")
        let nameclass = spansinparti[0].className

        let divsinparti =  participantdiv.querySelectorAll("div")
        //console.log(enclosingdivclass)
        //let descdiv = document.getElementsByClassName(enclosingdivclass).nextSibling.className
        
        console.log(divsinparti)        //console.log(parti, 'lfjsdlk')
        //console.log(names)
        //console.log(nameclass)
        let actualnamespan = document.querySelectorAll('.'+nameclass)
        //console.log(actualnamespan)
        
        for (let i=0; i<actualnamespan.length; i++) {
            actualnames.push(actualnamespan[i].innerHTML)
        }
        //console.log(actualnamespan.length)
        console.log(actualnames)

        //console.log(persons)
    }
    chrome.runtime.sendMessage({txt:"namelist", data:actualnames})

    
}
