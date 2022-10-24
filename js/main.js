const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

function createPosts(){
    const containerHtml = document.getElementById('container');
    for(key in posts){
        const postsId = posts[key].id;
        let postsContent = posts[key].content;
        let postsMedia = posts[key].media;
        let postsLike = posts[key].likes;
        let postsCreated = posts[key].created;
        let postsAuthorName = posts[key].author.name;
        let postsAuthorImage = posts[key].author.image;
        // SISTEMARE
        if(posts[key].author.image != null) {
            postsAuthorImage = posts[key].author.image;
            console.log(postsAuthorImage,'if');
            } else {
                postsAuthorImage = getFirstLetters(postsAuthorName);
                const profilePic = document.querySelectorAll('.post-meta__icon');
                profilePic.innerHTML = `
                <span class="profile-no-image">${postsAuthorImage}</span>
                `
        }
        const postHtml = document.createElement('div');
        postHtml.className = 'post';
        postHtml.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${postsAuthorImage}" alt="${postsAuthorName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${postsAuthorName}</div>
                    <div class="post-meta__time">${postsCreated}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postsContent}</div>
        <div class="post__image">
            <img src="${postsMedia}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${postsId}" class="js-likes-counter">${postsLike}</b> persone
                </div>
            </div> 
        </div>            
        `
        containerHtml.appendChild(postHtml);
    }
    const likeBtn = document.querySelectorAll('.like-button');
    for(let i = 0; i < likeBtn.length; i++){
        const likeCounter = document.getElementById('like-counter-' + posts[i].id)
        likeBtn[i].addEventListener('click', function(){
            if(likeBtn[i].classList.contains('like-button--liked')){
                likeBtn[i].classList.remove('like-button--liked');
                posts[i].likes --;
                likeCounter.innerHTML = `<b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b>`
            } else {
                likeBtn[i].classList.add('like-button--liked');
                posts[i].likes ++;
                likeCounter.innerHTML = `<b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b>`
            }
            
        })
    }
}

function getFirstLetters(str) {
    const firstLetters = str;
    firstLettersSplit = firstLetters.split(' ');
    firstLetterMap = firstLettersSplit.map(word => word[0]);
    firstLettersJoin = firstLetterMap.join('');

    return firstLettersJoin;
}

createPosts();