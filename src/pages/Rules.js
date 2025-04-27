import React, { useEffect, useState } from 'react';
import '../styles/Rules.css';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Rules = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.title = 'Правила - Amethyst';
    
    // Обработчик изменения размера окна
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Добавляем favicon
    const favicons = [
      { rel: 'icon', href: '/amethyst.png', sizes: '32x32' },
      { rel: 'icon', href: '/amethyst-64.png', sizes: '64x64' },
      { rel: 'apple-touch-icon', href: '/amethyst-180.png', sizes: '180x180' }
    ];

    favicons.forEach(favicon => {
      let link = document.querySelector(`link[rel='${favicon.rel}'][sizes='${favicon.sizes}']`);
      if (!link) {
        link = document.createElement('link');
        link.rel = favicon.rel;
        link.href = favicon.href;
        link.sizes = favicon.sizes;
        document.head.appendChild(link);
      }
    });

    return () => {
      // Очистка при размонтировании
      window.removeEventListener('resize', handleResize);
      favicons.forEach(favicon => {
        const link = document.querySelector(`link[rel='${favicon.rel}'][sizes='${favicon.sizes}']`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="rules-page">
      <Navbar />
      <PageTransition>
        <div className="rules-container">
          <div className="rules-header">
            <h1>Правила сервера Amethyst</h1>
            <p className="rules-subtitle">Ознакомьтесь с правилами нашего сервера для комфортной игры всех участников</p>
          </div>

          <div className="rules-nav">
            <button 
              className={`nav-button ${activeTab === 'basic' ? 'active' : ''}`}
              onClick={() => setActiveTab('basic')}
            >
              <i className="fas fa-scroll"></i> {isMobile ? 'Основные' : 'Основные правила'}
            </button>
            <button 
              className={`nav-button ${activeTab === 'building' ? 'active' : ''}`}
              onClick={() => setActiveTab('building')}
            >
              <i className="fas fa-hammer"></i> Строительство
            </button>
            <button 
              className={`nav-button ${activeTab === 'trade' ? 'active' : ''}`}
              onClick={() => setActiveTab('trade')}
            >
              <i className="fas fa-handshake"></i> Торговля
            </button>
          </div>

          {activeTab === 'basic' && (
            <div className="rules-content">
              <div className="rules-section">
                <h2>1. Общие правила</h2>
                <ul>
                  <li>
                    <strong>1.3.</strong> Передача/продажа аккаунтов сторонним лицам строго запрещена.
                  </li>
                  <li>
                    <strong>1.4.</strong> Владелец управляет проектом по своему усмотрению и вправе наказать игрока по причине, не указанной в правилах, и без объяснения причин.
                  </li>
                  <li>
                    <strong>1.5.</strong> Администратор и Модераторы не возвращают потерянные вещи.
                  </li>
                  <li>
                    <strong>1.6.</strong> Все пожертвования на сервер делаются добровольно.
                  </li>
                  <li>
                    <strong>1.7.</strong> Администратор не обязан возвращать утраченные вещи.
                  </li>
                  <li>
                    <strong>1.10.</strong> Модераторы, Хелперы и Чат-менеджеры — доверенные лица, отвечающие за порядок на сервере.
                  </li>
                  <li>
                    <strong>1.11.</strong> Запрещена реклама других проектов без согласования с администрацией.
                  </li>
                  <li>
                    <strong>1.13.</strong> Запрещено неадекватное поведение и оскорбления.
                  </li>
                  <li>
                    <strong>1.14.</strong> Запрещены спам и флуд.
                  </li>
                  <li>
                    <strong>1.15.</strong> Запрещено разжигание ненависти, оскорбления на основе социальной, расовой, гендерной, политической или религиозной принадлежности.
                  </li>
                  <li>
                    <strong>1.18.</strong> Шутка/сарказм и т.п. не является оправданием нарушения.
                  </li>
                  <li>
                    <strong>1.21.</strong> Запрещается злоупотреблять правилами, создавая искусственные ситуации или вводя других игроков в заблуждение с целью подставить их под наказание.
                  </li>
                </ul>
              </div>

              <div className="rules-section">
                <h2>Читы и моды</h2>
                <p>Запрещены читы и моды, дающие преимущество</p>
                <p className="rule-tooltip">Разрешены: JEI, Optifine, Minimap</p>
                <p className="rule-tooltip">Запрещены: X-Ray, Kill Aura и т.д.</p>
              </div>

              <div className="rules-section">
                <h2>Баги и эксплойты</h2>
                <p>Запрещено использование багов игры</p>
                <p className="rule-tooltip">Любые баги должны быть немедленно сообщены администрации</p>
              </div>
              
              <div className="rules-section">
                <h2>6. Общение в чате</h2>
                <ul>
                  <li>
                    <strong>6.1.</strong> Основной язык чата — русский. Запрещены другие языки и транслит.
                  </li>
                  <li>
                    <strong>6.2.</strong> Запрещено выдавать себя за администрацию. Наказание: бан.
                  </li>
                  <li>
                    <strong>6.3.</strong> Запрещены оскорбления других игроков или администрации.
                  </li>
                  <li>
                    <strong>6.4.</strong> Запрещены ругательства, мат и нецензурная лексика.
                  </li>
                  <li>
                    <strong>6.5.</strong> Запрещены угрозы, разжигание ненависти, агрессивные высказывания.
                  </li>
                  <li>
                    <strong>6.6.</strong> Запрещены флуд и реклама. Наказание: 1-ое мут 10 минут, далее в геометрической прогрессии.
                  </li>
                  <li>
                    <strong>6.7.</strong> Необходимо уважительное отношение к другим игрокам.
                  </li>
                </ul>
              </div>
              
              <div className="rules-section">
                <h2>9. Другое</h2>
                <ul>
                  <li>
                    <strong>9.1.</strong> Запрещено использование читов и вредоносного ПО.
                  </li>
                  <li>
                    <strong>9.2.</strong> Запрещено создание лагов, блокировка работы сервера.
                  </li>
                  <li>
                    <strong>9.3.</strong> Запрещено использование чужих аккаунтов.
                  </li>
                  <li>
                    <strong>9.4.</strong> Запрещено создание аккаунтов для прогрузки чанков.
                  </li>
                  <li>
                    <strong>9.5.</strong> Запрещено обманывать игроков и администрацию.
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'building' && (
            <div className="rules-content">
              <div className="rules-section">
                <h2>2. Игра на сервере</h2>
                <ul>
                  <li>
                    <strong>2.1.</strong> Запрещено убийство или ограничивание свободы игроков без их согласия (кроме территории игрока, после 2-х предупреждений уйти с территории с переодичностью не менее 30 сек).
                  </li>
                  <li>
                    <strong>2.2.</strong> Запрещено использование читов, макросов и багов.
                  </li>
                  <li>
                    <strong>2.3.</strong> Запрещено мешать игровому процессу других игроков.
                  </li>
                  <li>
                    <strong>2.4.</strong> Территория игрока должна быть минимум в 3 чанка от другой территории.
                  </li>
                  <li>
                    <strong>2.5.</strong> Запрещено разрушать ландшафт или строить неэстетичные объекты.
                  </li>
                  <li>
                    <strong>2.7.</strong> Запрещено создавать лаги или технические неполадки на сервере.
                  </li>
                  <li>
                    <strong>2.8.</strong> Запрещено строить чанк-лоадеры. Наказание: Бан.
                  </li>
                  <li>
                    <strong>2.9.</strong> Запрещены буры с копающей частью больше 81 блока. Наказание: 1-ое - требование исправить, 2-ое - изъятие бура, 3-ое - бан.
                  </li>
                  <li>
                    <strong>2.11.</strong> Запрещены любые попытки дестабилизировать экономику сервера.
                  </li>
                  <li>
                    <strong>2.12.</strong> Запрещены умышленная порча карты. Массовое разлитие воды/лавы, целенаправленное массированное использование взрывчатых веществ, массовый поджог блоков, порча архитектурных и/или сооружений стратегического назначения, а также любые другие проявления гриферства.
                  </li>
                  <li>
                    <strong>2.14.</strong> Запрещены любые раздачи, не согласованные с представителями администрации.
                  </li>
                </ul>
              </div>
              
              <div className="rules-section">
                <h2>3. Право собственности</h2>
                <ul>
                  <li>
                    <strong>3.1.</strong> Запрещено красть, уничтожать или несанкционированно использовать чужую собственность. Наказание: Бан.
                  </li>
                  <li>
                    <strong>3.2.</strong> Запрещены транзакции за реальные деньги на сервере. Наказание: Бан.
                  </li>
                  <li>
                    <strong>3.3.</strong> Игроки могут создавать общие территории в рамках объединений.
                  </li>
                  <li>
                    <strong>3.4.</strong> Игроки вправе запрещать другим вход на свою территорию только при наличии обоснованной причины. Запрещается использовать данное правило для:
                    <p className="rule-tooltip">• Беспричинного убийства или преследования игроков.</p>
                    <p className="rule-tooltip">• Создания искусственных «ловушек» с целью гриферства или издевательств.</p>
                    <p className="rule-tooltip">• Регулярного выдворения одних и тех же игроков без явной причины или для личной выгоды.</p>
                  </li>
                  <li>
                    <strong>3.5.</strong> Штрафы могут накладываться только через администрацию.
                  </li>
                </ul>
              </div>
              
              <div className="rules-section">
                <h2>5. Объединения</h2>
                <ul>
                  <li>
                    <strong>5.1.</strong> Игроки могут создавать объединения (государства, поселения и т.д.).
                  </li>
                  <li>
                    <strong>5.2.</strong> Объединения могут принимать или изгонять игроков.
                  </li>
                  <li>
                    <strong>5.3.</strong> Законы объединений не должны нарушать серверные правила.
                  </li>
                  <li>
                    <strong>5.4.</strong> Объединения обязаны информировать о своих правилах.
                  </li>
                  <li>
                    <strong>5.5.</strong> Объединения не могут препятствовать свободе игроков.
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'trade' && (
            <div className="rules-content">
              <div className="rules-section">
                <h2>7. Реклама товаров/магазинов в чате</h2>
                <ul>
                  <li>
                    <strong>7.1.</strong> Каждый игрок может рекламировать свой магазин или товар.
                  </li>
                  <li>
                    <strong>7.2.</strong> Реклама должна быть информативной и не содержать спама или многократных сообщений.
                  </li>
                  <li>
                    <strong>7.3.</strong> Запрещено публиковать одно и то же рекламное сообщение более одного раза за короткий промежуток времени (менее 10 минут). Нарушение этой части правила может повлечь за собой мут, предупреждение или бан.
                  </li>
                  <li>
                    <strong>7.4.</strong> Личное сообщение (PM) для рекламы товаров и магазинов запрещено. Отправка личных сообщений другим игрокам с рекламой товаров или магазинов будет караться предупреждением или баном.
                  </li>
                </ul>
              </div>
              
              <div className="rules-section">
                <h2>4. Судебная система</h2>
                <ul>
                  <li>
                    <strong>4.2.</strong> Подача жалобы — любой игрок может подать жалобу на другого игрока через специальную форму.
                  </li>
                  <li>
                    <strong>4.3.</strong> Рассмотрение дела — судья (или администратор) принимает решение о возможности передачи дела в суд или о немедленном наказании. Все доказательства должны быть изучены и оценены на основе их достоверности и важности.
                  </li>
                  <li>
                    <strong>4.4.</strong> Передача в суд — если дело не может быть решено непосредственно администрацией, оно передается в суд.
                  </li>
                  <li>
                    <strong>4.5.</strong> Подготовка к судебному процессу — после передачи дела в суд стороны (обвинитель и ответчик) имеют право на подготовку своих позиций.
                  </li>
                  <li>
                    <strong>4.6.</strong> Судебный процесс — судебное разбирательство проводится в установленное время.
                  </li>
                  <li>
                    <strong>4.9.</strong> Апелляции — каждая сторона имеет право подать апелляцию на решение суда в течение 24 часов после вынесения решения.
                  </li>
                  <li>
                    <strong>4.10.</strong> Прозрачность и справедливость — все судебные процессы проводятся с максимальной открытостью для всех игроков.
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {showScrollTop && (
            <button 
              className="scroll-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Прокрутить наверх"
            >
              <i className="fas fa-chevron-up"></i>
            </button>
          )}
          
          <div className="rules-footer">
            <p>Правила могут изменяться и дополняться администрацией сервера без предварительного уведомления</p>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Rules; 