// Data siswa dalam bentuk array
const siswa = [
    {
      nama: 'Ahmad',
      umur: 16,
      jenisKelamin: 'Laki-laki',
      alamat: 'Jl. Merdeka No. 123',
      nilai: {
        matematika: 85,
        bahasaInggris: 78,
        fisika: 90,
      },
    },
    {
      nama: 'Rina',
      umur: 17,
      jenisKelamin: 'Perempuan',
      alamat: 'Jl. Maju Mundur No. 456',
      nilai: {
        matematika: 90,
        bahasaInggris: 88,
        fisika: 82,
      },
    },
  ];
  
  // Destructuring array untuk mendapatkan data siswa pertama dan kedua
  const [siswaPertama, siswaKedua] = siswa;
  
  // Destructuring object untuk mendapatkan nilai-nilai siswa pertama
  const { matematika: nilaiMatematikaSiswa1, bahasaInggris: nilaiBingSiswa1, fisika: nilaiFisikaSiswa1 } = siswaPertama.nilai;
  
  // Destructuring object untuk mendapatkan nilai-nilai siswa kedua
  const { matematika: nilaiMatematikaSiswa2, bahasaInggris: nilaiBingSiswa2, fisika: nilaiFisikaSiswa2 } = siswaKedua.nilai;
  
  // Default value untuk siswa ketiga (jika data tidak ada)
  const siswaKetiga = {
    nama: 'Budi',
    umur: 15,
    jenisKelamin: 'Laki-laki',
    alamat: 'Jl. Harapan No. 789',
    nilai: {
      matematika: 70,
      bahasaInggris: 75,
      fisika: 80,
    },
  };
  
  // Destructuring object untuk mendapatkan data siswa ketiga
  const { nama: namaSiswa3, umur: umurSiswa3, alamat: alamatSiswa3, jenisKelamin: jenisKelaminSiswa3, nilai: { matematika: nilaiMatematikaSiswa3, bahasaInggris: nilaiBingSiswa3, fisika: nilaiFisikaSiswa3 } } = siswaKetiga;
  
  // Membuat alias untuk beberapa nilai
  const { nama: namaSiswa1, umur: umurSiswa1, alamat: alamatSiswa1, jenisKelamin: jenisKelaminSiswa1 } = siswaPertama;
  const { nama: namaSiswa2, umur: umurSiswa2, alamat: alamatSiswa2, jenisKelamin: jenisKelaminSiswa2 } = siswaKedua;
  
  // Menggabungkan data siswa dalam satu teks
  const gabunganDataSiswa = `
  Daftar Siswa:
  1. Nama: ${namaSiswa1}, Umur: ${umurSiswa1}, Jenis Kelamin: ${jenisKelaminSiswa1}, Alamat: ${alamatSiswa1}
     - Nilai Matematika: ${nilaiMatematikaSiswa1}, Nilai Bahasa Inggris: ${nilaiBingSiswa1}, Nilai Fisika: ${nilaiFisikaSiswa1}
  
  2. Nama: ${namaSiswa2}, Umur: ${umurSiswa2}, Jenis Kelamin: ${jenisKelaminSiswa2}, Alamat: ${alamatSiswa2}
     - Nilai Matematika: ${nilaiMatematikaSiswa2}, Nilai Bahasa Inggris: ${nilaiBingSiswa2}, Nilai Fisika: ${nilaiFisikaSiswa2}
  
  3. Nama: ${namaSiswa3}, Umur: ${umurSiswa3}, Jenis Kelamin: ${jenisKelaminSiswa3}, Alamat: ${alamatSiswa3}
     - Nilai Matematika: ${nilaiMatematikaSiswa3}, Nilai Bahasa Inggris: ${nilaiBingSiswa3}, Nilai Fisika: ${nilaiFisikaSiswa3}
  `;
  
  console.log(gabunganDataSiswa);
  