function Projects() {
const projects = [
{
title: 'Student Payment Bot',
desc: 'Telegram bot to manage student payments, generate reports and statistics.',
tech: 'Aiogram, Django, PostgreSQL',
github: 'https://github.com/asadbek/student-payment-bot',
demo: '#',
},
{
title: 'SSL & Port Scanner',
desc: 'Web app that checks SSL certificate validity, issuer and open ports.',
tech: 'Django, socket, ssl',
github: 'https://github.com/asadbek/ssl-port-scanner',
demo: '#',
},
{
title: 'Mini CMS Blog',
desc: 'Simple CMS with authentication, posts, categories and comments.',
tech: 'Django, DRF, JWT',
github: 'https://github.com/asadbek/mini-cms',
demo: '#',
},
];

return (
<section id="projects" className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-blue-700 mb-8">{i18n.en.projectsTitle}</h2>
<div className="grid md:grid-cols-3 gap-6">
{projects.map((p) => (
<article key={p.title} className="border rounded-lg p-5 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition">
<h3 className="font-semibold text-lg text-blue-700 mb-2">{p.title}</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{p.desc}</p>
<div className="text-xs text-slate-500 dark:text-slate-400 mb-3">Tech: {p.tech}</div>
<div className="flex gap-3">
<a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-md text-sm border-slate-300 hover:bg-slate-100">GitHub</a>
<a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800">Demo</a>
</div>
</article>
))}
</div>
</div>
</section>
);
}