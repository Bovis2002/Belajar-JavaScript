//manipulasi array 

// 1 Menambah isi array 

//var arr = [];
 
//arr[0] = "hafidz";
//arr[1] = "udin";
//arr[2] = "idih";
//arr[3] = "nofa";

//console.log(arr);

// 2 menghapus isi array 

//var arr = ["hafidz", "istiqlal", "udin"];
//arr[1] = undefined;
//console.log(arr);

// 3 menampilkan isi array 

//var arr = ["hafidz", "istiqlal", "udin","udah "];

//for(var i = 0; i < arr.length; i++){
//    console.log( 'Mahasiswa ke-' + (i+ 1)+' '+ arr[i]);
//}

// Method pada Array 

// 1.join 

//console.log(arr.join(' - '));

// 2. push & pop
//arr.push('saitama');
//arr.pop();


// 3. unshift & Shift 
//arr.unshift('saitama');
//arr.shift();
//console.log(arr.join(' - '));

// 4. Splice 
// splice(indexAwal, mauDihapusBerapa, elementBaru, elementBaru2, ..);
//arr.splice(1, 2, 'saitama');

// 5 slice
//slice(awal,akhir); //index awal bakal ke bawa ke array baru tapi yang akhir ngga  
//var arr = ["hafidz", "istiqlal", "udin","udah", "lahh"];

//var arr2 = arr.slice(1,3);

//console.log(arr2.join(' - '));

// 6. foreach 

//var angka = [1,2,3,4,5,6,7,8];
//var arr = ["hafidz", "istiqlal", "udin"];
//arr.forEach(function(e, i)  {
  //  console.log('mahasiswa ke-'+ (i+1) + 'adalah' + e);
//});

// 7.map 
//var angka = [1,2,3,4,5,6,7,8];
//var angka2= angka.map(function(e) {
  //  return e * 2;
//});
//console.log(angka2.join(' - '));


// 8. sort

//var angka = [1,2,3,4,5,6,7,8];
 //angka.sort();
//console.log(angka.join(' - '));
// sort ini akan mengurutkan sesuai angka awal nya jika ingin mengurutkan sesuai perhitungan maka
//var angka = [1,2,3,4,20,5,10,6,7,8];
 //angka.sort(function(a,b){
   // return a-b;
// });
//console.log(angka.join(' - '));

// 9. filter ngehasilin array 
//var angka = [1,2,3,4,20,5,10,6,7,8];
//var angka2 = angka.filter(function(x) {
  //  return x > 5;    
//});

//console.log(angka2);

// 10.find 
//cuma ngasilin satu nilai

var angka = [1,2,3,4,20,5,10,6,7,8];
var angka2 = angka.find(function(x) {
    return x > 5;    
});

console.log(angka2);










