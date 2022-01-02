function hitung(){
    const PHI = 3.14;// Konstanta
    let jari = document.getElementById("bill").value;
    console.log("jari-jari : " + jari);
    let luas = PHI * jari * jari;
    let kill = 2.0 * PHI * jari;
    console.log("luas : " + luas);
    console.log("kll : " + kill);
    let area_hasil = document.getElementById("hasil");
    area_hasil.innerHTML = "luas : " + luas + "\nKeliling : " + kill;
  }