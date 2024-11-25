const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-box");


const addIcon = document.querySelector('.add-icon');
const popupContent = document.querySelector('.popup-content');

const popupAddButton = document.querySelector('.popup-add-button');
const popupInputValue = document.querySelector('.popup-input');
const popupTextAreaValue = document.querySelector('.popup-textarea');
const outerContainer = document.querySelector('.outer-container');


//search function
function filterItems(){
  let input = searchInput.value.toLowerCase();
  let items = document.querySelectorAll(".inner-container");

  if (input === '') {
    // If input is empty, show all items
    items.forEach((item) => {
      item.style.display = 'block';
    });
  }
  else {
    items.forEach((item) => {
      if (item.textContent.toLowerCase().includes(input)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
};
searchIcon.addEventListener('click', filterItems);
searchInput.addEventListener('input',filterItems);

//add recipe - shows the add form
addIcon.addEventListener("click", function () {
  popupContent.style.visibility = "visible";
});
//clear the add recipe form
document.addEventListener("click", (event) => {
  if (event.target !== addIcon && event.target !== popupContent) {
    popupContent.style.visibility = "hidden";
  }
});

popupContent.addEventListener('click', function (event) {
  event.stopPropagation();
})


// add recipes to the outer container
popupAddButton.addEventListener("click", function () {
  if (!popupInputValue.value == " " && !popupTextAreaValue.value == " ") {
    const nestedElement = `
    <div class="card">
      <dl class="inner-container">
        <dt class="descriptive-term">${popupInputValue.value}</dt>
        <dd class="descriptive-data">
          ${popupTextAreaValue.value}
        </dd>
      </dl>
      <div class="short-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi</p>
      </div>
    </div>`;
    outerContainer.insertAdjacentHTML(
      "beforeend",nestedElement
    );
    popupInputValue.value = "";
    popupTextAreaValue.value = "";
  }
});


outerContainer.addEventListener("click", handleClickEvent);

// rotation of the card
function handleClickEvent(event) {
  // Check if the clicked element or its parent has the class "card"
  const item = event.target.closest(".card");

  if (item) {
    const currentRotation =
      item.style.transform === "rotateY(180deg)"
        ? "rotateY(0deg)"
        : "rotateY(180deg)";
    item.style.transform = currentRotation;
  }
}