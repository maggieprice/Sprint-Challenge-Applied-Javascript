// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// const entryPoint = document.querySelector('.cards');
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then (response => {
//   console.log(response.data);
//   const myGithubCard = gitCard(response.data);
//   entryPoint.appendChild(myGithubCard);
// })

// const followersArray = [
//   'thericktastic',
//   'debauchery1st',
//   'Nicci498',
//   'aalvinlin', 
//   'matthews7'
// ];

// followersArray.forEach(user => {
// axios.get(`https://api.github.com/users/${user}`)
//   .then(data => {
//     const newCards = gitCard(data.data);
//     entryPoint.appendChild(newCards);
//   });
// })

.catch(error => {
    console.log(error);
  })

function article(articleCards){
  const newCard = document.createElement('div'),
  cardInfo2 = document. createElement('div'),
  cardInfo2 = document. createElement('div'),
  cardInfo2 = document. createElement('div'),
   cardImg = document.createElement('img'), 
   cardInfo2 = document. createElement('span'),
  
 

//     cardImg.src=githubUsers.avatar_url;
//     cardName.textContent = githubUsers.name; 
//     cardUser.textContent = githubUsers.login;
//     cardLocation.textContent = `Location: ${githubUsers.location}`;
//     cardProfile.textContent = 'Profile: ';
//     cardLink.textContent = githubUsers.url;
//     cardLink.href = githubUsers.html_url;
//     cardFollowers.textContent = `Followers: ${githubUsers.followers}`;
//     cardFollowing.textContent = `Following: ${githubUsers.following}`;
//     cardBio.textContent = `Bio: ${githubUsers.bio}`;

//     newCard.classList.add("card");
//     cardInfo2.classList.add("card-info");
//     cardName.classList.add("name");
//     cardUser.classList.add("username");
  
//     newCard.appendChild(cardImg);
//     newCard.appendChild(cardInfo2);
//     cardInfo2.appendChild(cardName); 
//     cardInfo2.appendChild(cardUser); 
//     cardInfo2.appendChild(cardLocation); 
//     cardInfo2.appendChild(cardProfile); 
//     cardInfo2.appendChild(cardFollowers); 
//     cardInfo2.appendChild(cardFollowing); 
//     cardInfo2.appendChild(cardBio);
//     cardProfile.appendChild(cardLink);
  
//     return newCard;
    
// }