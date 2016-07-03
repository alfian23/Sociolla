# Sociolla
Technical Test for Front-end Web Developer<br>
<h4>Menggunaan Library :</h4>
1. Bootstrap.<br>
2. AngularJS.<br>
3. Custom Css and JavaScript.<br>
4. Validator Bootstrap.<br>
5. Select2 for ComboBox.<br>

<h4>Cara Menggunakan secara offline :</h4>
1. Buka applikasi XAMPP.<br>
2. Taro file di htdocs<br>
3. Nyalakan Appace dari xampp.<br>
4. Jalankan Html melalui localhost.<br><br>

<h5>* Mengapa butuh XAMPP</h5>
	- Kerana untuk menggunakan HTTP POST di butuh kan Server / PHP, Javascript dan html hanya untuk di sisi Client jika ingin memproses data di butuhkan server menggunakan Appache / PHP.<br>
	- Untuk contoh saya sudah upload di hosting http://alfian.ceplasceplosnet.com/test_sociolla/ silahkan untuk di coba menggunakan HTTP POST dari angularJS tanpa Reload Page.
<br>
<h3>Jawaban dari 2 pertanyaan :</h3>

1. How do you prevent the user from submitting the form prematurely when the user hit enter?<br>
Answers :<br>
	- Untuk mencegah saya menggunakan Validator Bootstrap, jika field atau masih ada yang kosong maka validator bootstrap mencegah dengan cara button submit / enter disabled.
<br>
2. How do you add validation and error messages to the form?<br>
Answers :<br>
	- Jika user tidak mengisi full atau masih ada field yang kosong maka field yang kosong akan berubah menjadi merah dan ada text di bawah field bahwa field tidak boleh kosong saya menggunakan bootstrap dan angularJS untuk mengecek form tersebut
<br>
	- Jika file tidak bisa mengirimkan data maka AngularJS akan memberikan informasi tentang gagalnya pengiriman data dengan alert danger yang sudah di tersedia di bootstrap.
