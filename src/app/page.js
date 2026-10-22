import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

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

      {/* 1. Kartu Tentang Saya */}
      <Kartu judul="Tentang Saya">
        <p className="text-gray-700 leading-relaxed">
          Saya adalah siswa kelas XI SMK yang sedang mengikuti program Kelas Industri UBIG
          untuk mendalami web development. Memiliki minat yang besar dalam mempelajari teknologi web
          modern seperti JavaScript dan Next.js, serta bertekad untuk menjadi seorang Junior Web Developer
          yang kompeten dan siap berkontribusi di industri digital.
        </p>
      </Kartu>

      {/* 2. Kartu Hobi dan Cita-cita berdampingan (md:grid-cols-2) */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <ol className="list-decimal pl-5 space-y-1 text-gray-700">
            {rencana.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      {/* 3. Kartu Keahlian */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      {/* 4. Kartu Jadwal Belajar */}
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-utama text-white">
              <tr>
                <th className="p-3">Hari</th>
                <th className="p-3">Jam</th>
                <th className="p-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jadwal.map((item) => (
                <tr key={item.hari} className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">{item.hari}</td>
                  <td className="p-3 text-gray-700">{item.jam}</td>
                  <td className="p-3 text-gray-700">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}