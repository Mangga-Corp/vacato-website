import type { CommonContent } from '../types'

export const common = {
  skipToContent: 'Langsung ke konten',
  appIconAlt: 'Ikon aplikasi Vacato',
  nav: {
    ariaLabel: 'Navigasi utama',
    homeAriaLabel: 'Vacato, ke beranda',
    features: 'Fitur',
    support: 'Bantuan',
    privacy: 'Privasi',
  },
  header: {
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    mobileMenuLabel: 'Menu',
  },
  language: {
    label: 'Bahasa',
    options: {
      en: { short: 'EN', name: 'English', ariaLabel: 'Ganti ke bahasa Inggris' },
      id: { short: 'ID', name: 'Bahasa Indonesia', ariaLabel: 'Ganti ke Bahasa Indonesia' },
    },
  },
  theme: {
    switchToDark: 'Ganti ke mode gelap',
    switchToLight: 'Ganti ke mode terang',
  },
  appStore: {
    comingSoon: 'Segera hadir di App Store',
    badgeAlt: 'Unduh Vacato di App Store',
  },
  phone: {
    placeholderLabel: 'Tangkapan layar aplikasi Vacato',
  },
  footer: {
    navAriaLabel: 'Navigasi footer',
    tagline: 'Panduan kamera agar siapa pun bisa memotret Anda sesuai selera.',
    contact: 'Kontak',
    rights: 'Hak cipta dilindungi.',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    body: 'Tautannya mungkin salah, atau halamannya sudah dipindahkan.',
    cta: 'Kembali ke beranda',
  },
} satisfies CommonContent
