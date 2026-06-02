'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Online danışmanlık nasıl işliyor?',
    a: 'Online danışmanlık; video görüşme, WhatsApp veya telefon aracılığıyla gerçekleştiriliyor. Beslenme programınız dijital olarak hazırlanıp size iletiliyor. Takip görüşmeleri de aynı şekilde online yapılıyor. Türkiye\'nin her yerinden ve yurt dışından danışanlarıma hizmet veriyorum.',
  },
  {
    q: 'İlk randevu nasıl alınır? Ücretli mi?',
    a: 'İlk ön değerlendirme görüşmesi ücretsizdir. Randevu almak için telefon, WhatsApp veya web sitemizdeki formu kullanabilirsiniz. Görüşme yaklaşık 15-20 dakika sürer ve size uygun programı belirlemek için kullanılır.',
  },
  {
    q: 'Takip görüşmeleri ne sıklıkla yapılıyor?',
    a: 'Program tipine ve hedeflerinize bağlı olarak genellikle 2 haftada bir veya ayda bir takip görüşmesi yapılıyor. Acil bir durum veya sorunuz olduğunda WhatsApp üzerinden her zaman ulaşabilirsiniz.',
  },
  {
    q: 'Diyet programım nasıl hazırlanıyor?',
    a: 'Detaylı sağlık geçmişi, beslenme alışkanlıkları, yaşam tarzı ve hedefleriniz değerlendirildikten sonra tamamen size özel bir program oluşturuyorum. Hazır şablonlar kullanmıyorum — her danışanım için sıfırdan, kişisel bir plan hazırlıyorum.',
  },
  {
    q: 'Çok sıkı bir diyet uygulamak zorunda kalacak mıyım?',
    a: 'Hayır. Amacım sizi hayattan koparacak kısıtlayıcı diyetler değil, günlük hayatınıza kolayca entegre olabilecek, zevkle sürdürebileceğiniz beslenme alışkanlıkları geliştirmeniz. Sizi mutsuz eden bir diyet uzun vadede başarılı olmaz.',
  },
  {
    q: 'Kronik hastalığım var, size başvurabilir miyim?',
    a: 'Kesinlikle. Tip 1-2 diyabet, insülin direnci, hiperlipidemi, gut hastalığı, tiroit, kalp-damar hastalıkları ve çok daha fazlası için uzman desteği sunuyorum. Mevcut tedavinizle uyumlu, doktorunuzla koordineli bir beslenme programı hazırlarım.',
  },
  {
    q: 'Ödeme seçenekleri neler?',
    a: 'Nakit, kredi kartı ve havale ile ödeme kabul ediyorum. Paket programlar için taksit seçeneği de mevcut. Fiyatlandırma hakkında detaylı bilgi için WhatsApp veya telefon üzerinden iletişime geçebilirsiniz.',
  },
  {
    q: 'Çocuğum için beslenme danışmanlığı alabilir miyim?',
    a: 'Evet, bebek beslenmesinden ergenlere kadar tüm çocuk yaş grupları için uzman beslenme danışmanlığı veriyorum. Gelişim geriliği, kilo kontrolü, okul çağı beslenme sorunları ve sporcu çocuklar için özel programlar hazırlıyorum.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Sık Sorulan Sorular
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight mb-4">
            Aklınızdaki{' '}
            <span className="text-primary">Sorular</span>
          </h2>
          <p className="text-text-muted text-lg">
            Burada cevap bulamazsanız WhatsApp veya telefon ile ulaşabilirsiniz.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? 'border-primary/30 bg-white shadow-sm'
                  : 'border-gray-100 bg-white hover:border-primary/20'
              }`}
            >
              <button
                className="w-full flex items-start gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors ${
                    openIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span
                  className={`font-heading font-semibold text-base transition-colors ${
                    openIndex === i ? 'text-primary' : 'text-text'
                  }`}
                >
                  {faq.q}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`faq-answer px-6 ${openIndex === i ? 'open pb-5' : ''}`}
              >
                <p className="text-text-muted leading-relaxed pl-10">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="text-center mt-12 reveal">
          <p className="text-text-muted mb-4">Başka sorularınız mı var?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/905388371509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BB5C] transition-colors text-sm"
            >
              WhatsApp'tan Sor
            </a>
            <a
              href="tel:+905388371509"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-text rounded-full hover:border-primary hover:text-primary transition-colors text-sm font-medium"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
