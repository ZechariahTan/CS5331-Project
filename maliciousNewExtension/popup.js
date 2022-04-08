let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
replaceSearchField.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    let ele = document.querySelectorAll('input[name*=s]');
    // console.log(ele);
    var copiedEle;
    var copiedDiv;
    var parentNode;
    // var rect;
    var oTop;
    var oLeft;
    ele.forEach(element => {
        copiedEle = element;
        copiedDiv = element.parentNode;
        oTop = element.offsetTop;
        oLeft = element.offsetLeft;
        element.value = "worlds first emoji"
        element.style = "visibility: hidden;"
    });

    let newhtml = copiedEle.outerHTML;
    newhtml = newhtml.replace(/name=".+"/,"name=\"dummySearchField\"");

    var div = document.createElement('input');
    div.class = copiedEle.class;
    div.name = "dummySearchField";
    div.type = "search";
    div.style.position="absolute";
    div.style.left = oLeft;
    div.style.top = oTop;
    console.log(div)
    copiedDiv.appendChild(div);

    console.log("replaced");


chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
});
}

function test() {
    return true;
}