let btns = document.getElementsByClassName(`btn`);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener(`click`, function () {
    let buttonStyle = getComputedStyle(this);
    let buttonBigColor = buttonStyle[`backgroundColor`];
    document.body.style.backgroundColor = buttonBigColor;
    console.log(buttonBigColor);
  });
}
