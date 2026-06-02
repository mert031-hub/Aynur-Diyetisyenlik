import Image from 'next/image';

const testimonials = [
  {
    name: 'Evren Kazal',
    date: '6 ay önce',
    rating: 5,
    text: 'Aynur hanımcığımla yeğenimi aracılığıyla tanıştım. İyiki tanışmışım, hayatımın en iyi sağlık yatırımını yapmışım! O kadar memnun kaldım ki — onun güzel yüzlülüğü, ilgili davranışları ve size özel diyetleri muhteşem. Süper bir diyetisyen!',
    result: 'Sağlık hedeflerine ulaştı',
    initials: 'EK',
    color: 'bg-primary/20 text-primary',
  },
  {
    name: 'Nurdan Bıyıkoğlu',
    date: '1 yıl önce',
    rating: 5,
    text: 'Canım Aynur hanımcım — kibarlığı, naifliği ve bilgisiyle muhteşem bir diyetisyen. Kronik rahatsızlıklarımla baş etmeyi öğretti, motivasyonuyla yol almamı sağladı. Varol güzeller güzeli hocam! ❤️',
    result: 'Kronik rahatsızlıklar kontrol altında',
    initials: 'NB',
    color: 'bg-accent/40 text-text',
  },
  {
    name: 'Hatice Irmak',
    date: '3 yıl önce',
    rating: 5,
    text: '10 yıldır kilo sorunu ile uğraşırken çıktı Aynur hanımcım karşıma. Klasik doktordan öte, gerçekten benim kilo takıntımı sanki kendi takıntısıymış gibi ilgilendi. Şu an kendimle barışık biri isem bu Aynur hanım sayesindedir.',
    result: '10 yıllık kilo sorunu çözüldü',
    initials: 'HI',
    color: 'bg-secondary/30 text-text',
  },
  {
    name: 'Bekir Turan',
    date: '1 yıl önce',
    rating: 5,
    text: 'Gerçekten işinde 1 numara. Çok memnun kaldık. Kesinlikle tavsiye ederim.',
    result: 'Harika sonuçlar aldı',
    initials: 'BT',
    color: 'bg-primary/20 text-primary',
  },
  {
    name: 'Laith Kayyali',
    date: '2 yıl önce',
    rating: 5,
    text: 'Super! I lost 7kgs with her guidance. The personalized approach and continuous support made all the difference. Highly recommended!',
    result: '7 kg verdi',
    initials: 'LK',
    color: 'bg-accent/40 text-text',
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-200'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 lg:py-32 bg-background-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Danışan Yorumları
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight">
              Onlar Anlatsın,{' '}
              <span className="text-primary">Biz Dinleyelim</span>
            </h2>
          </div>
          <div className="reveal delay-200">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-heading font-black text-5xl text-primary">5.0</div>
                <div className="flex justify-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <div className="text-text-muted text-sm mt-1">Google Puanı</div>
              </div>
              <div className="h-16 w-px bg-gray-200" />
              <div>
                <p className="text-text-muted leading-relaxed max-w-xs">
                  Yüzlerce danışanımın güveni ve Google'daki mükemmel puanımız,
                  kalitemizin en iyi kanıtı.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background image accent */}
        <div className="relative mb-12">
          <div className="absolute -top-4 -right-4 w-64 h-64 rounded-3xl overflow-hidden opacity-10 pointer-events-none">
            <Image src="/images/gülensurat.jpg" alt="" fill className="object-cover" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote */}
              <div className="text-4xl text-primary/20 font-serif leading-none mb-3">"</div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} filled={s <= t.rating} />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-muted leading-relaxed mb-5 text-sm lg:text-base">
                {t.text}
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold mb-5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.date}</div>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://www.google.com/maps/place/Aynur+Kazak+Beslenme+ve+Diyet+Dan%C4%B1%C5%9Fmanl%C4%B1k+Merkezi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-text-muted rounded-full hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Tüm Google yorumlarını gör
          </a>
        </div>
      </div>
    </section>
  );
}
