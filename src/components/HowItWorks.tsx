import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'İlk Görüşme',
    desc: 'Sağlık geçmişiniz, alışkanlıklarınız ve hedefleriniz hakkında kapsamlı bir değerlendirme yapıyoruz. Bu görüşme, size en uygun yolu belirlemek için temel oluşturur.',
    image: '/images/g%C3%BClensurat.jpg',
    tag: 'Ücretsiz',
  },
  {
    number: '02',
    title: 'Vücut Analizi ve Değerlendirme',
    desc: 'Metabolizmanız, vücut kompozisyonunuz ve kan değerleriniz analiz edilerek sağlık tablonuz bütüncül bir şekilde değerlendirilir.',
    image: '/images/mezural%C4%B1%20kad%C4%B1n%20.jpg',
    tag: 'Kişisel',
  },
  {
    number: '03',
    title: 'Kişisel Beslenme Planı',
    desc: 'Tüm veriler ışığında, yaşam tarzınıza uygun, pratik ve sürdürülebilir beslenme programınız hazırlanır.',
    image: '/images/diyet%20photo.jpg',
    tag: 'Özel',
  },
  {
    number: '04',
    title: 'Takip ve İlerleme',
    desc: 'Düzenli kontrol görüşmeleriyle ilerlemeniz izlenir, programınız güncellenir ve motivasyonunuz korunur.',
    image: '/images/saglikliyemek.jpg',
    tag: 'Sürekli',
  },
  {
    number: '05',
    title: 'Sürdürülebilir Sağlıklı Yaşam',
    desc: 'Hedeflerinize ulaştıktan sonra sağlıklı alışkanlıklarınızı kalıcı hale getirerek yaşam kalitenizi sürekli yüksek tutarsınız.',
    image: '/images/healthymeal2.jpg',
    tag: 'Kalıcı',
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Süreç
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight mb-4">
            Nasıl{' '}
            <span className="text-primary">Çalışıyoruz?</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            5 adımda sağlığınızı dönüştürün. Başlangıçtan hedefe giden yolda her adımda yanınızdayım.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 reveal ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/40 text-text text-xs font-semibold mb-3 ${
                    i % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {step.tag}
                  </div>
                  <div className="font-heading font-black text-5xl sm:text-7xl text-primary/10 leading-none mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-heading font-bold text-sm shadow-lg shadow-primary/30 z-10">
                  {i + 1}
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group w-full max-w-sm mx-auto bg-gray-100">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 reveal">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-text mb-3">
              Yolculuğunuza Bugün Başlayın
            </h3>
            <p className="text-text-muted mb-6">
              İlk adımı atmak en zoru. Biz sizin için buradayız.
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              Ücretsiz İlk Görüşme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
