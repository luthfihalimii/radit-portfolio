# Radit Portfolio

Portfolio pribadi berbasis Astro untuk menampilkan profil, pendidikan, minat, proyek, dan dokumen pendukung.

## Stack

- Astro
- Tailwind CSS v4
- daisyUI
- astro-icon

## Menjalankan project

Semua perintah dijalankan dari root project.

| Command | Action |
| :-- | :-- |
| `bun install` | Memasang dependency sesuai `bun.lock` |
| `bun run dev` | Menjalankan dev server lokal |
| `bun run build` | Build production ke `dist/` |
| `bun run preview` | Preview hasil build |
| `bun run check` | Menjalankan Astro type/content check |

## Struktur konten

Semua konten utama disimpan di Markdown di dalam `src/content`:

- `about/` untuk profil utama
- `works/` untuk aktivitas dan pengalaman
- `studies/` untuk riwayat pendidikan
- `projects/` untuk proyek
- `certificates/` untuk fokus belajar atau pencapaian
- `blogs/` untuk catatan belajar
- `contact/` untuk tautan kontak

## Catatan edit

- Layout dan komponen ada di `src/layouts` dan `src/components`.
- Jika ingin menambah section baru, edit `src/components/Container.astro`.
- Jika ingin mengganti isi kartu, cukup ubah file Markdown terkait tanpa mengubah komponen.
