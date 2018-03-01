function onMouseDown(event) {
  console.log("mousedown", event);
  console.log(event.target)
  if (event.target.matches(".draggable-item")) {
      let eventTarget = event.target;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
  }
}

function onMouseMove(event) {
  console.log("mousemove", event);
}

function onMouseUp(event) {
  console.log("mouseup", event);
  
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}


document.addEventListener("mousedown", onMouseDown);
