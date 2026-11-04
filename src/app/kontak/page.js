export const metadata = {
    title: "Kontak | Ulil",
    description: "Hubungi Muhammad Ulil Azmi melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-gray-700">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* Kotak Form Kontak (2 kolom di layar lebar) */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nama" className="block font-semibold">
                                Nama lengkap
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                placeholder="Contoh: Budi Santoso"
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="nama@gmail.com"
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="telepon" className="block font-semibold">
                                Nomor HP
                            </label>
                            <input
                                type="tel"
                                id="telepon"
                                name="telepon"
                                placeholder="081234567890"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="keperluan" className="block font-semibold">
                                Keperluan
                            </label>
                            <select
                                id="keperluan"
                                name="keperluan"
                                defaultValue=""
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            >
                                <option value="" disabled>
                                    -- Pilih keperluan --
                                </option>
                                <option value="proyek">Tanya Proyek</option>
                                <option value="magang">Tawaran Magang</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="pesan" className="block font-semibold">
                                Pesan
                            </label>
                            <textarea
                                id="pesan"
                                name="pesan"
                                rows={5}
                                maxLength={300}
                                placeholder="Tulis pesanmu di sini"
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="rounded-lg bg-aksen px-6 py-2 font-semibold text-white hover:opacity-90"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-xs text-gray-500">
                        Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di Minggu 15.
                    </p>
                </div>

                {/* Kotak Temukan Saya di (1 kolom di layar lebar) */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-utama">
                        Temukan Saya di
                    </h2>
                    <div className="mt-4 flex flex-col gap-2">
                        <a
                            href="https://github.com/azmiulil2010-ux/portofolio-website-azmiv2.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-aksen hover:underline"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:azmiulil2010@gmail.com"
                            className="text-aksen hover:underline"
                        >
                            azmiulil2010@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
