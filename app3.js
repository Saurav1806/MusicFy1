const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})

// function checkEmail() {  
//     var email = document.getElementById('txtEmail');  
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
//     if (!filter.test(email.value)) {  
//         alert('Please provide a valid email address');  
//         email.focus;  
//         return false;  
//     }  
// }  