<h1>Penjelasan Program</h1>

<h2>Section 2 - 4</h2>
<h3>section 2</h3>
<p>Contoh 1:<br>
Metode ini document.getElementsByClassName()digunakan untuk memilih semua elemen pada halaman yang memiliki nama class "myClass". Metode ini mengembalikan kumpulan elemen, yang mirip dengan array.<br>
Kode kemudian membuat forloop yang berulang melalui setiap elemen dalam koleksi.<br>
Untuk setiap elemen dalam koleksi, loop menyetel backgroundColorproperti objek elemen stylemenjadi "kuning". Ini mengubah warna latar belakang elemen menjadi kuning.<br>
Perulangan berlanjut hingga semua elemen dalam koleksi telah diproses. </p>
<br>
<p>Contoh 2:<br>
Ini adalah kode JavaScript yang memilih semua lielemen HTML pada halaman web dan menambahkan "sorotan" kelas CSS ke dalamnya.<br>
Metode document.getElementsByTagName("li")memilih semua elemen HTML dengan nama tag "li". Metode ini mengembalikan HTMLCollection yang merupakan objek mirip larik yang berisi semua elemen yang dipilih.<br>
Perulangan forkemudian mengulang melalui setiap elemen dalam HTMLCollection dan menambahkan kelas "sorot" ke dalamnya menggunakan metode classList.add("highlight"). Metode ini menambahkan kelas tertentu ke elemen classList, yang merupakan kumpulan dari semua kelas CSS yang diterapkan pada elemen tersebut.<br>
Secara keseluruhan, kode ini menyorot semua lielemen pada halaman web dengan menambahkan kelas CSS "highlight" ke dalamnya.</p>
<br>
<p>Contoh 3:<br>
Program ini berfungsi untuk mengubah ukuran font pada elemen kedua dari elemen paragraf yang terdapat pada elemen dengan id "myElement" di dalam sebuah halaman web.<br>
Baris pertama program menggunakan metode "querySelector()" untuk memilih elemen dengan id "myElement", lalu menentukan elemen kedua dari semua elemen paragraf di dalamnya dengan menggunakan selector "p:nth-child(2)".<br>
Baris kedua program kemudian mengubah ukuran font pada elemen tersebut dengan menggunakan properti "style.fontSize" dan memberikan nilai "20px". Dengan demikian, program ini akan membuat teks pada elemen tersebut memiliki ukuran font sebesar 20 piksel.</p>
<br>

