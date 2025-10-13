function Certificates() {
const certs = [
{ name: 'Coursera — Web App Security', img: '/cert-coursera.png', link: '#' },
{ name: 'Udemy — Django REST', img: '/cert-udemy.png', link: '#' },
{ name: 'Cisco — Networking', img: '/cert-cisco.png', link: '#' },
];

return (
<section id="certificates" className="py-20 px-6 bg-blue-50 dark:bg-slate-900/40">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-blue-700 mb-8">{i18n.en.certificatesTitle}</h2>
<div className="grid md:grid-cols-3 gap-6">
{certs.map((c) => (
<div key={c.name} className="p-4 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
<img src={c.img} alt={c.name} className="mx-auto w-32 h-auto mb-3" />
<div className="text-sm font-medium text-slate-700 dark:text-slate-200">{c.name}</div>
</div>
))}
</div>
</div>
</section>
);
}