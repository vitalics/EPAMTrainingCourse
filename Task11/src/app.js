import { PromiseXhr } from './promise.js';

class Main {
    constructor() {
        let promiseXhr = new PromiseXhr();
        let userName = prompt('enter your user name:');
        this.getInfoByUserName(promiseXhr, 'https', 'api.github.com/users', userName);
    }
    getInfoByUserName(promiseXhr, protocol, link, userName) {
        promiseXhr.getRequest(`${protocol}://${link}/${userName}`).then((e) => {
            alert(e);
        });
    }
}
let main = new Main();
