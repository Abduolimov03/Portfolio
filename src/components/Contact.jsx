function Contact({ lang }) {
const txt = i18n[lang];

return (
<section id="contact" className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-blue-700 mb-6">{txt.contactTitle}</h2>
<p className="text-slate-700 dark:text-slate-300 mb-6">{lang === 'uz' ? "Hamkorlik yoki ish takliflari uchun bog'laning." : 'Feel free to contact me for cooperation or job opportunities.'}</p>

<form action={`mailto:asadbek@example.com`} method="GET" className="grid gap-4">
<input name="name" placeholder={txt.placeholderName} className="w-full p-3 border rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
<input name="email" placeholder={txt.placeholderEmail} className="w-full p-3 border rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
<textarea name="message" placeholder={txt.placeholderMessage} rows={6} className="w-full p-3 border rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
<div className="flex gap-4">
<button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded-md">{txt.sendMessage}</button>
<a href="https://t.me/your_telegram" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">Telegram</a>
<a href="https://github.com/asadbek" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">GitHub</a>
</div>
</form>
</div>
</section>
);
}