import Image from 'next/image';

const services = [
  {
    icon: '⚖️',
    title: 'Kilo Verme Programı',
    desc: 'Metabolizmanıza özel, sürdürülebilir ve sağlıklı kilo verme planları.',
    image: '/images/mezuralı kadın .jpg',
  },
  {
    icon: '💪',
    title: 'Kilo Alma Programı',
    desc: 'Kas kütlesi artırma ve sağlıklı kilo alımı için bilimsel beslenme planları.',
    image: '/images/saglikliyemek.jpg',
  },
  {
    icon: '🩺',
    title: 'Obezite Yönetimi',
    desc: 'Medikal destekli, kapsamlı obezite tedavisi ve yaşam tarzı değişimi.',
    image: '/images/diyet photo.jpg',
  },
  {
    icon: '🩸',
    title: 'Diyabet Diyeti',
    desc: 'Tip 1 ve Tip 2 diyabet için kan şekerini dengeleyen özel beslenme programları.',
    image: '/images/tabak.jpg',
  },
  {
    icon: '📊',
    title: 'İnsülin Direnci',
    desc: 'İnsülin direncini ve metabolik sendromu kontrol altına alan bilimsel diyetler.',
    image: '/images/diyetkadin2.jpg',
  },
  {
    icon: '🤰',
    title: 'Gebelik Beslenmesi',
    desc: 'Anne ve bebek sağlığını koruyacak, güvenli gebelik beslenme programları.',
    image: '/images/meyve.jpg',
  },
  {
    icon: '🏃',
    title: 'Sporcu Beslenmesi',
    desc: 'Performansı artıran, toparlanmayı hızlandıran sporcu beslenme planları.',
    image: '/images/healthymeal.jpg',
  },
  {
    icon: '👶',
    title: 'Çocuk & Bebek Beslenmesi',
    desc: 'Büyüme ve gelişim için çocuk ve adölesan beslenme danışmanlığı.',
    image: '/images/saglikliekmek.jpg',
  },
  {
    icon: '🧬',
    title: 'Metabolik Hastalıklar',
    desc: 'Hiperlipidemi, gut hastalığı ve diğer metabolik rahatsızlıklarda uzman destek.',
    image: '/images/diyetkadin.jpg',
  },
  {
    icon: '❤️',
    title: 'Kalp & Damar Sağlığı',
    desc: 'Kardiyovasküler hastalıklarda koruyucu ve tedavi edici beslenme planları.',
    image: '/images/su.jpg',
  },
  {
    icon: '🌿',
    title: 'Sağlıklı Yaşam Koçluğu',
    desc: 'Bütüncül yaklaşımla sağlıklı alışkanlıklar edinme ve yaşam kalitesini artırma.',
    image: '/images/mutfak.jpg',
  },
  {
    icon: '💻',
    title: 'Online Danışmanlık',
    desc: 'Nerede olursanız olun, video görüşme ile uzman diyetisyen desteği.',
    image: '/images/saglikliyemek2.jpg',
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 lg:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Hizmetlerimiz
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight mb-4">
            Sağlığınız İçin{' '}
            <span className="text-primary">Her Adımda</span>
            {' '}Yanınızdayım
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            30'dan fazla uzmanlık alanıyla, her yaş ve her sağlık durumu için
            kişiselleştirilmiş beslenme çözümleri sunuyorum.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-default reveal"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-2xl">{service.icon}</div>
              </div>
              {/* Text */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-base text-text mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-text-muted mb-6">
            Listelenmeyen bir durum için de mutlaka iletişime geçin.
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          >
            Ücretsiz Ön Danışma Al
          </a>
        </div>
      </div>
    </section>
  );
}
