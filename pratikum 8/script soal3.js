// input jam masuk
const jamMasuk = prompt('Masukan Jam Masuk ? ');

// input jam keluar
const jamKeluar = prompt('Masukan Jam Keluar ? ');

// selisih
const selisih = Number(jamKeluar) - Number(jamMasuk);

// tarif awal
const tarifAwal = 3000;

// tarif 2 jam
if(selisih <=2){
    alert(`Biaya keluaran :${tarifAwal}`);
}else{
    const tarifAkhir = tarifAwal + (selisih - 2) * 1000;
    alert(`Biaya keluaran :${tarifAwal}`);
}

