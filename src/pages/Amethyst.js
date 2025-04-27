import React, { useState, useEffect, useRef } from 'react';
import '../styles/Amethyst.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Amethyst = () => {
  const serverIP = "rassvetamethyst.ru";
  const [scrollPosition, setScrollPosition] = useState(0);
  const totalWidth = 1260; // Общая ширина всех изображений (3 изображения * 420px)
  const carouselRef = useRef(null);
  const carouselItems = useRef([]);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="amethyst">
      <Navbar />
      <PageTransition>
        <main className="hero-section">
          <div className="hero-content">
            <div className="title-group">
              <h2 className="subtitle">Лучший</h2>
              <h1 className="main-title">Приватный сервер Minecraft</h1>
              <h2 className="subtitle bottom">Дружный</h2>
            </div>
            
            <p className="hero-description">
              Мы - дружная команда, старающаяся делать сервер лучше для вас каждый день, 
              мы не идеальны, но стремимся к этому. Играй вместе со звездами - создавай собственное сияние
            </p>
            
            <div className="server-info">
              <div className="info-item">
                <i className="fas fa-cube"></i>
                <span>1.20.1</span>
              </div>
              <div className="info-item">
                <i className="fas fa-check-circle"></i>
                <span>Можно без лицензии</span>
              </div>
              <div className="info-item">
                <i className="fas fa-puzzle-piece"></i>
                <span>Forge</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <button className="buy-access-btn">
                <i className="fas fa-shopping-cart"></i>
                Про наш сервер
              </button>
              <button 
                className="copy-ip-btn" 
                onClick={handleCopyIP}
                aria-label="Скопировать IP сервера"
              >
                <i className="fas fa-copy"></i>
                Скопировать IP
              </button>
              <button 
                className="discord-btn"
                onClick={() => handleSocialClick('ваша_ссылка_на_discord')}
                aria-label="Присоединиться к Discord"
              >
                <i className="fab fa-discord"></i>
              </button>
              <button className="telegram-btn">
                <i className="fab fa-telegram"></i>
              </button>
            </div>
          </div>
        </main>

       <section className="features-section"> 
          <div className="feature-block">
            <h1 className="feature-main-title">Четыре месяца с нами</h1>
            <div className="feature-header">
              <i className="fas fa-heart"></i>
              <span>Мы ценим всех наших игроков</span>
            </div>
            <p className="feature-description">
              Прошёл целый сезон нашего сервера, было много как и хорошего, так и плохого. 
              Но мы учли все наши прошлые ошибки что бы быть лучше для вас на нашем новом 
              сезоне! Спасибо всем игрокам Amethyst, без них это было бы невозможно.
            </p>
          </div>
        </section>
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Amethyst</h3>
              <p className="footer-description">
                Приватный сервер Minecraft с уникальными модами и дружным комьюнити
              </p>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-subtitle">Ссылки</h4>
              <ul className="footer-links">
                <li><a href="/rules" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/under-construction';
                }}>Правила</a></li>
                <li><a href="/mods" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/under-construction';
                }}>Моды</a></li>
                <li><a href="https://boosty.to/rassvetamethyst/donate" target="_blank" rel="noopener noreferrer">Донат</a></li>
                <li><a href="/wiki" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/under-construction';
                }}>Вики</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-subtitle">Соц. сети</h4>
              <div className="footer-socials">
                <button onClick={() => handleSocialClick('discord_url')} className="social-btn">
                  <i className="fab fa-discord"></i>
                </button>
                <button onClick={() => handleSocialClick('telegram_url')} className="social-btn">
                  <i className="fab fa-telegram"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              <p>© 2024-2025 Amethyst</p>
              <p className="copyright-notice">
                Все материалы, включая изображения, тексты и дизайн, защищены авторским правом. 
                Копирование и использование без разрешения запрещено.
              </p>
            </div>
            <p className="server-ip">{serverIP}</p>
          </div>
        </footer>
        
      </PageTransition>
    </div>
  );
};

export default Amethyst;
