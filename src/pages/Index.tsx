import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-orange via-pastel-pink to-pastel-blue">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Music" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pastel-orange to-pastel-pink bg-clip-text text-transparent">КапЛЯ</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-pastel-orange transition-colors">Главная</a>
              <a href="#education" className="hover:text-pastel-orange transition-colors">Обучение</a>
              <a href="#instruments" className="hover:text-pastel-orange transition-colors">Инструменты</a>
              <a href="#programs" className="hover:text-pastel-orange transition-colors">Программы</a>
              <a href="#teachers" className="hover:text-pastel-orange transition-colors">Преподаватели</a>
              <a href="#pricing" className="hover:text-pastel-orange transition-colors">Прайс</a>
              <a href="#schedule" className="hover:text-pastel-orange transition-colors">Расписание</a>
              <a href="#gallery" className="hover:text-pastel-orange transition-colors">Галерея</a>
              <a href="#contacts" className="hover:text-pastel-orange transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Музыкальная студия
            <span className="block bg-gradient-to-r from-white to-pastel-blue bg-clip-text text-transparent">"КапЛЯ"</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Откройте для себя мир музыки! Обучение вокалу и игре на инструментах для всех возрастов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-pastel-orange hover:bg-white/90">
              Записаться на урок
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Обучение */}
      <section id="education" className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Направления обучения</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Icon name="Mic" size={48} className="mb-4 text-pastel-orange" />
              <h4 className="text-xl font-bold mb-2">Вокал</h4>
              <p>Постановка голоса, дыхательные техники, работа с микрофоном</p>
            </Card>
            <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Icon name="Piano" size={48} className="mb-4 text-pastel-pink" />
              <h4 className="text-xl font-bold mb-2">Фортепиано</h4>
              <p>Классическая и современная музыка, импровизация, теория</p>
            </Card>
            <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Icon name="Guitar" size={48} className="mb-4 text-pastel-blue" />
              <h4 className="text-xl font-bold mb-2">Гитара</h4>
              <p>Акустическая и электрогитара, различные стили игры</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Инструменты */}
      <section id="instruments" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Наши инструменты</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Скрипка", icon: "Music4", description: "Классический струнный инструмент" },
              { name: "Барабаны", icon: "Drum", description: "Полная барабанная установка" },
              { name: "Укулеле", icon: "Guitar", description: "Гавайская четырехструнная гитара" },
              { name: "Синтезатор", icon: "Piano", description: "Электронное фортепиано" },
              { name: "Саксофон", icon: "Music2", description: "Духовой инструмент" },
              { name: "Флейта", icon: "Music3", description: "Деревянный духовой инструмент" }
            ].map((instrument, i) => (
              <Card key={i} className="p-4 bg-white/90 hover:bg-white transition-colors">
                <Icon name={instrument.icon} size={40} className="mb-3 text-pastel-orange" />
                <h4 className="font-bold text-lg">{instrument.name}</h4>
                <p className="text-gray-600">{instrument.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Программы */}
      <section id="programs" className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Развлекательные программы</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Icon name="Dices" size={48} className="mb-4 text-pastel-orange" />
              <h4 className="text-xl font-bold mb-2">Настольные игры</h4>
              <p className="mb-3">Суббота-Воскресенье, 18:00-20:00</p>
              <Badge variant="secondary">СБ-ВС</Badge>
            </Card>
            <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Icon name="Mic2" size={48} className="mb-4 text-pastel-pink" />
              <h4 className="text-xl font-bold mb-2">Мини-концерты</h4>
              <p className="mb-3">Понедельник-Пятница, 18:00-20:00</p>
              <Badge variant="secondary">ПН-ПТ</Badge>
            </Card>
            <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Icon name="Music" size={48} className="mb-4 text-pastel-blue" />
              <h4 className="text-xl font-bold mb-2">Караоке</h4>
              <p className="mb-3">Последнее воскресенье месяца</p>
              <Badge variant="secondary">1 раз/мес</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Преподаватели */}
      <section id="teachers" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Наши преподаватели</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Анна Петрова", spec: "Вокал", exp: "10 лет" },
              { name: "Михаил Сидоров", spec: "Гитара", exp: "15 лет" },
              { name: "Елена Кузнецова", spec: "Фортепиано", exp: "12 лет" },
              { name: "Дмитрий Волков", spec: "Барабаны", exp: "8 лет" },
              { name: "Ольга Смирнова", spec: "Скрипка", exp: "20 лет" },
              { name: "Игорь Морозов", spec: "Укулеле", exp: "5 лет" }
            ].map((teacher, i) => (
              <Card key={i} className="p-6 bg-white/90">
                <div className="w-16 h-16 bg-gradient-to-br from-pastel-orange to-pastel-pink flex items-center justify-center px-0 my-0 mx-0 py-0 rounded-full">
                  {i === 0 ? (
                    <img 
                      src="/img/c26ec1bc-bfd3-47ed-8996-f0c82941cf21.jpg" 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pastel-orange to-pastel-pink flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-lg">{teacher.name}</h4>
                <p className="text-pastel-orange font-medium">{teacher.spec}</p>
                <p className="text-gray-600">Опыт: {teacher.exp}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Прайс */}
      <section id="pricing" className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Стоимость обучения</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <h4 className="text-2xl font-bold mb-4 text-pastel-orange">Базовый</h4>
              <div className="text-3xl font-bold mb-4">2000₽</div>
              <ul className="space-y-2 mb-6">
                <li>✓ 4 занятия в месяц</li>
                <li>✓ Групповые занятия</li>
                <li>✓ Доступ к инструментам</li>
              </ul>
              <Button className="w-full bg-pastel-orange hover:bg-pastel-orange/90">Выбрать</Button>
            </Card>
            <Card className="p-8 bg-white/30 backdrop-blur-sm border-white/40 text-white scale-105">
              <h4 className="text-2xl font-bold mb-4 text-pastel-pink">Стандартный</h4>
              <div className="text-3xl font-bold mb-4">3500₽</div>
              <ul className="space-y-2 mb-6">
                <li>✓ 8 занятий в месяц</li>
                <li>✓ Индивидуальные занятия</li>
                <li>✓ Доступ к студии</li>
                <li>✓ Запись композиций</li>
              </ul>
              <Button className="w-full bg-pastel-pink hover:bg-pastel-pink/90">Выбрать</Button>
            </Card>
            <Card className="p-8 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <h4 className="text-2xl font-bold mb-4 text-pastel-blue">Продвинутый</h4>
              <div className="text-3xl font-bold mb-4">5000₽</div>
              <ul className="space-y-2 mb-6">
                <li>✓ Безлимитные занятия</li>
                <li>✓ Личный преподаватель</li>
                <li>✓ Участие в концертах</li>
                <li>✓ Мастер-классы</li>
                <li>✓ Запись композиций</li>
              </ul>
              <Button className="w-full bg-pastel-blue hover:bg-pastel-blue/90">Выбрать</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Расписание</h3>
          <Card className="p-8 bg-white/90 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Будние дни</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Утренние занятия</span>
                    <span className="text-pastel-orange">9:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Дневные занятия</span>
                    <span className="text-pastel-orange">14:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Вечерние занятия</span>
                    <span className="text-pastel-orange">18:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Мини-концерты</span>
                    <span className="text-pastel-pink">18:00 - 20:00</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Выходные</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Утренние занятия</span>
                    <span className="text-pastel-blue">10:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Дневные занятия</span>
                    <span className="text-pastel-blue">15:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Вечерние занятия</span>
                    <span className="text-pastel-blue">18:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Настольные игры</span>
                    <span className="text-pastel-pink">18:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Караоке (посл. ВС)</span>
                    <span className="text-pastel-orange">19:00 - 22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Галерея</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="/img/ce2d1539-0967-4c15-a70d-6b4e5ed2f85d.jpg" 
              alt="Музыкальные инструменты" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="/img/c5067202-0db7-4f11-b52a-1f8d9db0aeed.jpg" 
              alt="Урок музыки" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="bg-gradient-to-br from-pastel-orange to-pastel-pink rounded-lg h-64 flex items-center justify-center">
              <Icon name="Camera" size={48} className="text-white" />
            </div>
            <div className="bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-lg h-64 flex items-center justify-center">
              <Icon name="Music" size={48} className="text-white" />
            </div>
            <div className="bg-gradient-to-br from-pastel-blue to-pastel-orange rounded-lg h-64 flex items-center justify-center">
              <Icon name="Users" size={48} className="text-white" />
            </div>
            <div className="bg-gradient-to-br from-pastel-orange via-pastel-pink to-pastel-blue rounded-lg h-64 flex items-center justify-center">
              <Icon name="Star" size={48} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-white/90">
              <h4 className="text-xl font-bold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-pastel-orange" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-pastel-orange" />
                  <span>info@melodiya-studio.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-pastel-orange" />
                  <span>г. Москва, ул. Музыкальная, д. 10</span>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="font-bold mb-3">Социальные сети</h5>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="border-pastel-blue text-pastel-blue">
                    <Icon name="Send" size={16} />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm" className="border-pastel-pink text-pastel-pink">
                    <Icon name="Users" size={16} />
                    VK
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-white/90">
              <h4 className="text-xl font-bold mb-6">Часы работы</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span className="text-pastel-orange">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье</span>
                  <span className="text-pastel-orange">10:00 - 20:00</span>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-pastel-orange to-pastel-pink hover:from-pastel-orange/90 hover:to-pastel-pink/90">
                  Записаться на урок
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black/20 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Music" size={24} />
            <span className="text-xl font-bold">Мелодия</span>
          </div>
          <p>&copy; 2024 Музыкальная студия "Мелодия". Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default Index