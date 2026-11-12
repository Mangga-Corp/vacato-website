import type { SupportContent } from '../types'

export const support = {
  title: 'Bantuan',
  intro:
    'Punya pertanyaan, menemukan bug, atau punya ide? Berikut cara menghubungi kami, beserta jawaban untuk pertanyaan yang paling sering diajukan.',
  contact: {
    heading: 'Hubungi kami',
    emailLabel: 'Email',
    emailPending: 'Alamat email bantuan kami segera tersedia.',
    responseTime: 'Kami biasanya membalas dalam 2 sampai 3 hari kerja.',
  },
  actions: {
    pendingNote: 'Tersedia setelah alamat email bantuan dipublikasikan.',
    bug: {
      title: 'Laporkan bug',
      description:
        'Ada yang tidak berfungsi? Kirimkan pesan kepada kami. Email akan terbuka dengan template yang membantu kami menemukan masalahnya lebih cepat.',
      button: 'Laporkan bug',
    },
    feature: {
      title: 'Usulkan fitur',
      description: 'Punya ide agar Poto jadi lebih baik? Kami senang mendengarnya.',
      button: 'Usulkan fitur',
    },
  },
  mailto: {
    bug: {
      subject: 'Laporan bug Poto',
      intro: 'Halo, saya ingin melaporkan masalah pada Poto.',
      appVersionLabel: 'Versi aplikasi',
      deviceLabel: 'Model iPhone',
      osLabel: 'Versi iOS',
      descriptionLabel: 'Apa yang terjadi',
      stepsLabel: 'Langkah untuk mereproduksi',
    },
    feature: {
      subject: 'Usulan fitur Poto',
      intro: 'Halo, saya punya ide untuk Poto.',
      appVersionLabel: 'Versi aplikasi',
      ideaLabel: 'Ide saya',
      reasonLabel: 'Mengapa ini akan membantu',
    },
  },
  faq: {
    heading: 'Pertanyaan yang sering diajukan',
    intro:
      'Jawaban singkat untuk pertanyaan yang paling sering muncul. Tidak menemukan jawabannya? Gunakan opsi kontak di atas.',
    items: [
      {
        question: 'Apakah saya butuh koneksi internet?',
        answer:
          'Tidak. Mempelajari foto Anda dan memandu kamera sama-sama berjalan di iPhone. Internet hanya dipakai jika foto yang Anda pilih tersimpan di iCloud dan perlu diunduh dulu.',
      },
      {
        question: 'Apakah foto saya diunggah ke suatu tempat?',
        answer:
          'Tidak. Poto tidak punya server dan tidak pernah mengunggah foto Anda. Foto dianalisis di iPhone dan tetap di sana.',
      },
      {
        question: 'Apa saja yang disimpan Poto di iPhone saya?',
        answer:
          'Salinan berukuran lebih kecil dari foto referensi yang Anda pilih, beserta hasil pelajarannya (misalnya ukuran shot dan sudut kamera). Foto yang Anda ambil disimpan di aplikasi Foto, dan Poto menyimpan daftar kecil agar galerinya bisa menampilkan foto-foto tersebut. Poto tidak memakai akun.',
      },
      {
        question: 'Bagaimana cara menghapus data saya?',
        answer:
          'Untuk menghapus sebuah gaya beserta foto referensinya, buka menu “…” pada kartunya lalu pilih Delete. Untuk menghapus foto hasil jepretan, hapus dari galeri Poto, dan foto itu juga ikut terhapus dari aplikasi Foto. Menghapus aplikasi akan menghilangkan semua yang disimpan Poto di iPhone, tetapi foto yang sudah tersimpan di aplikasi Foto tetap ada sampai Anda menghapusnya di sana.',
      },
      {
        question: 'Bagaimana cara mengaktifkan kembali izin kamera?',
        answer:
          'Buka aplikasi Pengaturan (Settings), cari Poto, lalu aktifkan Kamera (Camera). Anda juga bisa mengetuk “Open Settings” di layar “Camera Access Needed”.',
      },
      {
        question: 'Bagaimana cara mengaktifkan kembali izin foto?',
        answer:
          'Buka Pengaturan (Settings), cari Poto, ketuk Foto (Photos), lalu izinkan akses. Poto membutuhkannya untuk memilih foto referensi dan menyimpan foto yang Anda ambil. Jika Anda hanya mengizinkan foto tertentu, ketuk “Add more” di pemilih foto untuk menambah foto lain.',
      },
      {
        question: 'Apakah Poto menggunakan lokasi saya?',
        answer: 'Tidak. Versi Poto ini tidak meminta maupun menggunakan lokasi Anda.',
      },
      {
        question: 'Apakah Poto memberi saran soal pencahayaan?',
        answer:
          'Belum di versi ini. Panduannya mencakup jarak, tinggi ponsel, dan kemiringan, yaitu hal-hal yang menentukan framing foto Anda.',
      },
      {
        question: 'Pesan “Take the photo now” tidak muncul. Apakah saya tetap bisa memotret?',
        answer:
          'Bisa, tombol shutter selalu berfungsi. Pesan hijau itu muncul ketika jarak, tinggi, dan kemiringan sudah sesuai dengan gaya Anda. Jika tidak muncul, pastikan orangnya terlihat di layar, ikuti instruksi yang tampil, lalu tahan ponsel dengan stabil sejenak.',
      },
      {
        question: 'Ada beberapa orang di layar. Siapa yang dipandu Poto?',
        answer:
          'Satu orang dalam satu waktu. Jika ada lebih dari satu orang, ketuk orang yang ingin difoto. Orang lainnya akan diredupkan.',
      },
      {
        question: 'Berapa banyak foto yang dibutuhkan untuk membuat sebuah gaya?',
        answer:
          'Minimal 3 dan maksimal 50. Pilih foto yang memperlihatkan Anda dengan jelas. Foto yang tidak memperlihatkan orang tidak bisa digunakan.',
      },
      {
        question: 'Bisakah saya mengedit foto yang saya ambil?',
        answer:
          'Bisa. Buka foto di galeri lalu ketuk Edit untuk mencoba lima look atau mengaturnya dengan slider. Saat disimpan, hasilnya menjadi foto baru dan foto aslinya tidak pernah berubah.',
      },
      {
        question: 'Apakah saya perlu membuat akun?',
        answer: 'Tidak. Tidak ada pendaftaran maupun login.',
      },
      {
        question: 'Apakah Poto membacakan instruksinya dengan suara?',
        answer:
          'Untuk saat ini belum. Instruksi tampil sebagai teks singkat, lengkap dengan animasi dan getaran haptic.',
      },
    ],
  },
  troubleshooting: {
    heading: 'Pemecahan masalah',
    intro: 'Sebagian besar masalah bisa diatasi dengan beberapa pemeriksaan singkat.',
    generalHeading: 'Coba ini dulu',
    generalSteps: [
      'Tutup Poto sepenuhnya, lalu buka kembali.',
      'Pastikan iPhone Anda sudah menggunakan iOS versi terbaru.',
      'Di Pengaturan, periksa apakah Poto diizinkan mengakses Kamera dan Foto.',
      'Pastikan penyimpanan iPhone Anda masih cukup.',
    ],
    specificHeading: 'Masalah tertentu',
    specificItems: [
      {
        problem: '“We couldn’t find a person in these photos.”',
        solution:
          'Pilih foto lain yang memperlihatkan Anda dengan jelas, lalu coba lagi. Ketuk “Choose Other Photos” untuk memilih foto baru.',
      },
      {
        problem: '“We couldn’t finish your photo analysis.”',
        solution:
          'Ketuk “Try again”. Jika masih terjadi, tutup dan buka kembali Poto. Analisis akan dimulai dari awal.',
      },
      {
        problem: 'Sebuah gaya tidak bisa dipakai dan diminta untuk mengedit fotonya',
        solution:
          'Buka menu “…” pada kartu gaya tersebut dan pilih Edit Photos. Tambahkan foto yang memperlihatkan orang dengan jelas, lalu Poto akan mempelajarinya lagi.',
      },
      {
        problem: '“Camera Access Needed”',
        solution:
          'Ketuk “Open Settings” dan aktifkan Kamera untuk Poto. Kembali ke aplikasi, lalu kamera akan menyala.',
      },
      {
        problem: '“Camera Not Available”',
        solution:
          'Kamera mungkin dibatasi di iPhone ini, misalnya lewat Screen Time. Periksa Pengaturan > Screen Time > Pembatasan Konten & Privasi.',
      },
      {
        problem: '“Photo Access Needed”, atau foto tidak tersimpan',
        solution:
          'Poto tidak bisa menyimpan ke pustaka foto tanpa izin. Izinkan akses di Pengaturan, lalu ambil fotonya lagi.',
      },
      {
        problem: '“Point back at the person”',
        solution:
          'Poto sempat kehilangan jejak orangnya. Arahkan kamera kembali ke orang tersebut, dan panduan akan berlanjut.',
      },
      {
        problem: '“Couldn’t save the preference and its photos”',
        solution:
          'Penyimpanan iPhone Anda mungkin hampir penuh. Kosongkan sedikit ruang, lalu coba lagi.',
      },
    ],
  },
  requirements: {
    heading: 'Persyaratan',
    items: [
      { icon: 'smartphone', label: 'iOS', value: 'iOS 26.0 atau lebih baru' },
      {
        icon: 'tablet-smartphone',
        label: 'Perangkat',
        value: 'iPhone dan iPad (iPhone dalam orientasi portrait)',
      },
      { icon: 'camera', label: 'Kamera', value: 'Wajib, untuk memandu dan mengambil foto' },
      {
        icon: 'images',
        label: 'Foto',
        value: 'Wajib, untuk memilih foto referensi dan menyimpan foto Anda',
      },
      { icon: 'map-pin', label: 'Lokasi', value: 'Tidak digunakan' },
      {
        icon: 'wifi',
        label: 'Internet',
        value: 'Tidak wajib (hanya untuk mengunduh foto yang tersimpan di iCloud)',
      },
      {
        icon: 'languages',
        label: 'Bahasa',
        value: 'Saat ini aplikasi tersedia dalam bahasa Inggris',
      },
    ],
  },
  version: {
    label: 'Versi terbaru',
  },
} satisfies SupportContent
