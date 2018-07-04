// function jsonp(url, callbackName, callback) {
//     window[callbackName] = function (data) {
//         callback(data)
//     }
//     let script = document.createElement('script');
//     document.body.appendChild(script);
//     script.src = url;
// }

function jsonp(url, callbackName) {
    return new Promise((resolve, reject) => {
        window[callbackName] = function (data) {
            resolve(data)
        }
        let script = document.createElement('script');
        let body = document.body;
        script.src = url;
        body.appendChild(script);
    })
}

export default jsonp;