import {baseUrl} from '../variables.js';

async function user(userName){
    const url = `${baseUrl}/${userName}`;
    const response = await fetch(url, {
        headers: {
            Authorization: `token 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`
        }
    });
    return await response.json();
}


export {user}