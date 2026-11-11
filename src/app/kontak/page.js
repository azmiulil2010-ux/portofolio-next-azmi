import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak | Ulil",
    description: "Hubungi Muhammad Ulil Azmi melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 rounded-xl border border-border bg-card p-6 shadow-sm">
                    <FormKontak />
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-primary mb-3">
                        Temukan Saya di
                    </h2>
                    <div className="space-y-2 text-sm">
                        <div>
                            <a
                                href="https://github.com/azmiulil2010-ux"
                                target="_blank"
                                rel="noreferrer"
                                className="text-aksen hover:underline font-medium"
                            >
                                GitHub
                            </a>
                        </div>
                        <div>
                            <a
                                href="mailto:ulilazmi2010@gmail.com"
                                className="text-aksen hover:underline font-medium"
                            >
                                ulilazmi2010@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
