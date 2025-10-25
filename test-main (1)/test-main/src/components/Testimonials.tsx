import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
   
  name: 'Mehmet Kasdsadsayadasd', company: 'E-Ticaret Sitesi', role: 'CEO', content: 'DigiMarket ile çalışmaya başladığımızdan beri online satışlarımız %300 arttı. Profesyonel yaklaşımları ve sonuç odaklı çalışmaları gerçekten etkileyici.', rating: 5, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' }, { name: 'Ayşe Demir', company: 'Güzellik Merkezi', role: 'Kurucu', content: 'Sosyal medya hesaplarımız artık profesyonel görünüyor ve müşteri etkileşimimiz inanılmaz derecede arttı. Kesinlikle tavsiye ederim.', rating: 5, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' }, { name: 'Can Özkan', company: 'Teknoloji Firması', role: 'Pazarlama Müdürü', content: 'SEO çalışmaları sayesinde Google\'da ilk sayfada yer almaya başladık. Organik trafiğimiz 6 ayda %250 arttı. Harika bir ekip!', rating: 5, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' }, { name: 'Elif Yılmaz', company: 'Restoran Zinciri', role: 'Genel Müdür', content: 'Dijital pazarlama konusunda hiçbir bilgim yoktu. DigiMarket ekibi bana her şeyi açıkladı ve muhteşem sonuçlar aldık. Çok memnunum.', rating: 5, avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150' }, { name: 'Burak Şen', company: 'Fitness Center', role: 'Sahip', content: 'Google Ads kampanyalarımız sayesinde yeni üyelik sayımız %180 arttı. ROI\'mız beklentilerimi aştı. Profesyonel bir hizmet.', rating: 5, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' }, { name: 'Zeynep Acar', company: 'Online Moda', role: 'Kurucu', content: 'İçerik pazarlama stratejileri sayesinde marka bilinirliğimiz çok arttı. Blog trafiğimiz ve sosyal medya takipçilerimiz katlandı.', rating: 5, avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150' }
];


  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşteri <span className="text-blue-600">Görüşleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            500+ mutlu müşterimizin deneyimlerini okuyun ve başarı hikayelerinden ilham alın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-blue-500 mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Siz de Başarı Hikayenizi Yazın!</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Ücretsiz danışmanlık alın ve dijital pazarlama yolculuğunuza bugün başlayın.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
            Hemen Başlayın
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;