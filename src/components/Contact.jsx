import i18n from "../i18n";

export default function Contact({ lang }) {
  const txt = i18n[lang];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-slate-900/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
          {txt.contactTitle}
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          {txt.contactText}
        </p>

        <form
          action="mailto:asadbekabduolimov33@gmail.com"
          method="POST"
          encType="text/plain"
          className="grid gap-4"
        >
          <input
            name="name"
            placeholder={txt.placeholderName}
            className="w-full p-3 border rounded-md bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder={txt.placeholderEmail}
            className="w-full p-3 border rounded-md bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder={txt.placeholderMessage}
            rows={6}
            className="w-full p-3 border rounded-md bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors"
            >
              {txt.sendMessage}
            </button>
            <a
              href="https://t.me/asadbek101"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border rounded-md border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Telegram
            </a>
            <a
              href="https://github.com/Abduolimov03"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border rounded-md border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              GitHub
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
