import type { PrivacyContent } from '../types'

// TODO: review legal
export const privacy = {
  title: 'Kebijakan Privasi',
  intro:
    'Kebijakan ini menjelaskan apa yang dilakukan Vacato terhadap informasi Anda. Singkatnya: foto Anda dianalisis di iPhone dan tidak dikirim kepada kami maupun pihak lain.',
  tocLabel: 'Di halaman ini',
  highlights: [
    {
      icon: 'smartphone',
      title: 'Di iPhone Anda',
      description: 'Foto dianalisis di perangkat dan tidak pernah diunggah.',
    },
    {
      icon: 'user',
      title: 'Tanpa akun',
      description: 'Tidak ada pendaftaran, dan tidak ada data pribadi yang dikumpulkan.',
    },
    {
      icon: 'shield-check',
      title: 'Tanpa pelacakan',
      description: 'Tanpa iklan, analitik, maupun pelacak pihak ketiga.',
    },
  ],
  lastUpdatedLabel: 'Terakhir diperbarui',
  sections: [
    {
      title: 'Ringkasan',
      icon: 'shield-check',
      paragraphs: [
        'Vacato tidak memiliki akun, server, iklan, analitik, maupun pelacakan. Kami tidak mengumpulkan data pribadi Anda. Semua yang dipelajari aplikasi dari foto Anda tetap berada di perangkat Anda.',
      ],
    },
    {
      title: 'Siapa kami',
      icon: 'user',
      paragraphs: [
        'Vacato dikembangkan oleh tim Vacato. Dalam kebijakan ini, “kami” merujuk pada Vacato. Anda dapat menghubungi kami melalui bagian Kontak di bawah.',
      ],
    },
    {
      title: 'Apa yang diakses Vacato',
      icon: 'key-round',
      paragraphs: ['Vacato hanya meminta apa yang dibutuhkan, tepat saat dibutuhkan.'],
      list: [
        'Foto yang Anda pilih: foto-foto yang Anda jadikan referensi agar Vacato dapat mempelajari gaya Anda. Salinan berukuran lebih kecil disimpan di dalam aplikasi.',
        'Kamera: digunakan secara langsung untuk melihat pemandangan, mengenali orang yang akan difoto, dan memberi panduan. Gambar dari kamera tidak direkam maupun diunggah.',
        'Pustaka Foto: digunakan untuk membaca foto referensi yang Anda pilih, menyimpan foto yang Anda ambil, menampilkannya di galeri Vacato, dan menghapusnya jika Anda memintanya.',
        'Sensor gerak: digunakan secara langsung untuk mengukur kemiringan ponsel Anda. Informasi ini tidak disimpan.',
        'Lokasi: tidak diminta dan tidak digunakan.',
      ],
    },
    {
      title: 'Bagaimana kami menggunakan informasi ini',
      icon: 'target',
      paragraphs: [
        'Foto referensi Anda dianalisis untuk mengetahui ukuran shot yang Anda sukai, posisi Anda di dalam frame, tinggi dan kemiringan kamera, postur, dan ciri serupa. Hasilnya hanya dipakai untuk memandu kamera saat seseorang memotret Anda dan untuk menampilkan kartu gaya Anda. Kami tidak menggunakannya untuk keperluan lain.',
      ],
    },
    {
      title: 'Di mana data Anda diproses',
      icon: 'smartphone',
      paragraphs: [
        'Seluruh analisis dan panduan kamera berjalan di iPhone Anda. Vacato tidak mengirim foto Anda, hasil analisisnya, maupun gambar dari kamera ke server mana pun.',
        'Jika foto yang Anda pilih tersimpan di iCloud Photos dan belum ada di iPhone, iOS dapat mengunduhnya dari iCloud agar bisa digunakan Vacato. Proses ini ditangani oleh sistem Foto Apple di perangkat Anda.',
      ],
    },
    {
      title: 'Pihak ketiga',
      icon: 'users',
      paragraphs: [
        'Vacato tidak menyertakan alat iklan, analitik, pelaporan error, maupun pelacakan, dan tidak membagikan informasi Anda kepada pihak ketiga. Vacato juga tidak memiliki backend yang kami kelola.',
      ],
    },
    {
      title: 'Berapa lama data disimpan',
      icon: 'clock',
      paragraphs: [
        'Foto referensi dan hasil pelajaran Vacato darinya tetap berada di iPhone Anda sampai Anda menghapus gaya tersebut atau menghapus aplikasinya. Foto yang Anda ambil tetap berada di pustaka Foto sampai Anda menghapusnya. Galeri Vacato menyimpan daftar kecil untuk menandai foto mana yang berasal dari aplikasi, dan memperbaruinya saat foto dihapus.',
      ],
    },
    {
      title: 'Menghapus data Anda',
      icon: 'trash',
      paragraphs: ['Anda selalu memegang kendali atas data Anda:'],
      list: [
        'Untuk menghapus sebuah gaya beserta foto referensinya, buka menu “…” pada kartu gaya lalu pilih Delete.',
        'Untuk menghapus foto hasil jepretan, hapus dari galeri Vacato. Foto tersebut juga ikut terhapus dari pustaka Foto Anda.',
        'Untuk menghapus semua yang disimpan Vacato di iPhone, hapus aplikasinya. Foto yang sudah tersimpan di pustaka Foto tetap ada sampai Anda menghapusnya.',
      ],
    },
    {
      title: 'Hak Anda',
      icon: 'scale',
      paragraphs: [
        'Karena kami tidak mengumpulkan atau menyimpan data pribadi Anda di server kami, tidak ada data yang perlu kami simpan, ekspor, atau hapus atas nama Anda. Anda dapat melihat dan menghapus semuanya sendiri di perangkat Anda. Jika Anda punya pertanyaan atau permintaan terkait privasi, hubungi kami dan kami dengan senang hati membantu.',
      ],
    },
    {
      title: 'Perubahan pada kebijakan ini',
      icon: 'refresh',
      paragraphs: [
        'Jika cara Vacato menangani data berubah, kami akan memperbarui halaman ini beserta tanggal “Terakhir diperbarui”.',
      ],
    },
    {
      title: 'Kontak',
      icon: 'mail',
      paragraphs: [
        'Untuk pertanyaan seputar privasi, silakan gunakan informasi kontak di halaman Bantuan pada situs ini.',
      ],
    },
  ],
} satisfies PrivacyContent
