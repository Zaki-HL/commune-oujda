import { createServer, Model, Response } from 'miragejs';

createServer({
	models: {
		articles: Model,
	},

	seeds(server) {
		server.create('article', {
			id: '1',
			title: 'Article 1',
			body: `MirageJS est une bibliothèque open-source puissante et polyvalente qui permet aux développeurs de construire, de tester et de partager facilement et rapidement des API fictives. Elle fournit une API simple et intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives, ce qui en fait un outil idéal pour les développeurs frontend qui souhaitent travailler indépendamment de l'équipe backend ou pour les développeurs qui veulent simuler différents scénarios dans leurs environnements de test. L'un des avantages significatifs de MirageJS est qu'il permet aux développeurs de simuler les réponses du serveur, de tester le code côté client et de prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui veulent créer ou itérer leurs applications rapidement, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct. En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, y compris la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes. Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace`,
			title_ar: 'مقال 1',
			body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
			image: 'img 1',
			date: '2023-02-01',
		});
		// Start Your Code
		server.create('article', {
			id: '2',
			title: '',
			title_ar: '',
			body: '',
			body_ar: '',
			image: '',
			date: '',
		});
		// End Your Code Here
	},

	routes() {
		this.namespace = 'api';
		this.logging = false;
		// this.timing = 2000

		this.get('/articles', (schema, request) => {
			return schema.vans.all();
		});

		this.get('/articles/:id', (schema, request) => {
			const id = request.params.id;
			return schema.vans.find(id);
		});
	},
});
