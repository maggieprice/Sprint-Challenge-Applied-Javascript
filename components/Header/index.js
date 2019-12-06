// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function mainHeader(newsPageTop) {
    const header1 = document.querySelector('.header div');
    const date1 = document.querySelector('.date span');
    const headTitle = document.querySelector('h1');
    const temp1 = document.querySelector('.temp span');
    const hContainer = document.querySelector('.header-container');
    hContainer.appendChild(header1);
    header1.appendChild(date1);
    header1.appendChild(headTitle);
    header1.appendChild(temp1);

    date1.textContent = "March 28, 2019";
    headTitle.textContent = "Lambda Times";
    temp1.textContent = "98°";
  
return header1;
}

// header1.forEach(header1 => {
//     hContainer.appendChild(mainHeader)
// });
// const hContainer = mainHeader('.header-container');
// hContainer.appendChild(header1);

// const dogImg = document.querySelector('.card-img-top');

// dogImg.src = 'https://images.unsplash.com/photo-1499789853431-fcbf274f57b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';

// dogImg.alt = "dogs rule";

// const title = document.querySelector('h2');
// title.textContent = " Dogs are amazing"


    // header1.classList.add('header');
    // date1.classList.add('date');
    // temp1.classList.add('temp');
