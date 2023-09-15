const name = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const error = document.getElementById('error');


submit.addEventListener('click', (e) => {
    let message = [];
  
    // Name validation
    let n = name.value;
    let trimmed = n.trim();
  
    let validateName = (trimmed) => {
        if (trimmed.length >= 3) {
            return true;
        }
        return false;
    }
  
   if(n.length === 0){
    message.push("Enter username")
   }else if(validateName(trimmed) === false) {
        message.push("Invalid name");
  }
  
    if (message.length > 0) {
        e.preventDefault();
        error.textContent = message.join('');
    } else {
        error.textContent = '';
        
    }
  });