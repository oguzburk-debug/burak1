import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Pushonica</span>
            </div>
            <p className="text-gray-400 mb-6">
              Dijital pazarlama dünyasında işletmenizi zirveye taşıyan güvenilir partneriniz.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimizasyonu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sosyal Medya Yönetimi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İçerik Pazarlama</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PPC Reklamcılık</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Veri Analizi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marka Yönetimi</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Fiyatlandırma</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Referanslar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kariyer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-gray-400">
                  Maslak Mahallesi, Büyükdere Cad.<br />
                  No: 123, Kat: 5<br />
                  34485 Sarıyer/İstanbul
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+90 212 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">info@pushonica.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Pushonica. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;