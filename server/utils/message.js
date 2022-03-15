const moment = require('moment');
const fetch = require("node-fetch");
// import fetch from 'node-fetch';
// globalThis.fetch = fetch
// fetching initial chat messages from the database
// (function() {
//     fetch("/chats/").then(data => {
//         return data.json();
//     }).then(json => {
//         json.map(data => {
//             let messages = document.querySelector("#messages").value
//             let li = window.createElement("ol");
//             let span = window.createElement("li");
//             messages.appendChild(li).append(data.text);
//             messages.appendChild(span).append("by " + data.from + ": " + formatTimeAgo(data.createdAt));
//         });
//     });
// })();

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    }

};
// let showMsg = (function() {
//     fetch("http://localhost:3000/Chats").then(data => {
//         return data.json();
//     }).then(json => {
//         json.map(data => {
//             const messages = document.querySelector("#message").value
//             const li = window.createElement("ol");
//             const span = window.createElement("li");
//             messages.appendChild(li).append(data.text);
//             messages.appendChild(span).append("by " + data.from + ": " + formatTimeAgo(data.createdAt));
//         });
//     });
// })();

let generateLocationMessage = (from, lat, lng) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${lat}, ${lng}`,
        createdAt: moment().valueOf()
    }
}

module.exports = { generateMessage, generateLocationMessage };