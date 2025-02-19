document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const profileAvatarElement = document.querySelector('#avatar');
    const repElement = document.querySelector('#rep');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch ('https://api.github.com/users/uDiogoP')
    .then(function(res){
        if (!res.ok){
            throw new Error('erro ao carregar os dados do usuário')
        }
        return res.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        userNameElement.innerText = json.login;
        profileAvatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
    .catch(function(erro){
        console.error(erro);
        alert("ocorreu um erro na nossa API")
    })
})