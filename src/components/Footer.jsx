function Footer() {
return (
<footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-6">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Asadbek — Backend Developer</div>
<div className="flex items-center gap-4">
<a href="mailto:asadbek@example.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-700"><Mail size={16} /></a>
<a href="https://github.com/asadbek" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-700"><Github size={16} /></a>
<a href="https://linkedin.com/in/asadbek" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-700"><Linkedin size={16} /></a>
</div>
</div>
</footer>
);
}