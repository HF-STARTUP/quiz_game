import { defineStore } from "pinia";

export const questionsStore = defineStore("questionsStore", {
    state: () => ({
        questions: [
            {
                categorie: 'ASR 512',
                questions: [
                    { id: 1, text: "Quel est le principal facteur nécessitant la régulation d'Internet ?", options: ["L'hétérogénéité des acteurs", "La lenteur du réseau", "Le coût élevé d'accès", "Le manque de serveurs"], correct: "L'hétérogénéité des acteurs" },
                    { id: 2, text: "Pourquoi l'État ne peut-il plus user de son pouvoir normatif unilatéral ?", options: ["Car il existe une autorité unique mondiale", "À cause de la complexité des communications électroniques", "Parce que les lois sont inutiles", "Car Internet appartient à l'ONU"], correct: "À cause de la complexité des communications électroniques" },
                    { id: 3, text: "Selon Philippe AMBLARD, la régulation repose sur :", options: ["Une gestion exclusive par les États", "Une cogestion entre acteurs et États", "Un monopole des entreprises privées", "L'ONU"], correct: "Une cogestion entre acteurs et États" },
                    { id: 4, text: "Quels sont les trois angles sous lesquels la régulation est abordée ?", options: ["Législatif, matériel, processuel", "Technologique, économique, social", "Public, privé, international", "Politique, administratif, juridique"], correct: "Législatif, matériel, processuel" },
                    { id: 5, text: "Quel est l'unique source constitutionnelle du droit camerounais des TIC ?", options: ["Le code des télécoms", "La Constitution", "La loi sur la cybercriminalité", "Les règlements de l'UIT"], correct: "La Constitution" },
                    { id: 6, text: "Quel texte mentionne la 'liberté de communication' au Cameroun ?", options: ["La loi de 2001", "La loi de 2010", "La Constitution de 1996 modifiée en 2008", "Le décret de 2013"], correct: "La Constitution de 1996 modifiée en 2008" },
                    { id: 7, text: "Quelle loi régit les télécommunications au Cameroun ?", options: ["Loi n° 90/052", "Loi n° 98/014", "Loi n° 2015/007", "Directive européenne 2018"], correct: "Loi n° 98/014" },
                    { id: 8, text: "Quelle loi traite de la cybercriminalité au Cameroun ?", options: ["Loi n° 2010/012", "Loi n° 2015/007", "Loi n° 2001/0130", "Décret n°2012/512"], correct: "Loi n° 2010/012" },
                    { id: 9, text: "Quelle est la mission de l’ANTIC ?", options: ["Attribuer des licences télécoms", "Fixer les tarifs des services", "Protéger les consommateurs", "Sécuriser les TIC et réguler Internet"], correct: "Sécuriser les TIC et réguler Internet" },
                    { id: 10, text: "Quelle institution camerounaise régule les télécommunications ?", options: ["ART", "ANTIC", "UIT", "CEMAC"], correct: "ART" },
                    { id: 11, text: "Quel texte réglemente la publicité au Cameroun ?", options: ["Loi n° 2006/018", "Loi n° 2010/013", "Loi n° 2015/007", "Décret n°2013/0399"], correct: "Loi n° 2006/018" },
                    { id: 12, text: "Quelle directive CEMAC harmonise les régimes juridiques des communications électroniques ?", options: ["Directive n° 6/08", "Directive n° 7/08", "Directive n° 9/08", "Directive n° 10/08"], correct: "Directive n° 9/08" },
                    { id: 13, text: "Quelle loi protège les consommateurs au Cameroun ?", options: ["Loi n° 2011/012", "Loi n° 2015/007", "Loi n° 2005/013", "Directive européenne 2018"], correct: "Loi n° 2011/012" },
                    { id: 14, text: "Quel texte fixe les modalités de protection des consommateurs de services électroniques ?", options: ["Décret n°2013/0399", "Loi n° 2010/012", "Directive CEMAC", "Loi n° 2015/007"], correct: "Décret n°2013/0399" },
                    { id: 15, text: "Quel texte de l’Union Africaine protège les données personnelles ?", options: ["Convention de Malabo", "Charte des droits de l'homme", "Directive CEMAC", "Constitution de l’UIT"], correct: "Convention de Malabo" },
                    { id: 16, text: "Quel règlement CEMAC harmonise la régulation des télécoms dans la sous-région ?", options: ["Règlement n° 21/08", "Directive n° 9/08", "Décret n°2013/0399", "Loi n° 2010/021"], correct: "Règlement n° 21/08" },
                    { id: 17, text: "Quel organisme mondial fixe les standards télécoms ?", options: ["UIT", "CEMAC", "ART", "Union Européenne"], correct: "UIT" },
                    { id: 18, text: "Quel texte des Nations Unies concerne les communications électroniques internationales ?", options: ["Convention de l’ONU de 2005", "Convention de Malabo", "Code européen 2018", "Directive CEMAC"], correct: "Convention de l’ONU de 2005" },
                    { id: 19, text: "Quel est le principal enjeu de la régulation des télécoms ?", options: ["Assurer une gestion partagée entre acteurs", "Imposer un contrôle total de l'État", "Limiter l’accès à Internet", "Interdire la concurrence"], correct: "Assurer une gestion partagée entre acteurs" },
                    { id: 20, text: "Quelle loi au Cameroun concerne le commerce électronique ?", options: ["Loi n° 2010/021", "Loi n° 2015/007", "Loi n° 98/014", "Décret n°2013/0399"], correct: "Loi n° 2010/021" },
                    {
                        id: 21,
                        text: "Quel est l'effet principal de la convergence dans le secteur des TIC ?",
                        options: [
                            "L'entrée de nouveaux acteurs dans les marchés",
                            "La réduction des coûts d'accès à Internet",
                            "La diminution de la concurrence",
                            "La centralisation des services"
                        ],
                        correct: "L'entrée de nouveaux acteurs dans les marchés"
                    },
                    {
                        id: 22,
                        text: "Quels sont les trois grands secteurs d'activités regroupés sous le label TMT ?",
                        options: [
                            "Télécommunications, Médias, Technologies",
                            "Télécommunications, Informatique, Médias",
                            "Technologies, Médias, Énergie",
                            "Télécommunications, Énergie, Technologies"
                        ],
                        correct: "Télécommunications, Médias, Technologies"
                    },
                    {
                        id: 23,
                        text: "Quel organisme est chargé de la régulation des télécommunications au Cameroun ?",
                        options: [
                            "ANTIC",
                            "ART",
                            "CNC",
                            "ANOR"
                        ],
                        correct: "ART"
                    },
                    {
                        id: 24,
                        text: "Quel est le rôle de l'ICANN dans la régulation d'Internet ?",
                        options: [
                            "Gérer les attributions des adresses IP et des noms de domaine",
                            "Élaborer des normes pour les protocoles de communication",
                            "Contrôler les contenus audiovisuels",
                            "Superviser les opérateurs de télécommunications"
                        ],
                        correct: "Gérer les attributions des adresses IP et des noms de domaine"
                    },
                    {
                        id: 25,
                        text: "Quel est l'un des défis de la régulation d'Internet selon le texte ?",
                        options: [
                            "La centralisation des pouvoirs de régulation",
                            "L'hétérogénéité des acteurs",
                            "Le manque de normes techniques",
                            "La faible concurrence entre les acteurs"
                        ],
                        correct: "L'hétérogénéité des acteurs"
                    },
                    {
                        id: 26,
                        text: "Quel organisme est chargé de la normalisation des protocoles de communication sur Internet ?",
                        options: [
                            "ICANN",
                            "IETF",
                            "W3C",
                            "ART"
                        ],
                        correct: "IETF"
                    },
                    {
                        id: 27,
                        text: "Quel est l'un des rôles des acteurs techniques nationaux dans la régulation ?",
                        options: [
                            "Élaborer des normes internationales",
                            "Imposer des conditions générales d'utilisation",
                            "Contrôler les contenus audiovisuels",
                            "Superviser les opérateurs de télécommunications"
                        ],
                        correct: "Imposer des conditions générales d'utilisation"
                    },
                    {
                        id: 28,
                        text: "Quel est l'un des impacts de la convergence sur les secteurs des TIC ?",
                        options: [
                            "La réduction du nombre d'acteurs",
                            "La coopération accrue entre les acteurs sectoriels",
                            "La diminution des services offerts",
                            "La centralisation des infrastructures"
                        ],
                        correct: "La coopération accrue entre les acteurs sectoriels"
                    },
                    {
                        id: 29,
                        text: "Quel organisme est chargé de la régulation des TIC et de l'Internet au Cameroun ?",
                        options: [
                            "ART",
                            "ANTIC",
                            "CNC",
                            "ANOR"
                        ],
                        correct: "ANTIC"
                    },
                    {
                        id: 30,
                        text: "Quel est l'un des rôles des usagers dans la régulation d'Internet ?",
                        options: [
                            "Élaborer des normes techniques",
                            "Se réunir en communauté pour définir des règles",
                            "Contrôler les contenus audiovisuels",
                            "Superviser les opérateurs de télécommunications"
                        ],
                        correct: "Se réunir en communauté pour définir des règles"
                    },
                    {
                        "id": 31,
                        "text": "Quel est l'un des rôles des usagers dans la régulation d'Internet ?",
                        "options": [
                            "Élaborer des normes techniques",
                            "Se réunir en communauté pour définir des règles",
                            "Contrôler les contenus audiovisuels",
                            "Superviser les opérateurs de télécommunications"
                        ],
                        "correct": "Se réunir en communauté pour définir des règles"
                    },
                    {
                        "id": 32,
                        "text": "Quelle entité est responsable de la régulation du secteur des télécommunications au Cameroun ?",
                        "options": [
                            "Le MINCOM",
                            "L'ART",
                            "L'ANTIC",
                            "Le MINPOSTEL"
                        ],
                        "correct": "L'ART"
                    },
                    {
                        "id": 33,
                        "text": "Quelle est la mission principale de l'ART dans la régulation des télécommunications ?",
                        "options": [
                            "Attribuer les licences aux opérateurs",
                            "Superviser les opérateurs de télécommunications",
                            "Contrôler l’accès aux réseaux ouverts au public",
                            "Réguler les activités des médias"
                        ],
                        "correct": "Contrôler l’accès aux réseaux ouverts au public"
                    },
                    {
                        "id": 34,
                        "text": "Quel organisme régule l'Internet et la sécurité des réseaux de communication au Cameroun ?",
                        "options": [
                            "Le MINPOSTEL",
                            "L'ANTIC",
                            "Le MINCOM",
                            "L'ART"
                        ],
                        "correct": "L'ANTIC"
                    },
                    {
                        "id": 35,
                        "text": "Quel texte législatif est crucial pour la régulation de l’audiovisuel au Cameroun ?",
                        "options": [
                            "La loi N°2015/007 du 20 avril 2015",
                            "Le décret N°2012/203 du 20 avril 2012",
                            "La loi N°90/052 du 19 décembre 1990",
                            "La loi N°98/013 du 14 juillet 1998"
                        ],
                        "correct": "La loi N°2015/007 du 20 avril 2015"
                    },
                    {
                        "id": 36,
                        "text": "Quel est l'objectif principal des codes de conduite sur Internet ?",
                        "options": [
                            "Imposer des sanctions sévères",
                            "Fixer des principes et des normes de comportement",
                            "Réguler la tarification des services",
                            "Garantir une régulation étatique stricte"
                        ],
                        "correct": "Fixer des principes et des normes de comportement"
                    },
                    {
                        "id": 37,
                        "text": "Quel est le rôle principal d'une charte éthique dans la régulation de l'Internet ?",
                        "options": [
                            "Garantir la sécurité des transactions",
                            "Énoncer des règles fondamentales applicables aux acteurs",
                            "Protéger les droits des consommateurs",
                            "Fixer des règles techniques de développement"
                        ],
                        "correct": "Énoncer des règles fondamentales applicables aux acteurs"
                    },
                    {
                        "id": 38,
                        "text": "Quelle est la principale caractéristique d'une labellisation dans le domaine des TIC ?",
                        "options": [
                            "Elle garantit la conformité à des règles techniques",
                            "Elle impose des sanctions sévères en cas de non-respect",
                            "Elle définit des obligations contractuelles",
                            "Elle permet la libre négociation des règles"
                        ],
                        "correct": "Elle garantit la conformité à des règles techniques"
                    },
                    {
                        "id": 39,
                        "text": "Quelle est la compétence de l'Agence de Régulation des Télécommunications en matière de règlement des différends ?",
                        "options": [
                            "Elle a une compétence exclusive pour tous les différends",
                            "Elle peut régler les différends entre opérateurs et consommateurs",
                            "Elle est compétente uniquement pour les différends liés à l'accès aux réseaux",
                            "Elle est compétente pour régler les différends entre opérateurs"
                        ],
                        "correct": "Elle est compétente pour régler les différends entre opérateurs"
                    },
                    {
                        "id": 40,
                        "text": "Dans quel cas la compétence de l'Agence est-elle obligatoire ?",
                        "options": [
                            "Lorsque le différend oppose un opérateur à un consommateur",
                            "Lorsque le différend concerne l'interconnexion entre deux opérateurs",
                            "Lorsque le différend porte sur la qualité des services",
                            "Lorsque l'une des parties est un consommateur"
                        ],
                        "correct": "Lorsque le différend concerne l'interconnexion entre deux opérateurs"
                    },
                    {
                        "id": 41,
                        "text": "Quelle est la principale matière relevant du pouvoir de règlement de l'Agence ?",
                        "options": [
                            "Le dégroupage de la boucle locale",
                            "La régulation des prix des services",
                            "La gestion des fréquences",
                            "Les conditions de résiliation de contrats"
                        ],
                        "correct": "Le dégroupage de la boucle locale"
                    },
                    {
                        "id": 42,
                        "text": "Quelle est la différence entre l'interconnexion et l'accès au réseau ?",
                        "options": [
                            "L'interconnexion se fait uniquement entre opérateurs titulaires d'une licence",
                            "L'accès au réseau se fait entre tous les types d'opérateurs",
                            "L'interconnexion et l'accès au réseau sont identiques",
                            "L'accès au réseau est limité aux opérateurs historiques"
                        ],
                        "correct": "L'interconnexion se fait uniquement entre opérateurs titulaires d'une licence"
                    },
                    {
                        "id": 43,
                        "text": "Quelles obligations un opérateur doit-il respecter lors de la demande d'accès ou d'interconnexion ?",
                        "options": [
                            "Répondre dans un délai de 60 jours",
                            "Répondre dans un délai de 30 jours",
                            "Accepter automatiquement toute demande",
                            "Répondre uniquement par écrit"
                        ],
                        "correct": "Répondre dans un délai de 60 jours"
                    },
                    {
                        "id": 44,
                        "text": "Que doit faire l'opérateur destinataire si la demande d'accès ou d'interconnexion est faite ?",
                        "options": [
                            "Il doit accepter immédiatement la demande",
                            "Il doit répondre dans un délai de 60 jours",
                            "Il doit ignorer la demande",
                            "Il doit envoyer un accusé de réception sans répondre"
                        ],
                        "correct": "Il doit répondre dans un délai de 60 jours"
                    },
                    {
                        "id": 45,
                        "text": "Quelles sont les conséquences en cas de non-réponse à une demande d'interconnexion dans le délai imparti ?",
                        "options": [
                            "L'opérateur est sanctionné",
                            "La demande est automatiquement acceptée",
                            "Le différend est soumis à la justice",
                            "Aucune conséquence"
                        ],
                        "correct": "L'opérateur est sanctionné"
                    },
                    {
                        "id": 46,
                        "text": "En quoi consiste le dégroupage de la boucle locale ?",
                        "options": [
                            "L'accès direct à la boucle locale pour les opérateurs entrants",
                            "La mise en place d'une nouvelle infrastructure pour chaque opérateur",
                            "L'autorisation d'utilisation des fréquences par des opérateurs tiers",
                            "La création d'une nouvelle société pour chaque opérateur"
                        ],
                        "correct": "L'accès direct à la boucle locale pour les opérateurs entrants"
                    },
                    {
                        "id": 47,
                        "text": "Quel rôle joue l'Agence de Régulation des Télécommunications dans le processus de dégroupage ?",
                        "options": [
                            "Elle supervise le processus de négociation",
                            "Elle fixe les tarifs du dégroupage",
                            "Elle arbitre les conflits relatifs au dégroupage",
                            "Elle impose des sanctions immédiates en cas de conflit"
                        ],
                        "correct": "Elle arbitre les conflits relatifs au dégroupage"
                    },
                    {
                        "id": 48,
                        "text": "Quels types de différends peuvent survenir concernant la co-localisation physique des équipements ?",
                        "options": [
                            "Différends liés à l'emplacement des équipements",
                            "Différends sur les tarifs d'installation",
                            "Différends concernant les horaires d'accès",
                            "Différends sur les types d'équipements utilisés"
                        ],
                        "correct": "Différends liés à l'emplacement des équipements"
                    },
                    {
                        "id": 49,
                        "text": "Comment l'Agence de Régulation des Télécommunications peut-elle régler les différends liés à l'interférence des fréquences ?",
                        "options": [
                            "En imposant des amendes",
                            "En ordonnant l'arrêt de l'utilisation des fréquences concernées",
                            "En négociant un accord entre les opérateurs",
                            "En réattribuant les fréquences de manière aléatoire"
                        ],
                        "correct": "En ordonnant l'arrêt de l'utilisation des fréquences concernées"
                    },
                    {
                        "id": 50,
                        "text": "Quelles sont les compétences de l'Agence en matière de différends liés à la numérotation et à l'adressage ?",
                        "options": [
                            "Elle détermine le plan national de numérotation et d'adressage",
                            "Elle gère la distribution des numéros aux opérateurs",
                            "Elle permet aux consommateurs de choisir leurs numéros",
                            "Elle peut imposer des changements de numéros sans préavis"
                        ],
                        "correct": "Elle détermine le plan national de numérotation et d'adressage"
                    },
                    {
                        "id": 51,
                        "text": "Quels types de différends peuvent surgir concernant la portabilité des numéros ?",
                        "options": [
                            "Non-respect des conditions de portabilité",
                            "Conflits sur le prix de la portabilité",
                            "Litiges liés à l'origine des numéros",
                            "Conflits entre opérateurs sur la gestion des numéros"
                        ],
                        "correct": "Non-respect des conditions de portabilité"
                    },
                    {
                        "id": 52,
                        "text": "Pourquoi l'énumération des différends dans l'article 65(1) n'est-elle pas exhaustive ?",
                        "options": [
                            "Parce que l'Agence peut régler tout autre litige entre opérateurs",
                            "Parce que de nouveaux types de différends n'ont pas encore été définis",
                            "Parce que le législateur n'a pas souhaité limiter les conflits",
                            "Parce que l'Agence n'a pas le pouvoir d'agir dans tous les cas"
                        ],
                        "correct": "Parce que l'Agence peut régler tout autre litige entre opérateurs"
                    },
                    {
                        "id": 53,
                        "text": "Quelles sont les deux catégories principales de litiges relevant du pouvoir de sanction des autorités de régulation des communications électroniques ?",
                        "options": [
                            "Les litiges liés à la qualité du service et les litiges liés aux conditions d'établissement des réseaux.",
                            "Les litiges liés aux conditions d'établissement et d'exploitation des communications électroniques, et ceux liés à la mise en œuvre des obligations des opérateurs.",
                            "Les litiges entre consommateurs et opérateurs uniquement.",
                            "Les litiges relatifs à la cybersécurité et les litiges internes entre opérateurs."
                        ],
                        "correct": "Les litiges liés aux conditions d'établissement et d'exploitation des communications électroniques, et ceux liés à la mise en œuvre des obligations des opérateurs."
                    },
                    {
                        "id": 54,
                        "text": "Quel est le montant de la pénalité pour un opérateur qui établit et exploite un réseau de communications électroniques sans titre d'exploitation, selon l'article 69 (2) de la loi régissant les communications électroniques ?",
                        "options": [
                            "De 100.000 à 500.000 francs CFA.",
                            "De 100.000.000 à 500.000.000 francs CFA.",
                            "De 1.000.000 à 5.000.000 francs CFA.",
                            "De 10.000.000 à 50.000.000 francs CFA."
                        ],
                        "correct": "De 100.000.000 à 500.000.000 francs CFA."
                    },
                    {
                        "id": 55,
                        "text": "Quels sont les trois régimes d'établissement et d'exploitation des communications électroniques au Cameroun, selon l'article 7 de la loi régissant les communications électroniques ?",
                        "options": [
                            "Régime de la licence, du permis et de la déclaration.",
                            "Régime de l'autorisation, de la concession et de la déclaration.",
                            "Régime de la certification, de l'agrément et de la licence.",
                            "Régime de l'autorisation, du permis et de la déclaration."
                        ],
                        "correct": "Régime de l'autorisation, de la concession et de la déclaration."
                    },
                    {
                        "id": 56,
                        "text": "Quel type d'activité nécessite un agrément dans le cadre de l'exploitation des communications électroniques ?",
                        "options": [
                            "La fourniture d'internet et de services à valeur ajoutée.",
                            "L'installation d'équipements et d'infrastructures de communications électroniques.",
                            "L'exploitation d'un réseau virtuel.",
                            "La gestion des services de téléphonie mobile."
                        ],
                        "correct": "L'installation d'équipements et d'infrastructures de communications électroniques."
                    },
                    {
                        "id": 57,
                        "text": "Quel est le rôle de l'A.R.T. lors de la résolution des différends entre opérateurs ?",
                        "options": [
                            "Prendre des décisions exécutoires sans passer par une médiation.",
                            "Jouer un rôle de conciliateur ou de médiateur avant toute décision.",
                            "Émettre des sanctions sans rechercher un compromis.",
                            "Imposer des sanctions en cas de non-respect des conditions d'exploitation."
                        ],
                        "correct": "Jouer un rôle de conciliateur ou de médiateur avant toute décision."
                    },
                    {
                        "id": 58,
                        "text": "Quelles sont les étapes nécessaires pour saisir l'Agence de Régulation des Télécommunications (A.R.T.) pour un différend entre opérateurs ?",
                        "options": [
                            "Les parties doivent s'entendre avant la saisine de l'Agence.",
                            "La requête doit être déposée avec les pièces justificatives et la preuve d'une tentative de règlement amiable.",
                            "Les parties doivent d'abord saisir un tribunal compétent.",
                            "Une saisine orale suffit pour entamer la procédure."
                        ],
                        "correct": "La requête doit être déposée avec les pièces justificatives et la preuve d'une tentative de règlement amiable."
                    },
                    {
                        "id": 59,
                        "text": "Dans quel délai la conciliation doit-elle être conclue après la saisine de l'A.R.T. ?",
                        "options": [
                            "Dans un délai de 45 jours.",
                            "Dans un délai de 30 jours.",
                            "Dans un délai de 8 jours.",
                            "Dans un délai de 15 jours."
                        ],
                        "correct": "Dans un délai de 30 jours."
                    },
                    {
                        "id": 60,
                        "text": "Que se passe-t-il si une partie ne respecte pas les engagements pris lors de la conciliation ?",
                        "options": [
                            "L'Agence peut annuler la procédure de conciliation.",
                            "L'Agence met en demeure la partie défaillante et peut appliquer des sanctions.",
                            "La partie peut être exclue de l'industrie des télécommunications.",
                            "Aucune action n'est prise."
                        ],
                        "correct": "L'Agence met en demeure la partie défaillante et peut appliquer des sanctions."
                    },
                    {
                        "id": 61,
                        "text": "Qui est responsable de la mise en œuvre des décisions prises lors de la conciliation ?",
                        "options": [
                            "L'Agence de Régulation des Télécommunications.",
                            "Le gouvernement.",
                            "Les parties elles-mêmes.",
                            "Un tribunal civil."
                        ],
                        "correct": "Les parties elles-mêmes."
                    },
                    {
                        "id": 62,
                        "text": "Quel est l'objectif principal du règlement amiable entre un opérateur et un consommateur ?",
                        "options": [
                            "Garantir une compensation financière immédiate au consommateur.",
                            "Assurer une réponse rapide à la réclamation du consommateur.",
                            "Offrir un contrôle complet des réclamations par l'A.R.T.",
                            "Donner au consommateur un droit de saisir directement le tribunal."
                        ],
                        "correct": "Assurer une réponse rapide à la réclamation du consommateur."
                    },
                    {
                        "id": 63,
                        "text": "Quels sont les documents nécessaires pour qu'un consommateur saisisse un opérateur suite à un différend ?",
                        "options": [
                            "Une requête orale et une preuve de l'incident.",
                            "Une requête écrite sur papier libre ou par message court gratuit.",
                            "Une demande formelle envoyée par courrier recommandé.",
                            "Une requête via les réseaux sociaux de l'opérateur."
                        ],
                        "correct": "Une requête écrite sur papier libre ou par message court gratuit."
                    },
                    {
                        "id": 64,
                        "text": "Dans quel délai l'opérateur doit-il accuser réception d'une requête du consommateur ?",
                        "options": [
                            "Dans les 5 jours calendaires.",
                            "Dans les 7 jours ouvrés.",
                            "Dans les 3 jours calendaires.",
                            "Dans les 10 jours ouvrés."
                        ],
                        "correct": "Dans les 3 jours calendaires."
                    },
                    {
                        "id": 65,
                        "text": "Combien de jours l'opérateur dispose-t-il pour satisfaire la demande du consommateur après avoir accusé réception de la requête ?",
                        "options": [
                            "15 jours.",
                            "30 jours.",
                            "7 jours.",
                            "10 jours."
                        ],
                        "correct": "7 jours."
                    },
                    {
                        "id": 66,
                        "text": "Que se passe-t-il si l'opérateur ne répond pas dans les délais impartis par la procédure de règlement des différends ?",
                        "options": [
                            "L'A.R.T. impose une pénalité immédiate à l'opérateur.",
                            "Le consommateur peut saisir directement le tribunal.",
                            "Le consommateur peut saisir l'A.R.T. pour résoudre le différend.",
                            "L'opérateur bénéficie d'un délai supplémentaire de 30 jours."
                        ],
                        "correct": "Le consommateur peut saisir l'A.R.T. pour résoudre le différend."
                    },
                    {
                        "id": 67,
                        "text": "Dans quel délai l'A.R.T. doit-elle transmettre la réclamation de l'abonné à l'opérateur après sa saisine ?",
                        "options": [
                            "Dans 3 jours ouvrés.",
                            "Dans 7 jours ouvrés.",
                            "Dans 15 jours calendaires.",
                            "Dans 30 jours ouvrés."
                        ],
                        "correct": "Dans 7 jours ouvrés."
                    },
                    {
                        "id": 68,
                        "text": "Que se passe-t-il si l'opérateur ne répond pas aux observations demandées par l'A.R.T. dans le délai imparti ?",
                        "options": [
                            "L'A.R.T. prend une décision en faveur du consommateur.",
                            "L'A.R.T. prend une décision sans tenir compte des observations.",
                            "L'A.R.T. suspend la procédure.",
                            "L'opérateur est automatiquement sanctionné."
                        ],
                        "correct": "L'A.R.T. prend une décision sans tenir compte des observations."
                    },
                    {
                        "id": 69,
                        "text": "Quel type de décision l'A.R.T. prend lors du règlement d'un différend entre un opérateur et un consommateur ?",
                        "options": [
                            "Une décision non contraignante.",
                            "Une décision contraignante.",
                            "Une décision médiatique.",
                            "Une décision consultative."
                        ],
                        "correct": "Une décision contraignante."
                    },
                    {
                        "id": 70,
                        "text": "Que se passe-t-il si l'opérateur ne respecte pas une décision prise par l'A.R.T. dans le cadre d'un différend ?",
                        "options": [
                            "Il n'y a aucune conséquence.",
                            "Il peut être sanctionné par l'A.R.T.",
                            "Il peut être interdit d'exercer dans le secteur des télécommunications.",
                            "Le consommateur reçoit une compensation financière."
                        ],
                        "correct": "Il peut être sanctionné par l'A.R.T."
                    },
                    {
                        "id": 71,
                        "text": "Les sanctions de l'A.R.T. dans les différends entre opérateur et consommateur sont de nature :",
                        "options": [
                            "Pécuniaire uniquement.",
                            "Pécuniaire et privatives de droits.",
                            "Pécuniaire, privatives de droits, et pénales.",
                            "Pénales uniquement."
                        ],
                        "correct": "Pécuniaire et privatives de droits."
                    }

                ]
            },
            {
                categorie: "ASR 511",
                questions: [
                    {
                        "id": 1,
                        "text": "Qu'est-ce que l'économie numérique ?",
                        "options": [
                            "L'ensemble des activités économiques liées à l'industrie traditionnelle.",
                            "L'ensemble des activités économiques utilisant le numérique pour créer de la valeur.",
                            "Une forme d'économie basée uniquement sur les biens physiques.",
                            "L'utilisation exclusive des plateformes numériques pour vendre des produits."
                        ],
                        "correct": "L'ensemble des activités économiques utilisant le numérique pour créer de la valeur."
                    },
                    {
                        "id": 2,
                        "text": "Quel est l'exemple de digitalisation d'Amazon ?",
                        "options": [
                            "Vendre des livres uniquement en ligne.",
                            "Étendre son modèle économique à la logistique, l'informatique, et un écosystème de services numériques.",
                            "Créer une plateforme de e-commerce uniquement pour les livres.",
                            "Vendre des produits physiques uniquement dans ses magasins physiques."
                        ],
                        "correct": "Étendre son modèle économique à la logistique, l'informatique, et un écosystème de services numériques."
                    },
                    {
                        "id": 3,
                        "text": "Quelle est l'impact de l'économie digitale sur les entreprises traditionnelles ?",
                        "options": [
                            "Elles disparaissent toujours.",
                            "Elles se transforment et adoptent des stratégies numériques pour rester compétitives.",
                            "Elles n'ont pas besoin d'adaptation.",
                            "Elles doivent rester strictement traditionnelles."
                        ],
                        "correct": "Elles se transforment et adoptent des stratégies numériques pour rester compétitives."
                    },
                    {
                        "id": 4,
                        "text": "Quelle est la principale caractéristique de l'économie numérique ?",
                        "options": [
                            "Les coûts de production augmentent avec la quantité.",
                            "L'économie numérique repose sur des infrastructures physiques pour distribuer des biens.",
                            "Les coûts marginaux sont souvent très faibles, voire nuls.",
                            "Les entreprises traditionnelles doivent supprimer toute technologie pour rester compétitives."
                        ],
                        "correct": "Les coûts marginaux sont souvent très faibles, voire nuls."
                    },
                    {
                        "id": 5,
                        "text": "Quel modèle économique utilise principalement la publicité pour générer des revenus ?",
                        "options": [
                            "Abonnement.",
                            "Frais de service.",
                            "Publicité.",
                            "Commission sur les transactions."
                        ],
                        "correct": "Publicité."
                    },
                    {
                        "id": 6,
                        "text": "Comment les plateformes numériques comme Uber utilisent les effets de réseau ?",
                        "options": [
                            "Plus de chauffeurs augmentent la qualité du service pour les passagers.",
                            "Les passagers doivent toujours attendre plus longtemps avec plus de chauffeurs.",
                            "Plus d'utilisateurs sur une plateforme réduisent la valeur pour chaque utilisateur.",
                            "Les chauffeurs doivent attendre plus longtemps avec plus de passagers."
                        ],
                        "correct": "Plus de chauffeurs augmentent la qualité du service pour les passagers."
                    },
                    {
                        "id": 7,
                        "text": "Quel est l'impact de la digitalisation sur le marché de l'emploi ?",
                        "options": [
                            "L'économie numérique supprime tous les emplois traditionnels.",
                            "L'économie numérique crée de nouveaux métiers liés aux données, au marketing digital, et à la cybersécurité.",
                            "L'économie numérique réduit le nombre d'emplois disponibles dans tous les secteurs.",
                            "Il n'y a pas d'impact sur le marché de l'emploi."
                        ],
                        "correct": "L'économie numérique crée de nouveaux métiers liés aux données, au marketing digital, et à la cybersécurité."
                    },
                    {
                        "id": 8,
                        "text": "Quel est un exemple de plateforme d'interaction sociale ?",
                        "options": [
                            "Uber.",
                            "Instagram.",
                            "Facebook.",
                            "Spotify."
                        ],
                        "correct": "Facebook."
                    },
                    {
                        "id": 9,
                        "text": "Quels sont les défis internes rencontrés par les plateformes numériques ?",
                        "options": [
                            "Gestion des utilisateurs et des contenus, équilibrage de l'offre et de la demande, fidélisation des utilisateurs.",
                            "Supprimer tous les utilisateurs.",
                            "Ne pas utiliser de technologies modernes.",
                            "Ne pas maintenir une qualité de service."
                        ],
                        "correct": "Gestion des utilisateurs et des contenus, équilibrage de l'offre et de la demande, fidélisation des utilisateurs."
                    },
                    {
                        "id": 10,
                        "text": "Quelles sont les préoccupations éthiques liées à l'économie numérique ?",
                        "options": [
                            "Protection des données et vie privée, cybercriminalité, concentration du pouvoir économique.",
                            "La suppression de tous les services numériques.",
                            "Les plateformes numériques ne présentent aucun problème éthique.",
                            "L'usage exclusif de la technologie pour les entreprises."
                        ],
                        "correct": "Protection des données et vie privée, cybercriminalité, concentration du pouvoir économique."
                    },
                    {
                        "id": 11,
                        "text": "Quel est l'objectif principal d'un modèle économique dans une plateforme digitale ?",
                        "options": [
                            "Générer des revenus à travers la vente de produits physiques.",
                            "Monétiser les utilisateurs par la publicité, l'abonnement ou les commissions.",
                            "Fournir des services gratuits sans générer de revenus.",
                            "Réduire les coûts de production."
                        ],
                        "correct": "Monétiser les utilisateurs par la publicité, l'abonnement ou les commissions."
                    },
                    {
                        "id": 12,
                        "text": "Quel modèle économique repose sur la fourniture d'un service gratuit avec des fonctionnalités premium payantes ?",
                        "options": [
                            "Modèle de commission par transaction.",
                            "Modèle Freemium.",
                            "Modèle d'abonnement.",
                            "Modèle basé sur la publicité."
                        ],
                        "correct": "Modèle Freemium."
                    },
                    {
                        "id": 13,
                        "text": "Comment une plateforme basée sur le modèle de publicité génère-t-elle des revenus ?",
                        "options": [
                            "En vendant des abonnements payants.",
                            "En affichant des publicités aux utilisateurs.",
                            "En prélevant des commissions sur les transactions.",
                            "En collectant des frais pour les inscriptions."
                        ],
                        "correct": "En affichant des publicités aux utilisateurs."
                    },
                    {
                        "id": 14,
                        "text": "Quel est un avantage majeur du modèle économique d'abonnement ?",
                        "options": [
                            "Il génère des revenus récurrents, offrant une certaine stabilité financière.",
                            "Il attire immédiatement une large base d'utilisateurs.",
                            "Il ne nécessite pas d'engagement de la part des utilisateurs.",
                            "Il ne dépend pas des préférences des utilisateurs."
                        ],
                        "correct": "Il génère des revenus récurrents, offrant une certaine stabilité financière."
                    },
                    {
                        "id": 15,
                        "text": "Le modèle économique de commission par transaction repose sur quel principe ?",
                        "options": [
                            "Le paiement d'un abonnement mensuel.",
                            "Le prélèvement d'une commission sur chaque transaction.",
                            "Le recours exclusif à la publicité.",
                            "La vente de produits physiques."
                        ],
                        "correct": "Le prélèvement d'une commission sur chaque transaction."
                    },
                    {
                        "id": 16,
                        "text": "Quels sont les avantages d'utiliser des données dans un modèle économique basé sur la publicité ?",
                        "options": [
                            "Augmenter le volume des ventes de produits physiques.",
                            "Personnaliser les publicités et améliorer le taux de clics.",
                            "Fournir un accès gratuit aux utilisateurs sans coûts supplémentaires.",
                            "Éliminer la nécessité d'une équipe de marketing."
                        ],
                        "correct": "Personnaliser les publicités et améliorer le taux de clics."
                    },
                    {
                        "id": 17,
                        "text": "Quel est un exemple d'application du modèle Freemium ?",
                        "options": [
                            "Uber, qui prélève une commission sur les courses.",
                            "Spotify, qui propose une version gratuite avec des publicités et une version payante sans publicité.",
                            "Facebook, qui génère des revenus grâce à la vente de produits.",
                            "Netflix, qui propose un abonnement mensuel pour l'accès à son contenu."
                        ],
                        "correct": "Spotify, qui propose une version gratuite avec des publicités et une version payante sans publicité."
                    },
                    {
                        "id": 18,
                        "text": "Quel est l'un des principaux défis du modèle Freemium ?",
                        "options": [
                            "La difficulté à fidéliser les utilisateurs payants.",
                            "La gestion des coûts liés aux services gratuits.",
                            "Le besoin de beaucoup d'infrastructures matérielles.",
                            "L'absence d'engagement de la part des utilisateurs."
                        ],
                        "correct": "La difficulté à fidéliser les utilisateurs payants."
                    },
                    {
                        "id": 19,
                        "text": "Pourquoi les données sont-elles considérées comme une ressource clé dans l'économie numérique ?",
                        "options": [
                            "Elles sont utilisées pour l'achat de produits physiques.",
                            "Elles permettent de personnaliser les services et de prédire les comportements des utilisateurs.",
                            "Elles réduisent le coût des produits et services numériques.",
                            "Elles rendent les plateformes inutiles."
                        ],
                        "correct": "Elles permettent de personnaliser les services et de prédire les comportements des utilisateurs."
                    },
                    {
                        "id": 20,
                        "text": "Quels sont les principaux problèmes éthiques liés à la collecte des données personnelles ?",
                        "options": [
                            "La confidentialité des données et la transparence sur leur utilisation.",
                            "L'intrusion dans la vie privée des utilisateurs et la collecte illégale de données.",
                            "Les défis liés à la gestion des cookies.",
                            "La vente des produits dérivés des données."
                        ],
                        "correct": "La confidentialité des données et la transparence sur leur utilisation."
                    },
                    {
                        "id": 21,
                        "text": "Quelles sont les préoccupations éthiques liées à l'économie numérique ?",
                        "options": [
                            "Protection des données et vie privée, cybercriminalité, concentration du pouvoir économique.",
                            "La suppression de tous les services numériques.",
                            "Les plateformes numériques ne présentent aucun problème éthique.",
                            "L'usage exclusif de la technologie pour les entreprises."
                        ],
                        "correct": "Protection des données et vie privée, cybercriminalité, concentration du pouvoir économique."
                    },
                    {
                        "id": 22,
                        "text": "Quel est l'objectif de la régulation des données, comme le RGPD ?",
                        "options": [
                            "Permettre aux entreprises de collecter toutes les données des utilisateurs.",
                            "Garantir la protection des données personnelles des utilisateurs et leur donner un contrôle sur leur utilisation.",
                            "Assurer une collecte de données uniquement pour des raisons commerciales.",
                            "Favoriser l'exploitation des données pour la publicité."
                        ],
                        "correct": "Garantir la protection des données personnelles des utilisateurs et leur donner un contrôle sur leur utilisation."
                    },

                    {
                        "id": 23,
                        "text": "Qu'est-ce qu'une blockchain ?",
                        "options": [
                            "Un type de cryptomonnaie",
                            "Un registre numérique distribué et sécurisé",
                            "Une banque centrale décentralisée",
                            "Un moyen de paiement sans contact"
                        ],
                        "correct": "Un registre numérique distribué et sécurisé"
                    },
                    {
                        "id": 24,
                        "text": "Quel est l'objectif principal de la blockchain ?",
                        "options": [
                            "Fournir une monnaie numérique",
                            "Assurer la transparence et l'immuabilité des transactions",
                            "Créer des applications décentralisées",
                            "Favoriser l'anonymat total"
                        ],
                        "correct": "Assurer la transparence et l'immuabilité des transactions"
                    },
                    {
                        "id": 25,
                        "text": "Quel est un exemple concret de blockchain publique ?",
                        "options": [
                            "Bitcoin",
                            "Ethereum",
                            "VeChain",
                            "Hyperledger"
                        ],
                        "correct": "Bitcoin"
                    },
                    {
                        "id": 26,
                        "text": "Quels sont les avantages des cryptomonnaies ?",
                        "options": [
                            "Des transactions sécurisées sans tiers de confiance",
                            "Une volatilité des prix importante",
                            "Une régulation gouvernementale stricte",
                            "Des transactions uniquement locales"
                        ],
                        "correct": "Des transactions sécurisées sans tiers de confiance"
                    },
                    {
                        "id": 27,
                        "text": "Qu'est-ce qu'un contrat intelligent (smart contract) ?",
                        "options": [
                            "Un contrat signé électroniquement",
                            "Un programme automatisé qui exécute des conditions prédéfinies",
                            "Un accord juridique entre deux parties",
                            "Une promesse de paiement"
                        ],
                        "correct": "Un programme automatisé qui exécute des conditions prédéfinies"
                    },
                    {
                        "id": 28,
                        "text": "Dans quel secteur les contrats intelligents sont-ils largement utilisés ?",
                        "options": [
                            "L'agriculture",
                            "Les assurances",
                            "Le transport",
                            "L'éducation"
                        ],
                        "correct": "Les assurances"
                    },
                    {
                        "id": 29,
                        "text": "Quel est l'objectif des Fintechs ?",
                        "options": [
                            "Réduire les frais bancaires et automatiser les services financiers",
                            "Remplacer les banques traditionnelles",
                            "Promouvoir les investissements en cryptomonnaies",
                            "Centraliser les transactions financières"
                        ],
                        "correct": "Réduire les frais bancaires et automatiser les services financiers"
                    },
                    {
                        "id": 30,
                        "text": "Quel service est un exemple de Fintech mobile ?",
                        "options": [
                            "Revolut",
                            "Le Crédit Agricole",
                            "Walmart",
                            "Uber"
                        ],
                        "correct": "Revolut"
                    },
                    {
                        "id": 31,
                        "text": "Qu'est-ce que l'IoT dans le contexte de la transformation digitale ?",
                        "options": [
                            "Un objet connecté pour collecter des données",
                            "Une plateforme de paiement mobile",
                            "Un modèle économique basé sur l'abonnement",
                            "Un algorithme d'intelligence artificielle"
                        ],
                        "correct": "Un objet connecté pour collecter des données"
                    },
                    {
                        "id": 32,
                        "text": "Quel est l'impact de l'IA sur la transformation digitale ?",
                        "options": [
                            "Automatiser et personnaliser des services",
                            "Supprimer tous les emplois humains",
                            "Générer des bénéfices financiers instantanés",
                            "Réduire l'utilisation des technologies numériques"
                        ],
                        "correct": "Automatiser et personnaliser des services"
                    },
                    {
                        "id": 33,
                        "text": "Quel est un exemple de plateforme utilisant des effets de réseau indirects ?",
                        "options": [
                            "Facebook",
                            "Uber",
                            "Netflix",
                            "Airbnb"
                        ],
                        "correct": "Uber"
                    },
                    {
                        "id": 34,
                        "text": "Pourquoi la transformation digitale est-elle importante pour les entreprises ?",
                        "options": [
                            "Pour réduire les coûts des employés",
                            "Pour rester compétitives face à la concurrence et répondre aux attentes des consommateurs",
                            "Pour décentraliser tous les processus financiers",
                            "Pour augmenter la taille des entreprises"
                        ],
                        "correct": "Pour rester compétitives face à la concurrence et répondre aux attentes des consommateurs"
                    },
                    {
                        "id": 35,
                        "text": "Quel modèle économique est associé à la transformation digitale ?",
                        "options": [
                            "Le modèle basé sur l'abonnement",
                            "Le modèle de distribution physique",
                            "Le modèle de magasin en ligne unique",
                            "Le modèle de vente traditionnelle"
                        ],
                        "correct": "Le modèle basé sur l'abonnement"
                    },
                    {
                        "id": 36,
                        "text": "Quel est l'exemple d'une entreprise ayant transformé son modèle économique grâce au digital ?",
                        "options": [
                            "Starbucks",
                            "Blockbuster",
                            "Kodak",
                            "Nokia"
                        ],
                        "correct": "Starbucks"
                    },
                    {
                        "id": 37,
                        "text": "Qu'est-ce que le crowdfunding dans le contexte des Fintechs ?",
                        "options": [
                            "Financement participatif de projets par des particuliers",
                            "Un service d'emprunt bancaire traditionnel",
                            "Un système de prêt basé sur des cryptomonnaies",
                            "Une solution de paiement instantané"
                        ],
                        "correct": "Financement participatif de projets par des particuliers"
                    },
                    {
                        "id": 38,
                        "text": "Dans quel secteur l'IoT améliore la gestion des stocks ?",
                        "options": [
                            "Commerce de détail",
                            "Agriculture",
                            "Éducation",
                            "Transports"
                        ],
                        "correct": "Commerce de détail"
                    },
                    {
                        "id": 39,
                        "text": "Quel défi majeur est associé à la transformation digitale ?",
                        "options": [
                            "La gestion de la logistique",
                            "Les coûts d'investissement élevés",
                            "L'augmentation du nombre de clients",
                            "La centralisation des données"
                        ],
                        "correct": "Les coûts d'investissement élevés"
                    },
                    {
                        "id": 40,
                        "text": "Qu'est-ce que l'effet de réseau dans une plateforme numérique ?",
                        "options": [
                            "Plus il y a d'utilisateurs, plus la plateforme devient attrayante",
                            "La plateforme devient moins utile avec plus d'utilisateurs",
                            "Les utilisateurs doivent payer plus pour utiliser la plateforme",
                            "La plateforme réduit ses services pour augmenter sa rentabilité"
                        ],
                        "correct": "Plus il y a d'utilisateurs, plus la plateforme devient attrayante"
                    },
                    {
                        "id": 41,
                        "text": "Quel est l'exemple d'une entreprise qui utilise la blockchain dans la chaîne d'approvisionnement ?",
                        "options": [
                            "IBM Food Trust",
                            "Google Cloud",
                            "Amazon",
                            "Tesla"
                        ],
                        "correct": "IBM Food Trust"
                    },
                    {
                        "id": 42,
                        "text": "Quel est un défi réglementaire de la blockchain et des cryptomonnaies ?",
                        "options": [
                            "L'absence totale de régulation",
                            "La centralisation des transactions",
                            "La fraude et la protection des consommateurs",
                            "Le manque d'innovation"
                        ],
                        "correct": "La fraude et la protection des consommateurs"
                    },
                    {
                        "id": 43,
                        "text": "Quels sont les principaux biens numériques ?",
                        "options": [
                            "Produits physiques comme des meubles",
                            "Logiciels, musique, livres électroniques et jeux vidéo",
                            "Vêtements, meubles, et appareils électroniques",
                            "Nourriture et boissons"
                        ],
                        "correct": "Logiciels, musique, livres électroniques et jeux vidéo"
                    },
                    {
                        "id": 44,
                        "text": "Quelle caractéristique des biens numériques fait que leur consommation ne limite pas celle d'un autre utilisateur ?",
                        "options": [
                            "Rivalité",
                            "Non-rivalité",
                            "Coût marginal élevé",
                            "Obsolescence rapide"
                        ],
                        "correct": "Non-rivalité"
                    },
                    {
                        "id": 45,
                        "text": "Quel est l'exemple d'une plateforme utilisant un modèle freemium ?",
                        "options": [
                            "Spotify Premium",
                            "Dropbox",
                            "YouTube",
                            "Amazon Kindle"
                        ],
                        "correct": "Dropbox"
                    },
                    {
                        "id": 46,
                        "text": "Quel modèle de tarification implique un paiement pour chaque utilisation ?",
                        "options": [
                            "Gratuit avec publicité",
                            "Freemium",
                            "Abonnement",
                            "Pay-per-use"
                        ],
                        "correct": "Pay-per-use"
                    },
                    {
                        "id": 47,
                        "text": "Quel est un avantage du modèle d'abonnement ?",
                        "options": [
                            "Revenus récurrents",
                            "Risque élevé de piratage",
                            "Pas besoin de service client",
                            "Faible taux de fidélisation"
                        ],
                        "correct": "Revenus récurrents"
                    },
                    {
                        "id": 48,
                        "text": "Quel exemple illustre bien l'économie de l'abondance ?",
                        "options": [
                            "Amazon Kindle",
                            "Spotify",
                            "Netflix",
                            "YouTube"
                        ],
                        "correct": "Amazon Kindle"
                    },
                    {
                        "id": 49,
                        "text": "Quel est un défi majeur pour les producteurs de biens numériques ?",
                        "options": [
                            "La concurrence accrue",
                            "Les coûts de transport élevés",
                            "La limitation des stocks",
                            "Le manque d'innovation"
                        ],
                        "correct": "La concurrence accrue"
                    },
                    {
                        "id": 50,
                        "text": "Quel effet décrit le fait qu'un service devient plus attractif à mesure qu'il attire plus d'utilisateurs ?",
                        "options": [
                            "Monopole",
                            "Effet de réseau",
                            "Économie de l'abondance",
                            "Churn rate"
                        ],
                        "correct": "Effet de réseau"
                    },
                    {
                        "id": 51,
                        "text": "Quel est un inconvénient du modèle freemium ?",
                        "options": [
                            "Accès limité à la base de données",
                            "Faible taux de conversion des utilisateurs gratuits en payants",
                            "Dépendance aux revenus publicitaires",
                            "Manque de fonctionnalités"
                        ],
                        "correct": "Faible taux de conversion des utilisateurs gratuits en payants"
                    },
                    {
                        "id": 52,
                        "text": "Quel est un des défis de l'économie numérique en termes de droits d'auteur ?",
                        "options": [
                            "Les coûts de stockage",
                            "La protection contre le piratage",
                            "Le manque de plateformes",
                            "La lente évolution des logiciels"
                        ],
                        "correct": "La protection contre le piratage"
                    },
                    {
                        "id": 53,
                        "text": "Quel est un exemple d'une entreprise qui domine son secteur grâce aux effets de réseau ?",
                        "options": [
                            "Spotify",
                            "Facebook",
                            "Google Drive",
                            "Netflix"
                        ],
                        "correct": "Facebook"
                    },
                    {
                        "id": 54,
                        "text": "Quelle législation vise à protéger les utilisateurs de données personnelles en Europe ?",
                        "options": [
                            "Digital Markets Act (DMA)",
                            "Règlement Général sur la Protection des Données (RGPD)",
                            "California Consumer Privacy Act (CCPA)",
                            "Loi sur les services numériques"
                        ],
                        "correct": "Règlement Général sur la Protection des Données (RGPD)"
                    },
                    {
                        "id": 55,
                        "text": "Quel est un des impacts de la régulation des données pour les entreprises ?",
                        "options": [
                            "Réduction des coûts de production",
                            "Investissement dans la conformité et la sécurisation des données",
                            "Moins de surveillance des pratiques commerciales",
                            "Diminution des amendes imposées"
                        ],
                        "correct": "Investissement dans la conformité et la sécurisation des données"
                    },
                    {
                        "id": 56,
                        "text": "Quel est un des objectifs principaux des politiques publiques dans l'économie numérique ?",
                        "options": [
                            "Maximiser les profits des grandes entreprises",
                            "Protéger les utilisateurs et promouvoir l'innovation",
                            "Limiter l'accès à internet",
                            "Réduire les coûts de production"
                        ],
                        "correct": "Protéger les utilisateurs et promouvoir l'innovation"
                    },
                    {
                        "id": 57,
                        "text": "Quel est un des avantages pour les consommateurs dans une économie de l'abondance ?",
                        "options": [
                            "Moins de diversité de produits",
                            "Accès à une grande variété de produits à des coûts abordables",
                            "Coûts plus élevés pour les produits physiques",
                            "Diminution de la concurrence"
                        ],
                        "correct": "Accès à une grande variété de produits à des coûts abordables"
                    },
                    {
                        "id": 58,
                        "text": "Quel est un des défis liés à la régulation des contenus numériques ?",
                        "options": [
                            "Réduction de la diversité des plateformes",
                            "Gestion de la diffusion de contenus inappropriés ou de fausses informations",
                            "Augmentation des prix des services numériques",
                            "Saturation des services de streaming"
                        ],
                        "correct": "Gestion de la diffusion de contenus inappropriés ou de fausses informations"
                    },
                    {
                        "id": 59,
                        "text": "Quel est un exemple d'entreprise ayant ajusté ses pratiques en réponse au RGPD ?",
                        "options": [
                            "Apple",
                            "Google",
                            "YouTube",
                            "Facebook"
                        ],
                        "correct": "Apple"
                    },
                    {
                        "id": 60,
                        "text": "Quel règlement impose aux plateformes de supprimer les contenus illégaux en ligne ?",
                        "options": [
                            "Digital Services Act",
                            "Digital Markets Act",
                            "GDPR",
                            "California Consumer Privacy Act"
                        ],
                        "correct": "Digital Services Act"
                    },
                    {
                        "id": 61,
                        "text": "Quel défi majeur est associé à l'utilisation de l'IA dans les véhicules autonomes comme ceux de Tesla ?",
                        "options": [
                            "Manque d'innovation",
                            "Questions éthiques et de sécurité",
                            "Problèmes liés à la gestion des données",
                            "Coût élevé de la technologie"
                        ],
                        "correct": "Questions éthiques et de sécurité"
                    },
                    {
                        "id": 62,
                        "text": "Quel est un avantage pour les pays en développement grâce à l'économie digitale ?",
                        "options": [
                            "Accès à des emplois dans les grandes entreprises mondiales",
                            "Accès au marché global via l'e-commerce",
                            "Meilleure sécurité nationale",
                            "Réduction de la dépendance aux technologies étrangères"
                        ],
                        "correct": "Accès au marché global via l'e-commerce"
                    },
                    {
                        "id": 63,
                        "text": "Quel service de paiement mobile a permis d'améliorer l'inclusion financière au Kenya ?",
                        "options": [
                            "M-Pesa",
                            "PayPal",
                            "Google Pay",
                            "Stripe"
                        ],
                        "correct": "M-Pesa"
                    },
                    {
                        "id": 64,
                        "text": "Quel est un défi majeur de l'économie digitale dans les pays en développement ?",
                        "options": [
                            "Accès limité à l'infrastructure internet",
                            "Trop de talents dans la technologie",
                            "Trop d'investissements dans l'éducation numérique",
                            "Manque de régulation des plateformes numériques"
                        ],
                        "correct": "Accès limité à l'infrastructure internet"
                    },
                    {
                        "id": 65,
                        "text": "Quelles entreprises doivent constamment évoluer pour suivre le rythme des innovations technologiques dans l'économie digitale ?",
                        "options": [
                            "Les entreprises technologiques",
                            "Les entreprises traditionnelles uniquement",
                            "Les gouvernements",
                            "Les entreprises de l'économie sociale"
                        ],
                        "correct": "Les entreprises technologiques"
                    },
                    {
                        "id": 66,
                        "text": "Quel est un modèle économique basé sur la blockchain permettant de créer des plateformes sans intermédiaires ?",
                        "options": [
                            "Les plateformes de services centralisées",
                            "Les plateformes de services décentralisés",
                            "Les plateformes d'abonnement",
                            "Les plateformes de publicité en ligne"
                        ],
                        "correct": "Les plateformes de services décentralisés"
                    },
                    {
                        "id": 67,
                        "text": "Quel est un exemple d'expérience immersive dans l'économie digitale ?",
                        "options": [
                            "Les magasins virtuels",
                            "Les plateformes de streaming",
                            "Les sites web de vente de produits physiques",
                            "Les applications de gestion des talents"
                        ],
                        "correct": "Les magasins virtuels"
                    },
                    {
                        "id": 68,
                        "text": "Quelle entreprise a investi massivement dans l'IA et le cloud computing pour rester compétitive ?",
                        "options": [
                            "Microsoft",
                            "IBM",
                            "Google",
                            "Apple"
                        ],
                        "correct": "IBM"
                    },
                    {
                        "id": 69,
                        "text": "Quel défi social majeur est lié à l'économie digitale ?",
                        "options": [
                            "Inégalités numériques",
                            "Manque de demande pour les produits numériques",
                            "Problèmes de stockage de données",
                            "Difficulté à exporter les services numériques"
                        ],
                        "correct": "Inégalités numériques"
                    },
                    {
                        "id": 70,
                        "text": "Quel phénomène est un exemple de la transformation du marché du travail dans l'économie digitale ?",
                        "options": [
                            "Création de nouveaux métiers et disparition de certains emplois",
                            "Augmentation des salaires dans tous les secteurs",
                            "Création d'emplois exclusivement dans la fabrication physique",
                            "Stabilité de l'emploi dans les secteurs traditionnels"
                        ],
                        "correct": "Création de nouveaux métiers et disparition de certains emplois"
                    },
                    {
                        "id": 71,
                        "text": "Comment les plateformes numériques influencent-elles la société ?",
                        "options": [
                            "En créant des emplois stables à long terme",
                            "En influençant les comportements, la culture et les relations sociales",
                            "En remplaçant totalement les interactions sociales réelles",
                            "En limitant les interactions entre les individus"
                        ],
                        "correct": "En influençant les comportements, la culture et les relations sociales"
                    },
                    {
                        "id": 72,
                        "text": "Quel est un défi environnemental majeur des technologies numériques ?",
                        "options": [
                            "Augmentation de la consommation d'énergie des data centers",
                            "Réduction des émissions de CO2",
                            "Amélioration des conditions de recyclage des déchets numériques",
                            "Suppression des déchets électroniques"
                        ],
                        "correct": "Augmentation de la consommation d'énergie des data centers"
                    },
                    {
                        "id": 73,
                        "text": "Quel type de technologie est investi par Google pour réduire son empreinte carbone ?",
                        "options": [
                            "Les technologies de réalité virtuelle",
                            "L'énergie renouvelable pour ses centres de données",
                            "Les véhicules autonomes",
                            "Les plateformes de cloud computing"
                        ],
                        "correct": "L'énergie renouvelable pour ses centres de données"
                    },
                    {
                        "id": 74,
                        "text": "Quelle question est au cœur du débat sur la compatibilité de l'économie digitale avec les objectifs de développement durable ?",
                        "options": [
                            "L'économie digitale est-elle responsable des inégalités économiques ?",
                            "L'économie digitale peut-elle réduire les émissions de gaz à effet de serre ?",
                            "L'économie digitale est-elle compatible avec des objectifs écologiques et sociaux durables ?",
                            "L'économie digitale stimule-t-elle uniquement la consommation des biens matériels ?"
                        ],
                        "correct": "L'économie digitale est-elle compatible avec des objectifs écologiques et sociaux durables ?"
                    },
                    {
                        "id": 75,
                        "text": "Quel secteur est directement concerné par la transformation induite par les plateformes de services décentralisés ?",
                        "options": [
                            "Le secteur de la mode",
                            "Le secteur bancaire et financier",
                            "Le secteur éducatif",
                            "Le secteur alimentaire"
                        ],
                        "correct": "Le secteur bancaire et financier"
                    },
                    {
                        "id": 76,
                        "text": "Quel problème social est associé à la gig economy (économie à la demande) ?",
                        "options": [
                            "Exploitation des travailleurs et précarité de l'emploi",
                            "Manque de diversité dans les emplois créés",
                            "Réduction des salaires dans tous les secteurs",
                            "Surcharge de travail dans les entreprises traditionnelles"
                        ],
                        "correct": "Exploitation des travailleurs et précarité de l'emploi"
                    },
                    {
                        "id": 77,
                        "text": "Quel type de service numérique peut aider les pays en développement à résoudre les problèmes d'infrastructure ?",
                        "options": [
                            "Les services d'internet haute vitesse",
                            "Les services de paiement mobile",
                            "Les services de e-learning",
                            "Les services de cloud computing"
                        ],
                        "correct": "Les services de paiement mobile"
                    },
                    {
                        "id": 78,
                        "text": "Quel est un exemple d'initiative visant à connecter les zones rurales à l'économie numérique ?",
                        "options": [
                            "M-Pesa",
                            "Internet pour tous au Pérou",
                            "PayPal",
                            "Google Wi-Fi"
                        ],
                        "correct": "Internet pour tous au Pérou"
                    },
                    {
                        "id": 79,
                        "text": "Quel est un effet potentiel négatif de la dépendance accrue aux technologies numériques dans les pays en développement ?",
                        "options": [
                            "Réduction des opportunités de développement local",
                            "Création de nombreux emplois dans l'industrie numérique",
                            "Renforcement de l'indépendance économique",
                            "Amélioration de l'éducation et des compétences locales"
                        ],
                        "correct": "Réduction des opportunités de développement local"
                    }

                ],
            },
        ]
    })
});
