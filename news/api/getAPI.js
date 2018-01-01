const API = 'http://webhose.io/filterWebContent?token=7b31f98b-b33c-4d39-b1b0-fa718e3bf6b4&format=json&sort=crawled&q=%22donald%20trump%22%20language%3Aenglish';

export function getData() {

    let data = {};
    return fetch(API)
        .then((res) => res.json())
        .then((resJSON) => {
            return resJSON.totalResults > 0 ? resJSON : false;

        })
        .catch((err) => console.log(err))

}

export async function getDataAsyns() {

    try {

        let respone = await fetch(API);
        let responeJSON = await  respone.json();

        return responeJSON;


    }
    catch (err) {
        console.log(err)
    }

}
