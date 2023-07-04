const APP = {
  //event listeners for menu buttons
  init() {
    APP.initEventListeners();
    APP.clearStyling();
  },
  clearStyling() {
    const btns = document.getElementsByClassName("menu-btn");
    console.log(btns.length);
    for (let i = 0; i < btns.length; i++) {
      btns[i].style.border = "2px solid #374151";
    }
  },
  setBtnActive(ev) {
    //reset active styling
    let btn = ev;
    btn.style.borderBottom = "2px solid #4ade80";
  },
  initEventListeners() {
    const btns = document.getElementsByClassName("menu-btn");
    const btnsArray = Array.from(btns);
    btnsArray.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        //use currentTarget instead of target
        const btn = e.currentTarget;
        APP.clearStyling();
        APP.setBtnActive(btn);
      });
    });
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
