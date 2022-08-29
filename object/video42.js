// membuat object 
//object literal 
var mhs1 = {
    nama : "Hafidz",
    nrp :'103920310',
    email : "sdjasdjal@hfsakdla",
    jurusan : 'Sistem Infromasi'
}

var mhs2 = {
    nama : "istiqlal",
    nrp :'1039203330',
    email : "sdjadassadal@hfsakdla",
    jurusan : 'Sistem Infromasi'
}

//Function Declaration 
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('udin', '13231334', 'shjdkahdka@gmail.com', 'Teknik Informatika')


//Constructor 
function Mahasiswa(nama, nrp, email, jurusan) {
    //var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    //return this:
}

var mhs4 = new Mahasiswa('Erik', '31293819', 'sjkdak@gmail.com', 'Teknik Mesin');
