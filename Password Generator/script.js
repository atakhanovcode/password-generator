let all = ""
let upper = "ABCDEFGHIHKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789"
let char = "!$%&|[](){}:;.,*+-#@<>~"
let range = document.querySelector(".range")
let copy_btn = document.querySelector(".fa-copy")
let value_range = document.querySelector("#value-range")
let generate_btn = document.querySelector(".generate-btn")
let check1 = document.querySelector("#check1")
let check2 = document.querySelector("#check2")
let check3 = document.querySelector("#check3")
let check4 = document.querySelector("#check4")

value_range.innerHTML = range.value
let text = document.querySelector(".text")
check1.checked = true
check2.checked = true
check3.checked = true
check4.checked = true
all += upper
all += lower
all += num
all += char
for (let i = 0; i < range.value; i++) {
  text.innerHTML += all.charAt(Math.floor(Math.random() * all.length))
}
function rangeFnc(){
  value_range.innerHTML = range.value
}
check1.addEventListener("click",function() {
  if(check1.checked == false){
    all = all.replace(lower,"")
  }
  else if(check1.checked == true){
    all += lower
  }
})
check2.addEventListener("click",function() {
  if(check2.checked == false){
    all = all.replace(upper,"")
  }
  else if(check2.checked == true){
    all += upper
  }
})
check3.addEventListener("click",function() {
  if(check3.checked == false){
    all = all.replace(num,"")
  }
  else if(check3.checked == true){
    all += num
  }
})
check4.addEventListener("click",function() {
  if(check4.checked == false){
    all = all.replace(char,"")
  }
  else if(check4.checked == true){
    all += char
  }
})
generate_btn.addEventListener("click",function() {
  let res = '  '
  for (let i = 0; i < range.value; i++) {
    res += all.charAt(Math.floor(Math.random() * all.length))
  }
  text.innerHTML = res
})

copy_btn.addEventListener('click', function() {
  // Select the text field
  
  // Copy the text inside the text field
  navigator.clipboard.writeText(text.innerHTML);
  
  // Alert the copied text
  alert(`Copied the text: ${text.innerHTML}`);
})