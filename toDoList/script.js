const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
const deletList = document.querySelector("delete");
const addBtn = document.getElementById("add-button");
if (inputBox) {
  addBtn.addEventListener("click", () => {
    addTask();
  });
}

function addTask() {
  if (inputBox.value == "") {
    alert("You must enter something!");
  } else {
    let li = document.createElement("li");
    li.className = "checkBox";
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputBox.value = "";
}
if (listContainer) {
  listContainer.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  });
}
  
const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
//   const username = event.target.username.value;
//   const password = event.target.password.value;

const username = document.getElementsByName("username").value;
const pwd = document.getElementsByName("password").value;

let setFlag = false;
 console.log(username);
if(username != "" &&  pwd != ""){
    setFlag = true
}

if(setFlag == true){
    alert("user has login susscefully")
}else{
    alert("all field are mandatory");
}
});
