/* ============================================================
   HAYAT CLINICS — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Translations ---------- */
  const translations = {
    ar: {
      skip: 'تخطي إلى المحتوى',
      nav_home: 'الرئيسية',
      nav_about: 'عن حياة',
      nav_services: 'خدماتنا',
      nav_gallery: 'النتائج',
      nav_reviews: 'آراء العملاء',
      nav_contact: 'تواصلي معنا',
      nav_book: 'احجزي الآن',
      hero_rating: '4.9 من 200+ تقييم',
      hero_title: 'جمال طبيعي بدون مبالغة',
      hero_subtitle: 'جلدية',
      hero_subtitle2: 'تجميل',
      hero_subtitle3: 'أسنان',
      hero_cta: 'احجزي موعدك الآن',
      hero_cta2: 'اكتشفي خدماتنا',
      about_tag: 'من نحن',
      about_title: 'عيادات حياة',
      about_text: 'في عيادات حياة، نؤمن بأن الجمال الحقيقي يبدأ من العناية بالتفاصيل. نقدم خدمات جلدية وتجميلية وأسنان بأعلى معايير الجودة، مع فريق طبي متخصص يجمع بين الخبرة والذوق الرفيع. هدفنا هو تعزيز ثقتك بنفسك بلمسة طبيعية وأنيقة.',
      about_f1_title: 'أعلى معايير الجودة',
      about_f1_text: 'نستخدم أحدث التقنيات والأجهزة المعتمدة عالمياً',
      about_f2_title: 'فريق طبي متميز',
      about_f2_text: 'أطباء متخصصون بخبرة طويلة في مجالات الجلدية والتجميل والأسنان',
      about_f3_title: 'فرعين في الرياض',
      about_f3_text: 'حي الغدير وحي المروج — بالقرب منك دائماً',
      about_f4_title: 'مواعيد مرنة',
      about_f4_text: 'السبت - الأربعاء: 1-9 مساءً | الخميس: 12-8 مساءً',
      services_tag: 'خدماتنا',
      services_title: 'خدمات متكاملة لجمالك',
      svc_derm_title: 'الجلدية',
      svc_derm_desc: 'علاجات متقدمة للبشرة بأحدث التقنيات العالمية',
      svc_derm_1: 'ليزر البشرة والتشقير',
      svc_derm_2: 'هيدرافيشل',
      svc_derm_3: 'تجديد البشرة',
      svc_derm_4: 'ديرمابن',
      svc_derm_5: 'ميزوثيرابي',
      svc_cosm_title: 'التجميل',
      svc_cosm_desc: 'إطلالة طبيعية تبرز جمالك الحقيقي',
      svc_cosm_1: 'فيلر (الشفاه، الوجه، اليدين)',
      svc_cosm_2: 'بوتوكس',
      svc_cosm_3: 'راديس فيلر اليدين',
      svc_cosm_4: 'تحديد الفك',
      svc_cosm_5: 'علاج الابتسامة اللثوية',
      svc_dent_title: 'الأسنان',
      svc_dent_desc: 'ابتسامة مشرقة تعكس ثقتك',
      svc_dent_1: 'تنظيف الأسنان',
      svc_dent_2: 'العناية بالأسنان',
      svc_dent_3: 'تصميم الابتسامة',
      svc_popular: 'الأكثر طلباً',
      svc_book: 'احجزي استشارتك',
      offers_badge: 'عرض خاص',
      offers_title: 'عروض رمضان',
      offers_text: 'استعدي لرمضان مع عروض حصرية على جميع خدمات التجميل والعناية بالبشرة',
      offers_cta: 'استفسري عن العروض',
      gallery_tag: 'نتائج حقيقية',
      gallery_title: 'قبل وبعد',
      gallery_desc: 'نتائج حقيقية من عملائنا — الفرق يتحدث عن نفسه',
      gallery_label1: 'فيلر اليدين — راديس',
      gallery_label2: 'هيدرافيشل — نضارة البشرة',
      gallery_label3: 'علاج الابتسامة اللثوية',
      gallery_label4: 'راديس فيلر اليدين',
      gallery_cta: 'ابدئي تحولك الآن',
      reviews_tag: 'آراء عملائنا',
      reviews_title: 'ماذا يقولون عنا',
      rev1_text: 'عيادتي للأبد! دائم أسوي تشقير ليزر عند كريس وشغلها لا يُعلى عليه. والموظفة الهنوف خدمتها وأسلوبها رائع فعلاً. بعتمد كل خدماتي عند هالعيادة.',
      rev1_name: 'أميرة الشيباني',
      rev2_text: 'بنات وربي الدكتورة مها مو طبيعية! رسم الشفايف وتحديد الفك رساااالة. أول مرة أشوف وجهي محدد وواضح وأهم شي بدون أي مبالغة. شكراً لك دكتورة مها.',
      rev2_name: 'سدرة محمد',
      rev3_text: 'عيادة نظيفة ومرتبة. د.حسن عملت تنظيف الأسنان يده خفيفة ومتمكن. والدكتور غندور خبره ومتمكن جداً. ضحى والاخصائية نوره كانت في قمة الذوق. قدموا لي شاي وقهوة ضيافه تليق بالمكان.',
      rev3_name: 'أمل التميمي',
      rev4_text: 'أحب أسوي عندهم تشقير حواجب ووجه، شغلهم جداً رائع وأسعارهم مرة مناسبة. وموظفة الاستقبال إيمان أسلوبها جداً لطيف ومحترمة. العيادة هذي أنا مرة أحبها.',
      rev4_name: 'أم فهد',
      rev5_text: 'فريق رائع، أسعار تنافسية، خبرة طويلة في المجال. أنصح بالتعامل معهم، خاصة الدكتورة مها ملمة بكل التفاصيل ومحترفة في مجالها وتعاملها راقي جداً.',
      rev5_name: 'ماجد بكار',
      rev6_text: 'بكل أمانة أشكر اخصائية التجميل أميرة. شغلها كان أكثر من رائع ودقيقة جداً وتشتغل بكل ذمة وضمير. النتيجة فورية وسوتلي جلسات ديرمابن ميزوثيرابي والنتيجة مرضية.',
      rev6_name: 'تهاني حسن',
      reviews_cta: 'انضمي لعملائنا السعداء',
      team_tag: 'فريقنا',
      team_title: 'أطباؤنا المتميزون',
      team1_name: 'د. مها',
      team1_role: 'أخصائية التجميل',
      team1_desc: 'خبرة متميزة في الفيلر والبوتوكس وتحديد الفك وعلاج الابتسامة اللثوية بلمسة طبيعية',
      team2_name: 'د. حسن',
      team2_role: 'طبيب الأسنان',
      team2_desc: 'متخصص في تنظيف الأسنان والعناية بصحة الفم بيد خفيفة واحترافية عالية',
      team3_name: 'د. غندور',
      team3_role: 'أخصائي الجلدية',
      team3_desc: 'خبرة أكثر من خمس سنوات في علاجات الجلدية والتجميل بتقنيات متقدمة',
      insta_title: 'تابعينا على انستقرام',
      insta_cta: 'تابعينا لآخر العروض',
      contact_tag: 'تواصلي معنا',
      contact_title: 'فروعنا ومواعيدنا',
      branch1_name: 'فرع حي الغدير',
      branch1_address: 'حي الغدير، الرياض',
      branch2_name: 'فرع حي المروج',
      branch2_address: 'حي المروج، الرياض',
      hours_line1: 'السبت - الأربعاء: 1 - 9 مساءً',
      hours_line2: 'الخميس: 12 - 8 مساءً',
      trust1: 'مرخصة من وزارة الصحة',
      trust2: 'أعلى معايير الجودة',
      trust3: '+200 تقييم إيجابي',
      footer_tagline: 'جمال طبيعي بدون مبالغة',
      footer_quick: 'روابط سريعة',
      footer_contact: 'تواصلي معنا',
      footer_map: 'موقعنا على الخريطة',
      footer_official: 'مركز حياة الأسنان الطبي',
      footer_copy: '© 2026 مركز حياة الأسنان الطبي. جميع الحقوق محفوظة.',
      wa_tooltip: 'تواصلي معنا',
      wa_btn: 'تواصل واتساب',
      mobile_call: 'اتصلي',
      mobile_wa: 'واتساب',

      _meta_title: 'عيادات حياة | جلدية وتجميل وأسنان في الرياض',
      _meta_desc: 'عيادات حياة في الرياض - خدمات جلدية وتجميل وأسنان بأعلى معايير الجودة. ليزر، فيلر، بوتوكس، هيدرافيشل، تنظيف أسنان. فرعين: حي الغدير وحي المروج. احجزي الآن',
      _meta_keywords: 'عيادات حياة, عيادة تجميل الرياض, فيلر الرياض, بوتوكس الرياض, هيدرافيشل, ليزر جلدية, تنظيف اسنان الرياض, عيادة جلدية الرياض, حي الغدير, حي المروج',
      _og_title: 'عيادات حياة | جلدية وتجميل وأسنان في الرياض',
      _og_desc: 'جمال طبيعي بدون مبالغة. خدمات جلدية وتجميل وأسنان بأعلى معايير الجودة في الرياض',
      _og_locale: 'ar_SA',
      _og_image: 'assets/og-image-ar.jpg',
      _twitter_title: 'عيادات حياة | جلدية وتجميل وأسنان في الرياض',
      _twitter_desc: 'جمال طبيعي بدون مبالغة. خدمات جلدية وتجميل وأسنان بأعلى معايير الجودة',
      _wa_hero: 'مرحبا، أبغى أحجز موعد في عيادات حياة',
      _wa_float: 'مرحبا، أبغى أستفسر عن خدماتكم',
      _lang_toggle: 'EN'
    },
    en: {
      skip: 'Skip to content',
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_gallery: 'Results',
      nav_reviews: 'Reviews',
      nav_contact: 'Contact',
      nav_book: 'Book Now',
      hero_rating: '4.9 from 200+ reviews',
      hero_title: 'Natural Beauty Without Exaggeration',
      hero_subtitle: 'Dermatology',
      hero_subtitle2: 'Cosmetics',
      hero_subtitle3: 'Dental',
      hero_cta: 'Book Your Appointment',
      hero_cta2: 'Explore Our Services',
      about_tag: 'About Us',
      about_title: 'Hayat Clinics',
      about_text: 'At Hayat Clinics, we believe true beauty begins with attention to detail. We offer dermatology, cosmetic, and dental services at the highest quality standards, with a specialized medical team that combines expertise and refined taste. Our goal is to boost your confidence with a natural, elegant touch.',
      about_f1_title: 'Highest Quality Standards',
      about_f1_text: 'We use the latest internationally certified technologies and equipment',
      about_f2_title: 'Distinguished Medical Team',
      about_f2_text: 'Specialized doctors with extensive experience in dermatology, cosmetics, and dentistry',
      about_f3_title: 'Two Branches in Riyadh',
      about_f3_text: 'Al Ghadir & Al Murooj — always close to you',
      about_f4_title: 'Flexible Hours',
      about_f4_text: 'Sat–Wed: 1–9 PM | Thu: 12–8 PM',
      services_tag: 'Our Services',
      services_title: 'Complete Beauty Services',
      svc_derm_title: 'Dermatology',
      svc_derm_desc: 'Advanced skin treatments with the latest global technologies',
      svc_derm_1: 'Skin Laser & Hair Removal',
      svc_derm_2: 'HydraFacial',
      svc_derm_3: 'Skin Rejuvenation',
      svc_derm_4: 'Dermapen',
      svc_derm_5: 'Mesotherapy',
      svc_cosm_title: 'Cosmetics',
      svc_cosm_desc: 'A natural look that brings out your true beauty',
      svc_cosm_1: 'Fillers (Lips, Face, Hands)',
      svc_cosm_2: 'Botox',
      svc_cosm_3: 'Radiesse Hand Filler',
      svc_cosm_4: 'Jaw Contouring',
      svc_cosm_5: 'Gummy Smile Treatment',
      svc_dent_title: 'Dental',
      svc_dent_desc: 'A bright smile that reflects your confidence',
      svc_dent_1: 'Teeth Cleaning',
      svc_dent_2: 'Dental Care',
      svc_dent_3: 'Smile Design',
      svc_popular: 'Most Popular',
      svc_book: 'Book Consultation',
      offers_badge: 'Special Offer',
      offers_title: 'Ramadan Offers',
      offers_text: 'Get ready for Ramadan with exclusive offers on all beauty and skincare services',
      offers_cta: 'Ask About Offers',
      gallery_tag: 'Real Results',
      gallery_title: 'Before & After',
      gallery_desc: 'Real results from our clients — the difference speaks for itself',
      gallery_label1: 'Hand Filler — Radiesse',
      gallery_label2: 'HydraFacial — Skin Glow',
      gallery_label3: 'Gummy Smile Treatment',
      gallery_label4: 'Radiesse Hand Filler',
      gallery_cta: 'Start Your Transformation',
      reviews_tag: 'Client Reviews',
      reviews_title: 'What They Say About Us',
      rev1_text: 'My forever clinic! I always get laser hair removal with Chris — her work is unmatched. And the receptionist Hanouf, her service is truly wonderful. I trust all my treatments to this clinic.',
      rev1_name: 'Amirah Alshaibani',
      rev2_text: 'Dr. Maha is amazing! The lip fillers and jaw contouring were perfection. First time I saw my face so defined and clear, and most importantly — no exaggeration at all. Thank you Dr. Maha.',
      rev2_name: 'Sidrah Muhammad',
      rev3_text: 'Clean and organized clinic. Dr. Hassan did an excellent teeth cleaning — gentle and skilled. Dr. Ghandour is very experienced. They served me tea and coffee with wonderful hospitality.',
      rev3_name: 'Amal Tamimi',
      rev4_text: 'I love getting my eyebrow and face threading here, their work is amazing and prices are very reasonable. Receptionist Iman is so kind and professional. I absolutely love this clinic.',
      rev4_name: 'Am Fahad',
      rev5_text: 'Great team, competitive prices, extensive experience. I highly recommend them, especially Dr. Maha — she is meticulous and professional in her field with very elegant treatment.',
      rev5_name: 'Majed Bakkar',
      rev6_text: 'I sincerely thank beauty specialist Amira. Her work was outstanding, precise, and conscientious. Immediate results with Dermapen mesotherapy sessions — very satisfying results.',
      rev6_name: 'Tahani Hassan',
      reviews_cta: 'Join Our Happy Clients',
      team_tag: 'Our Team',
      team_title: 'Our Distinguished Doctors',
      team1_name: 'Dr. Maha',
      team1_role: 'Cosmetics Specialist',
      team1_desc: 'Expert in fillers, Botox, jaw contouring, and gummy smile treatment with a natural touch',
      team2_name: 'Dr. Hassan',
      team2_role: 'Dentist',
      team2_desc: 'Specialist in teeth cleaning and oral care with a gentle, highly professional approach',
      team3_name: 'Dr. Ghandour',
      team3_role: 'Dermatology Specialist',
      team3_desc: 'Over five years of experience in dermatology and cosmetic treatments with advanced techniques',
      insta_title: 'Follow Us on Instagram',
      insta_cta: 'Follow Us for Latest Offers',
      contact_tag: 'Contact Us',
      contact_title: 'Our Branches & Hours',
      branch1_name: 'Al Ghadir Branch',
      branch1_address: 'Al Ghadir District, Riyadh',
      branch2_name: 'Al Murooj Branch',
      branch2_address: 'Al Murooj District, Riyadh',
      hours_line1: 'Sat – Wed: 1 – 9 PM',
      hours_line2: 'Thu: 12 – 8 PM',
      trust1: 'Licensed by Saudi MOH',
      trust2: 'Highest Quality Standards',
      trust3: '200+ Positive Reviews',
      footer_tagline: 'Natural Beauty Without Exaggeration',
      footer_quick: 'Quick Links',
      footer_contact: 'Contact Us',
      footer_map: 'Find Us on Map',
      footer_official: 'Hayat Dental Medical Center',
      footer_copy: '© 2026 Hayat Dental Medical Center. All rights reserved.',
      wa_tooltip: 'Chat with us',
      wa_btn: 'Chat on WhatsApp',
      mobile_call: 'Call',
      mobile_wa: 'WhatsApp',

      _meta_title: 'Hayat Clinics | Dermatology, Cosmetics & Dental in Riyadh',
      _meta_desc: 'Hayat Clinics in Riyadh - Premium dermatology, cosmetics & dental services. Laser, fillers, Botox, HydraFacial, teeth cleaning. Two branches: Al Ghadir & Al Murooj. Book now',
      _meta_keywords: 'Hayat Clinics, beauty clinic Riyadh, fillers Riyadh, Botox Riyadh, HydraFacial, laser dermatology, teeth cleaning Riyadh, dermatology clinic Riyadh',
      _og_title: 'Hayat Clinics | Dermatology, Cosmetics & Dental in Riyadh',
      _og_desc: 'Natural Beauty Without Exaggeration. Premium dermatology, cosmetics & dental services in Riyadh',
      _og_locale: 'en_US',
      _og_image: 'assets/og-image-en.jpg',
      _twitter_title: 'Hayat Clinics | Dermatology, Cosmetics & Dental in Riyadh',
      _twitter_desc: 'Natural Beauty Without Exaggeration. Premium dermatology, cosmetics & dental services',
      _wa_hero: "Hi, I'd like to book an appointment at Hayat Clinics",
      _wa_float: "Hi, I'd like to inquire about your services",
      _lang_toggle: 'ع'
    }
  };

  /* ---------- State ---------- */
  let currentLang = localStorage.getItem('hayat_lang') || 'ar';

  /* ---------- DOM Cache ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

  const htmlEl = document.documentElement;
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const mainNav = $('#mainNav');
  const langToggle = $('#langToggle');
  const pageLoader = $('#page-loader');
  const mobileBar = $('#mobileBar');
  const whatsappFloat = $('#whatsappFloat .whatsapp-widget__btn');

  /* ---------- Page Loader ---------- */
  function hideLoader() {
    if (pageLoader) {
      pageLoader.classList.add('hidden');
      setTimeout(() => { pageLoader.style.display = 'none'; }, 600);
    }
  }

  /* ---------- Language System ---------- */
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hayat_lang', lang);

    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang];

    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          const icon = el.querySelector('i');
          if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.append(' ' + t[key]);
          } else {
            el.textContent = t[key];
          }
        }
      }
    });

    // Update lang toggle button text
    const toggleText = $('.lang-toggle__text');
    if (toggleText) toggleText.textContent = t._lang_toggle;

    // Update meta tags
    updateMetaTags(t);

    // Update WhatsApp links with localized messages
    updateWhatsAppLinks(lang);

    // Push language switch event
    pushEvent('language_switch', { language: lang });
  }

  function updateMetaTags(t) {
    document.title = t._meta_title;

    const setMeta = (attr, val, prop) => {
      const sel = prop
        ? `meta[property="${attr}"]`
        : `meta[name="${attr}"]`;
      const el = $(sel);
      if (el) el.setAttribute('content', val);
    };

    setMeta('description', t._meta_desc);
    setMeta('keywords', t._meta_keywords);
    setMeta('og:title', t._og_title, true);
    setMeta('og:description', t._og_desc, true);
    setMeta('og:locale', t._og_locale, true);
    setMeta('twitter:title', t._twitter_title);
    setMeta('twitter:description', t._twitter_desc);
  }

  function updateWhatsAppLinks(lang) {
    const t = translations[lang];
    const utm = new URLSearchParams(window.location.search).get('utm_source');
    const suffix = utm ? ` (${utm})` : '';

    const heroText = encodeURIComponent(t._wa_hero + suffix);
    const floatText = encodeURIComponent(t._wa_float + suffix);

    const waBase = 'https://wa.me/966553016565?text=';

    // Hero CTAs
    $$('[data-track-source="hero"]').forEach(el => {
      if (el.href && el.href.includes('wa.me')) {
        el.href = waBase + heroText;
      }
    });

    // Floating button
    if (whatsappFloat) {
      whatsappFloat.href = waBase + floatText;
    }

    // Mobile bar WA
    $$('[data-track-source="mobile_bar"]').forEach(el => {
      if (el.href && el.href.includes('wa.me')) {
        el.href = waBase + heroText;
      }
    });
  }

  /* ---------- Navbar Scroll ---------- */
  let lastScrollY = 0;

  function handleNavbarScroll() {
    const y = window.scrollY;
    if (y > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = y;
  }

  /* ---------- Active Section Tracking ---------- */
  function updateActiveNav() {
    const sections = $$('section[id]');
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        $$('.navbar__link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ---------- Mobile Bar Visibility ---------- */
  function handleMobileBar() {
    if (!mobileBar) return;
    const heroBottom = $('#hero') ? $('#hero').offsetTop + $('#hero').offsetHeight : 600;
    if (window.scrollY > heroBottom) {
      mobileBar.classList.add('visible');
    } else {
      mobileBar.classList.remove('visible');
    }
  }

  /* ---------- Hamburger ---------- */
  function toggleMenu() {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
    const expanded = hamburger.classList.contains('open');
    hamburger.setAttribute('aria-expanded', expanded);
    document.body.style.overflow = expanded ? 'hidden' : '';
  }

  /* ---------- Smooth Scroll ---------- */
  function setupSmoothScroll() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = $(targetId);
        if (!target) return;

        e.preventDefault();

        // Close mobile menu if open
        if (mainNav.classList.contains('open')) {
          toggleMenu();
        }

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- Analytics Helpers ---------- */
  function pushEvent(eventName, data) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      current_language: currentLang,
      ...data
    });

    // Meta Pixel
    if (typeof fbq === 'function') {
      if (eventName.includes('whatsapp') || eventName.includes('phone')) {
        fbq('track', 'Contact');
      } else if (eventName === 'section_view') {
        fbq('track', 'ViewContent', { content_name: data.section });
      }
    }

    // Snapchat Pixel
    if (typeof snaptr === 'function') {
      if (eventName.includes('whatsapp') || eventName.includes('phone')) {
        snaptr('track', 'SUBSCRIBE');
      }
    }

    // TikTok Pixel
    if (typeof ttq !== 'undefined') {
      if (eventName.includes('whatsapp') || eventName.includes('phone')) {
        ttq.track('Contact');
      } else if (eventName === 'section_view') {
        ttq.track('ViewContent');
      }
    }
  }

  function setupTracking() {
    // Track all elements with data-track attribute
    $$('[data-track]').forEach(el => {
      el.addEventListener('click', function () {
        const event = this.getAttribute('data-track');
        const source = this.getAttribute('data-track-source') || 'unknown';
        pushEvent(event, { click_source: source });
      });
    });

    // Scroll depth tracking
    const depthMarks = { 25: false, 50: false, 75: false, 100: false };

    function checkScrollDepth() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);

      Object.keys(depthMarks).forEach(mark => {
        if (pct >= parseInt(mark) && !depthMarks[mark]) {
          depthMarks[mark] = true;
          pushEvent('scroll_depth', { depth: mark + '%' });
        }
      });
    }

    window.addEventListener('scroll', checkScrollDepth, { passive: true });

    // Section view tracking with IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            pushEvent('section_view', { section: entry.target.id });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      $$('section[id]').forEach(section => observer.observe(section));
    }
  }

  /* ---------- Swiper Init ---------- */
  function initSwipers() {
    if (typeof Swiper === 'undefined') return;

    new Swiper('.gallery-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.gallery-swiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.gallery-swiper .swiper-button-next',
        prevEl: '.gallery-swiper .swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2.2 },
      },
    });

    new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.reviews-swiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2.5 },
        1280: { slidesPerView: 3 },
      },
    });
  }

  /* ---------- AOS Init ---------- */
  function initAOS() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }

  /* ---------- Init ---------- */
  function init() {
    // Set initial language
    setLanguage(currentLang);

    // Event listeners
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });

    hamburger.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', () => {
      handleNavbarScroll();
      updateActiveNav();
      handleMobileBar();
    }, { passive: true });

    setupSmoothScroll();
    setupTracking();

    // Wait for deferred scripts
    function tryInitLibraries() {
      initAOS();
      initSwipers();
    }

    if (document.readyState === 'complete') {
      tryInitLibraries();
    } else {
      window.addEventListener('load', tryInitLibraries);
    }

    // Hide loader
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 300);
    });

    // Fallback: hide loader after 3s max
    setTimeout(hideLoader, 3000);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
