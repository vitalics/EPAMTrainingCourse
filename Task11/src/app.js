import { PromiseXhr } from './promise.js';

let promiseXhr = new PromiseXhr();
promiseXhr.makeRequest('GET', 'https://epamtraining-24a9b.firebaseio.com/0.json').then((e) => {
    alert(e.target.response);
})
