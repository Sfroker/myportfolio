/**
 * База данных всех проектов
 */
const projects = [
    { id: 1, 
        category: "web", 
        name: `<a href="https://tytla.ru/">tytla.ru</a>`, 
        short: "Портал ассоциации", 
        img: "img/tytlaru.jpg", 
        desc: `Основной сайт ассоциации ресторанов <a href="https://tytla.ru/">ТУТЛА</a>. Информация о ресторанах, банкетная служба, трудоустройство, инвесторам и партнёрам.`, 
        duration: "2 года", 
        result: "Рост узнаваемости за год +75%" 
    },
    { id: 2, 
        category: "ads", 
        name: `<a href="https://ntcontest.ru">Национальна технологическая олимпиада (НТО)</a>`, 
        short: "Масштабирование и рекламные кампании", 
        img: "img/myntcontest.jpg", 
        desc: `<b>Проект</b> имеет ярко выраженную сезонность. Основной цикл привлечения участников приходится на осень (сентябрь–ноябрь). Перед нами стояла задача не просто удержать планку, а обеспечить кратный рост регистраций каждый год.

        <b>Что было сделано (Маркетинговая стратегия):</b>
        
        <b>Управление сезонным трафиком:</b> Настройка и запуск масштабных рекламных кампаний в период «осеннего пика» регистраций.

        <b>Сквозная коммуникация:</b> «Рекламный креатив → Лендинг → Email-прогрев». Это позволило сохранить высокую конверсию на каждом этапе воронки.

        <b>Работа с базой:</b> Использование email-рассылок не только для информирования, но и как инструмента дожима тех, кто начал регистрацию, но не завершил её.`,
        duration: "5 лет",
        result: "100 000+ регистраций" 
    },
    { id: 3, 
        category: "emails", 
        name: "Retention CRM", 
        short: "Автоматизация рассылок", 
        img: "img/emails.jpg", 
        desc: "Воронки в Email/Telegram. Рост возвращаемости на 18%.", 
        duration: "3 месяца", 
        result: "LTV +15%" },
    { id: 4, 
        category: "geo", 
        name: "Внедрение TelegramBot в ГЕО-сервисы", 
        short: "Оптимизация контроля и обработки отзывов с заведений", 
        img: "img/geo.jpg", 
        desc: `
        <b>Оптимизация трафика:</b> Настроил переход из ГЕО-сервисов (Яндекс, 2ГИС) в кастомный Telegram-бот.

        <b>Автоматизация:</b> Сократил нагрузку на администраторов, переведя до 40% входящих запросов из карт в автоматический режим бронирования через бота.

        <b>Аналитика:</b> Внедрил систему отслеживания конверсий из карточек заведений в конкретные целевые действия внутри бота.`, 
        duration: "1 месяц", 
        result: "Автоматизация 100%" },
    { id: 5, 
        category: "web", 
        name: `<a href="https://suvaryrest.ru">Suvaryrest.ru</a>`, 
        short: "Национальный ресторан", 
        img: "img/suvaryrest.jpg", 
        desc: "Стилистический сайт для ресторанного комплекса с историей культуры и наследия Чувашского народа.", 
        duration: "5 месяцев", 
        result: "Повышение посетилей вне сезонное время" },
    { id: 6, 
        category: "web", 
        name: `<a href="https://kveli.ru">Kveli.ru</a>`, 
        short: "Грузинский ресторан", 
        img: "img/kveli.jpg", 
        desc: "Информационный сайт с настройкой обратной связи по бронированию столов и банкетов", 
        duration: "1 год", 
        result: "Ежемесячное повышение показателй по посещаемости и выручки" },
    { id: 7, category: "web", 
        name: `<a href="https://Kuskusdelivery.ru">Kuskusdelivery.ru</a>`, 
        short: "Доставка еды", 
        img: "img/kuskus.jpg", 
        desc: "E-com решение для службы доставки.", 
        duration: "1 месяц", 
        result: "Рост чека на 12%" },
    { id: 8, category: "web", 
        name: `<a href="https://Takeiteasy21.ru">Takeiteasy21.ru</a>`, 
        short: "Кафе и доставка", 
        img: "img/takeiteasy.jpg", 
        desc: "Сайт сети ресторанов Take IT Easy, с индивидуальной страницей под филлиал.", 
        duration: "6 месяцев", 
        result: "Адаптивность 100%" },
    { id: 9, 
        category: "web", 
        name: `<a href="https://Totsamiybarashek.ru">Totsamiybarashek.ru<a>`, 
        short: "Ресторан", 
        img: "img/tsb.jpg", 
        desc: "Разработка сайта для заведения «Тот самый барашек».", 
        duration: "3 месяца", 
        result: "Увеличение количества брони столов на 100%" },
    { id: 10, 
        category: 
        "web", 
        name: `<a href="https://Neryadovo.ru">Neryadovo.ru</a>`, 
        short: "Парк-отель",
        img: "img/nerydovo.jpg", 
        desc: "Разработка сайта, интеграция сервисов бронирования", 
        duration: "3 месяца", 
        result: "Автоматизация брони столов" },
    { id: 11, category: "web", 
        name: `<a href="https://Dreambigfest.ru">Dreambigfest.ru</a>`, 
        short: "Фестиваль", 
        img: "img/dbf.jpg", 
        desc: "Лендинг масштабного фестиваля DreamBigFest от Национальной технологической олимпиады. При поддержки Минобразования Российской Федерации.", 
        duration: "2 месяца", 
        result: "Уникальный дизайн" },
    { id: 12, 
        category: "web", 
        name: `<a href="https://Balcongroup.ru">Balcongroup.ru</a>`, 
        short: "Управляющая компания", 
        img: "img/balcon.jpg", 
        desc: "Сайт сети ресторанов Balcon, с индивидуальной страницей под филлиал.", 
        duration: "2 месяца", 
        result: "Увеличение количества брони столов на 100%" },
    { id: 13, 
        category: "web", 
        name: `<a href="https://Efremovskydvor.ru">Efremovskydvor.ru</a>`, 
        short: "Ефремовский дворъ", 
        img: "img/efremovskydvor.jpg", 
        desc: "Сайт визитка ресторанного комплекса Ефремовский дворъ.", 
        duration: "2 месяца", 
        result: "SEO-трафик +30%" },
    { id: 14, 
        category: "ads", 
        name: `<a href="https://tytla.ru">ТУТЛА</a>`, 
        short: "Ассоциация ресторанов", 
        img: "img/tytlaru.jpg", 
        desc: `
        Отвечал за техническую и маркетинговую составляющую присутствия 20+ ресторанов в сети. За период работы:

        <b>Разработал</b> и запустил пул сайтов на различных платформах (Tilda, Bitrix, HTML/JS), включая сложные интеграции с системами доставки.

        <b>Внедрил CRM-систему</b> и программу лояльности «под ключ», автоматизировав коммуникации с клиентской базой.

        <b>Создал</b> кастомные решения для бизнеса, включая Telegram-ботов для бронирования столов, что разгрузило операционный отдел.

        <b>Администрировал</b> рекламные кампании и анализировал эффективность каналов по метрикам ROMI и LTV.`, 
        duration: "2 года", 
        result: "Единая экосистема" },
    { id: 16, 
        category: "ads", 
        name: `<a href="https://ai-academy.ru/">Академия искусственного интеллекта</a>`, 
        short: "Продвижение Олимпиады и сообщества", 
        img: "img/aiacademy.jpg", 
        desc: `
        Провел таргетированную рекламную кампанию ВКонтакте для проектов фонда «Вклад в будущее». Результаты работы:

        <b>Разработал</b> стратегию продвижения для двух направлений: набор участников в сообщество и регистрации на Олимпиаду по ИИ.

        <b>Привлек</b> 3058 новых целевых подписчиков в сообщество при плановом показателе 900. KPI перевыполнен в 3,4 раза.

        <b>Получил</b> 908 подтвержденных регистраций на Олимпиаду, превысив плановую цель (800) на 13,5%.

        <b>Обеспечил</b> выполнение всех показателей в сжатые сроки (сентябрь-октябрь) в рамках фиксированного бюджета.`, 
        duration: "2 месяца", 
        result: "3058 участников (x3 к плану)" },
    { id: 17, 
        category: "ads", 
        name: `<a href="https://vk.com/geography_hse">Факультет географии НИУ ВШЭ</a>`, 
        short: "Привлечение абитуриентов", 
        img: "img/fggt.jpg", 
        desc: `
        Провел имиджевую и конверсионную кампанию во ВКонтакте в сезон приема документов. Главный итог — кратный рост заявок.

        <b>Охватил</b> более 844 000 пользователей, настроив таргетинг на абитуриентов и их родителей для повышения узнаваемости факультета.

        <b>Привлек</b> 2579 целевых переходов в сообщество по средней цене 36 рублей, конвертировав их в 305 новых подписчиков.

        <b>Оптимизировал</b> бюджет, добившись стоимости привлечения участника (CPF) в размере 306 рублей в высококонкурентной нише образования.

        <b>Обеспечил</b> рост количества абитуриентов в 2 раза по сравнению с прошлым годом (по данным деканата).`, 
        duration: "Приемная кампания", 
        result: "Рост абитуриентов x2" },
    { id: 18, 
        category: "crm", 
        name: `Интеграция CRM под ключ`, 
        short: "Ассоциация ресторанов", 
        img: "img/crm.jpg", 
        desc: `
        <b>Опыт:</b> Внедрение и администрирование систем лояльности для сети из 20+ ресторанов.

        <b>Что сделано:</b> Полная настройка CRM-маркетинга, сегментация клиентской базы и запуск автоматизированных программ лояльности.

        <b>Результат:</b> Переход от разрозненных данных к единой системе управления клиентским опытом.`, 
        duration: "1 год", 
        result: "SEO-трафик +60%" }

];


        let activeId = null;
        const grid = document.getElementById('portfolio-grid');

        function render(filter = 'all') {
            grid.innerHTML = '';
            projects.filter(p => filter === 'all' || p.category === filter).forEach(p => {
                const card = document.createElement('div');
                card.className = "group cursor-pointer bg-white p-2 rounded-[32px] shadow-sm hover:shadow-2xl transition duration-500";
                card.onclick = () => openModal(p.id);
                card.innerHTML = `
                    <div class="h-60 bg-slate-100 rounded-2xl overflow-hidden mb-4 relative">
                        <img src="${p.img}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700">
                    </div>
                    <div class="px-5 pb-5">
                        <span class="text-[9px] font-black text-blue-600 uppercase tracking-widest">${p.category}</span>
                        <h4 class="text-xl font-black mt-1 group-hover:text-blue-600 transition tracking-tighter">${p.name}</h4>
                        <p class="text-slate-500 text-xs mt-1 font-medium italic">${p.short}</p>
                    </div>`;
                grid.appendChild(card);
            });
        }

        function openModal(id) {
            activeId = id;
            const p = projects.find(item => item.id === id);
            // Добавляем класс whitespace-pre-line, чтобы переносы строк отображались
            document.getElementById('modal-body').innerHTML = `
                <div class="h-[300px] md:h-[450px] overflow-hidden"><img src="${p.img}" class="w-full h-full object-cover"></div>
                <div class="p-8 md:p-16">
                    <span class="bg-blue-600 text-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">${p.category}</span>
                    <h3 class="text-4xl font-black mt-6 mb-6 uppercase tracking-tight leading-none">${p.name}</h3>
                    <p class="text-slate-600 text-lg leading-relaxed font-medium mb-10 whitespace-pre-line">${p.desc}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Срок реализации</p>
                            <p class="font-bold text-slate-800 text-xl tracking-tighter">${p.duration}</p>
                        </div>
                        <div class="p-6 bg-blue-600 text-white rounded-3xl">
                            <p class="text-[8px] font-black text-blue-200 uppercase tracking-widest mb-1">Результат</p>
                            <p class="font-bold text-xl tracking-tighter">${p.result}</p>
                        </div>
                    </div>
                </div>`;
            document.getElementById('project-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('project-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function nextProject() {
            const idx = projects.findIndex(p => p.id === activeId);
            openModal(projects[(idx + 1) % projects.length].id);
        }

        // Particles
        const container = document.getElementById('particles-container');
        const dataSet = ['ROI', 'CTR', '1', '0', 'CRM', 'DATA'];
        for(let i=0; i<30; i++) {
            const p = document.createElement('div');
            p.className = 'bg-data';
            p.innerText = dataSet[Math.floor(Math.random()*dataSet.length)];
            p.style.left = Math.random()*100 + 'vw';
            p.style.top = (Math.random()*100 + 100) + 'vh';
            p.style.fontSize = (Math.random()*15 + 10) + 'px';
            p.style.animationDelay = (Math.random()*10) + 's';
            container.appendChild(p);
        }

        const counters = document.querySelectorAll('.counter');
        const obs = new IntersectionObserver((e) => {
            if(e[0].isIntersecting) {
                counters.forEach(c => {
                    const target = +c.dataset.target;
                    let count = 0;
                    const up = () => {
                        if(count < target) {
                            count += Math.ceil(target/50);
                            c.innerText = count > target ? target : count;
                            setTimeout(up, 20);
                        } else { c.innerText = target; }
                    };
                    up();
                });
                obs.disconnect();
            }
        }, {threshold: 0.5});
        obs.observe(document.querySelector('#home'));

        document.querySelectorAll('.filter-btn').forEach(b => {
            b.onclick = () => {
                document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                render(b.dataset.filter);
            };
        });

        window.onload = () => render();
        
