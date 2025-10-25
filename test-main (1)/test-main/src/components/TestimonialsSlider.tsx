import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
   
  {
    name: 'Mustafa Kalem',
    company: 'E-Ticaret Sitesi',
    role: 'CEO',
    content: 'Pushonica ile çalışmaya başladığımızdan beri push kampanyalarımızın açılma oranı %300 arttı. Profesyonel yaklaşımları ve sonuç odaklı çalışmaları gerçekten etkileyici. Ekip her zaman proaktif ve çözüm odaklı.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    metric: '+300%',
    metricLabel: 'Push Açılma Oranı',
    gradient: 'from-blue-500 to-cyan-500',
    videoTestimonial: true
  },
  {
    name: 'Mustafa Kalem',
    company: 'Güzellik Merkezi',
    role: 'Kurucu',
    content: 'Pushonica sayesinde kullanıcı etkileşimimiz inanılmaz derecede arttı. Bildirimlerimiz artık daha hedefli ve etkili. Takipçi sayımız 6 ayda 10 katına çıktı.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    metric: '+1000%',
    metricLabel: 'Kullanıcı Etkileşimi',
    gradient: 'from-pink-500 to-rose-500',
    videoTestimonial: false
  },
  {
    name: 'Mustafa Kalem',
    company: 'Teknoloji Firması',
    role: 'Pazarlama Müdürü',
    content: 'Pushonica ile gönderdiğimiz bildirimler sayesinde kullanıcı etkileşimi 6 ayda %250 arttı. Harika bir ekip! Teknik bilgileri ve stratejik yaklaşımları mükemmel.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    metric: '+250%',
    metricLabel: 'Kullanıcı Etkileşimi',
    gradient: 'from-green-500 to-emerald-500',
    videoTestimonial: true
  },
  {
    name: 'Mustafa Kalem',
    company: 'Restoran Zinciri',
    role: 'Genel Müdür',
    content: 'Pushonica ekibi sayesinde push bildirimlerini kolayca yönetebildik ve online siparişlerimiz %400 arttı. Çok memnunum.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    metric: '+400%',
    metricLabel: 'Online Sipariş',
    gradient: 'from-orange-500 to-red-500',
    videoTestimonial: false
  },
  {
    name: 'Mustafa Kalem',
    company: 'Fitness Center',
    role: 'Sahip',
    content: 'Pushonica ile kampanyalarımızın ROI’si %180 arttı. Profesyonel bir hizmet. Reklam bütçemizi optimize ettiler.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    metric: '8.5x',
    metricLabel: 'ROI Artışı',
    gradient: 'from-purple-500 to-indigo-500',
    videoTestimonial: true
  },
  {
    name: 'Mustafa Kalem',
    company: 'Online Moda',
    role: 'Kurucu',
    content: 'Pushonica ile içerik pazarlama stratejilerimiz sayesinde marka bilinirliğimiz %320 arttı. Blog trafiğimiz ve sosyal medya takipçilerimiz katlandı.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
    metric: '+320%',
    metricLabel: 'Marka Bilinirliği',
    gradient: 'from-violet-500 to-purple-500',
    videoTestimonial: false
  }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Müşteri <span className="text-blue-400">Deneyimleri</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            500+ mutlu müşterimizin gerçek deneyimlerini dinleyin ve başarı hikayelerinden ilham alın
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Avatar and Info */}
              <div className={`bg-gradient-to-br ${currentTestimonial.gradient} p-12 text-white flex flex-col justify-center items-center text-center`}>
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white/20"
                />
                <h3 className="text-2xl font-bold mb-2">{currentTestimonial.name}</h3>
                <p className="text-white/90 mb-1">{currentTestimonial.role}</p>
                <p className="text-white/80 text-sm mb-6">{currentTestimonial.company}</p>
                
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>

                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">{currentTestimonial.metric}</div>
                  <div className="text-sm opacity-90">{currentTestimonial.metricLabel}</div>
                </div>

                {currentTestimonial.videoTestimonial && (
                  <button className="mt-6 flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    <span className="text-sm">Video İzle</span>
                  </button>
                )}
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-gray-300 mb-6" />
                
                <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                      <div className="text-gray-600 text-sm">{currentTestimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Başarı Oranı</div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                      {currentTestimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentSlide ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className={`w-12 h-12 rounded-full object-cover border-3 transition-all duration-300 ${
                  index === currentSlide
                    ? `border-white shadow-lg`
                    : 'border-white/30 hover:border-white/60'
                }`}
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {testimonial.name}
              </div>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Müşteri Deneyimi</span>
            <span>{currentSlide + 1} / {testimonials.length}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} transition-all duration-500`}
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;