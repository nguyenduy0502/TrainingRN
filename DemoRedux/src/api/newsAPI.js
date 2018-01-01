const API = 'http://webhose.io/filterWebContent?token=7b31f98b-b33c-4d39-b1b0-fa718e3bf6b4&format=json&ts=1514538358899&sort=crawled&q=peace%20social.facebook.likes%3A%3E100';

export function getData() {

    let data = {};
    return fetch(API)
        .then((res) => res.json())
        .then((resJSON) => {
            //console.log(resJSON);
            return resJSON
        })
        .catch((err) => console.log(err))

}
export async function getDataAsyns() {

    try {
        let res = await fetch(API);
        let resJSON = await res.json();
        return resJSON;

    } catch (err) {
        console.log(err)
    }

}
