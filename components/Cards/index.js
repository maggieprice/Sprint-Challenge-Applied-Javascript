// // STEP 3: Create Article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// // Stduy the response data you get back, closely.
// // You will be creating a component for each 'article' in the list.
// // This won't be as easy as just iterating over an array though.
// // Create a function that will programmatically create the following DOM component:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>
// //
// // Create a card for each of the articles and add the card to the DOM.




axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then (response => {
    const cardHolder = Object.values(response.data.articles)
    console.log(cardHolder)
    cardHolder.forEach(element => {
        console.log(element)
        element.forEach(innerElement =>{
            articleMain(innerElement)
        })
    });
})
.catch(error => {
    console.log(error);
})


function articleMain(articleCards){
    let cardContainer = document.querySelector('.cards-container')
    let newCard = document.createElement('div')
    cardHeadline = document.createElement('div')
    cardAuthor = document.createElement('div')
    cardImgDiv = document.createElement('div')
    cardImg = document.createElement('img')
    cardAuthorName = document.createElement('span')

    cardHeadline.textContent = articleCards.headline;
    cardImg.src = articleCards.authorPhoto;
    cardAuthorName.textContent =  articleCards.authorName;
 
    newCard.classList.add("card");
    cardHeadline.classList.add("headline");
    cardAuthor.classList.add("author");
    cardImgDiv.classList.add("img-container");

    newCard.appendChild(cardHeadline);
    newCard.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgDiv);
    cardAuthor.appendChild(cardAuthorName);
    cardImgDiv.appendChild(cardImg);

    cardContainer.appendChild(newCard);
    
} 
// articleMain();




// followersArray.forEach(user => {
// axios.get(`https://api.github.com/users/${user}`)
//   .then(javascript => {
//     const newCards = article(javascript.javascript);
//     entryPoint.appendChild(newCards);
//   });
// })

// .catch(error => {
//     console.log(error);
//   })

// const articlesArray= []

// const allArticles = () => { axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then(response =>{
//   articlesArray.push(data)
//   const articleData = articleMain(response.data)
// //   for (let )
//   });
// }
// const theValues = Object.values(allArticles)
// console.log(theValues);
// const entryPoint = document.querySelectorAll('.cards-container');
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(response =>{
//     // console.log(response.articles.javascript);
//     response.articles.javascript.data.forEach(item =>{
//       const othercards = articleMain(item)
//       entryPoint.appendChild(othercards)
//     });
// })