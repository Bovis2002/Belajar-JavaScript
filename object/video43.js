//this 
//sebuah keyword spesial yang secara otomatis itu di definisikan pada setiap function 
//console.log(this); 

//membuat object 

//cara 1 - function Declaration  
//function halo() {
//    console.log(this);
//    console.log('halo');
//} 
//halo();
// this mengembalikan object global 






// cara 2 - Object Literal 
//var obj = {a : 10, nama : 'hafidz'};
//obj.halo = function(){
//    console.log(this);
//   console.log('halo');
//}
//obj.halo();
//this mengembalikan object yang bersangkutan 









//cara 3 - Constructor 
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
//this mengembalikan object yang baru dibuat 






