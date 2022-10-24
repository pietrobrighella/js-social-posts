const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://i.pravatar.cc/300?img=63"
        },
        "likes": 80,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://i.pravatar.cc/300?img=24"
        },
        "likes": 120,
        "created": "2022-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://i.pravatar.cc/300?img=36"
        },
        "likes": 78,
        "created": "2022-05-15"
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
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://i.pravatar.cc/300?img=58"
        },
        "likes": 95,
        "created": "2022-03-05"
    }
];
const likedPost = [];

createPosts();

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
                    <div class="post-meta__time">${dateGenerator(postsCreated)}</div>
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

        if(posts[key].author.image != null) {
            postsAuthorImage = posts[key].author.image;
            } else {
                postsAuthorImage = getFirstLetters(postsAuthorName);
                const profilePic = document.querySelectorAll('.post-meta__icon');
                profilePic[key].innerHTML = `
                <div class="profile-no-image profile-pic">${postsAuthorImage}</div>
                `
        }
    }
    const likeBtn = document.querySelectorAll('.like-button');
    for(let i = 0; i < likeBtn.length; i++){
        const likeCounter = document.getElementById('like-counter-' + posts[i].id)
        likeBtn[i].addEventListener('click', function(){
            if(likeBtn[i].classList.contains('like-button--liked')){
                likeBtn[i].classList.remove('like-button--liked');
                posts[i].likes --;
                likeCounter.innerHTML = `<b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b>`
                likedPost.splice(posts[i], 1);
                console.log(likedPost);
            } else {
                likeBtn[i].classList.add('like-button--liked');
                posts[i].likes ++;
                likeCounter.innerHTML = `<b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b>`
                likedPost.push(posts[i].id);
                console.log(likedPost);
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

function dateGenerator(dateInput){
    const dateIn = dateInput;
    const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    for (const key in posts) {
        let datePost = new Date(dateIn);
        let month = months[datePost.getMonth()];
        let day = days[datePost.getDay()];
        datePost = day + ' ' + datePost.getDate() + ' ' + month + ' ' + datePost.getFullYear()
        return datePost;
    }
}