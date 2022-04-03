let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
});

  
// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    let ele = document.querySelectorAll('input[name*=query]');
    // console.log(ele);
    var copiedEle;
    var copiedDiv;
    var parentNode;
    ele.forEach(element => {
        copiedEle = element;
        copiedDiv = element.parentNode;
        parentNode = copiedDiv.parentNode;
        element.hidden=true;
    });
    console.log(parentNode)
    const div = document.createElement('div');
    div.class = 'replacement';
    div.innerHTML = '<input data-testid="search-input" class="css-1axrnfw" type="text" name="query" placeholder="SEARCH" value="testing">';
    console.log(div.innerHTML);
    parentNode.appendChild(div);


chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
});
}

function test() {
    return true;
}