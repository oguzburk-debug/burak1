import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Dijital Pazarlama Ajansı
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Markanızı 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Dijital </span>
              Dünyada 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Zirveye </span>
              Taşıyın
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Modern dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya, içerik pazarlama ve daha fazlası ile hedef kitlenize ulaşın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Ücretsiz Danışmanlık
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Nasıl Çalışıyor?
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">198+</div>
                <div className="text-gray-600 text-sm">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Başarı Oranı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">5 Yıl</div>
                <div className="text-gray-600 text-sm">Deneyim</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">Aylık Raporlama</div>
                <div className="text-blue-100">Detaylı performans analizi</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Website Trafiği</span>
                  <span className="text-green-500 font-semibold">+145%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sosyal Medya Etkileşimi</span>
                  <span className="text-green-500 font-semibold">+230%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Dönüşüm Oranı</span>
                  <span className="text-green-500 font-semibold">+85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
