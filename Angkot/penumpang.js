var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot nya kosong 
    if (penumpang.length == 0 ) {
        // tambah penumpang di awal array 
        penumpang.push(namaPenumpang);
        //kembaliin isi array & keluar dari function 
        return penumpang;

    } else {
        // telusuri kursi nya dari awal 
        for ( i = 0; i < penumpang.length; i++) {
            //kalau ada kursi yang kosong
            if (penumpang[i] == undefined) {
                //tambah penumpang di kursi tersebut 
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
        //jika sudah ada nama yang sama
        else if (penumpang[i] == namaPenumpang) {
            //tampilkan pesan kesalahan nya 
            console.log(namaPenumpang + ' sudah ada di dalam angkot.');
            //return isi array & keluar dari function 
            return penumpang;
        }
            
            
        //jika seluruh kursi terisi 
        else if (i == penumpang.length - 1) {
            //tambah penumpang di akhir array 
            penumpang.push(namaPenumpang);
            //return isi array & keluar dari function 
            return penumpang;
        } 
            
        }

    }
}


var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot nya masih kosong');
    } else{
        for (i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' Tidak ada di dalam angkot.');
                return penumpang;
            }
            
        }
    }
    return penumpang;
}