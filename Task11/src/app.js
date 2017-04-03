import { PromiseXhr } from './promise.js';

let promiseXhr = new PromiseXhr();

class Main {
    constructor(promiseXhr) {
        let userName = prompt('enter your user name:');
        let UrluserName = this.getInfoByUserName(promiseXhr, 'https', 'api.github.com', userName);
        this.getInfoByUserName(promiseXhr,  'https', 'api.github.com', userName);
        
    }
    getInfoByUserName(promiseXhr, protocol, link, userName) {
        promiseXhr.getRequest(`${protocol}://${link}/users/${userName}`).then((e) => {
            alert(e);
        });
        return `${protocol}://${link}/users/${userName}`; 
    }
    getInfoByReposInUser(promiseXhr, protocol, link, userName) {
        promiseXhr.getRequest(`${protocol}://${link}/users/${userName}/repos`).then((e) => {
            alert(e);
        });
    }
}
let main = new Main(promiseXhr);
