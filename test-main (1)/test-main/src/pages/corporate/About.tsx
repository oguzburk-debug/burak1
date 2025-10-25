import React from 'react';
import { Users, Award, Target, TrendingUp, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Sonuç Odaklılık',
      description: 'Her projede ölçülebilir sonuçlar elde etmeyi hedefliyoruz'
    },
    {
      icon: Heart,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşterilerimizin başarısı bizim en büyük motivasyonumuz'
    },
    {
      icon: TrendingUp,
      title: 'Sürekli Gelişim',
      description: 'Dijital pazarlama trendlerini takip eder, sürekli öğreniriz'
    },
    {
      icon: Zap,
      title: 'İnovasyon',
      description: 'Yaratıcı çözümler ve yenilikçi yaklaşımlar benimseriz'
    }
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      experience: '10+ yıl dijital pazarlama deneyimi',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Elif Kaya',
      role: 'SEO Uzmanı',
      experience: '8 yıl SEO ve içerik pazarlama deneyimi',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mehmet Demir',
      role: 'Sosyal Medya Uzmanı',
      experience: '6 yıl sosyal medya yönetimi deneyimi',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ayşe Özkan',
      role: 'PPC Uzmanı',
      experience: '7 yıl Google Ads ve Facebook Ads deneyimi',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

const milestones = [
  { 
    year: '2024', 
    event: 'Pushonica kuruldu', 
    description: 'E-ticaret firmalarına yönelik pazarlama çözümleri sunmak için yola çıktık.' 
  },
  { 
    year: '2024', 
    event: 'İlk Modüller Yayında', 
    description: 'Müşterilerimizle test etmeye başladığımız ilk modüllerimizi yayına aldık.' 
  },
  { 
    year: '2025', 
    event: 'İlk 10 Müşteri', 
    description: 'İlk müşterilerimizle başarılı projelerimizi hayata geçirdik.' 
  },
  { 
    year: '2025', 
    event: 'Yeni Özellikler Geliştirildi', 
    description: 'Müşteri geri bildirimlerine göre modüllerimizi geliştirmeye devam ettik.' 
  },
  { 
    year: '2025', 
    event: 'Online Lansman', 
    description: 'Pushonica web sitemizi ve hizmetlerimizi duyurduk.' 
  }
];



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
             Pushonica, 12 yıllık e-ticaret deneyimiyle işletmelere yönelik yenilikçi ve uygulanabilir pazarlama çözümleri sunan bir teknoloji şirketidir. Amacımız, firmaların müşterileriyle güçlü bağlar kurmasını sağlamak, satış süreçlerini hızlandırmak ve dijital dünyada marka değerlerini artırmaktır.

Kullanıcı dostu ve performans odaklı modüllerimiz, her ölçekten işletmenin ihtiyaçlarına kolayca uyum sağlar. Pushonica, markaların dijital potansiyelini en üst düzeye çıkarmak ve uzun vadeli başarılarına katkıda bulunmak için sürekli gelişen bir çözüm ortağıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pushonica olarak amacımız, e-ticaret sektöründe faaliyet gösteren firmaların büyüme süreçlerini hızlandırmak ve müşteri sadakatini güçlendirmek için yenilikçi, kolay uygulanabilir ve etkili pazarlama modülleri sunmaktır. İş ortaklarımızın satışlarını artırmalarına, müşteri etkileşimlerini optimize etmelerine ve dijital dünyada güçlü bir marka kimliği oluşturmalarına destek oluyoruz. Geliştirdiğimiz çözümler; kullanıcı dostu arayüzleri, düşük maliyetli entegrasyonları ve performans odaklı yapısıyla her ölçekten işletmenin sürdürülebilir bir şekilde dijital dönüşümünü destekler.
                Misyonumuz, e-ticaretin karmaşık dünyasını basitleştirerek markaların müşterilerine daha hızlı, daha etkili ve daha kişisel bir şekilde ulaşmasını sağlamaktır.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
       Pushonica, geleceğin dijital ticaret dünyasında markalar ile müşteriler arasında köprü kuran öncü bir pazarlama teknolojisi sağlayıcısı olmayı hedefler. Vizyonumuz; basit ama etkili çözümlerle e-ticaret işletmelerinin yalnızca bugünkü değil, gelecekteki ihtiyaçlarını da öngörerek onlara rekabet avantajı kazandırmak ve global pazarda fark yaratan bir marka haline gelmektir. Geliştirdiğimiz modüllerle; müşteri kazanımını artıran, satış dönüşüm oranlarını iyileştiren ve markaların uzun vadeli başarısına katkıda bulunan bir ekosistem yaratmayı amaçlıyoruz. İnovasyon, erişilebilirlik ve müşteri odaklılık ilkeleri doğrultusunda, dünya genelinde e-ticaretin standartlarını yükselten lider bir teknoloji partneri olmak temel hedefimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600">Çalışma prensiplerimizdeki temel değerler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-xl text-gray-600">Alanında uzman, deneyimli profesyonellerimiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Yolculuğumuz</h2>
            <p className="text-xl text-gray-600">Pushonica'nın büyüme hikayesi</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rakamlarla Pushonica</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '198+', label: 'Mutlu Müşteri', icon: Users },
              { number: '543+', label: 'Tamamlanan Proje', icon: Target },
              { number: '98%', label: 'Başarı Oranı', icon: Award },
              { number: '12', label: 'Yıllık Deneyim', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dijital pazarlama yolculuğunuzda güvenilir partneriniz olmaya hazırız
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
            İletişime Geçin
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
