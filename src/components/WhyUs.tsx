import Image from 'next/image';

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Tamamen Kişisel Yaklaşım',
    desc: 'Her danışanım için sıfırdan, özgün bir program hazırlarım. Hazır diyet listeleri yok — sadece size özel çözümler.',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Bilimsel Metodoloji',
    desc: 'Güncel araştırmalar ve kanıta dayalı beslenme bilimi temelinde hazırlanan programlar. Moda diyetler değil, gerçek sonuçlar.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Sürdürülebilir Sonuçlar',
    desc: 'Hızlı kilo verip geri almak yerine; yaşam boyu sürecek sağlıklı alışkanlıklar ve kalıcı dönüşüm.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Sürekli Destek',
    desc: 'Takip görüşmeleri, mesajlaşma ve düzenli kontroller ile yolculuğunuzun her anında yanınızdayım.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Pratik Beslenme Planları',
    desc: 'Günlük hayatınıza kolayca entegre olabilen, sizi yormayan ve zevk alarak uygulayabileceğiniz programlar.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Empati ve Motivasyon',
    desc: 'Sizi yargılamadan, anlayışla yaklaşarak motivasyonunuzu yüksek tutuyorum. Gerçek bir partner gibi.',
    highlight: false,
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Neden Biz?
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight mb-4">
                Farkımız{' '}
                <span className="text-primary">Sonuçlarımızda</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                10+ yıllık deneyim ve yüzlerce başarılı danışanın güveni,
                sizin için en iyi sonuçları elde edeceğimizin garantisidir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 reveal ${
                    item.highlight
                      ? 'bg-primary text-white border-primary'
                      : 'bg-background border-gray-100 hover:border-primary/30 hover:shadow-md'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      item.highlight ? 'bg-white/20' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <div className={item.highlight ? 'text-white' : ''}>{item.icon}</div>
                  </div>
                  <h3
                    className={`font-heading font-semibold text-sm mb-1.5 ${
                      item.highlight ? 'text-white' : 'text-text'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      item.highlight ? 'text-white/80' : 'text-text-muted'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image stack */}
          <div className="relative h-[600px] reveal-right hidden lg:block">
            <div className="absolute top-0 right-0 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/diet-woman-2.jpg"
                alt="Beslenme danışmanlığı"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/vegetables.jpg"
                alt="Sağlıklı sebzeler"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/water.jpg"
                alt="Su ve sağlık"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute bottom-10 right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-text">5.0 / 5.0</div>
                  <div className="text-xs text-text-muted">Google Puanı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
