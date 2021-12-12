const screenView = {
    userProfile:document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
                        <div class="info">
                                <img src="${user.avatarUrl}" alt="Foto do perfil do Usuário"/>
                                <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado!'}</h1>
                                    <p>${user.bio ?? 'Não possui bio cadastrada!'}</p>
                                </div>"
                            </div>
                            <div class="follow-info">
                                <div class="followers">
                                    <p>👥 Seguidores</p>
                                    <div>${user.followers}</div>
                                </div>
                                <div class="following">
                                    <p>👥 Seguindo</p>
                                    <div>${user.following}</div>
                                </div>
                                
                            </div>
                            `;
        let repositoriesItens = '';
        user.repositories.forEach(repository => {
            repositoriesItens += `
                                <li>
                                    <a href="${repository.html_url}" target="_blank">
                                        <h3>${repository.name}</h3>
                                        <div class="info-icons">
                                            <div>🍴  ${repository.forks}</div>
                                            <div>⭐ ${repository.stargazers_count}</div>
                                            <div>👀 ${repository.watchers}</div>
                                            <div>👨‍💻 ${repository.language ?? 'Sem linguagem'}</div>
                                        </div>
                                    </a>
                                </li>
                        `;
        });


        if(user.repositories.length > 0){
            this.userProfile.innerHTML += 
            `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>
                    ${repositoriesItens}
                </ul>
            </div>
            <hr class="divider"> 
            `;
        }
        let activitiesItens = '';
        user.activities.forEach((activity) =>{
            let message = '';
            if('commits' in activity.payload) 
                message = activity.payload.commits[0].message;
            else
                message = "No message";
            activitiesItens += 
            `
                
                    <h3>${activity.repo.name}:<span>${message}</span></h3>
                
            `;
        })

        if(user.activities.length > 0){
            this.userProfile.innerHTML +=
            `
                <div class="activities">
                    <h2>Atividades</h2>
                    ${activitiesItens};
                </div> 
            `;
    
        }
        
    }
};


export { screenView };