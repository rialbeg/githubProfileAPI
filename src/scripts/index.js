
import { getUser } from '/src/scripts/services/user.js';
import { getRepositories } from '/src/scripts/services/repositories.js';
import { getActivities } from '/src/scripts/services/activities.js';

import { user } from '/src/scripts/objects/user.js';
import { screenView } from '/src/scripts/objects/screenView.js';

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userName = document.getElementById('input-search').value;
    if(ValidateEmptyInput(userName)) return;
    getUserData(userName);
})


document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const userName = e.target.value;
    if(e.code === 'Enter'){
        if(ValidateEmptyInput(userName)) return;
        getUserData(userName);
    }
})

function ValidateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com um nome de um usuário do github');
        return true;
    }
}

async function getUserData(userName){
    
    const userResponse = await getUser(userName);
    if(userResponse.message = "Not Found"){
        screenView.renderNotFound();
        return;
    }
    const repositoriesResponse = await getRepositories(userName);
    const activitiesResponse = await getActivities(userName);
    
    // console.log(actvitiesResponse);
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setActivities(activitiesResponse);
    
    // console.log(user);
    screenView.renderUser(user);
    // window.user = user;
}
