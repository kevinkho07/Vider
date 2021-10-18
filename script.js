const btn = document.querySelector(".button");
const icon = document.querySelector(".fa-angle-double-left");
const kotak = document.querySelector(".rectangle");

btn.addEventListener("click", () => {
    if (icon.classList.contains("rotate")) {
        icon.classList.remove("rotate");
        kotak.classList.remove("tutup");
    } else {
        icon.classList.add("rotate");
        kotak.classList.add("tutup");
    }
});

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  dragElement(document.getElementsByClassName("Characters"));


  function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
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

/*
const btnSave = document.querySelector("#saveBtn");
const myCanvas = document.querySelector(".canvas");

btnSave.addEventListener("click", function(){
    if(window.navigator.msSaveBlob){
      window.navigator.msSaveBlob(myCanvas.msToBlob(), "canvas-image.png");
    }
});
*/

function savePage() {
	let kanvas = document.getElementById("canvas");
	let isiKanvas = kanvas.innerHTML;
    // save ke file lokal
    saveFile(isiKanvas);
}

async function saveFile(content) {

  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(content);

  // close the file and write the contents to disk.
  await writableStream.close();
}

