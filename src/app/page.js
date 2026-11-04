import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";
import Kartu from "@/components/Kartu";

const proyekTerbaru = proyek.slice(-3);

const hobi = [
  "Membaca buku dan dokumentasi teknologi",
  "Bermain game strategi dan asah logika",
  "Eksplorasi coding web dan desain UI/UX",
];

const rencana = [
  "Menyelesaikan modul Kelas Industri UBIG dengan nilai memuaskan",
  "Menguasai JavaScript, React, dan ekosistem Next.js",
  "Membangun portofolio web yang menarik dan responsif",
  "Menjadi Junior Web Developer profesional",
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  { hari: "Senin", jam: "07.00 - 15.00", kegiatan: "Sekolah & Teori Pemrograman Dasar" },
  { hari: "Selasa", jam: "07.00 - 15.00", kegiatan: "Praktik HTML & CSS Layouting" },
  { hari: "Rabu", jam: "07.00 - 15.00", kegiatan: "Logika JavaScript & DOM Manipulation" },
  { hari: "Kamis", jam: "07.00 - 15.00", kegiatan: "Pengenalan Next.js & Tailwind CSS" },
  { hari: "Jumat", jam: "07.00 - 11.30", kegiatan: "Review Proyek & Portofolio" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <Hero
        nama="Muhammad Ulil Azmi"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* 3. Kartu Keahlian */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">ProyekTerbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>

        <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}