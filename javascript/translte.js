// عند تحميل الصفحة، طبق اللغة المحفوظة + شغل الأنيميشن + القائمة المنسدلة
window.addEventListener("DOMContentLoaded", () => {
    // ✅ الترجمة
    const savedLang = localStorage.getItem("selectedLang") || "ar";
    applyTranslation(savedLang);

    // ✅ تأثير reveal عند التمرير
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

    // ✅ القائمة المنسدلة للغات
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
});

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
    },
    "service-governance-title": {
        ar: "الحوكمة",
        en: "Governance",
        es: "Gobernanza",
        fr: "Gouvernance",
        ko: "거버넌스",
        ja: "ガバナンス",
        zh: "治理",
        pt: "Governança"
    },
    "service-governance-subtitle": {
        ar: "نُقنّن الوجود، ونُؤسّس الاستمرارية.",
        en: "We legalize presence and establish continuity.",
        es: "Legalizamos la presencia y establecemos la continuidad.",
        fr: "Nous légalisons la présence et établissons la continuité.",
        ko: "존재를 합법화하고 지속성을 구축합니다.",
        ja: "存在を合法化し、継続性を確立します。",
        zh: "我们规范存在，建立持续性。",
        pt: "Legalizamos a presença e estabelecemos a continuidade."
    },
    "service-governance-desc": {
        ar: "نُساعد الشركات العالمية على تأسيس وجود قانوني ومنظم داخل المملكة، وفقًا لأعلى معايير الامتثال التنظيمي السعودي. نُصمّم أطر الحوكمة، نُعد السياسات الداخلية، ونُوفّر الاستشارات القانونية والتنظيمية بما يضمن استدامة الأعمال وشفافيتها. من التأسيس حتى التشغيل، نضمن الاتساق والامتثال.",
        en: "We help global companies establish a legal and structured presence in the Kingdom, aligned with the highest standards of Saudi regulatory compliance. We design governance frameworks, draft internal policies, and provide legal and regulatory consulting to ensure business sustainability and transparency. From setup to operation, we ensure consistency and compliance.",
        es: "Ayudamos a las empresas globales a establecer una presencia legal y estructurada en el Reino, alineada con los más altos estándares de cumplimiento regulatorio saudí. Diseñamos marcos de gobernanza, redactamos políticas internas y ofrecemos consultoría legal y regulatoria para garantizar la sostenibilidad y transparencia empresarial. Desde la configuración hasta la operación, garantizamos coherencia y cumplimiento.",
        fr: "Nous aidons les entreprises mondiales à établir une présence légale et structurée dans le Royaume, conforme aux normes les plus élevées de conformité réglementaire saoudienne. Nous concevons des cadres de gouvernance, rédigeons des politiques internes et fournissons des conseils juridiques et réglementaires pour assurer la durabilité et la transparence des entreprises. De la mise en place à l'exploitation, nous garantissons la cohérence et la conformité.",
        ko: "우리는 글로벌 기업이 사우디 규제 준수 기준에 맞춰 합법적이고 구조화된 존재를 구축하도록 돕습니다. 거버넌스 프레임워크를 설계하고 내부 정책을 작성하며 지속 가능성과 투명성을 보장하는 법률 및 규제 자문을 제공합니다. 설립부터 운영까지 일관성과 준수를 보장합니다.",
        ja: "グローバル企業がサウジアラビアの規制遵守基準に沿って合法的かつ構造化された存在を確立するのを支援します。ガバナンスの枠組みを設計し、内部ポリシーを作成し、持続可能性と透明性を確保するための法的および規制に関するコンサルティングを提供します。設立から運営まで、一貫性と遵守を保証します。",
        zh: "我们帮助全球公司在沙特王国建立合法且结构化的存在，符合最高的沙特监管合规标准。我们设计治理框架，起草内部政策，并提供法律和监管咨询，以确保业务的可持续性和透明度。从设立到运营，我们确保一致性和合规性。",
        pt: "Ajudamos empresas globais a estabelecer uma presença legal e estruturada no Reino, alinhada com os mais altos padrões de conformidade regulatória saudita. Projetamos estruturas de governança, elaboramos políticas internas e fornecemos consultoria jurídica e regulatória para garantir a sustentabilidade e transparência dos negócios. Da configuração à operação, garantimos consistência e conformidade."
    },
    "get-it-now": {
        ar: "احصل عليها الآن",
        en: "Get it now",
        es: "Consíguelo ahora",
        fr: "Obtenez-le maintenant",
        ko: "지금 받기",
        ja: "今すぐ入手",
        zh: "立即获取",
        pt: "Obtenha agora"
    },
    "service-representation-title": {
        ar: "التمثيل التجاري",
        en: "Commercial Representation",
        es: "Representación comercial",
        fr: "Représentation commerciale",
        ko: "상업적 대표",
        ja: "商業的代表",
        zh: "商业代表",
        pt: "Representação comercial"
    },
    "service-representation-subtitle": {
        ar: "نكون صوتك، وعينك، ووجهك الرسمي داخل السعودية.",
        en: "We are your voice, eyes, and official face in Saudi Arabia.",
        es: "Somos tu voz, tus ojos y tu cara oficial en Arabia Saudita.",
        fr: "Nous sommes votre voix, vos yeux et votre visage officiel en Arabie Saoudite.",
        ko: "우리는 사우디아라비아에서 당신의 목소리, 눈, 공식적인 얼굴입니다.",
        ja: "私たちはサウジアラビアであなたの声、目、公式な顔です。",
        zh: "我们是你在沙特的声音、眼睛和官方形象。",
        pt: "Somos sua voz, seus olhos e seu rosto oficial na Arábia Saudita."
    },
    "service-representation-desc": {
        ar: "نقوم بتمثيل الشركات العالمية أمام الجهات الحكومية، الهيئات، العملاء، والشركاء المحليين. نُدير العقود، نُفعّل الشراكات، ونُقدّم خدمات الممثل التجاري الرسمي بكل احترافية وقوة تأثير. تمثيل لا يقتصر على التواجد… بل يُحقق النفوذ",
        en: "We represent global companies before government entities, authorities, clients, and local partners. We manage contracts, activate partnerships, and provide official commercial representation services with professionalism and influence. Representation that goes beyond presence… it achieves impact.",
        es: "Representamos a empresas globales ante entidades gubernamentales, autoridades, clientes y socios locales. Gestionamos contratos, activamos asociaciones y ofrecemos servicios de representación comercial oficial con profesionalismo e influencia. Una representación que va más allá de la presencia… logra impacto.",
        fr: "Nous représentons des entreprises mondiales auprès des entités gouvernementales, des autorités, des clients et des partenaires locaux. Nous gérons les contrats, activons les partenariats et fournissons des services de représentation commerciale officielle avec professionnalisme et influence. Une représentation qui va au-delà de la présence… elle atteint l'impact.",
        ko: "우리는 글로벌 기업을 정부 기관, 당국, 고객 및 지역 파트너 앞에서 대표합니다. 계약을 관리하고 파트너십을 활성화하며 전문성과 영향력을 갖춘 공식 상업적 대표 서비스를 제공합니다. 단순한 존재를 넘어선 대표… 실질적인 영향력을 창출합니다.",
        ja: "私たちはグローバル企業を政府機関、当局、顧客、地域のパートナーの前で代表します。契約を管理し、パートナーシップを活性化し、専門性と影響力を備えた公式な商業代表サービスを提供します。単なる存在を超えた代表…影響力を生み出します。",
        zh: "我们代表全球公司与政府机构、主管部门、客户和本地合作伙伴打交道。我们管理合同、激活合作关系，并以专业和影响力提供官方商业代表服务。代表不仅仅是存在…而是实现影响力。",
        pt: "Representamos empresas globais perante entidades governamentais, autoridades, clientes e parceiros locais. Gerenciamos contratos, ativamos parcerias e oferecemos serviços de representação comercial oficial com profissionalismo e influência. Representação que vai além da presença… alcança impacto."
    }
    , "service-marketing-title": {
        ar: "التسويق الدولي",
        en: "International Marketing",
        es: "Marketing internacional",
        fr: "Marketing international",
        ko: "국제 마케팅",
        ja: "国際マーケティング",
        zh: "国际营销",
        pt: "Marketing internacional"
    },
    "service-marketing-subtitle": {
        ar: "نُكيّف الرسائل. نُعيد صياغة التأثير.",
        en: "We adapt messages. We reshape impact.",
        es: "Adaptamos los mensajes. Reconfiguramos el impacto.",
        fr: "Nous adaptons les messages. Nous redéfinissons l'impact.",
        ko: "메시지를 조정하고 영향을 재구성합니다.",
        ja: "メッセージを調整し、影響を再構築します。",
        zh: "我们调整信息，重塑影响力。",
        pt: "Adaptamos as mensagens. Reconfiguramos o impacto."
    },
    "service-marketing-desc": {
        ar: "نُقدّم خدمات تسويق شاملة للشركات الأجنبية وفق السياق السعودي الثقافي والتجاري. من الحملات الرقمية والتقليدية إلى بناء العلامة التجارية وتوطين الخطاب، نُحوّل الخطط العالمية إلى نجاحات محلية. نعرف الجمهور. نُجيد الرسائل. ونُحدث الفرق",
        en: "We offer comprehensive marketing services for foreign companies tailored to the Saudi cultural and commercial context. From digital and traditional campaigns to brand building and message localization, we turn global plans into local success. We know the audience. We master the message. We make a difference.",
        es: "Ofrecemos servicios de marketing integrales para empresas extranjeras adaptados al contexto cultural y comercial saudí. Desde campañas digitales y tradicionales hasta la construcción de marca y localización de mensajes, convertimos planes globales en éxitos locales. Conocemos al público. Dominamos el mensaje. Marcamos la diferencia.",
        fr: "Nous offrons des services de marketing complets pour les entreprises étrangères, adaptés au contexte culturel et commercial saoudien. Des campagnes numériques et traditionnelles à la construction de marque et à la localisation des messages, nous transformons les plans mondiaux en succès locaux. Nous connaissons le public. Nous maîtrisons le message. Nous faisons la différence.",
        ko: "우리는 사우디 문화 및 상업적 맥락에 맞춘 외국 기업을 위한 종합 마케팅 서비스를 제공합니다. 디지털 및 전통 캠페인부터 브랜드 구축 및 메시지 현지화까지, 글로벌 계획을 지역 성공으로 전환합니다. 우리는 청중을 이해합니다. 메시지를 마스터합니다. 차이를 만듭니다.",
        ja: "サウジの文化的・商業的文脈に合わせた外国企業向けの包括的なマーケティングサービスを提供します。デジタルおよび従来型のキャンペーンからブランド構築、メッセージのローカライズまで、グローバルな計画をローカルな成功に変えます。私たちはオーディエンスを理解し、メッセージを使いこなし、違いを生み出します。",
        zh: "我们为外国公司提供全面的营销服务，贴合沙特的文化和商业背景。从数字和传统活动到品牌建设和信息本地化，我们将全球计划转化为本地成功。我们了解受众，掌握信息，创造不同。",
        pt: "Oferecemos serviços de marketing abrangentes para empresas estrangeiras, adaptados ao contexto cultural e comercial saudita. De campanhas digitais e tradicionais à construção de marca e localização de mensagens, transformamos planos globais em sucesso local. Conhecemos o público. Dominamos a mensagem. Fazemos a diferença."
    },
    "service-pr-title": {
        ar: "العلاقات العامة الدولية",
        en: "International Public Relations",
        es: "Relaciones públicas internacionales",
        fr: "Relations publiques internationales",
        ko: "국제 홍보",
        ja: "国際広報",
        zh: "国际公共关系",
        pt: "Relações públicas internacionais"
    },
    "service-pr-subtitle": {
        ar: "نُدير صورتك عالميًا… ومحليًا.",
        en: "We manage your image globally… and locally.",
        es: "Gestionamos tu imagen a nivel global… y local.",
        fr: "Nous gérons votre image à l’échelle mondiale… et locale.",
        ko: "당신의 이미지를 글로벌하게… 그리고 로컬하게 관리합니다.",
        ja: "あなたのイメージを世界的に…そして地域的に管理します。",
        zh: "我们在全球和本地管理您的形象。",
        pt: "Gerenciamos sua imagem globalmente… e localmente."
    },
    "service-pr-desc": {
        ar: "نُنسق العلاقات مع الإعلام المحلي والدولي، ونبني شبكة من التأثير تمتد من الرياض إلى نيويورك وبكين وباريس. نُدير المؤتمرات الصحفية، الحملات الإعلامية، والبيانات الرسمية، بما يعزز سمعة شركائنا في السوق السعودي وعلى مستوى العالم. الظهور الصحيح في المكان الصحيح… بصوت مؤسسي مدروس.",
        en: "We coordinate relations with local and international media, building a network of influence from Riyadh to New York, Beijing, and Paris. We manage press conferences, media campaigns, and official statements to enhance our partners' reputation in the Saudi market and globally. The right presence in the right place… with a thoughtful institutional voice.",
        es: "Coordinamos relaciones con medios locales e internacionales, construyendo una red de influencia desde Riad hasta Nueva York, Pekín y París. Gestionamos conferencias de prensa, campañas mediáticas y comunicados oficiales para mejorar la reputación de nuestros socios en el mercado saudí y a nivel mundial. La presencia adecuada en el lugar adecuado… con una voz institucional reflexiva.",
        fr: "Nous coordonnons les relations avec les médias locaux et internationaux, en construisant un réseau d'influence de Riyad à New York, Pékin et Paris. Nous gérons les conférences de presse, les campagnes médiatiques et les déclarations officielles pour renforcer la réputation de nos partenaires sur le marché saoudien et à l'international. Une présence appropriée au bon endroit… avec une voix institutionnelle réfléchie.",
        ko: "우리는 리야드에서 뉴욕, 베이징, 파리까지 이어지는 영향력 네트워크를 구축하며 지역 및 국제 언론과의 관계를 조율합니다. 우리는 기자 회견, 미디어 캠페인, 공식 성명을 관리하여 사우디 시장과 글로벌 시장에서 파트너의 평판을 강화합니다. 올바른 장소에서의 올바른 존재… 신중한 기관의 목소리로.",
        ja: "私たちはリヤドからニューヨーク、北京、パリまで影響力のネットワークを構築し、地域および国際メディアとの関係を調整します。記者会見、メディアキャンペーン、公式声明を管理し、サウジ市場および世界でのパートナーの評判を高めます。適切な場所での適切な存在…思慮深い組織の声で。",
        zh: "我们协调与本地和国际媒体的关系，建立从利雅得到纽约、北京和巴黎的影响力网络。我们管理新闻发布会、媒体活动和官方声明，以提升合作伙伴在沙特市场和全球的声誉。正确的地点，正确的形象…以深思熟虑的机构声音呈现。",
        pt: "Coordenamos relações com a mídia local e internacional, construindo uma rede de influência de Riad a Nova York, Pequim e Paris. Gerenciamos coletivas de imprensa, campanhas de mídia e declarações oficiais para fortalecer a reputação de nossos parceiros no mercado saudita e globalmente. A presença certa no lugar certo… com uma voz institucional ponderada."
    },
    "service-consulting-title": {
        ar: "الاستشارات للسوق السعودي",
        en: "Saudi Market Consulting",
        es: "Consultoría del mercado saudí",
        fr: "Consultation du marché saoudien",
        ko: "사우디 시장 컨설팅",
        ja: "サウジ市場コンサルティング",
        zh: "沙特市场咨询",
        pt: "Consultoria do mercado saudita"
    },
    "service-consulting-subtitle": {
        ar: "نعرف السوق السعودي كما يعرف النخيل أرضه.",
        en: "We know the Saudi market like palm trees know their soil.",
        es: "Conocemos el mercado saudí como las palmas conocen su tierra.",
        fr: "Nous connaissons le marché saoudien comme les palmiers connaissent leur sol.",
        ko: "우리는 사우디 시장을 야자수가 땅을 아는 것처럼 잘 압니다.",
        ja: "私たちはサウジ市場を、ヤシの木が土壌を知っているように知っています。",
        zh: "我们了解沙特市场，就像棕榈树了解它们的土壤。",
        pt: "Conhecemos o mercado saudita como as palmeiras conhecem seu solo."
    },
    "service-consulting-desc": {
        ar: "نُقدّم للشركات الأجنبية دراسات سوق دقيقة، تحليلات تنافسية، واستراتيجيات دخول مدروسة. ندرس الأنظمة، سلوك المستهلك، فرص النمو، ونُساعد في اتخاذ قرارات توسع ذكية وواقعية. من أول خطوة وحتى التوسع… نحن مستشارك المحلي الأهم",
        en: "We provide foreign companies with precise market studies, competitive analyses, and well-thought-out entry strategies. We study regulations, consumer behavior, growth opportunities, and help make smart, realistic expansion decisions. From the first step to full expansion… we are your most trusted local advisor.",
        es: "Ofrecemos a las empresas extranjeras estudios de mercado precisos, análisis competitivos y estrategias de entrada bien pensadas. Estudiamos regulaciones, comportamiento del consumidor, oportunidades de crecimiento y ayudamos a tomar decisiones de expansión inteligentes y realistas. Desde el primer paso hasta la expansión total… somos su asesor local más confiable.",
        fr: "Nous fournissons aux entreprises étrangères des études de marché précises, des analyses concurrentielles et des stratégies d'entrée réfléchies. Nous étudions les réglementations, le comportement des consommateurs, les opportunités de croissance et aidons à prendre des décisions d'expansion intelligentes et réalistes. De la première étape à l'expansion complète… nous sommes votre conseiller local le plus fiable.",
        ko: "우리는 외국 기업에게 정밀한 시장 조사, 경쟁 분석, 신중하게 계획된 진입 전략을 제공합니다. 규제, 소비자 행동, 성장 기회를 연구하고 현명하고 현실적인 확장 결정을 내릴 수 있도록 돕습니다. 첫걸음부터 전체 확장까지… 우리는 당신의 가장 신뢰받는 현지 자문가입니다.",
        ja: "私たちは外国企業に対して、正確な市場調査、競合分析、慎重に考えられた参入戦略を提供します。規制、消費者行動、成長機会を研究し、賢明で現実的な拡大の意思決定を支援します。最初の一歩から完全な拡大まで…私たちはあなたの最も信頼できる現地アドバイザーです。",
        zh: "我们为外国公司提供精确的市场研究、竞争分析和深思熟虑的进入策略。我们研究法规、消费者行为、增长机会，并帮助做出明智且现实的扩展决策。从第一步到全面扩展…我们是您最值得信赖的本地顾问。",
        pt: "Oferecemos às empresas estrangeiras estudos de mercado precisos, análises competitivas e estratégias de entrada bem planejadas. Estudamos regulamentos, comportamento do consumidor, oportunidades de crescimento e ajudamos a tomar decisões de expansão inteligentes e realistas. Do primeiro passo à expansão total… somos seu consultor local mais confiável."
    },
    "service-hr-title": {
        ar: "الموارد البشرية الدولية",
        en: "International Human Resources",
        es: "Recursos humanos internacionales",
        fr: "Ressources humaines internationales",
        ko: "국제 인사",
        ja: "国際人事",
        zh: "国际人力资源",
        pt: "Recursos humanos internacionais"
    },
    "service-hr-subtitle": {
        ar: "نُوظف الخبرة، ونُوطّن الكفاءة.",
        en: "We hire expertise and localize talent.",
        es: "Contratamos experiencia y localizamos talento.",
        fr: "Nous recrutons l'expertise et localisons les talents.",
        ko: "전문성을 채용하고 역량을 현지화합니다.",
        ja: "専門性を採用し、能力を現地化します。",
        zh: "我们招聘专业人才并本地化能力。",
        pt: "Contratamos expertise e localizamos talentos."
    },
    "service-hr-desc": {
        ar: "ندير عمليات التوظيف، التوطين، وإدارة الموارد البشرية للشركات الأجنبية وفق الأنظمة السعودية. نساعد في بناء فرق عمل متكاملة، ونضمن الامتثال الكامل لأنظمة وزارة الموارد البشرية ونطاقات. الكوادر المناسبة… في المكان المناسب… في الوقت المناسب",
        en: "We manage recruitment, localization, and HR operations for foreign companies in accordance with Saudi regulations. We help build integrated teams and ensure full compliance with the Ministry of Human Resources and Nitaqat programs. The right talent… in the right place… at the right time.",
        es: "Gestionamos el reclutamiento, la localización y las operaciones de RRHH para empresas extranjeras según las regulaciones saudíes. Ayudamos a construir equipos integrados y garantizamos el cumplimiento total con el Ministerio de Recursos Humanos y los programas Nitaqat. El talento adecuado… en el lugar adecuado… en el momento adecuado.",
        fr: "Nous gérons le recrutement, la localisation et les opérations RH pour les entreprises étrangères conformément aux réglementations saoudiennes. Nous aidons à construire des équipes intégrées et garantissons la conformité totale avec le ministère des Ressources humaines et les programmes Nitaqat. Les bons talents… au bon endroit… au bon moment.",
        ko: "우리는 사우디 규정에 따라 외국 기업의 채용, 현지화 및 인사 운영을 관리합니다. 통합된 팀을 구축하고 인적자원부 및 Nitaqat 프로그램의 완전한 준수를 보장합니다. 적절한 인재… 적절한 장소… 적절한 시간에.",
        ja: "私たちはサウジの規制に従って、外国企業の採用、現地化、人事業務を管理します。統合されたチームの構築を支援し、人材省およびNitaqatプログラムへの完全な準拠を保証します。適切な人材…適切な場所…適切なタイミングで。",
        zh: "我们根据沙特法规为外国公司管理招聘、本地化和人力资源运营。我们帮助建立整合团队，并确保完全遵守人力资源部和Nitaqat计划。合适的人才…在合适的地方…在合适的时间。",
        pt: "Gerenciamos recrutamento, localização e operações de RH para empresas estrangeiras de acordo com as regulamentações sauditas. Ajudamos a construir equipes integradas e garantimos total conformidade com o Ministério de Recursos Humanos e os programas Nitaqat. O talento certo… no lugar certo… na hora certa."
    },
    "section-our-services": {
        ar: "خدماتـــنا",
        en: "Our Services",
        es: "Nuestros servicios",
        fr: "Nos services",
        ko: "우리의 서비스",
        ja: "私たちのサービス",
        zh: "我们的服务",
        pt: "Nossos serviços"
    }
};
function applyTranslation(lang) {
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        const translation = translate[key]?.[lang];

        if (translation) {
            const span = elem.querySelector(".i18n-text");
            if (span) {
                span.textContent = translation;
            } else {
                elem.textContent = translation;
            }
        }
        document.documentElement.lang = lang; // داخل applyTranslation

    });
    const h1 = document.getElementById("hero-section-inourwork");
    if (h1) {
        h1.style.fontSize = lang !== "ar" ? "4.5em" : "4em";
    }

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}
