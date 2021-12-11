import {baseUrl, repositoriesQuantity} from '../variables.js';

async function repos(userName){
    const url = `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`;
    const response = await fetch(url, {
        headers: {
            Authorization: `token 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`
        }
    });
    return await response.json();
}


export {repos}