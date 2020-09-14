/* eslint-disable arrow-body-style */
export default function swDev() {
    const swUrl = 'http://localhost:3001/sw.js';
    navigator.serviceWorker.register(swUrl).then(response => {
        console.log('response', response)
        return response;
    });
}
