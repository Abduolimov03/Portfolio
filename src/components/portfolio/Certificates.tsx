import { motion } from "framer-motion";
import i18n from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import diplom from "@/assets/diplom.svg";
import sertificate from "@/assets/sertificate.jpg";
import diplomatic from "@/assets/diplom.pdf";

interface CertificatesProps {
  lang: "uz" | "en";
}

export default function Certificates({ lang }: CertificatesProps) {
  const txt = i18n[lang];

  const certs = [
    {
      name: "Najot Ta'lim — Python Backend (Django)",
      img: diplom,
      downloadUrl: diplomatic,
      isPdf: true
    },
    {
      name: "TATU — Bakalavr diplomi",
      img: sertificate,
      downloadUrl: diplomatic,
      isPdf: true
    },
  ];

  const handleDownload = (cert: typeof certs[0]) => {
    const link = document.createElement("a");
    link.href = cert.downloadUrl;
    const extension = cert.isPdf ? ".pdf" : ".jpg";
    link.download = cert.name.replace(/[^a-zA-Z0-9]/g, "_") + extension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-20 px-6 bg-section-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12">
          {txt.certificatesTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-40 h-40 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/160x160?text=Certificate";
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium text-foreground mb-3">
                    {cert.name}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => handleDownload(cert)}
                  >
                    <Download size={16} />
                    {lang === "uz" ? "Yuklab olish" : "Download"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
