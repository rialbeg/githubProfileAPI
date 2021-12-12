import { baseUrl } from '/src/scripts/variables.js';

async function getActivities(userName){
    const url = `${baseUrl}/${userName}/events?per_page=10`;
    const response = await fetch(url);
    return await response.json();
}


export { getActivities }