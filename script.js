// Alle product containers ophalen
const zwartContainer = document.getElementById("zwart");
const blauwContainer = document.getElementById("blauw");
const roodContainer = document.getElementById("rood");

// Alle radio buttons ophalen
const kleurOpties = document.querySelectorAll('input[name="color"]');

// Functie om alles te verbergen
function verbergAlles() {
  zwartContainer.style.display = "none";
  blauwContainer.style.display = "none";
  roodContainer.style.display = "none";
}

// Event listener toevoegen aan elke kleur
kleurOpties.forEach((optie) => {
  optie.addEventListener("change", function () {

    // Eerst alles verbergen
    verbergAlles();

    // Juiste container tonen
    if (this.value === "zilver") {
      zwartContainer.style.display = "block";
    }

    if (this.value === "blauw") {
      blauwContainer.style.display = "block";
    }

    if (this.value === "oranje") {
      roodContainer.style.display = "block";
    }
  });
});