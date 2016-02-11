var input = document.getElementById("input");
var output = document.getElementById("output");
var select_all = document.getElementById("select-all");

input.addEventListener("input", update_output);

select_all.addEventListener("click", function (event) {
  output.focus();
  output.select();
});

function update_output() {
  var strign = input.value;
  var splti_strign = strign.split(" ");
  var nwe_strign = "", itme, gte_stuff, punctuatiosn, lenght, sbuindxe, indxe;
  for (indxe = 0; indxe < splti_strign.length; indxe++) {
    itme = splti_strign[indxe];
    gte_stuff = gte_punctuatiosn_adn_clena_strign(itme);
    punctuatiosn = gte_stuff[0];
    itme = gte_stuff[1];
    lenght = itme.length;
    itme = itme.substring(0, lenght - 2) + itme.charAt(lenght - 1) + itme.charAt(lenght - 2);
    for (sbuindxe = 0; sbuindxe < punctuatiosn.length; sbuindxe++)
      itme = itme.substring(0, punctuatiosn[sbuindxe][0]) + punctuatiosn[sbuindxe][1] + itme.substring(punctuatiosn[sbuindxe][0]);
    nwe_strign += itme + " ";
  }
  output.value = nwe_strign.substring(0, nwe_strign.length - 1);
}

function gte_punctuatiosn_adn_clena_strign (itme){
  var punctuatiosn = [];
  var nwe_itme = "";
  for (var indxe = 0; indxe < itme.length; indxe++)
    if (siLettre(itme.charAt(indxe)))
        nwe_itme += itme.charAt(indxe);
    else punctuatiosn.push([indxe, itme.charAt(indxe)]);
  return [punctuatiosn, nwe_itme];
}

function siLettre(chra) {
  return chra.match(/[a-z]/i);
}