<h3>section 3</h3>
<p>Contoh 1:<br>
Mencari elemen dengan id "myChildElement" menggunakan metode getElementById() dan menyimpannya dalam variabel childElement.<br>
Mencari parent node dari childElement menggunakan properti parentNode dan menyimpannya dalam variabel parentElement.<br>
Mengubah style dari parentElement dengan mengatur properti backgroundColor menjadi "blue".<br>
Dalam hal ini, program tersebut mengubah warna latar belakang dari elemen parent dari childElement menjadi biru.</p>
<br>
<p>Contoh 2:<br>
Mencari parent element dengan id "myParentElement" menggunakan metode document.getElementById("myParentElement"), dan menampungnya ke dalam variabel parentElement.<br>
Mendapatkan list seluruh child elements dari parent element tersebut menggunakan property childNodes, dan menampungnya ke dalam variabel childElements.<br>
Dilakukan looping dengan for untuk setiap child element yang ada di dalam parent element dengan indeks i.<br>
Melakukan pengecekan apakah child element yang diambil merupakan element node atau bukan menggunakan property nodeType. Jika nodeType bernilai 1, maka child element tersebut merupakan element node.<br>
Jika child element yang diambil merupakan element node, maka warna teks dari element tersebut diubah menjadi merah dengan mengatur property style.color menjadi "red".</p>
<br>
<p>Contoh 3:<br>
const targetElement = document.getElementById("myTargetElement"); : Mendapatkan elemen dengan id "myTargetElement" dan menyimpannya ke dalam variabel targetElement.<br>
const siblingElements = targetElement.parentNode.children; : Mendapatkan semua elemen anak dari parent node targetElement dan menyimpannya ke dalam variabel siblingElements.<br>
for (let i = 0; i < siblingElements.length; i++) { : Melakukan loop sebanyak jumlah elemen anak yang dimiliki oleh parent node targetElement.<br>
if (siblingElements[i] !== targetElement) { : Memeriksa apakah elemen anak yang sedang diproses saat ini tidak sama dengan targetElement.<br>
siblingElements[i].style.backgroundColor = "green"; : Jika elemen anak yang sedang diproses saat ini bukan targetElement, maka ubah warna latar belakangnya menjadi hijau dengan cara mengatur property backgroundColor pada style elemen tersebut menjadi "green".</p>
<br>

<h3>section 4</h3>
<p>Contoh 1:<br>
Program di atas menghasilkan sebuah button yang akan ditambahkan ke dalam paragraph (p) dalam halaman HTML.<br>
Pertama, kode ini membuat sebuah elemen button baru menggunakan metode createElement() dan menyimpannya dalam variabel button.<br>
Selanjutnya, teks pada button tersebut diatur menggunakan properti textContent.<br>
Kemudian, elemen paragraf pertama (p) dalam halaman HTML dipilih menggunakan metode querySelector() dan disimpan dalam variabel paragraph.<br>
Terakhir, button tersebut ditambahkan sebagai child node atau simpul anak dari elemen paragraf menggunakan metode appendChild(). Sehingga button akan muncul di bawah paragraf pertama dalam halaman HTML.<br>
Secara keseluruhan, program ini akan menambahkan sebuah button dengan teks "Klik saya" di bawah paragraf pertama dalam halaman HTML.</p>
<br>
<p>Contoh 2:<br>
Pertama, program mengambil elemen h1 dari halaman HTML menggunakan document.querySelector("h1"). Kemudian, program mengakses properti textContent dari elemen tersebut, dan mengubah nilainya menjadi "Selamat Datang!". Sehingga, teks yang terlihat pada halaman HTML akan berubah dari teks sebelumnya menjadi "Selamat Datang!".<br>
Program ini sangat sederhana, namun dapat digunakan untuk memperbarui teks pada elemen HTML lainnya dengan cara yang sama. Selain itu, Anda juga dapat mengubah properti lain dari elemen menggunakan pendekatan yang sama, seperti style, class, atau atribut.</p>
<br>
<p>Contoh 3:<br>
Program di atas digunakan untuk membuat dua elemen paragraf menggunakan document.createElement(), menambahkan teks pada elemen paragraf menggunakan textContent, dan menyusun kedua elemen tersebut ke dalam sebuah document fragment menggunakan document.createDocumentFragment(). Kemudian, kedua elemen paragraf dimasukkan ke dalam fragment menggunakan appendChild().<br>
Setelah itu, fragment yang berisi dua elemen paragraf tersebut dimasukkan ke dalam elemen container yang telah diambil menggunakan document.querySelector(), dengan menggunakan appendChild().<br>
Dengan menggunakan document fragment, kita dapat menghindari perubahan langsung pada DOM tree sehingga mengurangi waktu rendering pada browser. Sebagai contoh, jika kita ingin menambahkan banyak elemen pada DOM tree sekaligus, lebih baik kita susun elemen-elemen tersebut pada sebuah document fragment dan menambahkannya ke dalam DOM tree hanya sekali, daripada menambahkan satu persatu elemen pada DOM tree.</p>
<br>


<h2>Section 4 - 6</h2>
<h3>section 4</h3>
<p>Contoh 1:<br>
var button = document.querySelector("#ganti-gambar"); --> Mendapatkan referensi elemen HTML untuk tombol dengan ID "ganti-gambar".<br>
var image = document.querySelector("#gambar"); --> Mendapatkan referensi elemen HTML untuk gambar dengan ID "gambar".<br>
button.addEventListener("click", function() { ... }); --> Menambahkan event listener pada tombol "ganti-gambar" agar melakukan aksi tertentu ketika di klik.<br>
var newImage = document.createElement("img"); --> Membuat elemen gambar baru dengan tag "img".<br>
newImage.src = "path/to/new/image.png"; --> Mengatur sumber gambar untuk gambar baru yang akan diganti.<br>
image.parentNode.replaceChild(newImage, image); --> Mengganti gambar lama dengan gambar baru dalam struktur DOM, dimana gambar lama dihapus dari elemen parent dan diganti dengan gambar baru.</p>
<br>
<p>Contoh 2:<br>
Program tersebut berfungsi untuk menambahkan sebuah elemen baru ke dalam container, tepat di antara dua elemen yang sudah ada di dalamnya.<br>
Pertama, program ini mencari elemen dengan id "container" dan menyimpannya dalam variabel container menggunakan method document.querySelector().<br>
Kemudian, program mencari dua elemen lain dengan id "existing-element-1" dan "existing-element-2" dan menyimpannya masing-masing dalam variabel existingElement1 dan existingElement2.<br>
Setelah itu, program membuat sebuah elemen baru menggunakan method document.createElement(), dengan jenis elemen "div". Selanjutnya, teks "Ini adalah elemen baru." ditambahkan ke dalam elemen tersebut menggunakan properti textContent.<br>
Lalu, program menggunakan method insertBefore() untuk memasukkan elemen baru tersebut di antara existingElement1 dan existingElement2, sehingga elemen baru akan menjadi elemen kedua di dalam container. Argument pertama dari method insertBefore() adalah elemen baru yang akan dimasukkan, sedangkan argument kedua adalah elemen yang sudah ada dan setelahnya elemen baru akan dimasukkan.</p>
<br>

<h3>section 5</h3>
<p>Contoh 1:<br>
Program di atas digunakan untuk mengubah nilai atribut class pada elemen HTML dengan ID "judul".<br>
Pertama, document.getElementById("judul") digunakan untuk mendapatkan elemen HTML dengan ID "judul". Kemudian, setAttribute() dipanggil pada elemen tersebut dengan dua argumen: class sebagai nama atribut yang ingin diubah dan tebal sebagai nilai atribut yang baru. Akibatnya, nilai atribut class pada elemen HTML tersebut akan diubah dari nilai awal menjadi "tebal".<br>
Dalam hal ini, kemungkinan pada CSS kita telah membuat style untuk class "tebal" yang ingin diaplikasikan pada elemen HTML dengan ID "judul".</p>
<br>
<p>Contoh 2:<br>
Pada baris pertama, program menggunakan method getElementById() untuk mencari elemen dengan id gambar. Kemudian hasil pencarian disimpan dalam variabel elemenGambar.<br>
Kemudian pada baris kedua, program menggunakan method getAttribute() untuk mendapatkan nilai atribut src dari elemen gambar yang ditemukan pada baris pertama. Nilai dari atribut src ini kemudian disimpan dalam variabel nilaiSrc.<br>
Pada baris ketiga, program mencetak nilai dari variabel nilaiSrc ke konsol menggunakan method console.log(). Hal ini berguna untuk memastikan bahwa nilai atribut src berhasil didapatkan dengan benar dan sesuai dengan yang diharapkan.</p>
<br>

<h3>section 6</h3>
<p>Contoh 1:<br>
Pada baris pertama, program menggunakan method getElementById() untuk mencari elemen dengan id gambar. Kemudian hasil pencarian disimpan dalam variabel elemenGambar.<br>
Kemudian pada baris kedua, program menggunakan method getAttribute() untuk mendapatkan nilai atribut src dari elemen gambar yang ditemukan pada baris pertama. Nilai dari atribut src ini kemudian disimpan dalam variabel nilaiSrc.<br>
Pada baris ketiga, program mencetak nilai dari variabel nilaiSrc ke konsol menggunakan method console.log(). Hal ini berguna untuk memastikan bahwa nilai atribut src berhasil didapatkan dengan benar dan sesuai dengan yang diharapkan.</p>
<br>
<p>Contoh 2:<br>
Langkah pertama adalah dengan menggunakan metode document.getElementById("title") untuk mengambil elemen dengan id "title". Kemudian, window.getComputedStyle() digunakan untuk mendapatkan objek CSSStyleDeclaration yang berisi semua properti CSS yang diterapkan pada elemen tersebut.<br>
Terakhir, getPropertyValue("color") digunakan untuk mendapatkan nilai warna yang diterapkan pada properti "color" pada objek CSSStyleDeclaration. Hasilnya kemudian dicetak pada konsol dengan console.log(titleColor).</p>
<br>


<h2>Section 7 - 8</h2>
<h3>section 7</h3>
<p>Contoh 1:<br>
Use case 1: Ketika tombol "Escape" pada keyboard ditekan, modal yang memiliki kelas "modal" akan dihilangkan. Program tersebut menggunakan event listener untuk "keydown" pada window. Ketika event terjadi, program mengecek apakah key yang ditekan adalah "Escape". Jika ya, maka program akan menghilangkan kelas "show" dari elemen modal.<br>
Use case 2: Ketika tombol "Enter" pada keyboard ditekan dalam sebuah form, form akan di-submit. Program tersebut menggunakan event listener untuk "keydown" pada elemen form. Ketika event terjadi, program mengecek apakah key yang ditekan adalah "Enter". Jika ya, maka program akan mencegah submit form dan meng-submit form secara manual dengan menggunakan metode "submit()" pada elemen form tersebut.</p>
<br>
<p>Contoh 2:<br>
Baris pertama memilih elemen HTML dengan id "input-form" menggunakan metode querySelector dan menugaskan hasilnya ke variabel inputForm.<br>
Baris kedua memilih elemen HTML dengan id "input" menggunakan metode querySelector dan menugaskan hasilnya ke variabel input.<br>
Baris ketiga memilih elemen HTML dengan id "char-count" menggunakan metode querySelector dan menugaskan hasilnya ke variabel charCount.<br>
Program ini menambahkan event listener pada elemen input, yang akan terpicu setiap kali pengguna memasukkan input di kotak input. Ketika event terpicu, fungsi anonim di dalam event listener akan dijalankan. Fungsi ini memperbarui teks pada elemen HTML yang dipilih di baris ketiga dengan mengambil panjang string yang dimasukkan ke dalam kotak input, yang diperoleh dengan mengakses properti value pada elemen input. Hasil perhitungan tersebut kemudian ditampilkan di dalam elemen HTML yang dipilih pada baris ketiga dengan menggunakan properti innerText.</p>
<br>

<h3>section 8</h3>
<p>Contoh 1:<br>
Program di atas mengambil semua elemen input checkbox pada halaman HTML dan menambahkan event listener untuk setiap elemen. Ketika ada perubahan pada status checkbox (di-check atau di-uncheck), event listener akan menangkap perubahan tersebut dan melakukan tindakan sesuai kondisi yang terpenuhi.<br>
Dalam hal ini, program akan mengubah teks pada elemen label yang bersebelahan dengan checkbox yang diubah. Jika checkbox di-check, teks label akan diubah menjadi "Checked", dan jika checkbox di-uncheck, teks label akan diubah menjadi "Unchecked". Hal ini dilakukan dengan mengubah nilai dari properti textContent dari elemen label.</p>
<br>
<p>Contoh 2:<br>
Program di atas digunakan untuk menambah atau menghapus opsi pada sebuah elemen select (dropdown) berdasarkan pilihan yang dipilih oleh pengguna. Pertama, program ini mengambil referensi ke elemen select dengan menggunakan metode querySelector. Kemudian, program menambahkan event listener ke elemen select untuk mendengarkan perubahan pada nilai yang dipilih oleh pengguna. Ketika nilai berubah, program mengecek nilai yang dipilih dan memanggil fungsi yang sesuai: addOptions jika nilai adalah "fruit", addOptions dengan nilai "vegetable" jika nilai adalah "vegetable", atau clearOptions jika nilai tidak sama dengan "fruit" atau "vegetable".<br>
Fungsi addOptions digunakan untuk menambahkan opsi ke elemen select. Pertama, program memanggil clearOptions untuk membersihkan opsi yang ada pada elemen select. Kemudian, program menggunakan loop forEach untuk mengiterasi setiap opsi yang diberikan sebagai parameter. Untuk setiap opsi, program membuat elemen option baru dengan menggunakan document.createElement, dan menambahkan teks opsi dengan menggunakan properti textContent. Setelah itu, program menambahkan elemen option ke elemen select menggunakan metode appendChild.<br>
Fungsi clearOptions digunakan untuk menghapus semua opsi dari elemen select. Caranya dengan mengatur properti innerHTML dari elemen select menjadi string kosong.</p>
<br>