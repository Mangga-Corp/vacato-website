import type { HomeContent } from '../types'

export const home = {
  hero: {
    headline: 'Difoto sesuai selera Anda.',
    subheadline:
      'Pilih beberapa foto favorit Anda. Vacato mempelajari gaya Anda langsung di iPhone, lalu memandu siapa pun yang memegang kamera, satu langkah sederhana setiap kali.',
    screenshotAlt:
      'Kamera Vacato menampilkan satu instruksi yang membantu fotografer menentukan framing foto.',
  },
  features: {
    eyebrow: 'Fitur',
    heading: 'Dibuat untuk saat Anda menyerahkan ponsel ke orang lain',
    intro:
      'Teman atau orang asing jarang memotret persis seperti yang Anda mau. Vacato memberi tahu mereka apa yang perlu diatur.',
    items: [
      {
        icon: 'images',
        title: 'Belajar dari foto favorit Anda',
        description:
          'Pilih 3 sampai 50 foto diri Anda yang paling disukai. Vacato mempelajari seberapa dekat, setinggi apa, dan semiring apa foto-foto itu diambil.',
      },
      {
        icon: 'navigation',
        title: 'Satu instruksi setiap kali',
        description:
          'Maju sedikit, naikkan ponsel, miringkan ke bawah. Fotografer cukup mengikuti satu arahan yang jelas, lengkap dengan animasi kecil dan getaran haptic.',
      },
      {
        icon: 'circle-check',
        title: 'Tahu kapan sudah pas',
        description:
          'Begitu jarak, tinggi, dan kemiringan sudah sesuai, kamera menampilkan “Take the photo now”. Hasilnya langsung tersimpan di Foto, dengan framing seperti foto referensi Anda.',
      },
      {
        icon: 'armchair',
        title: 'Berdiri atau duduk',
        description:
          'Vacato menyadari saat Anda duduk dan otomatis beralih ke foto seluruh badan. Anda juga bisa memilih sendiri: Full body, 3/4, atau Half body.',
      },
      {
        icon: 'sliders',
        title: 'Tanpa foto? Atur sendiri',
        description:
          'Buat gaya kustom tanpa foto sama sekali. Tentukan posisi Anda di dalam frame, serta sudut kamera: sejajar mata, rendah, atau tinggi.',
      },
      {
        icon: 'wand',
        title: 'Galeri dan sentuhan ringan',
        description:
          'Lihat semua foto Vacato di satu tempat. Coba lima look atau atur sendiri dengan slider. Hasil edit disimpan sebagai foto baru, jadi foto aslinya tetap utuh.',
      },
    ],
  },
  how: {
    eyebrow: 'Cara kerja',
    heading: 'Tiga langkah menuju foto yang benar-benar Anda suka',
    steps: [
      {
        title: 'Pilih foto favorit Anda',
        description:
          'Pilih minimal tiga foto diri Anda dan beri nama untuk gaya Anda. Vacato membacanya langsung di iPhone, lalu menampilkan kartu gaya Anda.',
      },
      {
        title: 'Serahkan ponsel Anda',
        description:
          'Pilih gaya Anda, buka kamera, lalu berikan ponsel ke teman atau orang lain. Jika ada beberapa orang di layar, fotografer tinggal mengetuk orang yang ingin difoto.',
      },
      {
        title: 'Ikuti arahan, lalu tekan shutter',
        description:
          'Maju atau mundur, naikkan atau turunkan ponsel, atur kemiringannya. Begitu kamera menandakan sudah pas, ambil fotonya.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privasi',
    heading: 'Foto Anda tetap di iPhone Anda.',
    body: 'Vacato mempelajari foto Anda langsung di perangkat. Foto tidak pernah diunggah, dan Anda tidak perlu mendaftar apa pun.',
    points: [
      'Foto dianalisis di iPhone Anda, bukan di server',
      'Tanpa akun atau pendaftaran',
      'Tanpa analitik dan tanpa pelacakan',
      'Hanya meminta akses kamera dan foto',
    ],
    link: 'Baca kebijakan privasi',
  },
  finalCta: {
    heading: 'Biarkan siapa pun memotret Anda sesuai selera.',
    body: 'Vacato dibuat untuk liburan, jalan-jalan, dan setiap kali Anda meminta tolong orang lain memotret Anda.',
  },
} satisfies HomeContent
