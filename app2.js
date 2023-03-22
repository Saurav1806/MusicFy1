const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})


function validate() {
    var text1 = document.getElementById("username");
    var text2 = document.getElementById("password");
    if (text1.value == "workshop" && text2.value == "workshop") {
      load("run.html");
    } else {
      load("fail.html");
    }
  }

  function load(url) {
    location.href = url;
  }