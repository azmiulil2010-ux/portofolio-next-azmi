import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
    return (
        <Link
            href={`/proyek/${proyek.slug}`}
            className="group block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md"
        >
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                    src={proyek.gambar}
                    alt={`Tangkapan layar ${proyek.judul}`}
                    fill
                    className="object-cover object-top transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div className="p-5">
                <span className="rounded-full bg-latar dark:bg-gray-900 px-3 py-1 text-xs font-semibold text-utama dark:text-sky-200">
                    {proyek.kategori}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-utama dark:text-sky-200 transition group-hover:text-aksen dark:text-red-300">
                    {proyek.judul}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {proyek.deskripsi}
                </p>
            </div>
        </Link>
    );
}
