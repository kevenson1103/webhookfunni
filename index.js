const url = "" //webhook URL goes here
const url1 = ""
const url2 = ""
const url3 = ""
const msg = {
    "content": "hi this is a message" //content of the message
}
fetch = require('node-fetch'); //requires node-fetch

const interval = setInterval(function() {
let sendmsg = true //sets "sendmsg" as true

    if(sendmsg = true) {
        setTimeout(() => {
        fetch(url, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
        }, 500);

        setTimeout(() => {
            fetch(url1, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
        }, 500);

        setTimeout(() => {
            fetch(url2, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
        }, 500);

        setTimeout(() => {
            fetch(url3, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
        }, 500);
        console.log("sent!")
        let sendmsg = false
        return
    }
}, 1100);