// for menulist icon nav bar 

// التحكم بالقائمة
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("menulist");

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline-block";

});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
});
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
//   الخاص بDroplist
// يفتح ويغلق القائمة
langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
});

// لما تضغط على أي خيار من القائمة → تغلق
langMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        langMenu.classList.remove("show");
    });
});

// إذا ضغطت برا القائمة → تغلق
window.addEventListener("click", function (e) {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("show");
    }
});

// Vision Setion 
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {
            el.classList.add('show');
        }
    });
});
// ---------------
// language from (chat-gpt)
const currentLangElements = document.querySelectorAll("[data-i18n]");

const translate = {
    "call-us": {
        ar: "تواصل معنا",
        en: "Contact Us",
        es: "Contáctanos",
        fr: "Contactez-nous",
        ko: "문의하기",
        ja: "お問い合わせ",
        zh: "联系我们",
        pt: "Contate-nos"
    },
    "our-partnier": {
        ar: "شركاؤنا",
        en: "Our Partners",
        es: "Nuestros socios",
        fr: "Nos partenaires",
        ko: "우리의 파트너",
        ja: "私たちのパートナー",
        zh: "我们的合作伙伴",
        pt: "Nossos parceiros"
    },
    "our-customers": {
        ar: "عملاؤنا",
        en: "Our Customers",
        es: "Nuestros clientes",
        fr: "Nos clients",
        ko: "우리 고객",
        ja: "私たちの顧客",
        zh: "我们的客户",
        pt: "Nossos clientes"
    },
    "our-business": {
        ar: "أعمالنا",
        en: "Our Business",
        es: "Nuestro negocio",
        fr: "Notre entreprise",
        ko: "우리 사업",
        ja: "私たちのビジネス",
        zh: "我们的业务",
        pt: "Nosso negócio"
    },
    "our-services": {
        ar: "خدماتنا",
        en: "Our Services",
        es: "Nuestros servicios",
        fr: "Nos services",
        ko: "우리의 서비스",
        ja: "私たちのサービス",
        zh: "我们的服务",
        pt: "Nossos serviços"
    },
    "who-arewe?": {
        ar: "من نحن",
        en: "Who We Are",
        es: "Quiénes somos",
        fr: "Qui nous sommes",
        ko: "우리는 누구인가",
        ja: "私たちは誰ですか",
        zh: "我们是谁",
        pt: "Quem somos"
    },
    "home-page": {
        ar: "الرئيسية",
        en: "Home",
        es: "Inicio",
        fr: "Accueil",
        ko: "홈",
        ja: "ホーム",
        zh: "主页",
        pt: "Início"
    },
    "language-translte": {
        ar: "اللغة",
        en: "Language",
        es: "Idioma",
        fr: "Langue",
        ko: "언어",
        ja: "言語",
        zh: "语言",
        pt: "Idioma"
    },
    "arabic-lang": {
        ar: "العربية",
        en: "Arabic",
        es: "Árabe",
        fr: "Arabe",
        ko: "아랍어",
        ja: "アラビア語",
        zh: "阿拉伯语",
        pt: "Árabe"
    },
    "english-lang": {
        ar: "الإنجليزية",
        en: "English",
        es: "Inglés",
        fr: "Anglais",
        ko: "영어",
        ja: "英語",
        zh: "英语",
        pt: "Inglês"
    },
    "spain-lang": {
        ar: "الإسبانية",
        en: "Spanish",
        es: "Español",
        fr: "Espagnol",
        ko: "스페인어",
        ja: "スペイン語",
        zh: "西班牙语",
        pt: "Espanhol"
    },
    "french-lang": {
        ar: "الفرنسية",
        en: "French",
        es: "Francés",
        fr: "Français",
        ko: "프랑스어",
        ja: "フランス語",
        zh: "法语",
        pt: "Francês"
    },
    "chinese-lang": {
        ar: "الصينية",
        en: "Chinese",
        es: "Chino",
        fr: "Chinois",
        ko: "중국어",
        ja: "中国語",
        zh: "中文",
        pt: "Chinês"
    },
    "korean-lang": {
        ar: "الكورية",
        en: "Korean",
        es: "Coreano",
        fr: "Coréen",
        ko: "한국어",
        ja: "韓国語",
        zh: "韩语",
        pt: "Coreano"
    },
    "portuguese-lang": {
        ar: "البرتغالية",
        en: "Portuguese",
        es: "Portugués",
        fr: "Portugais",
        ko: "포르투갈어",
        ja: "ポルトガル語",
        zh: "葡萄牙语",
        pt: "Português"
    },
    "japanese-lang": {
        ar: "اليابانية",
        en: "Japanese",
        es: "Japonés",
        fr: "Japonais",
        ko: "일본어",
        ja: "日本語",
        zh: "日语",
        pt: "Japonês"
    },
    "welcome": {
        ar: "مرحبـــا بكـــم",
        en: "Welcome",
        es: "Bienvenido",
        fr: "Bienvenue",
        ko: "환영합니다",
        ja: "ようこそ",
        zh: "欢迎",
        pt: "Bem-vindo"
    },
    "spr-global": {
        ar: "سبــــــــر الدولية",
        en: "SBR International",
        es: "SBR Internacional",
        fr: "SBR Internationale",
        ko: "SBR 인터내셔널",
        ja: "SBRインターナショナル",
        zh: "SBR国际",
        pt: "SBR Internacional"
    },
    "p-text-hero": {
        ar: "SBR International – تمثيل عالمي. تنفيذ محلي",
        en: "SBR International – Global Representation. Local Execution",
        es: "SBR Internacional – Representación global. Ejecución local",
        fr: "SBR Internationale – Représentation mondiale. Exécution locale",
        ko: "SBR 인터내셔널 – 글로벌 대표. 로컬 실행",
        ja: "SBRインターナショナル – 世界的な代表。地域での実行",
        zh: "SBR国际 – 全球代表，本地执行",
        pt: "SBR Internacional – Representação global. Execução local"
    },
    "our-worker": {
        ar: "خدماتنا",
        en: "Our Services",
        es: "Nuestros servicios",
        fr: "Nos services",
        ko: "우리의 서비스",
        ja: "私たちのサービス",
        zh: "我们的服务",
        pt: "Nossos serviços"
    },
    "our-clients": {
        ar: "عملاؤنا",
        en: "Our Clients",
        es: "Nuestros clientes",
        fr: "Nos clients",
        ko: "우리 고객",
        ja: "私たちの顧客",
        zh: "我们的客户",
        pt: "Nossos clientes"
    },
    "Our-partners": {
        ar: "الشركاء",
        en: "Our Partners",
        es: "Nuestros socios",
        fr: "Nos partenaires",
        ko: "우리의 파트너",
        ja: "私たちのパートナー",
        zh: "我们的合作伙伴",
        pt: "Nossos parceiros"
    },
    "how-we-are": {
        ar: "من نحن",
        en: "Who We Are",
        es: "Quiénes somos",
        fr: "Qui nous sommes",
        ko: "우리는 누구인가",
        ja: "私たちは誰ですか",
        zh: "我们是谁",
        pt: "Quem somos"
    },
    "info-about-h3": {
        ar: "سبر الدولية” هي الذراع العالمي لشركة سبر القابضة، تأسست لتكون الجسر الأذكى بين العالم والسوق السعودي.",
        en: "SBR International is the global arm of Sabr Holding, established to be the smartest bridge between the world and the Saudi market.",
        es: "SBR Internacional es el brazo global de Sabr Holding, establecido para ser el puente más inteligente entre el mundo y el mercado saudí.",
        fr: "SBR Internationale est le bras mondial de Sabr Holding, établi pour être le pont le plus intelligent entre le monde et le marché saoudien.",
        ko: "SBR 인터내셔널은 Sabr Holding의 글로벌 부문으로, 세계와 사우디 시장을 잇는 가장 스마트한 다리가 되기 위해 설립되었습니다.",
        ja: "SBRインターナショナルはSabrホールディングのグローバル部門であり、世界とサウジ市場をつなぐ最もスマートな架け橋として設立されました。",
        zh: "SBR国际是Sabr控股的全球分支，旨在成为世界与沙特市场之间最聪明的桥梁。",
        pt: "A SBR Internacional é o braço global da Sabr Holding, criada para ser a ponte mais inteligente entre o mundo e o mercado saudita."
    },
    "info-about-p": {
        ar: "نُمثّل الشركات العالمية داخل المملكة، ونُهيّئ لها البيئة المثالية للنجاح، من خلال حلول متكاملة تشمل الحوكمة، التسويق، العلاقات العامة، والتمثيل التجاري، مدعومة بفهم عميق للثقافة المحلية والديناميكيات السياسية والاقتصادية في السعودية.",
        en: "We represent global companies in the Kingdom and provide the ideal environment for success through integrated solutions including governance, marketing, public relations, and commercial representation, supported by deep understanding of local culture and Saudi political and economic dynamics.",
        es: "Representamos a empresas globales en el Reino y proporcionamos el entorno ideal para el éxito mediante soluciones integradas que incluyen gobernanza, marketing, relaciones públicas y representación comercial, respaldadas por un profundo conocimiento de la cultura local y las dinámicas políticas y económicas saudíes.",
        fr: "Nous représentons des entreprises mondiales dans le Royaume et offrons un environnement idéal pour réussir grâce à des solutions intégrées comprenant la gouvernance, le marketing, les relations publiques et la représentation commerciale, soutenues par une compréhension approfondie de la culture locale et des dynamiques politiques et économiques saoudiennes.",
        ko: "우리는 사우디아라비아에서 글로벌 기업을 대표하며, 거버넌스, 마케팅, 홍보, 상업적 대표를 포함한 통합 솔루션을 통해 성공을 위한 이상적인 환경을 제공합니다. 이는 지역 문화와 사우디의 정치·경제적 역학에 대한 깊은 이해를 바탕으로 합니다.",
        ja: "私たちは王国でグローバル企業を代表し、ガバナンス、マーケティング、広報、商業的代表を含む統合ソリューションを通じて成功のための理想的な環境を提供します。これは、地域文化とサウジの政治・経済的ダイナミクスに対する深い理解に支えられています。",
        zh: "我们在沙特王国代表全球公司，并通过包括治理、营销、公共关系和商业代表在内的综合解决方案，为成功提供理想环境，这些都建立在对当地文化和沙特政治经济动态的深刻理解之上。",
        pt: "Representamos empresas globais no Reino e oferecemos o ambiente ideal para o sucesso por meio de soluções integradas que incluem governança, marketing, relações públicas e representação comercial, apoiadas por uma compreensão profunda da cultura local e das dinâmicas políticas e econômicas da Arábia Saudita."
    },
    "vision-lang": {
        ar: "الرؤية",
        en: "Vision",
        es: "Visión",
        fr: "Vision",
        ko: "비전",
        ja: "ビジョン",
        zh: "愿景",
        pt: "Visão"
    },
    "call-us-footer": {
        ar: "تواصل معنا",
        en: "Contact Us",
        es: "Contáctanos",
        fr: "Contactez-nous",
        ko: "문의하기",
        ja: "お問い合わせ",
        zh: "联系我们",
        pt: "Contate-nos"
    },

    "vision-h5-lang": {
        ar: "بناء نموذج سعودي-دولي فريد في التمثيل التجاري والتسويق المتكامل.",
        en: "Building a unique Saudi-international model in commercial representation and integrated marketing.",
        es: "Construir un modelo único saudí-internacional en representación comercial y marketing integrado.",
        fr: "Construire un modèle saoudo-international unique en représentation commerciale et marketing intégré.",
        ko: "상업적 대표 및 통합 마케팅에서 독특한 사우디-국제 모델 구축.",
        ja: "商業的な代表と統合マーケティングにおいて、ユニークなサウジ国際モデルを構築する。",
        zh: "在商业代表和整合营销方面构建独特的沙特国际模式。",
        pt: "Construir um modelo único saudita-internacional em representação comercial e marketing integrado."
    },
    "vision-reverse-message": {
        ar: "الرسالة",
        en: "Mission",
        es: "Misión",
        fr: "Mission",
        ko: "미션",
        ja: "ミッション",
        zh: "使命",
        pt: "Missão"
    },
    "vision-reverse-talk": {
        ar: "أن نكون الخيار الأول عالميًا لأي شركة ترغب بالنجاح في السعودية.",
        en: "To be the global first choice for any company seeking success in Saudi Arabia.",
        es: "Ser la primera opción global para cualquier empresa que busque éxito en Arabia Saudita.",
        fr: "Être le premier choix mondial pour toute entreprise souhaitant réussir en Arabie Saoudite.",
        ko: "사우디아라비아에서 성공을 원하는 모든 기업의 글로벌 첫 번째 선택이 되는 것.",
        ja: "サウジアラビアで成功を目指すすべての企業にとって、世界的な第一選択となること。",
        zh: "成为任何希望在沙特取得成功的公司的全球首选。",
        pt: "Ser a primeira escolha global para qualquer empresa que busca sucesso na Arábia Saudita."
    },
    "our-values": {
        ar: "قيمنا",
        en: "Our Values",
        es: "Nuestros valores",
        fr: "Nos valeurs",
        ko: "우리의 가치",
        ja: "私たちの価値観",
        zh: "我们的价值观",
        pt: "Nossos valores"
    },
    "our-trust": {
        ar: "الثقة",
        en: "Trust",
        es: "Confianza",
        fr: "Confiance",
        ko: "신뢰",
        ja: "信頼",
        zh: "信任",
        pt: "Confiança"
    },
    "our-accuracy": {
        ar: "الدقة",
        en: "Accuracy",
        es: "Precisión",
        fr: "Précision",
        ko: "정확성",
        ja: "正確さ",
        zh: "准确性",
        pt: "Precisão"
    },
    "sustainability": {
        ar: "الاستدامة",
        en: "Sustainability",
        es: "Sostenibilidad",
        fr: "Durabilité",
        ko: "지속 가능성",
        ja: "持続可能性",
        zh: "可持续性",
        pt: "Sustentabilidade"
    },
    "empowerment": {
        ar: "التمكين",
        en: "Empowerment",
        es: "Empoderamiento",
        fr: "Autonomisation",
        ko: "권한 부여",
        ja: "エンパワーメント",
        zh: "赋权",
        pt: "Empoderamento"
    },
    "professionalism": {
        ar: "الاحترافية",
        en: "Professionalism",
        es: "Profesionalismo",
        fr: "Professionnalisme",
        ko: "전문성",
        ja: "プロフェッショナリズム",
        zh: "专业精神",
        pt: "Profissionalismo"
    },
    "footer-lang-aboutus": {
        ar: "مكان نصنع به مجتمعات في كافيه في مجالات لنكتشف و نطور و نقوي من خلاله المواهب الجديده.",
        en: "A place where we build communities in various fields to discover, develop, and empower new talents.",
        es: "Un lugar donde construimos comunidades en diversos campos para descubrir, desarrollar y fortalecer nuevos talentos.",
        fr: "Un lieu où nous construisons des communautés dans divers domaines pour découvrir, développer et renforcer de nouveaux talents.",
        ko: "우리는 다양한 분야에서 커뮤니티를 구축하여 새로운 인재를 발견하고 개발하며 강화합니다.",
        ja: "さまざまな分野でコミュニティを構築し、新しい才能を発見・育成・強化する場所です。",
        zh: "一个我们在各个领域建立社区以发现、发展和强化新人才的地方。",
        pt: "Um lugar onde construímos comunidades em diversas áreas para descobrir, desenvolver e fortalecer novos talentos."
    },
    "jobs": {
        ar: "الوظائف",
        en: "Jobs",
        es: "Empleos",
        fr: "Emplois",
        ko: "채용",
        ja: "求人",
        zh: "职位",
        pt: "Empregos"
    },
    "saudi-tabuk": {
        ar: "السعودية، تبوك",
        en: "Saudi Arabia, Tabuk",
        es: "Arabia Saudita, Tabuk",
        fr: "Arabie Saoudite, Tabuk",
        ko: "사우디아라비아, 타북",
        ja: "サウジアラビア、タブク",
        zh: "沙特阿拉伯，塔布克",
        pt: "Arábia Saudita, Tabuk"
    },
    "terms": {
        ar: "الشروط و الاحكام",
        en: "Terms & Conditions",
        es: "Términos y condiciones",
        fr: "Termes et conditions",
        ko: "이용 약관",
        ja: "利用規約",
        zh: "条款和条件",
        pt: "Termos e condições"
    },
    "privacy-policy": {
        ar: "سياسة الخصوصية",
        en: "Privacy Policy",
        es: "Política de privacidad",
        fr: "Politique de confidentialité",
        ko: "개인정보 보호정책",
        ja: "プライバシーポリシー",
        zh: "隐私政策",
        pt: "Política de privacidade"
    }

};


