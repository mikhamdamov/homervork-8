let form = document.querySelector("form");

let input = document.querySelector("#nimadir");

input.addEventListener("input", (e) => {
    let arry = [e.target.value];
    
  let lastElement = arry[arry.length - 1];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(lastElement * 3);
    let pElement =document.createElement('p')
    let Elementp =document.createElement('small')
    let Element =document.createElement('strong')
    let Elemen =document.createElement('h6')
    let body = document.querySelector("body");
    pElement.classList.add('mar')
    Elementp.classList.add('mar')
    Element.classList.add('mar')
    Elemen.classList.add('mar')
    pElement.textContent = `${lastElement * 700} Km/h`;
    body.append(pElement)
    Elementp.textContent = `${lastElement * 50} Km/h`;
    body.append(Elementp)
    Element.textContent = `${lastElement * 20} Km/h`;
    body.append(Element)
    Elemen.textContent = `${lastElement * 5} Km/h`;
    body.append(Elemen)
    // pElement.textContent = `${lastElement * 50}`;
    // body.append(pElement)

});
});





// console.log();
//   console.log("Qabul qilindi");
// let maina = document.querySelector(".main");

// let element = document.querySelector(".user");
    // console.log([e.target.value]);
