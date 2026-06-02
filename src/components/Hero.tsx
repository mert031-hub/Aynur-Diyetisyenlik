import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2A3B27] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/diyetkadin.jpg"
          alt="Aynur Kazak Uzman Diyetisyen"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e2e1b]/90 via-[#1e2e1b]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2e1b]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full pt-20 pb-16 lg:pt-0 lg:pb-0 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Afyonkarahisar'ın Güvenilir Diyetisyeni</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Sağlıklı Yaşamın
                <span className="block text-primary-light mt-1">Sürdürülebilir</span>
                <span className="block">Yolu</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-lg">
              Kişisel beslenme programları, bilimsel rehberlik ve
              uzun vadeli sağlıklı alışkanlıklarla hayatınızı dönüştürün.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-white/90 font-semibold">5.0</span>
              <span className="text-white/60 text-sm">Google Değerlendirmesi</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full text-base hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <CalendarIcon />
                Randevu Al
              </a>
              <a
                href="https://wa.me/905388371509?text=Merhaba,%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-heading font-semibold rounded-full text-base hover:bg-white/20 transition-all duration-200"
              >
                <WhatsAppIcon />
                WhatsApp İletişim
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
              <div>
                <div className="font-heading font-bold text-3xl text-primary-light">500+</div>
                <div className="text-white/60 text-sm mt-1">Başarılı Danışan</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-primary-light">10+</div>
                <div className="text-white/60 text-sm mt-1">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-primary-light">30+</div>
                <div className="text-white/60 text-sm mt-1">Uzmanlık Alanı</div>
              </div>
            </div>
          </div>

          {/* Right: Floating card (visible on lg+) */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-80 xl:w-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/images/healthymeal2.jpg"
                  alt="Sağlıklı beslenme"
                  width={400}
                  height={500}
                  className="object-cover w-full h-[480px]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-56">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
                <div>
                  <div className="text-text font-semibold text-sm">Kişisel Program</div>
                  <div className="text-text-muted text-xs">Bilimsel yaklaşım</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