function applyTranslation(lang) {
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        const translation = translate[key]?.[lang];

        if (translation) {
            // إذا كان داخل العنصر span.i18n-text، نغيره فقط
            const span = elem.querySelector(".i18n-text");
            if (span) {
                span.textContent = translation;
            } else {
                // إذا ما فيه span، نغير النص مباشرة
                elem.textContent = translation;
            }
        }
    });

    // حفظ اللغة
    localStorage.setItem("selectedLang", lang);

    // تغيير اتجاه الصفحة
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}
// عند تحميل الصفحة، تحقق من اللغة المحفوظة
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLang") || "ar"; // الافتراضي: عربي
    applyTranslation(savedLang);
});

// ربط كل زر لغة بالوظيفة
document.getElementById("Arabic-language").addEventListener("click", () => applyTranslation("ar"));
document.getElementById("English-language").addEventListener("click", () => applyTranslation("en"));
document.querySelector('[data-i18n="spain-lang"]').addEventListener("click", () => applyTranslation("es"));
document.querySelector('[data-i18n="french-lang"]').addEventListener("click", () => applyTranslation("fr"));
document.querySelector('[data-i18n="chinese-lang"]').addEventListener("click", () => applyTranslation("zh"));
document.querySelector('[data-i18n="korean-lang"]').addEventListener("click", () => applyTranslation("ko"));
document.querySelector('[data-i18n="portuguese-lang"]').addEventListener("click", () => applyTranslation("pt"));
document.querySelector('[data-i18n="japanese-lang"]').addEventListener("click", () => applyTranslation("ja"));

// Start with Arabic by default
applyTranslation("ar");
