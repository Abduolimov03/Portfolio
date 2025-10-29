import i18n from "../i18n";

export default function Certificates({ lang }) {
  const txt = i18n[lang];

  const certs = [
    {
      name: "Najot Ta'lim — Python Backend (Django)",
      img: "/cert-najottalim.png",
      link: "#", // bu joyga haqiqiy sertifikat havolasini (PDF yoki URL) qo‘y
    },
    {
      name: "TATU — Bakalavr diplomi (Axborot xavfsizligi)",
      img: "/cert-bachelor.png",
      link: "#", // bu yerga ham istasang diplom PDF havolasini qo‘yish mumkin
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-blue-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-8">
          {txt.certificatesTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((c) => (
            <div
              key={c.name}
              className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition"
            >
              <a href={c.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={c.img}
                  alt={c.name}
                  className="mx-auto w-40 h-40 object-contain mb-4 hover:scale-105 transition-transform"
                />
              </a>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
