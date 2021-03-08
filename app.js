//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
const clearBtn = document.getElementById("clear");

document.addEventListener("click", (e) => {
  if (e.target === button) {
    const currentVal = search.value;
    ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
  });
  } else if (e.target === clearBtn) {
    console.log(e.target);
    //clear ui content
    ui.clearUI();
    //clear local storage
    ui.clearLS();
  }
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});
