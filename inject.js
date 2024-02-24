(function() {

// remove all iframes
const text = document.querySelectorAll('iframe')
for (const el of text) {
  el.parentNode.removeChild(el);
}

// Get all paragraph elements on the page
const paragraphs = document.querySelectorAll('p');

// Empty the body of the page
document.body.innerHTML = '';
document.body.style.border = '2em solid black';
document.body.style.background = "black";
document.body.style.fontSize = "16px";
document.body.style.fontFamily = "Open Sans,sans-serif";


// Add the paragraphs back to the page, one by one
paragraphs.forEach((para) => {
  const newPara = document.createElement('p');
  newPara.innerText = para.innerText;
  newPara.style.width = '35em';
  newPara.style.margin = "1em auto";
  newPara.style.color = "white";
  document.body.appendChild(newPara);
});

})();

