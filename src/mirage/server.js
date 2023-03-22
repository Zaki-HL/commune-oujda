import { createServer, Model, Response } from 'miragejs';

createServer({
	models: {
		articles: Model,
		evenements: Model,
		annonces: Model,
	},

	seeds(server) {
		// Start Article
		server.create('article', {
			id: '1',
			title: 'Le Maroc a la biennale DefExpo en Inde - Médias24',
			body: `Une délégation marocaine a pris part à DefExpo 2022, organisée à Gandhinagar en Inde, du 18 au 22 octobre. DefExpo est un événement biennal phare du ministère indien de la Défense.`,
			title_ar: 'المغرب في بينالي DefExpo بالهند',
			body_ar: `شارك وفد مغربي في معرض DefExpo 2022 الذي نُظم في جانديناغار بالهند في الفترة من 18 إلى 22 أكتوبر. DefExpo هو حدث رئيسي يعقد مرة كل سنتين لوزارة الدفاع الهندية.`,
			image: '/imgs/article2.png',
			date: '14 Mars 2023',
		});
		server.create('article', {
			id: '2',
			title:
				'Oujda-Angad : Approbation d une série de projets INDH à fort impact socio-économique',
			title_ar:
				'وجدة - أنجاد: الموافقة على سلسلة مشاريع INDH القوية	التأثير الاجتماعي والاقتصادي',
			body: 'La réunion, présidée par le wali de la région de l’Oriental et gouverneur de la préfecture d’Oujda-Angad, Mouad El Jamai, a été marquée aussi par la présentation de l’état d’avancement des projets de l’Initiative nationale pour le développement humain (INDH) programmés au titre de 2019, et du plan d’action relatif à la gestion de la plate-forme des jeunes de la préfecture d’Oujda-Angad.',
			body_ar:
				'وتميز الاجتماع ، الذي ترأسه والي المنطقة الشرقية ومحافظ محافظة وجدة - أنجاد ، معاد الجامعي ، بعرض حالة التقدم في مشاريع المبادرة الوطنية للتنمية البشرية المبرمجة. لعام 2019 ، وخطة العمل المتعلقة بإدارة منصة الشباب في محافظة وجدة - أنجاد.',
			image: '/imgs/evenement1.jpeg',
			date: '13 Mars 2023',
		});
		server.create('article', {
			id: '3',
			title:
				'OFPPT : Quatre nouvelles Cités des Métiers et des Compétences ouvriront leurs portes en 2023',
			title_ar: 'OFPPT: أربع مدن جديدة للحرف والمهارات	سيفتح في عام 2023',
			body: 'Après le démarrage des trois Cités des métiers et des compétences dans les régions de Souss-Massa, l’Oriental et Laâyoune Sakia-El Hamra, quatre autres ouvriront leurs portes cette année, dans les régions de Rabat-Salé Kénitra, Casablanca-Settat, Béni Mellal-Khénifra et Tanger-Tétouan-Al Hoceïma.',
			body_ar:
				'بعد انطلاق المدن الثلاث من المدن والكفاءات في مناطق سوس ماسة والورينتال والعيون الساقية الحمراء ، سيفتح أربعة آخرون أبوابهم هذا العام في مناطق الرباط - سلا القنيطرة ، الدار البيضاء- سطات ، بني ملال خنيفرة وطنجة تطوان الحسيمة.			',
			image: '/imgs/image1.jpeg',
			date: '13 Mars 2023',
		});
		server.create('article', {
			id: '4',
			title: 'Hajj 1444: la 2e phase du paiement des frais du 23 au 29 mars',
			title_ar: 'الحج 1444: المرحلة الثانية من دفع الرسوم 23-29 مارس',
			body: 'La deuxième phase de l’opération du règlement des frais du Hajj pour la saison 1444 de l’Hégire, pour les personnes inscrites dans les listes d’attente selon l’ordre établi par le processus de tirage au sort et qui remplaceront ceux n’ayant pas pu effectué le règlement des frais du Hajj pour la saison 1444 lors de la première phase, se déroulera du 23 au 29 mars 2023, a annoncé, lundi, le ministère des Habous et des Affaires Islamiques.',
			body_ar:
				'المرحلة الثانية من عملية سداد رسوم الحج لموسم 1444 هجرية للمسجلين في قوائم الانتظار حسب الترتيب الذي تحدده عملية القرعة والذين سيحلون محل غير القادرين على دفع رسوم الحج لعام 1444 أعلنت وزارة الأوقاف والشؤون الإسلامية ، اليوم الاثنين ، أن الموسم خلال المرحلة الأولى ، سيقام في الفترة من 23 إلى 29 مارس 2023.			',
			image: '/imgs/hajj.jpeg',
			date: '13 Mars 2023',
		});
		server.create('article', {
			id: '5',
			title:
				'Le Maroc doit adapter son économie à la menace climatique croissante',
			title_ar: 'يجب على المغرب تكييف اقتصاده مع التهديد المناخي المتزايد			',
			body: 'Le Maroc doit adapter son économie pour faire face à la menace croissante du changement climatique qui occasionne des sécheresses plus fréquentes, a indiqué la ministre de l Économie et des Finances, Nadia Fettah Alaoui.',
			body_ar:
				'قالت وزيرة الاقتصاد والمالية نادية فتاح العلوي إن المغرب يجب أن يكيّف اقتصاده لمواجهة التهديد المتزايد للتغير المناخي الذي يتسبب في مزيد من موجات الجفاف المتكررة.			',
			image: '/imgs/image2.jpeg',
			date: '12 Mars 2023',
		});
		server.create('article', {
			id: '6',
			title:
				'Appel à communication pour la 3e conférence «Marchés du travail et transformations structurelles»',
			title_ar:
				'دعوة للمشاركة في المؤتمر الثالث "أسواق العمل	والتحولات الهيكلية "',
			body: 'Bank Al-Maghrib et le Réseau régional des départements de Recherche des Banques centrales du Moyen-Orient et de l Afrique du Nord lancent un appel à communication pour la troisième conférence annuelle du réseau, qui aura lieu les 14 et 15 septembre 2023 à Rabat, en format hybride, sur le thème «Marchés du travail et transformations structurelles». La date limite de soumission est le 14 mai 2023.',
			body_ar:
				'يطلق بنك المغرب والشبكة الإقليمية لإدارات البحث في البنوك المركزية للشرق الأوسط وشمال إفريقيا دعوة لتقديم أوراق بحثية للمؤتمر السنوي الثالث للشبكة الذي سيعقد يومي 14 و 15 سبتمبر 2023 في الرباط ، بصيغة مختلطة ، حول موضوع "أسواق العمل والتحولات الهيكلية". الموعد النهائي للتقديم هو 14 مايو 2023.			',
			image: '/imgs/image3.jpeg',
			date: '12 Mars 2023',
		});
		server.create('article', {
			id: '7',
			title:
				'Programme ProFuturo : La Fondation BMCE Bank pour l’Education et l’Environnement enrichit son programme d’éducation numérique',
			title_ar:
				'برنامج ProFuturo: مؤسسة BMCE Bank للتعليم و	تثري البيئة برنامج التعليم الرقمي الخاص بها',
			body: 'La Fondation BMCE Bank pour l’Education et l’Environnement a signé une convention de collaboration avec la Fondation ProFuturo visant à promouvoir et à encourager la formation des enfants, des jeunes, des enseignants et des personnes en risque d exclusion sociale.',
			body_ar:
				'وقع BMCE Bank Foundation for Education and Environment اتفاقية تعاون مع مؤسسة ProFuturo تهدف إلى تعزيز وتشجيع تدريب الأطفال والشباب والمعلمين والأشخاص المعرضين لخطر الإقصاء الاجتماعي.			',
			image: '/imgs/image4.jpeg',
			date: '11 Mars 2023',
		});
		server.create('article', {
			id: '8',
			title:
				'Libertés fondamentales: structurées et audacieuses, les propositions de réforme d un collectif inédit',
			title_ar:
				'الحريات الأساسية: منظم وجريء ، مقترحات إصلاح جماعية غير مسبوقة			',
			body: 'Élaboré et publié par un collectif d experts, un document de travail sur les libertés fondamentales présente des propositions de réforme de divers textes : la Constitution, le Code de la famille, le Code pénal et le Code de la nationalité. Le groupe de travail à l origine de ce document se compose de huit membres : Asma Lamrabet, Driss Benhima, Yasmina Baddou, Jalil Benabbés-Taarji, Khadija El Amrani, Chafik Chraibi, Monique El Grichi et Mohamed Gaïzi. Il s agit d un collectif "paritaire, diversifié par les profils et les expériences, et essentiellement non partisan", comme l indique à Médias24 le coordinateur de ce collectif.',
			body_ar:
				'وثيقة عمل حول الحريات الأساسية ، أعدتها ونشرتها مجموعة من الخبراء ، تقدم مقترحات لإصلاح نصوص مختلفة: الدستور ، وقانون الأسرة ، وقانون العقوبات ، وقانون الجنسية.		تتكون مجموعة العمل التي أعدت هذه الوثيقة من ثمانية أعضاء: أسماء المرابط ، إدريس بن هيمة ، ياسمينة بادو ، جليل بن عباس الطرجي ، خديجة العمراني ، شفيق الشريبي ، مونيك الجريشي ، ومحمد جيزي.  إنها جماعية "متساوية ، متنوعة حسب السمات والتجارب ، وغير حزبية في الأساس" ، كما أوضح ميديا ​​24 منسق هذا التجمع.',
			image: '/imgs/uneimage.jpeg',
			date: '10 Mars 2023',
		});
		// End Article

		// Start Evenements
		server.create('evenement', {
			id: '1',
			title:
				'Festival Action: Danse 7 Oujda & Casablanca Au programme: Gaby Saranouffi Low Rize...',
			title_ar:
				'مهرجان أكشن: رقص 7 وجدة والدار البيضاء على برنامج: غابي سارانوفي لو ريزي ...			',
			body: 'Action danse est une manifestation organisée par des jeunes et pour les jeunes et qui a pour vocation de sensibiliser les jeunes marocains à la danse en générale et à la danse contemporaine en particulier. Un festival en constante évolution, « Action Danse » s’adapte et innove d’année en année pour s’harmoniser autant que possible avec le stagiaire qui découvre et le spectateur curieux. Ne pas choquer mais déplacer poétiquement les repères pour redonner un nouveau visage à la danse au Maroc, tel est l’objectif d’Action Danse. Les éditions précédentes se sont intéressées à Casablanca, Rabat et Meknès. En 2011, l’association Fleur d’Orange fait voyager ACTION DANSE dans l’Oriental ; Oujda et Nador.',
			body_ar:
				'أكشن دانسي هو حدث ينظمه الشباب وللشباب ويهدف إلى توعية الشباب المغربي بالرقص بشكل عام والرقص المعاصر بشكل خاص.	مهرجان في تطور مستمر ، يتكيف "Action Danse" ويبتكر من سنة إلى أخرى لينسق قدر الإمكان مع المتدرب الذي يكتشف والمشاهد الفضولي. ليس الصدمة ولكن لتحريك المعايير بشكل شاعرى لإعطاء وجه جديد للرقص في المغرب ، هذا هو الهدف من Action Danse.	ركزت الإصدارات السابقة على الدار البيضاء والرباط ومكناس. في عام 2011 ، قامت جمعية Fleur d’Orange بالسفر ACTION DANSE في المنطقة الشرقية ؛ وجدة والناظور',
			image: '',
			date: '1er au 9 mai',
		});
		server.create('evenement', {
			id: '2',
			title:
				'Inscriptions ouvertes, 3 passages sur scène dans la journée🤩Vous avez un groupe de Danse...',
			title_ar:
				'التسجيلات مفتوحة ، 3 ظهورات على خشبة المسرح خلال النهار	🤩 هل عندك فرقة رقص ...',
			body: 'Inscriptions ouvertes, 3 passages sur scène dans la journée 	Vous avez un groupe de Danse (tous styles bienvenus et même recherchés !) de 6 ans à ... pas d âge limite ... n hésitez pas, faites votre demande d inscription et venez partager cette journée magique à nos côtés, pas de jugement, juste du partage et le plaisir de découvrir les Danses des Autres (deadline 31 octobre)',
			body_ar:
				'التسجيلات مفتوحة ، 3 ظهورات على خشبة المسرح خلال النهار	لديك مجموعة رقص (جميع الأنماط مرحب بها وحتى تريد!) من سن 6 سنوات إلى ... بلا حد للعمر ... لا تتردد ، قدم طلب التسجيل وتعال وشارك معنا هذا اليوم السحري ، بدون إصدار حكم ، فقط المشاركة ومتعة اكتشاف رقصات الآخرين (الموعد النهائي أكتوبر 31)',
			image: '',
			date: '26 Mars 2023',
		});
		server.create('evenement', {
			id: '3',
			title: 'Oujda : 9ème édition du Festival des sciences de l’Oriental',
			title_ar: 'وجدة: الدورة التاسعة لمهرجان العلوم الشرقية',
			body: 'La 9ème édition du Festival des sciences de l’Oriental s’est ouverte vendredi au Parc écologique d’Oujda, dans le but de promouvoir les sciences et éveiller la curiosité scientifique, notamment auprès des élèves et étudiants. Cet événement, organisé jusqu’au 8 mai courant, sous le Haut patronage de SM le Roi Mohammed VI, par la Maison des sciences de l’Oriental et la Fondation Omar Ibn Abdelaziz, est placé cette année sous le thème «Après la pandémie, retour à la vie, à la source de la vie : l’eau».',
			body_ar:
				'افتتحت النسخة التاسعة من مهرجان العلوم الشرقية يوم الجمعة في حديقة وجدة البيئية ، بهدف تعزيز العلوم وإثارة الفضول العلمي ، خاصة بين التلاميذ والطلاب.	هذا الحدث ، الذي نظم حتى 8 مايو ، تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس ، من قبل دار العلوم الشرقية ومؤسسة عمر بن عبد العزيز ، يتم وضعه هذا العام تحت شعار "بعد الوباء ، تعود الحياة ، إلى مصدر الحياة: الماء ".',
			image: '',
			date: '6 mai 2023',
		});
		server.create('evenement', {
			id: '4',
			title:
				'Oujda... L’Université Mohammed I participe à la commémoration du 20e anniversaire de l’Initiative royale de développement de l’Est',
			title_ar:
				'وجدة ... جامعة محمد الأول تشارك في الاحتفال	الذكرى العشرين للمبادرة الملكية لتطويرالشرق',
			body: 'La journée du 19 mars sera marquée par la tenue d un forum des ONG sur "le contenu du discours royal et la politique de proximité", et le vernissage d une exposition de peinture, alors que le 20 mars connaîtra l organisation d un concours hippique de sauts d obstacles (la matinée) et un diner-débat initié par la section régionale du Syndicat National de la Presse Marocaine sur le développement dans la région. Le programme comporte également diverses activités culturelles, éducatives et de sensibilisation au profit des enfants.',
			body_ar:
				'سيشهد يوم 19 مارس عقد منتدى للمنظمات غير الحكومية حول محتوى الخطاب الملكي وسياسة القرب وافتتاح معرض للرسم ، بينما سيشهد 20 مارس تنظيم مسابقة قفز حصان في الصباح وعشاء نقاش بدأه القسم الجهوي للنقابة الوطنية للصحافة المغربية حول التنمية في المنطقة. كما يتضمن البرنامج أنشطة ثقافية وتعليمية وتوعوية متنوعة لصالح الأطفال.',
			image: '',
			date: '13 Mars 2023',
		});
		server.create('evenement', {
			id: '5',
			title: 'Joyeuse journée de la femme',
			title_ar: 'يوم سعيد للمرأة',
			body: 'Officiellement consacrée à la lutte pour les droits des femmes, la journée du 8 mars est parfois mal comprise, notamment par ceux qui souhaitent une « joyeuse fête de la femme », une rose rouge ou une boîte de chocolats à la main. Il arrive aussi que certaines personnes remettent en cause la pertinence et le bien-fondé de cette journée, en affirmant par exemple qu’« en France, l’égalité professionnelle est acquise », ou en réclamant « une Journée internationale des droits des hommes ». Voici quelques arguments et chiffres à opposer à ces affirmations.',
			body_ar:
				'يوم 8 مارس ، المخصص رسميًا للنضال من أجل حقوق المرأة ، يساء فهمه أحيانًا ، لا سيما من قبل أولئك الذين يرغبون في "يوم سعيد للمرأة" أو وردة حمراء أو علبة شوكولاتة في أيديهم.	ويصادف أيضًا أن يشكك البعض في أهمية وصحة هذا اليوم ، على سبيل المثال من خلال التأكيد على أنه "في فرنسا ، يتم اكتساب المساواة المهنية" ، أو من خلال الدعوة إلى "يوم دولي لحقوق الإنسان". فيما يلي بعض الحجج والأرقام لمعارضة هذه التأكيدات.',
			image: '',
			date: '8 mars 2023',
		});
		server.create('evenement', {
			id: '6',
			title: 'La Nuit de la Poésie - Frontières',
			title_ar: 'ليلة الشعر - الحدود',
			body: 'Dans le cadre de la semaine de la Francophonie et en marge de la 25ème édition du Printemps des poètes, l’Institut français d’Oujda en partenariat avec l’Association Marocaine des Enseignants de Français CP Oujda organisera « La NUIT DE LA POÉSIE » le vendredi 31 mars 2023 à partir de 22h',
			body_ar:
				'في إطار أسبوع الفرانكفونية وعلى هامش النسخة الخامسة والعشرين من ربيع الشعراء ، ينظم المعهد الفرنسي لوجدة بالشراكة مع الجمعية المغربية للمعلمين الفرنسيين سي بي وجدة "La NUIT DE LA POÉSIE" يوم الجمعة 31 مارس ، 2023 من الساعة 10 مساءً',
			image: '',
			date: '31 mars 2023',
		});
		// End Evenements

		// Start Annonces
		server.create('annonce', {
			id: '1',
			title:
				'Publication de la liste des convoqués pour le concours de recrutement d un AGENT DE MAITRISE (2) postes à la Société des Silos Portuaires (SOSIPO)',
			title_ar:
				'نشر قائمة المستدعين لمسابقة التوظيف لمنصب مدير (2) في Société des Silos Portuaires (SOSIPO)',
			date: '14 Mars 2023',
		});
		server.create('annonce', {
			id: '2',
			title:
				'Publication de la liste des convoqués pour l appel à candidature pour le poste Appel à candidature pour le poste de Chef de service (Services centraux) (1) poste au Agence Nationale de la Sécurité Routière (NARSA)',
			title_ar:
				'نشر قائمة المستدعين للدعوة لتقديم الطلبات للمناصب. دعوة لتقديم الطلبات لمنصب رئيس الخدمة (الخدمات المركزية) (1) في الوكالة الوطنية للسلامة على الطرق (NARSA)',
			date: '16 Mars 2023',
		});
		server.create('annonce', {
			id: '3',
			title:
				'Annulation de l appel à candidature pour le poste expert (1) poste au Ministère de la Transition énergétique et du Développement durable - Département du Développement durable',
			title_ar:
				'إلغاء دعوة تقديم الطلبات لشغل منصب خبير (1) في وزارة الطاقة الانتقالية والتنمية المستدامة - إدارة التنمية المستدامة',
			date: '15 Mars 2023',
		});
		server.create('annonce', {
			id: '4',
			title:
				'Appel à candidature pour le poste expert (1) poste au Ministère de la Transition énergétique et du Développement durable - Département du Développement durable',
			title_ar:
				'دعوة لتقديم الطلبات لشغل منصب خبير (1) في وزارة الطاقة الانتقالية والتنمية المستدامة - إدارة التنمية المستدامة',
			date: '15 Mars 2023',
		});
		server.create('annonce', {
			id: '5',
			title:
				'Publication de la liste des convoqués pour le concours de recrutement d un AGENT DE MAITRISE (2) postes à la Société des Silos Portuaires (SOSIPO)',
			title_ar:
				'نشر قائمة المستدعين لمسابقة التوظيف لمنصب مدير (2) في Société des Silos Portuaires (SOSIPO)',
			date: '14 Mars 2023',
		});
		server.create('annonce', {
			id: '6',
			title:
				'Appel à candidature pour le poste RESPONSABLE ADMINISTRATIF ET FINANCIER (1) poste au Casablanca Iskane et Equipements',
			title_ar:
				'دعوة لتقديم الطلبات لشغل منصب مدير إداري ومالي (1) في شركة الدار البيضاء إسكان والمعدات',
			date: '14 Mars 2023',
		});
		server.create('annonce', {
			id: '7',
			title:
				'Appel à candidature pour (6) postes de chef de division et (16) postes de chef de service ou assimilés au Ministère de la Santé et de la Protection sociale',
			title_ar:
				'دعوة لتقديم طلبات (6) وظائف رئيس شعبة و (16) منصب رئيس خدمة أو ما في حكمها بوزارة الصحة والحماية الاجتماعية',
			date: '13 Mars 2023',
		});
		server.create('annonce', {
			id: '8',
			title:
				'Annulation du concours de recrutement d un Adjoint technique 3ème grade ~ Echelle 6 (3) postes au Conseil provincial (Province Chefchaouen)',
			title_ar:
				'إلغاء مسابقة الاستقدام لمساعد تقني من الدرجة الثالثة ~ مقياس 6 (3) في مجلس المحافظة (ولاية شفشاون)',
			date: '13 Mars 2023',
		});
		// End Annonces
	},

	routes() {
		this.namespace = 'api';
		this.logging = false;
		// this.timing = 2000

		this.get('/articles', (schema, request) => {
			return schema.articles.all();
		});

		this.get('/articles/:id', (schema, request) => {
			const id = request.params.id;
			return schema.articles.find(id);
		});

		this.get('/evenements', (schema, request) => {
			return schema.evenements.all();
		});

		this.get('/evenements/:id', (schema, request) => {
			const id = request.params.id;
			return schema.evenements.find(id);
		});

		this.get('/annonces', (schema, request) => {
			return schema.annonces.all();
		});

		this.get('/annonces/:id', (schema, request) => {
			const id = request.params.id;
			return schema.annonces.find(id);
		});
	},
});
