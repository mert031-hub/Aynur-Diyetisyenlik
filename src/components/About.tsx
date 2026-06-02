import Image from 'next/image';

const qualities = [
  'Kişiselleştirilmiş beslenme planları',
  'Bilimsel ve kanıta dayalı yaklaşım',
  'Uzun vadeli sürdürülebilir sonuçlar',
  'Empati ve motivasyon odaklı rehberlik',
  'Kronik hastalıklarda uzman destek',
];

export default function About() {
  return (
    <section id="hakkimda" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Images */}
          <div className="relative pb-8 lg:pb-0 reveal-left">
            {/* Main image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/images/diyetkadin2.jpg"
                alt="Aynur Kazak - Uzman Diyetisyen"
                width={600}
                height={700}
                priority
                className="object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card: experience */}
            <div className="absolute -bottom-6 right-0 sm:-right-4 lg:-right-8 z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-100 w-40 sm:w-44">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">Deneyim</span>
              </div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-text">10+</div>
              <div className="text-sm text-text-muted">Yıl uzman hizmet</div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-primary/[.08] -z-10" />
            <div className="absolute top-1/2 -right-4 w-24 h-24 rounded-full bg-accent/30 -z-10" />

            {/* Small accent image — hidden on xs to prevent overflow */}
            <div className="hidden sm:block absolute top-8 -right-4 lg:-right-10 z-20 w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-100">
              <Image
                src="/images/saglikliyemek.jpg"
                alt="Sağlıklı beslenme"
                width={120}
                height={120}
                loading="lazy"
                className="object-cover w-full h-full"
                sizes="120px"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 reveal-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Hakkımda
            </div>

            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight">
                Sağlığınız İçin
                <span className="block text-primary">Buradayım</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Merhaba, ben <strong className="text-text">Aynur Kazak</strong> — Afyonkarahisar&apos;da
                10 yılı aşkın deneyimle binlerce danışanımın sağlık yolculuğuna eşlik eden uzman diyetisyeniniz.
              </p>
              <p className="text-text-muted leading-relaxed">
                Her bireyin metabolizması, yaşam tarzı ve sağlık hedefleri farklıdır.
                Bu nedenle her danışanım için tamamen kişiselleştirilmiş, bilimsel temelli ve
                sürdürülebilir beslenme programları hazırlıyorum. Amacım sadece kilo verdirmek değil;
                sizinle birlikte sağlıklı yaşam alışkanlıkları geliştirip bunları hayatınızın
                kalıcı bir parçası haline getirmek.
              </p>
            </div>

            <ul className="space-y-3">
              {qualities.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-muted">{q}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                Randevu Al
              </a>
              <a
                href="https://wa.me/905388371509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
