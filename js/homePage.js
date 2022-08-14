var element = document.getElementById("test1");

function setFoldertests() {
  hideFolder();
  element = document.getElementById("folderTests");
  showFolder();
}

function setFolderTranslation() {
  hideFolder();
  element = document.getElementById("folderTrans");
  showFolder();
}

function setFolderPhotos() {
  hideFolder();
  element = document.getElementById("folderPhotos");
  showFolder();
}

function setFolderCode() {
  hideFolder();
  element = document.getElementById("folderCode");
  showFolder();
}

function showFolder() {
  element.style.display = "block";
  dragElement(element);
}

function hideFolder() {
  if (element != null) {
    element.style.display = "none";
  }
  element = null;
}

//code from https://www.w3schools.com/HOWTO/tryit.asp?filename=tryhow_js_draggable
//Make the DIV element draggagle:

function dragElement(elmnt) {
  console.log("dragging, " + elmnt.id);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    console.log("if");
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    console.log("else");
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}