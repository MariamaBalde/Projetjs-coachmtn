
function myFunction() {
    let recup_name = document.querySelector("#myInputName").value;
    document.querySelector(".recupname").innerHTML = recup_name;
}

function myFunction1() {
  let recup_name1 = document.querySelector("#Number").value;
  document.querySelector(".recupnumber").innerHTML = recup_name1;
}

function myFunction2() {
  let recup_name1 = document.querySelector("#inputdate").value;
  document.querySelector(".recupmonth").innerHTML = recup_name1;
}

function myFunction3() {
  let recup_name1 = document.querySelector("#inputyear").value;
  document.querySelector(".recupyear").innerHTML = recup_name1;
}

function myFunction4() {
  let recup_name1 = document.querySelector("#inputcvc").value;
  document.querySelector(".recupdate").innerHTML = recup_name1;
}


document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();

  //on masque la div precedente
  document.querySelector(".form0").classList.remove("active");

  //On reactive le div voulu
  document.querySelector(".form1").classList.add("active");
});



