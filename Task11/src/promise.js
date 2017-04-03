export class PromiseXhr {
    getRequest(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = resolve;
            xhr.onerror = () => {
                reject(new Error(xhr.statusText))
            }
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        resolve( this.response);
                    }
                }
            }
            xhr.send();
        });
    }
    postRequest(url) {
        var promise = new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.onload = resolve;
            xhr.onerror = () => {
                reject(new Error(xhr.statusText))
            }
            xhr.send();
        });
        return promise;
    }
}