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
    const header1 = document.createElement('div');
    const date1 = document.createElement('span');
    const headTitle = document.createElement('h1');
    const temp1 = document.createElement('span');
    const hContainer = document.querySelector('.header-container');
    
    header1.classList.add("header");
    date1.classList.add("date");
    temp1.classList.add("temp");
    
    hContainer.appendChild(header1);
    header1.appendChild(date1);
    header1.appendChild(headTitle);
    header1.appendChild(temp1);

    date1.textContent = "March 28, 2019";
    headTitle.textContent = "Lambda Times";
    temp1.textContent = "98°";
  
return header1;
}
mainHeader()

