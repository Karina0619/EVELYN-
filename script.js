/* ===== Product Data ===== */
const products = [
  // Женские
  {
    id: 1,
    name: 'ARIANA GRANDE',
    category: 'women',
    categoryName: 'Для неё',
    price: '6 920 ₽',
    img: 'img/Товары/Женские/ARIANA GRANDE (1)/1.webp',
    images: [
      'img/Товары/Женские/ARIANA GRANDE (1)/1.webp',
      'img/Товары/Женские/ARIANA GRANDE (1)/2.webp',
    ],
  },
  {
    id: 2,
    name: 'ARIANA GRANDE',
    category: 'women',
    categoryName: 'Для неё',
    price: '6 400 ₽',
    img: 'img/Товары/Женские/ARIANA GRAND (2)/1.jpg',
    images: [
      'img/Товары/Женские/ARIANA GRAND (2)/1.jpg',
      'img/Товары/Женские/ARIANA GRAND (2)/2.webp',
    ],
  },
  {
    id: 3,
    name: 'BANDERAS (Her Secret Temptation)',
    category: 'women',
    categoryName: 'Для неё',
    price: '3 290 ₽',
    img: 'img/Товары/Женские/BANDERAS (Her Secret Temptation)/1.webp',
    images: [
      'img/Товары/Женские/BANDERAS (Her Secret Temptation)/1.webp',
      'img/Товары/Женские/BANDERAS (Her Secret Temptation)/2.webp',
      'img/Товары/Женские/BANDERAS (Her Secret Temptation)/3.webp',
      'img/Товары/Женские/BANDERAS (Her Secret Temptation)/4.webp',
      'img/Товары/Женские/BANDERAS (Her Secret Temptation)/5.webp',
    ],
  },
  {
    id: 4,
    name: 'CAROLINA HERRERA (Good Girl Blush)',
    category: 'women',
    categoryName: 'Для неё',
    price: '15 300 ₽',
    img: 'img/Товары/Женские/CAROLINA HERRERA (Good Girl Blush)/1.webp',
    images: [
      'img/Товары/Женские/CAROLINA HERRERA (Good Girl Blush)/1.webp',
      'img/Товары/Женские/CAROLINA HERRERA (Good Girl Blush)/2.webp',
      'img/Товары/Женские/CAROLINA HERRERA (Good Girl Blush)/3.webp',
      'img/Товары/Женские/CAROLINA HERRERA (Good Girl Blush)/4.webp',
      'img/Товары/Женские/CAROLINA HERRERA (Good Girl Blush)/5.webp',
    ],
  },
  {
    id: 5,
    name: 'DOLCE&GABBANA (Q)',
    category: 'women',
    categoryName: 'Для неё',
    price: '4 150 ₽',
    img: 'img/Товары/Женские/DOLCE&GABBANA (Q)/1.webp',
    images: [
      'img/Товары/Женские/DOLCE&GABBANA (Q)/1.webp',
      'img/Товары/Женские/DOLCE&GABBANA (Q)/3.webp',
      'img/Товары/Женские/DOLCE&GABBANA (Q)/2.webp',
      'img/Товары/Женские/DOLCE&GABBANA (Q)/4.webp',
      'img/Товары/Женские/DOLCE&GABBANA (Q)/5.webp',
    ],
  },
  {
    id: 6,
    name: 'LACOSTE (Rose Sparkling)',
    category: 'women',
    categoryName: 'Для неё',
    price: '8 200 ₽',
    img: 'img/Товары/Женские/LACOSTE ( Rose Sparkling)/1.webp',
    images: [
      'img/Товары/Женские/LACOSTE ( Rose Sparkling)/1.webp',
      'img/Товары/Женские/LACOSTE ( Rose Sparkling)/2.webp',
      'img/Товары/Женские/LACOSTE ( Rose Sparkling)/3.webp',
      'img/Товары/Женские/LACOSTE ( Rose Sparkling)/4.webp',
      'img/Товары/Женские/LACOSTE ( Rose Sparkling)/5.webp',
    ],
  },
  {
    id: 7,
    name: 'SABRINA CARPENTER (Cherry Baby)',
    category: 'women',
    categoryName: 'Для неё',
    price: '8 650 ₽',
    img: 'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/1.webp',
    images: [
      'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/1.webp',
      'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/2.webp',
      'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/3.webp',
      'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/4.webp',
      'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/5.webp',
      'img/Товары/Женские/SABRINA CARPENTER (Cherry Baby)/6.webp',
    ],
  },
  // Мужские
  {
    id: 8,
    name: 'BANDERAS (Black Seduction)',
    category: 'men',
    categoryName: 'Для него',
    price: '2 950 ₽',
    img: 'img/Товары/Мужские/BANDERAS (Black Seduction)/1.webp',
    images: [
      'img/Товары/Мужские/BANDERAS (Black Seduction)/1.webp',
      'img/Товары/Мужские/BANDERAS (Black Seduction)/5.webp',
      'img/Товары/Мужские/BANDERAS (Black Seduction)/2.webp',
      'img/Товары/Мужские/BANDERAS (Black Seduction)/3.webp',
      'img/Товары/Мужские/BANDERAS (Black Seduction)/4.webp',
    ],
  },
  {
    id: 9,
    name: 'LACOSTE (Original)',
    category: 'men',
    categoryName: 'Для него',
    price: '7 490 ₽',
    img: 'img/Товары/Мужские/LACOSTE (Original)/1.webp',
    images: [
      'img/Товары/Мужские/LACOSTE (Original)/1.webp',
      'img/Товары/Мужские/LACOSTE (Original)/2.webp',
      'img/Товары/Мужские/LACOSTE (Original)/3.webp',
      'img/Товары/Мужские/LACOSTE (Original)/4.webp',
      'img/Товары/Мужские/LACOSTE (Original)/5.webp',
    ],
  },
  {
    id: 10,
    name: 'TRUSSARDI (Primo)',
    category: 'men',
    categoryName: 'Для него',
    price: '8 650 ₽',
    img: 'img/Товары/Мужские/TRUSSARDI (Primo)/1.webp',
    images: [
      'img/Товары/Мужские/TRUSSARDI (Primo)/1.webp',
      'img/Товары/Мужские/TRUSSARDI (Primo)/2.webp',
      'img/Товары/Мужские/TRUSSARDI (Primo)/3.webp',
      'img/Товары/Мужские/TRUSSARDI (Primo)/4.webp',
      'img/Товары/Мужские/TRUSSARDI (Primo)/5.webp',
    ],
  },
  {
    id: 11,
    name: "YVES SAINT LAURENT (L'Homme Eau De Parfum)",
    category: 'men',
    categoryName: 'Для него',
    price: '12 140 ₽',
    img: "img/Товары/Мужские/YVES SAINT LAURENT (L'Homme Eau De Parfum)/1.webp",
    images: [
      "img/Товары/Мужские/YVES SAINT LAURENT (L'Homme Eau De Parfum)/1.webp",
      "img/Товары/Мужские/YVES SAINT LAURENT (L'Homme Eau De Parfum)/3.webp",
      "img/Товары/Мужские/YVES SAINT LAURENT (L'Homme Eau De Parfum)/2.webp",
      "img/Товары/Мужские/YVES SAINT LAURENT (L'Homme Eau De Parfum)/4.webp",
      "img/Товары/Мужские/YVES SAINT LAURENT (L'Homme Eau De Parfum)/5.webp",
    ],
  },
  {
    id: 12,
    name: 'ZADIG&VOLTAIRE (This Is Him)',
    category: 'men',
    categoryName: 'Для него',
    price: '7 300 ₽',
    img: 'img/Товары/Мужские/ZADIG&VOLTAIRE (This Is Him)/1.webp',
    images: [
      'img/Товары/Мужские/ZADIG&VOLTAIRE (This Is Him)/1.webp',
      'img/Товары/Мужские/ZADIG&VOLTAIRE (This Is Him)/2.webp',
      'img/Товары/Мужские/ZADIG&VOLTAIRE (This Is Him)/3.webp',
      'img/Товары/Мужские/ZADIG&VOLTAIRE (This Is Him)/4.webp',
    ],
  },
  // Унисекс
  {
    id: 13,
    name: 'AKRO (Bake)',
    category: 'unisex',
    categoryName: 'Унисекс',
    price: '9 300 ₽',
    img: 'img/Товары/Унисекс/AKRO (Bake)/1.webp',
    images: [
      'img/Товары/Унисекс/AKRO (Bake)/1.webp',
      'img/Товары/Унисекс/AKRO (Bake)/2.webp',
      'img/Товары/Унисекс/AKRO (Bake)/3.webp',
      'img/Товары/Унисекс/AKRO (Bake)/4.webp',
    ],
  },
  {
    id: 14,
    name: 'ATTAR COLLECTION (Capella)',
    category: 'unisex',
    categoryName: 'Унисекс',
    price: '23 500 ₽',
    img: 'img/Товары/Унисекс/ATTAR COLLECTION (Capella)/1.webp',
    images: [
      'img/Товары/Унисекс/ATTAR COLLECTION (Capella)/1.webp',
      'img/Товары/Унисекс/ATTAR COLLECTION (Capella)/2.webp',
      'img/Товары/Унисекс/ATTAR COLLECTION (Capella)/3.webp',
      'img/Товары/Унисекс/ATTAR COLLECTION (Capella)/4.webp',
      'img/Товары/Унисекс/ATTAR COLLECTION (Capella)/5.webp',
    ],
  },
  {
    id: 15,
    name: 'DOLCE&GABBANA (DGVIB3)',
    category: 'unisex',
    categoryName: 'Унисекс',
    price: '18 150 ₽',
    img: 'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/1.webp',
    images: [
      'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/1.webp',
      'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/2.webp',
      'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/3.webp',
      'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/4.webp',
      'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/5.webp',
      'img/Товары/Унисекс/DOLCE&GABBANA (DGVIB3)/6.webp',
    ],
  },
  {
    id: 16,
    name: 'LES DESTINATIONS (Grasse)',
    category: 'unisex',
    categoryName: 'Унисекс',
    price: '15 450 ₽',
    img: 'img/Товары/Унисекс/LES DESTINATIONS (Grasse)/1.webp',
    images: [
      'img/Товары/Унисекс/LES DESTINATIONS (Grasse)/1.webp',
      'img/Товары/Унисекс/LES DESTINATIONS (Grasse)/5.webp',
      'img/Товары/Унисекс/LES DESTINATIONS (Grasse)/2.webp',
      'img/Товары/Унисекс/LES DESTINATIONS (Grasse)/3.webp',
      'img/Товары/Унисекс/LES DESTINATIONS (Grasse)/4.webp',
    ],
  },
  {
    id: 17,
    name: 'TOM FORD (Lost Cherry)',
    category: 'unisex',
    categoryName: 'Унисекс',
    price: '40 000 ₽',
    img: 'img/Товары/Унисекс/TOM FORD (Lost Cherry)/1.webp',
    images: [
      'img/Товары/Унисекс/TOM FORD (Lost Cherry)/1.webp',
      'img/Товары/Унисекс/TOM FORD (Lost Cherry)/2.webp',
      'img/Товары/Унисекс/TOM FORD (Lost Cherry)/3.webp',
      'img/Товары/Унисекс/TOM FORD (Lost Cherry)/4.webp',
      'img/Товары/Унисекс/TOM FORD (Lost Cherry)/5.webp',
    ],
  },
];

/* ===== Product Details (for product page) ===== */
const productDetails = {
  1: {
    description:
      'Код продукта - MPL413230 ',
    longDescription:
      'Ariana Grande Cloud EDP Spray Аромат Ariana Grande Cloud EDP Spray был представлен в 2018 году и стал выражением надежды и мечты. Этот парфюм вдохновлен атмосферой легкости и облаков, символизируя свободу и радость. Он начинается с ярких и свежих нот, плавно переходя в более глубокие и теплые аккорды, создавая гармоничное звучание. Верхние ноты представлены бергамотом и грушей, которые создают свежий и фруктовый старт. В сердце раскрываются кремовые ноты кокоса, флердоранжа и орхидеи, придавая аромату экзотическую сладость. В завершении звучания базовых нот себя проявляют древесные аккорды, мускус и амбра, создавая теплое и стойкое завершение. Основные характеристики: Семейство аромат: Восточная;- Группа ароматов: Цветочный;- Ноты сердца: Кокос, Флердоранж, Орхидея;- Верхние ноты: Бергамот, Груша;- Базовые ноты: Деревесные ноты, Мускус, Амбра.',
    type: 'Женский',
    topNotes: 'груша, бергамот',
    heartNotes: 'Кокос, Флердоранж, Орхидея',
    baseNotes: 'Деревесные ноты, Мускус, Амбра',
    composition: 'Alcohol, Denat. (Sd Alcohol 39 C), Fragrance, Water, Limonene, Ethylhexylmethoxycinnamate/Butylmethoxydibenzoylimethane/Ethylhexylsalicylate, Coumarin, Linalool, Alpha-Isomethyl Ionone, Citronellol, Citral, Geraniol, Cinnamal, Eugenol.',
  },
  2: {
    description:
      'Код продукта - MPL471714',
      longDescription:
      'Ariana Grande Thank U, Next 2.0 Eau de Parfum — это яркое, игривое и немного дерзкое продолжение культового аромата, вдохновлённое смелостью быть собой. Этот парфюм воплощает уверенность, женственность и искреннюю благодарность, оставаясь при этом свежим и современным. Аромат раскрывается яркими верхними нотами освежающей яблочной мяты и сочного малино-розового гранита, создавая моментальное ощущение бодрящей прохлады и игривости. В сердце аромата — нежные и одновременно интригующие ноты розовой розы и сладкой клубники, добавляющие композиции романтики и лёгкости. База окутывает тёплыми аккордами мускуса и сандалового дерева, оставляя после себя мягкий, уютный шлейф с лёгкой сливочной сладостью. Этот аромат идеально подойдёт тем, кто не боится перемен и идёт по жизни с лёгким сердцем и широкой улыбкой. Упаковка в виде флакона-сердца с разбитым стеклом подчёркивает идею силы через уязвимость и превращение прошлого в источник вдохновения' ,
    type: 'Женский',
    topNotes: 'Белая груша и дикая малина',
    heartNotes: 'Кремовая кокосовая ваниль и роза',
    baseNotes: 'Ореховый акцент макарон и вельветовыми оттенками мускуса',
    composition: 'Alcohol, Denat. (Sd Alcohol 39 C), Fragrance, Water, Limonene, Ethylhexylmethoxycinnamate/Butylmethoxydibenzoylimethane/Ethylhexylsalicylate, Coumarin, Linalool, Alpha-Isomethyl Ionone, Citronellol, Citral, Geraniol, Cinnamal, Eugenol',
  },
  3: {
    description:
      'Код продукта - BAN115509',
      longDescription:
      'The Secret Temptation: новые парные ароматы от Антонио Бандераса созданы для тех, кто готов дать волю своим тайным желаниям. Для нее — пурпурный флакон в форме сердца, украшенный элегантной бело-золотой пластиной. Воплощение образа притягательной женщины' , 
    type: 'Женский',
    topNotes: 'бергамот, апельсин',
    heartNotes: 'роза, ирис',
    baseNotes: 'кедр, ваниль',
    composition: ' Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Coumarin, Geraniol, Benzyl Alcohol',
  },
  4: {
    description:
      'Код продукта - CRH973483',
      longDescription:
      'Good Girl Blush – это яркая игра контрастов и неповторимое пудровое звучание цветочной нежности. Новая глава в истории парфюмерной коллекции Good Girl начинается с захватывающего противостояния чувственных нот ванили и розы с цитрусовой свежестью бергамота, окутанной в базу из изысканных нот пиона и искристого аромата иланг-иланга. Чтобы придать цветочному букету Good Girl Blush объем, парфюмеры использовали синтетические молекулы в сочетании с переработанной розовой водой. Эта техника позволяет усилить стойкость аромата на коже, сохраняя натуральное цветочное звучание. Для создания полностью веганской формулы Дом Carolina Herrera сотрудничает с компанией Givaudan и их программой устойчивого развития Sourcing4Good.' ,
    type: 'Женский',
    topNotes: 'бергамот, миндаль',
    heartNotes: 'пион, иланг-иланг',
    baseNotes: 'ваниль ,бобы тонка',
    composition: 'PARFUM (FRAGRANCE), AQUA (WATER), HYDROXYCITRONELLAL, BENZYL SALICYLATE, BUTYL METHOXYDIBENZOYLMETHANE, CITRONELLOL, LIMONENE, LINALOOL, ALPHA-ISOMETHYL IONONE, COUMARIN, CINNAMYL ALCOHOL, GERANIOL, ALCOHOL, TRIS(TETRAMETHYLHYDROXYPIPERIDINOL) CITRATE, CITRAL, BENZYL BENZOATE, BENZYL ALCOHOL, CINNAMAL, CI 17200 (RED 33), CI 14700 (RED 4), CI 19140 (YELLOW 5), CI 60730 (EXT. VIOLET 2)',
  },
  5: {
    description:
      'Код продукта - ESH818459',
    longDescription:
      'Q by Dolce&Gabbana - аромат, с которым каждая женщина почувствует себя современной Королевой. Q by Dolce&Gabbana - аромат с фруктовыми и цветочными нотами, дополненными сильной древесной базой. Свежесть сицилийских лимонов, контрастирующая с терпко-сладкими нотами вишни, придает аромату утончённый и в тоже время дерзкий акцент. Флакон украшает королевская золотая корона в насыщенных вишнево-красных тонах, вдохновленных нотой «сердца» аромата. Толстое стекло флакона нежно-розового оттенка придает дизайну современный аспект.' ,
      type: 'Женский',
    topNotes: 'лимон, апельсин, жасмин',
    heartNotes: 'вишня, гелиотроп',
    baseNotes: 'кедр, мох, мускус',
    composition: 'ALCOHOL DENAT., PARFUM (FRAGRANCE), AQUA (WATER), BENZYL SALICYLATE, LIMONENE, HYDROXYCITRONELLAL, BUTYL METHOXYDIBENZOYLMETHANE, ETHYLHEXYL SALICYLATE, LINALOOL, CITRAL, ALCOHOL, CITRONELLOL, HEXYL CINNAMAL, TRIS(TETRAMETHYLHYDROXYPIPERIDINOL) CITRATE, COUMARIN, BENZYL ALCOHOL, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, EUGENOL, GERANIOL, CI 14700 (RED 4), CI 60730 (EXT. VIOLET 2), CI 19140 (YELLOW 5)',
  },
  6: {
    description:
      'Код продукта - LAC455726',
    longDescription:
      'Rose Sparkling передает уважение женственности легендарной женской рубашки-поло от Lacoste: элегантный и стильный янтарно-фруктовый аромат для уверенной в себе девушки. Яркие ноты мандарина и ландыша подчеркнуты нежным аккордом макарун, создающим насыщенный контраст с приземленными древесными тонами пачулей и ветивера. Эта композиция создана для непреодолимого наслаждения, окутывая чувства пленительным и гармоничным ароматом.' ,
      type: 'Женский',
    topNotes: 'мандарин, яблоко',
    heartNotes: 'макарун, сахарная вата, ландыш',
    baseNotes: 'пачули, ветивер ',
    composition: 'ALCOHOL - PARFUM (FRAGRANCE) – AQUA (WATER) – HYDROXYCITRONELLAL - BUTYL METHOXYDIBENZOYLMETHANE – ETHYLHEXYL METHOXYCINNAMATE – LINALOOL – LIMONENE - HEXYL CINNAMAL – COUMARIN - ALPHA-ISOMETHYL IONONE – CITRONELLOL – CITRAL – GERANIOL – FARNESOL – BHT - CI 60730 (EXT. VIOLET 2) - CI 19140 (YELLOW 5) - CI 17200 (RED 33)',
  },
  7: {
    description:
      'Код продукта - SRP000007',
    longDescription:
      'Sabrina Carpenter Cherry Baby — это парфюмерное воплощение игривого настроения, юности и внутреннего сияния. Этот аромат — сама беззаботность и женственность. Он может рассказать о кокетливом и легком настроении своей хозяйки, плавно переходя из дневной суеты в вечернюю романтику. Идеален для любого момента вашего дня — от будней до особых встреч. Аромат раскрывается сочным фруктовым аккордом. Игривая вишня и хрустящее глазированное яблоко создают яркую свежесть, которую сливовый сок наполняет своей глубиной. Коричневый сахар мягко обволакивает композицию, добавляя ей тёплую, гастрономическую сладость. Ноты сердца раскрывают глубину и сложность аромата. Красная сосна обволакивает томной, смолистой прохладой, которую пион смягчает своим бархатистым звучанием. Тёмный шоколад придает горьковатый оттенок, а ваниль дарит аккордам кремовую, сладкую и стойкую основу. База аромата — мягкое кашемировое дерево, чистейший мускус, глубинные пачули и бальзамическая смола янтаря создают невероятно стойкий и соблазнительный шлейф. Сам флакон в форме шоколадной плитки выполнен в изысканном перламутрово-матовом оформлении, что придаёт ему «сахарный» блеск и делает его настоящим украшением туалетного столика. Он словно продолжает историю аромата — сладкий, стильный и с характером.' ,
      type: 'Женский',
    topNotes: 'вишня, глазированное яблоко, нектар сливы, жженый сахар',
    heartNotes: 'красный мак, цветок пиона, темный шоколад, ванильная орхидея',
    baseNotes: 'кашемировое дерево, мускус, эликсир пачули, смола амбры',
    composition: 'ALCOHOL DENAT., FRAGRANCE/PARFUM, WATER (AQUA/EAU), ETHYLHEXYL METHOXYCINNAMATE, ETHYLHEXYL SALICYLATE, BUTYL METHOXYDIBENZOYLMETHANE, CITRIC ACID, TETRAHYDROXYPROPYL ETHYLENEDIAMINE, ANISE ALCOHOL, BENZYL ALCOHOL, CINNAMAL, BENZALDEHYDE, CEDRUS ATLANTICA OIL/EXTRACT, CINNAMOMOM ZEYLANICUM BARK OIL, HEXADECANOLACTONE, ROSE FLOWER OIL EXTRACT, ROSE KETONES, TETRAMETHYL ACETYLOCTAHYDRONAPHTHALENES, TRIMETHYLCYCLOPENTENYL METHYLISOPENTENOL, VANILLIN.',
  },
  8: {
    description:
      'Код продукта - BAN034824',
    longDescription:
      'ANTONIO BANDERAS Black Seduction – это природное обаяние и мужественность, соединенные в одном флаконе. Аромат адресован зрелому мужчине, который успел многого добиться в жизни. Он сполна осознает цену своей привлекательности, поэтому очень избирателен и самоуверен. Его идеально наглаженная рубашка с воротником, расстегнутым на две пуговицы, говорит об игривости характера, который прослеживается в легкой манере общения и мимолетном флирте. Улыбка этого мужчины завораживает, лишая женщин дара речи. Он неотразим в своей непосредственности и умении подчеркнуть респектабельный статус.' ,
      type: 'Мужской',
    topNotes: 'бергамот, черная смородина',
    heartNotes: 'кардамон, мускатный орех',
    baseNotes: 'кедр, бобы тонка',
    composition: 'Alcohol denat, aqua (water), parfum (fragrance), ethylhexyl methoxycinnamate, limonene, linalool, coumarin, ethylhexyl salicylate, butyl methoxydibenzoylmethane, tris (tetramethylhydroxypiperidinol) citrate, citral, isoeugenol, CI 60730 (ext violet 2), CI 19140 (yellow 5), CI 14700 (red 4)',
  },
  9: {
    description:
      'Код продукта - LAC998830',
    longDescription:
      'LACOSTE ORIGINAL - естественное продолжение наследия бренда с его знаковыми зелеными и белыми оттенками, доминирующими в образе. Аромат LACOSTE ORIGINAL открывается насыщенной, терпкой свежестью бергамота, дополненной пряными акцентами розового перца и кардамона. Эти взрывные верхние ноты уступают место элегантности лаванды и мускатного шалфея, которые образуют интенсивное ароматное сердце. В базе чувственное сандаловое дерево и мистические пачули закладывают основу аромата, в котором успокаивающая амбра сочетается с вызывающими привыкание бобами Тонка.' ,
      type: 'Мужской',
    topNotes: 'перец, бергамот, кардамон',
    heartNotes: 'лаванда, шалфей, фиалка',
    baseNotes: 'сандал, амбра, бобы тонка',
    composition: 'ALCOHOL DENAT. (SD ALCOHOL 40-B), PARFUM (FRAGRANCE), LIMONENE, LINALOOL, ALPHA-ISOMETHYL IONONE, CITRONELLOL, COUMARIN, CITRAL, GERANIOL, CINNAMAL, AQUA (WATER), BUTYL METHOXYDIBENZOYLMETHANE',
  },
  10: {
    description:
      'Код продукта - TR0000078',
    longDescription:
      'Trussardi Primo - фужерная композиция со стойким ароматом и оттенками «нуар», полученными из аккордов бергамота, герани, мускуса, лаванды, ветивера и бобов тонка. В состав парфюма входят органические ингредиенты из Италии, извлеченные с помощью высокотехнологичных процессов, которые учитывают характеристики сырья, чтобы передать все ольфактивные тонкости. Смелые, мужественные ноты этого аромата вызывают в памяти свежесть морского воздуха, смешанного с жаром вулканической лавы, создавая уникальную ольфактивную гармонию, которая отражает красоту и необузданную силу природы.' ,
      type: 'Мужской',
    topNotes: 'грейпфрут, кленовый сироп, лава',
    heartNotes: 'герань бурбон, калабрийский перец, бобы тонка',
    baseNotes: 'пачули, сандал, кедр',
    composition: 'ALCOHOL DENAT., PARFUM (FRAGRANCE), AQUA (WATER), LINALOOL, COUMARIN, LIMONENE, BUTYL METHOXYDIBENZOYLMETHANE, ETHYLHEXYL SALICYLATE, CITRONELLOL, GERANIOL, EUGENOL, BENZYL ALCOHOL, CITRAL.',
  },
  11: {
    description:
      'Код продукта - MPL371440',
    longDescription:
      'С первых мгновений L Homme Eau de Parfum раскрывается ярким дуэтом горького апельсина и бергамота, которые освежают и задают динамичный тон композиции. В сердце звучат благородные ноты лаванды и герани, добавляя аромату теплоту и утонченность. Завершающий аккорд — глубокие и стойкие древесные ноты коньяка, дуба, кедра и ветивера — создают чувственный и изысканный шлейф, который оставляет незабываемое впечатление.' ,
      type: 'Мужской',
    topNotes: 'Горький апельсин и Бергамот',
    heartNotes: 'Лаванда и Герань',
    baseNotes: 'Коньяк, Дуб, Кедр и Ветивер',
    composition: 'Alcohol, Denat. (Sd Alcohol 39 C), Fragrance, Water, Limonene, Ethylhexylmethoxycinnamate/Butylmethoxydibenzoylimethane/Ethylhexylsalicylate, Coumarin, Linalool, Alpha-Isomethyl Ionone, Citronellol, Citral, Geraniol, Cinnamal, Eugenol.',
  },
  12: {
    description:
      'Код продукта - ZVO9605BP',
    longDescription:
      'This Is Him от ZADIG&VOLTAIRE — воплощениенеобузданного темперамента, который заставляет таять женские сердца. И каждый обладатель парфюмерного шедевра знает это, сохраняя свой секрет в тайне от остальных. Уникальная композиция, заключенная в экстравагантный черный флакон, наполнена восточными и древесными аккордами. Парижские парфюмеры модного дома ZADIG&VOLTAIRE сумели создать по-настоящему мистический букет, обладающий завораживающим противостоянием темных и светлых тонов. Женская композиция серии представлена в белом флаконе, продолжая тему вечного противоборства сил. Верхние ноты грейпфрута и черного перца приковывают внимание и создают ощущение предстоящего страстного приключения. Ноты сердца, состоящие из лаванды и ванили, увлекают в водоворот необузданных чувств и желаний. Базовой нотой композиции служит сандал.' ,
      type: 'Мужской',
    topNotes: 'грейпфрут, перец',
    heartNotes: 'ладан, ваниль',
    baseNotes: 'сандал',
    composition: 'Описания состава нет',
  },
  13: {
    description:
      'Код продукта - AKO000023',
    longDescription:
      'В романе «В поисках утраченного времени» Марселя Пруста есть сцена переноса из реального времени в детство с помощью запаха и вкуса. Для Пруста это был вкус французского печенья «мадлен», а для создателей марки, отца и дочери Cresp - это вкус лимонного пирожного в их любимом кафе. Вкус и аромат этого пирожного переносят их в уютный уголок и неспешный послеполуденный отдых среди суеты рабочего дня и хаоса большого города. Это ощущение стало вдохновением аромата BAKE. Первым, что вы почувствуете в этом аромате, будут терпкие ноты лимона, за которыми тут же последует насыщенная глубина пралине с ореховым привкусом, а за ней теплые ноты сладкой ванили. Богатая текстура этого аромата выстроена с помощью множества уникальных компонентов - здесь и пряный ром, и темный тростниковый сахар, и изысканный крем шантильи. Этот аромат ляжет на вашу кожу в любой ситуации, единственная проблема кроется лишь в безумном желании съесть его.' ,
      type: 'Унисекс',
    topNotes: 'лимон',
    heartNotes: 'ваниль, пралине',
    baseNotes: 'крем шантильи',
    composition: 'Alcohol denat., Aqua (Water), Parfum (Fragrance), Aqua (Water), Limonene, Anise Alcohol, Benzyl Benzoate, Benzyl Cinnamate, Citral, Coumarin, Geraniol, Linalool',
  },
  14: {
    description:
      'Код продукта - ATT567911',
    longDescription:
      'Сладкие и пряные аккорды вступления сразу привлекают внимание, создавая интригующую атмосферу. В сердце композиции раскрываются восточные цветочные мотивы, насыщенные теплотой и изысканностью. Завершающие древесные аккорды с мягкой амброй добавляют композиции бархатистости и стойкости, оставляя глубокий и завораживающий шлейф. Этот аромат словно рассказывает о таинственных восточных ночах, наполняя пространство магией. Его многогранность и богатство превращают каждое мгновение в настоящую сказку, даря ощущение роскоши и загадки.' ,
      type: 'Унисекс',
    topNotes: 'чай, бергамот',
    heartNotes: 'лимон',
    baseNotes: 'ветивер, мускус',
    composition: 'ALCOHOL DENAT, FRAGRANCE, BENZYL ALCOHOL, HYDROXYCITRONELLAL, LIMONENE, LINALOOL, GERANIOL, CITRAL, CITRONELLOL, EUGENOL.',
  },
  15: {
    description:
      'Код продукта - ESH819092',
    longDescription:
      'Парфюмерная вода DG VIB3 - это выражение стиля и самобытности. Это смелый и современный аромат, богатый контрастами и роскошными нотами, созданный для того, чтобы понравится каждому. Аромат заключен во флакон с утонченными, современными линиями, дополненный черной глянцевой крышкой на магнитах. Упаковка выполнена в культовой цветовой черно-белой гамме.' ,
      type: 'Унисекс',
    topNotes: 'лаванда',
    heartNotes: 'амбра',
    baseNotes: 'ваниль',
    composition: 'ALCOHOL DENAT., PARFUM (FRAGRANCE), AQUA (WATER), CITRONELLOL, COUMARIN, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, DILAURYL THIODIPROPIONATE, BENZYL BENZOATE, GERANIOL, BENZYL ALCOHOL, CINNAMAL, EUGENOL, CI 19140 (YELLOW 5), CI 15985 (YELLOW 6',
  },
  16: {
    description:
      'Код продукта - DES228986',
    longDescription:
      'Начало весны в Провансе. Момент, когда деревушка Грас просыпается от зимнего сна и превращается в цветущее царство ароматов. Насколько радуют глаз — благоуханные поля нежных цветов и сады. Никакое другое место в мире не ассоциируется с парфюмерией от-кутюр больше, чем этот французский городок. Букет белых цветов в сочетании с маслом померанцевого дерева, а в качестве акцентов — лимонное масло и розовый перец.' ,
      type: 'Унисекс',
    topNotes: 'лимон, слива, розовый перец',
    heartNotes: 'нероли, жасмин, пион',
    baseNotes: 'кедр, ваниль, мускус',
    composition: 'ALCOHOL, WATER (AQUA), FRAGRANCE (PARFUM), LINALOOL, BENZYL SALICYLATE, HYDROXYCITRONELLAL, BENZYL ALCOHOL, COUMARIN, CITRONELLOL, ALPHA-ISOMETHYLIONONE, ETHYLHEXYL METHOXYCINNAMATE , BUTYL METHOXYDIBENZOYLMETHANE, LIMONENE, ETHYLHEXYL SALICYLATE, GERANIOL, ISOEUGENOL, EUGENOL, CINNAMYL ALCOHOL, CITRAL, BHT 85 % VOL..',
  },
  17: {
    description:
      'Код продукта - EST490266',
    longDescription:
      ' Lost Cherry — насыщенный аромат, открывающий двери в некогда запретный мир. Его соблазнительная двойственность основана на контрасте игривой, блестящей и гладкой изнанки с сочной мякотью внутри», — ТОМ ФОРД. Черешня, масло горького миндаля, сироп из вишни «гриот», турецкая роза, перуанский бальзам и обжаренные бобы тонка.' ,
      type: 'Унисекс',
    topNotes: 'черешня, горький миндаль',
    heartNotes: 'вишневый сироп, роза',
    baseNotes: 'перуанский бальзам, бобы тонка',
    composition: 'ALCOHOL DENAT., WATERAQUAEAU, FRAGRANCE (PARFUM), BENZYL SALICYLATE, LINALOOL, HEXYL CINNAMAL, ALPHA-ISOMETHYL IONONE, HYDROXYCITRONELLAL, BENZYL BENZOATE, GERANIOL, LIMONENE, COUMARIN, CINNAMYL ALCOHOL, CITRONELLOL, EUGENOL, ISOEUGENOL, BENZYL ALCOHOL, CITRAL, AMYL CINNAMAL, FARNESOL, CINNAMAL, AMYLCINNAMYL ALCOHOL, ANISE ALCOHOL, METHYL 2-OCTYNOATE, EVERNIA PRUNASTRI (OAKMOSS) EXTRACT, EVERNIA FURFURACEA (TREEMOSS) EXTRACT, BENZYL CINNAMATE, BHT, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE',
  },
};

/* ===== Price Helpers ===== */
const BASE_VOLUME = 100; // базовая цена в продукте — за 100 мл

function parsePrice(priceStr) {
  if (typeof priceStr === 'number') return priceStr;
  const num = String(priceStr).replace(/[^\d]/g, '');
  return parseInt(num, 10) || 0;
}

function formatPrice(num) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(num)) + ' ₽';
}

function getPriceForVolume(basePrice, volume) {
  return (parsePrice(basePrice) * volume) / BASE_VOLUME;
}

/* ===== State ===== */
let currentFilter = 'all';
let cart = [];
const CART_STORAGE_KEY = 'evelyn_cart';

const filtersState = {
  priceMin: null,
  priceMax: null,
  notes: new Set(),
};

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) cart = JSON.parse(raw);
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {}
}
let currentBanner = 0;
const BANNER_COUNT = 4;

/* ===== DOM Elements ===== */
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const navLinks = document.querySelectorAll('.nav-link[data-section], .mobile-nav-link[data-section]');
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.querySelector('.search-overlay');
const searchClose = document.querySelector('.search-close');
const header = document.querySelector('.header');
const modal = document.getElementById('productModal');
const modalOverlay = modal?.querySelector('.modal-overlay');
const modalClose = modal?.querySelector('.modal-close');
const priceMinInput = document.getElementById('filterPriceMin');
const priceMaxInput = document.getElementById('filterPriceMax');
const noteCheckboxes = document.querySelectorAll('.filter-note-input');
const filtersResetBtn = document.getElementById('filtersReset');

/* ===== Notes Helpers ===== */
function productMatchesSelectedNotes(productId, selectedNotes) {
  if (!selectedNotes || selectedNotes.size === 0) return true;
  const details = productDetails[productId];
  if (!details) return false;

  const text =
    [
      details.topNotes,
      details.heartNotes,
      details.baseNotes,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase() || '';

  // Требуем, чтобы каждая выбранная нота встречалась в пирамиде
  for (const note of selectedNotes) {
    if (!text.includes(note)) {
      return false;
    }
  }

  return true;
}

/* ===== Product Image Slider on Cards (hover move / touch swipe) ===== */
function initProductImageSliders() {
  document.querySelectorAll('.product-card').forEach((card) => {
    const id = parseInt(card.dataset.id, 10);
    const product = products.find((p) => p.id === id);
    if (!product) return;

    const images = product.images && product.images.length ? product.images : [product.img];
    const imageWrapper = card.querySelector('.product-image');
    const imgEl = imageWrapper?.querySelector('img');
    const dotsContainer = imageWrapper?.querySelector('.product-image-dots');

    if (!imgEl || !dotsContainer) return;

    if (images.length <= 1) {
      dotsContainer.classList.add('is-hidden');
      return;
    }

    let currentIndex = 0;

    dotsContainer.innerHTML = images
      .map(
        (_, index) =>
          `<button class="product-image-dot${index === 0 ? ' active' : ''}" data-index="${index}" aria-label="Фото ${index + 1}"></button>`
      )
      .join('');

    const dots = dotsContainer.querySelectorAll('.product-image-dot');

    const updateImage = (newIndex) => {
      currentIndex = (newIndex + images.length) % images.length;
      imgEl.src = images[currentIndex];
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    };

    // Движение мышью по изображению (без зажатия)
    let lastMouseX = null;
    let lastChangeTime = 0;
    const mouseThreshold = 40; // порог по горизонтали
    const mouseCooldown = 200; // минимальный интервал между сменами, мс

    const onMouseMove = (e) => {
      const x = e.clientX;
      if (lastMouseX === null) {
        lastMouseX = x;
        return;
      }
      const diff = x - lastMouseX;
      const now = Date.now();

      if (Math.abs(diff) > mouseThreshold && now - lastChangeTime > mouseCooldown) {
        if (diff < 0) {
          updateImage(currentIndex + 1);
        } else {
          updateImage(currentIndex - 1);
        }
        lastChangeTime = now;
        lastMouseX = x;
      }
    };

    const onMouseLeave = () => {
      lastMouseX = null;
    };

    imageWrapper.addEventListener('mousemove', onMouseMove);
    imageWrapper.addEventListener('mouseleave', onMouseLeave);

    // Свайп пальцем на тач-устройствах
    let touchStartX = null;
    const touchThreshold = 40;

    imageWrapper.addEventListener(
      'touchstart',
      (e) => {
        if (!e.touches.length) return;
        touchStartX = e.touches[0].clientX;
      },
      { passive: true }
    );

    imageWrapper.addEventListener(
      'touchmove',
      (e) => {
        if (touchStartX === null || !e.touches.length) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartX;
        if (Math.abs(diff) > touchThreshold) {
          if (diff < 0) {
            updateImage(currentIndex + 1);
          } else {
            updateImage(currentIndex - 1);
          }
          touchStartX = currentX;
        }
      },
      { passive: true }
    );

    imageWrapper.addEventListener('touchend', () => {
      touchStartX = null;
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(dot.dataset.index, 10);
        if (!Number.isNaN(index)) {
          updateImage(index);
        }
      });
    });
  });
}

/* ===== Render Products ===== */
function renderProducts(filter = 'all') {
  if (filter) {
    currentFilter = filter;
  }

  const filtered = products.filter((p) => {
    // Категория
    if (currentFilter !== 'all' && p.category !== currentFilter) return false;

    const price = parsePrice(p.price);

    // Цена
    if (typeof filtersState.priceMin === 'number' && !Number.isNaN(filtersState.priceMin)) {
      if (price < filtersState.priceMin) return false;
    }
    if (typeof filtersState.priceMax === 'number' && !Number.isNaN(filtersState.priceMax)) {
      if (price > filtersState.priceMax) return false;
    }

    // Ноты
    if (!productMatchesSelectedNotes(p.id, filtersState.notes)) return false;

    return true;
  });

  productsGrid.innerHTML = filtered
    .map(
      (product) => `
    <article class="product-card fade-in" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <div class="product-image-dots"></div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.categoryName}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <button class="product-add" data-id="${product.id}">В корзину</button>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  attachProductListeners();
  initProductImageSliders();
}

/* ===== Product Navigation ===== */
function openProductPage(id) {
  if (!id) return;
  window.location.href = `product.html?id=${id}`;
}

/* ===== Product Listeners ===== */
function attachProductListeners() {
  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (
        !e.target.closest('.product-add') &&
        !e.target.closest('.product-image-dots')
      ) {
        const id = parseInt(card.dataset.id, 10);
        openProductPage(id);
      }
    });
  });

  document.querySelectorAll('.product-add').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id, 10));
    });
  });
}

/* ===== Product Modal (не используется, оставлено на будущее) ===== */
function closeProductModal() {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== Cart ===== */
function addToCart(id, options = {}) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const volume = options.volume != null ? options.volume : 100;
  const unitPrice = options.unitPrice != null ? options.unitPrice : parsePrice(product.price);
  const unitPriceDisplay = formatPrice(unitPrice);

  const existing = cart.find((p) => p.id === id && p.volume === volume);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      img: product.img,
      quantity: 1,
      volume,
      unitPrice,
      unitPriceDisplay,
    });
  }

  saveCart();
  updateCartCount();
  renderCart();
  showCartToast(product.name);
}

function removeFromCart(id, volume) {
  cart = cart.filter((p) => !(p.id === id && p.volume === volume));
  saveCart();
  updateCartCount();
  renderCart();
}

function updateCartQuantity(id, volume, delta) {
  const item = cart.find((p) => p.id === id && p.volume === volume);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id, volume);
    return;
  }
  saveCart();
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = cart.reduce((acc, p) => acc + p.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((el) => (el.textContent = count));
}

function getCartTotal() {
  return cart.reduce((acc, p) => acc + p.unitPrice * p.quantity, 0);
}

function renderCart() {
  const panel = document.getElementById('cartPanel');
  const listEl = document.getElementById('cartList');
  const totalEl = document.getElementById('cartTotal');
  const emptyEl = document.getElementById('cartEmpty');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (!panel || !listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    if (totalEl) totalEl.closest('.cart-footer-total')?.style.setProperty('display', 'none');
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (checkoutBtn) checkoutBtn.style.display = '';
  if (totalEl) totalEl.closest('.cart-footer-total')?.style.setProperty('display', 'flex');

  listEl.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}" data-volume="${item.volume}">
      <a href="product.html?id=${item.id}" class="cart-item-link">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-volume">${item.volume} мл</span>
        </div>
      </a>
      <div class="cart-item-qty">
        <button type="button" class="cart-qty-btn cart-qty-minus" aria-label="Уменьшить">−</button>
        <span class="cart-qty-num">${item.quantity}</span>
        <button type="button" class="cart-qty-btn cart-qty-plus" aria-label="Увеличить">+</button>
      </div>
      <div class="cart-item-price">${formatPrice(item.unitPrice * item.quantity)}</div>
      <button type="button" class="cart-item-remove" aria-label="Удалить">×</button>
    </div>
  `
    )
    .join('');

  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());

  listEl.querySelectorAll('.cart-qty-minus').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const item = e.target.closest('.cart-item');
      updateCartQuantity(parseInt(item.dataset.id, 10), parseInt(item.dataset.volume, 10), -1);
    });
  });

  listEl.querySelectorAll('.cart-qty-plus').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const item = e.target.closest('.cart-item');
      updateCartQuantity(parseInt(item.dataset.id, 10), parseInt(item.dataset.volume, 10), 1);
    });
  });

  listEl.querySelectorAll('.cart-item-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const item = e.target.closest('.cart-item');
      removeFromCart(parseInt(item.dataset.id, 10), parseInt(item.dataset.volume, 10));
    });
  });
}

function showCartToast(productName) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = `${productName} добавлен в корзину`;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #c9a227;
    color: #0a0a0a;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    z-index: 3000;
    opacity: 0;
    transition: all 0.4s ease;
    box-shadow: 0 8px 24px rgba(201, 162, 39, 0.4);
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

/* ===== Banner Carousel ===== */
function initBanners() {
  const track = document.querySelector('.banners-track');
  const prevBtn = document.querySelector('.banner-prev');
  const nextBtn = document.querySelector('.banner-next');
  const dotsContainer = document.querySelector('.banner-dots');

  for (let i = 0; i < BANNER_COUNT; i++) {
    const dot = document.createElement('button');
    dot.className = 'banner-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Слайд ${i + 1}`);
    dot.addEventListener('click', () => goToBanner(i));
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll('.banner-dot');

  function goToBanner(index) {
    currentBanner = (index + BANNER_COUNT) % BANNER_COUNT;
    track.style.transform = `translateX(-${currentBanner * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentBanner));
  }

  prevBtn?.addEventListener('click', () => goToBanner(currentBanner - 1));
  nextBtn?.addEventListener('click', () => goToBanner(currentBanner + 1));

  let autoplay = setInterval(() => goToBanner(currentBanner + 1), 5000);

  document.querySelector('.banners-container')?.addEventListener('mouseenter', () => clearInterval(autoplay));
  document.querySelector('.banners-container')?.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goToBanner(currentBanner + 1), 5000);
  });
}

/* ===== Filter Products ===== */
function initFilters() {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      currentFilter = filter;
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(filter);
    });
  });

  categoryCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = card.dataset.filter;
      currentFilter = filter;
      filterBtns.forEach((b) => {
        b.classList.toggle('active', b.dataset.filter === filter);
      });
      renderProducts(filter);
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ===== Sidebar Filters (Price & Notes) ===== */
function initSidebarFilters() {
  if (priceMinInput) {
    priceMinInput.addEventListener('input', () => {
      const value = parseInt(priceMinInput.value.replace(/\s/g, ''), 10);
      filtersState.priceMin = Number.isNaN(value) ? null : value;
      renderProducts(currentFilter);
    });
  }

  if (priceMaxInput) {
    priceMaxInput.addEventListener('input', () => {
      const value = parseInt(priceMaxInput.value.replace(/\s/g, ''), 10);
      filtersState.priceMax = Number.isNaN(value) ? null : value;
      renderProducts(currentFilter);
    });
  }

  if (noteCheckboxes && noteCheckboxes.length) {
    noteCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const note = (checkbox.dataset.note || '').toLowerCase();
        if (!note) return;
        if (checkbox.checked) {
          filtersState.notes.add(note);
        } else {
          filtersState.notes.delete(note);
        }
        renderProducts(currentFilter);
      });
    });
  }

  if (filtersResetBtn) {
    filtersResetBtn.addEventListener('click', () => {
      filtersState.priceMin = null;
      filtersState.priceMax = null;
      filtersState.notes.clear();

      if (priceMinInput) priceMinInput.value = '';
      if (priceMaxInput) priceMaxInput.value = '';
      if (noteCheckboxes && noteCheckboxes.length) {
        noteCheckboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      }

      currentFilter = 'all';
      filterBtns.forEach((b) => {
        b.classList.toggle('active', b.dataset.filter === 'all');
      });

      renderProducts('all');
    });
  }
}

/* ===== Navigation ===== */
function initNavigation() {
  const scrollToSection = (e) => {
    e.preventDefault();
    const sectionId = e.currentTarget.dataset.section;
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    mobileMenu?.classList.remove('open');
  };

  navLinks.forEach((link) => link.addEventListener('click', scrollToSection));

  document.querySelectorAll('[data-section]').forEach((el) => {
    if (el.tagName === 'A' && el.classList.contains('logo')) {
      el.addEventListener('click', scrollToSection);
    }
  });

  document.querySelector('.btn[data-section="products"]')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ===== Mobile Menu ===== */
function initMobileMenu() {
  burgerBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('open'));

  document.addEventListener('click', (e) => {
    if (mobileMenu?.classList.contains('open') && !mobileMenu.contains(e.target) && !burgerBtn?.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}

/* ===== Search ===== */
function initSearch() {
  const searchInput = searchOverlay?.querySelector('.search-input');
  const searchResultsEl = document.getElementById('searchResults');

  function searchProducts(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }

  function renderSearchResults(matches, hasQuery) {
    if (!searchResultsEl) return;

    searchResultsEl.classList.remove('has-results', 'is-empty');
    searchResultsEl.innerHTML = '';

    if (!hasQuery) return;

    if (matches.length === 0) {
      searchResultsEl.classList.add('is-empty');
      searchResultsEl.textContent = 'Ничего не найдено';
      return;
    }

    searchResultsEl.classList.add('has-results');
    searchResultsEl.innerHTML = matches
      .map(
        (p) => `
        <a href="product.html?id=${p.id}" class="search-result-item" data-id="${p.id}">
          <img src="${p.img}" alt="${p.name}">
          <div class="search-result-item-info">
            <div class="search-result-item-name">${p.name}</div>
            <div class="search-result-item-category">${p.categoryName}</div>
          </div>
          <span class="search-result-item-price">${p.price}</span>
        </a>
      `
      )
      .join('');

    searchResultsEl.querySelectorAll('.search-result-item').forEach((link) => {
      link.addEventListener('click', () => {
        searchOverlay?.classList.remove('open');
        searchInput?.value && (searchInput.value = '');
      });
    });
  }

  function onSearchInput() {
    const query = searchInput?.value || '';
    const hasQuery = query.trim().length > 0;
    const matches = searchProducts(query);
    renderSearchResults(matches, hasQuery);
  }

  searchInput?.addEventListener('input', onSearchInput);
  searchInput?.addEventListener('focus', onSearchInput);

  searchBtn?.addEventListener('click', () => {
    searchOverlay?.classList.add('open');
    searchInput?.focus();
    onSearchInput();
  });

  searchClose?.addEventListener('click', () => {
    searchOverlay?.classList.remove('open');
    if (searchInput) searchInput.value = '';
    searchResultsEl?.classList.remove('has-results', 'is-empty');
    searchResultsEl && (searchResultsEl.innerHTML = '');
  });

  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.classList.remove('open');
      if (searchInput) searchInput.value = '';
      searchResultsEl?.classList.remove('has-results', 'is-empty');
      searchResultsEl && (searchResultsEl.innerHTML = '');
    }
  });
}

/* ===== Cart Panel ===== */
function initCart() {
  const cartBtn = document.querySelector('.cart-btn');
  const cartPanel = document.getElementById('cartPanel');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.querySelector('.cart-panel-close');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  function openCart() {
    cartPanel?.classList.add('open');
    cartOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCart();
  }

  function closeCart() {
    cartPanel?.classList.remove('open');
    cartOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  });

  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  checkoutBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    closeCart();
    window.location.href = 'checkout.html';
  });
}

/* ===== Checkout Page ===== */
function initCheckoutPage() {
  const itemsContainer = document.getElementById('checkoutItems');
  const totalEl = document.getElementById('checkoutTotal');
  const form = document.getElementById('checkoutForm');
  const successMessage = document.getElementById('checkoutSuccessMessage');

  if (!itemsContainer || !totalEl || !form) return;

  // Если корзина пуста — отправляем на главную
  if (!cart.length) {
    window.location.href = 'index.html';
    return;
  }

  // Рендер мини-карточек товаров
  itemsContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="checkout-item">
        <img src="${item.img}" alt="${item.name}" class="checkout-item-img">
        <div class="checkout-item-main">
          <div class="checkout-item-name">${item.name}</div>
          <div class="checkout-item-meta">
            Объём: ${item.volume} мл • Количество: ${item.quantity}
          </div>
        </div>
        <div class="checkout-item-qty-price">
          <span>x${item.quantity}</span>
          <span class="checkout-item-price">${formatPrice(item.unitPrice * item.quantity)}</span>
        </div>
      </div>
    `
    )
    .join('');

  totalEl.textContent = formatPrice(getCartTotal());

  const errorEls = {
    fullName: form.querySelector('[data-for="fullName"]'),
    phone: form.querySelector('[data-for="phone"]'),
    email: form.querySelector('[data-for="email"]'),
    telegram: form.querySelector('[data-for="telegram"]'),
    delivery: form.querySelector('[data-for="delivery"]'),
    address: form.querySelector('[data-for="address"]'),
    payment: form.querySelector('[data-for="payment"]'),
    cardNumber: form.querySelector('[data-for="cardNumber"]'),
    cardExpiry: form.querySelector('[data-for="cardExpiry"]'),
    cardCvv: form.querySelector('[data-for="cardCvv"]'),
  };

  function setError(name, message) {
    const input =
      name === 'delivery' || name === 'payment'
        ? null
        : form.querySelector(`[name="${name}"]`);
    if (input) {
      input.classList.toggle('invalid', Boolean(message));
    }
    if (errorEls[name]) {
      errorEls[name].textContent = message || '';
    }
  }

  function validateFullName(value) {
    const trimmed = value.trim();
    // Минимум два слова по 2+ буквы
    const parts = trimmed.split(/\s+/);
    if (parts.length < 2) return 'Укажите фамилию и имя полностью.';
    if (!parts.every((p) => p.length >= 2)) return 'Каждое слово должно содержать не менее 2 букв.';
    return '';
  }

  function validatePhone(value) {
    const cleaned = value.replace(/[^\d+]/g, '');
    const re = /^\+7\d{10}$/;
    if (!re.test(cleaned)) {
      return 'Введите номер в формате +7XXXXXXXXXX.';
    }
    return '';
  }

  function validateEmail(value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!re.test(value.trim())) {
      return 'Введите корректный e-mail.';
    }
    return '';
  }

  function validateTelegram(value) {
    if (!value) return '';
    const re = /^@[a-zA-Z0-9_]{3,32}$/;
    if (!re.test(value.trim())) {
      return 'Введите тег в формате @username или оставьте поле пустым.';
    }
    return '';
  }

  function validateDelivery() {
    const selected = form.querySelector('input[name="delivery"]:checked');
    if (!selected) return 'Выберите способ доставки.';
    return '';
  }

  function validatePayment() {
    const selected = form.querySelector('input[name="payment"]:checked');
    if (!selected) return 'Выберите способ оплаты.';
    return '';
  }

  function validateAddress(value) {
    const trimmed = value.trim();
    if (trimmed.length < 5) {
      return 'Укажите полный адрес доставки.';
    }
    return '';
  }

  function validateCardNumber(value) {
    const digits = value.replace(/\s+/g, '');
    if (!/^\d{16}$/.test(digits)) {
      return 'Введите 16 цифр номера карты.';
    }

    // Luhn check
    let sum = 0;
    let shouldDouble = false;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
      let digit = parseInt(digits[i], 10);
      if (Number.isNaN(digit)) return 'Введите только цифры.';
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    if (sum % 10 !== 0) {
      return 'Проверьте номер карты.';
    }

    return '';
  }

  function validateCardExpiry(value) {
    const trimmed = value.trim();
    const match = /^(\d{2})\/(\d{2})$/.exec(trimmed);
    if (!match) {
      return 'Введите срок в формате MM/YY.';
    }
    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10);
    if (month < 1 || month > 12) {
      return 'Укажите корректный месяц (01–12).';
    }

    const now = new Date();
    const currentYear = now.getFullYear() % 100; // два последних числа года
    const currentMonth = now.getMonth() + 1; // 1-12

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return 'Срок действия карты истёк.';
    }

    return '';
  }

  function validateCardCvv(value) {
    const digits = value.trim();
    if (!/^\d{3}$/.test(digits)) {
      return 'Введите 3 цифры CVC/CVV.';
    }
    return '';
  }

  const deliveryInputs = form.querySelectorAll('input[name="delivery"]');
  const addressField = document.getElementById('addressField');
  const addressInput = form.address;
  const pickupControls = document.getElementById('pickupControls');
  const pickupSelectBtn = document.getElementById('pickupSelectBtn');

  function updateDeliveryUI() {
    const selected = form.querySelector('input[name="delivery"]:checked');
    const type = selected ? selected.value : null;

    if (type === 'courier') {
      if (addressField) addressField.hidden = false;
      if (pickupControls) pickupControls.hidden = true;
      if (addressInput) addressInput.required = true;
    } else if (type === 'pickup') {
      if (addressField) {
        addressField.hidden = true;
        setError('address', '');
      }
      if (addressInput) {
        addressInput.required = false;
        addressInput.classList.remove('invalid');
      }
      if (pickupControls) pickupControls.hidden = false;
    } else {
      if (addressField) addressField.hidden = false;
      if (pickupControls) pickupControls.hidden = true;
      if (addressInput) addressInput.required = true;
    }
  }

  if (deliveryInputs && deliveryInputs.length) {
    deliveryInputs.forEach((input) => {
      input.addEventListener('change', updateDeliveryUI);
    });
    updateDeliveryUI();
  }

  if (pickupSelectBtn) {
    pickupSelectBtn.addEventListener('click', () => {
      window.open('https://yandex.ru/maps/-/CPuSUS3h', '_blank');
    });
  }

  const paymentInputs = form.querySelectorAll('input[name="payment"]');
  const cardFields = document.getElementById('cardFields');
  const cardNumberInput = form.cardNumber;
  const cardExpiryInput = form.cardExpiry;
  const cardCvvInput = form.cardCvv;

  function updatePaymentUI() {
    const selected = form.querySelector('input[name="payment"]:checked');
    const method = selected ? selected.value : null;

    const showCard = method === 'card';
    if (cardFields) {
      cardFields.hidden = !showCard;
    }

    if (cardNumberInput) {
      cardNumberInput.required = showCard;
      if (!showCard) {
        cardNumberInput.classList.remove('invalid');
        setError('cardNumber', '');
      }
    }
    if (cardExpiryInput) {
      cardExpiryInput.required = showCard;
      if (!showCard) {
        cardExpiryInput.classList.remove('invalid');
        setError('cardExpiry', '');
      }
    }
    if (cardCvvInput) {
      cardCvvInput.required = showCard;
      if (!showCard) {
        cardCvvInput.classList.remove('invalid');
        setError('cardCvv', '');
      }
    }
  }

  if (paymentInputs && paymentInputs.length) {
    paymentInputs.forEach((input) => {
      input.addEventListener('change', updatePaymentUI);
    });
    updatePaymentUI();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = form.fullName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const telegram = form.telegram.value;
    const address = form.address.value;
    const deliverySelected = form.querySelector('input[name="delivery"]:checked');
    const paymentSelected = form.querySelector('input[name="payment"]:checked');

    let hasError = false;

    const nameError = validateFullName(fullName);
    setError('fullName', nameError);
    if (nameError) hasError = true;

    const phoneError = validatePhone(phone);
    setError('phone', phoneError);
    if (phoneError) hasError = true;

    const emailError = validateEmail(email);
    setError('email', emailError);
    if (emailError) hasError = true;

    const tgError = validateTelegram(telegram);
    setError('telegram', tgError);
    if (tgError) hasError = true;

    const deliveryError = validateDelivery();
    setError('delivery', deliveryError);
    if (deliveryError) hasError = true;

    const paymentError = validatePayment();
    setError('payment', paymentError);
    if (paymentError) hasError = true;

    if (deliverySelected && deliverySelected.value === 'courier') {
      const addressError = validateAddress(address);
      setError('address', addressError);
      if (addressError) hasError = true;
    } else {
      setError('address', '');
    }

    if (paymentSelected && paymentSelected.value === 'card') {
      const cardNumberError = validateCardNumber(cardNumberInput ? cardNumberInput.value : '');
      setError('cardNumber', cardNumberError);
      if (cardNumberError) hasError = true;

      const cardExpiryError = validateCardExpiry(cardExpiryInput ? cardExpiryInput.value : '');
      setError('cardExpiry', cardExpiryError);
      if (cardExpiryError) hasError = true;

      const cardCvvError = validateCardCvv(cardCvvInput ? cardCvvInput.value : '');
      setError('cardCvv', cardCvvError);
      if (cardCvvError) hasError = true;
    }

    if (hasError) {
      if (successMessage) {
        successMessage.hidden = true;
      }
      return;
    }

    // "Успешная оплата"
    if (successMessage) {
      successMessage.hidden = false;
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

/* ===== Header Scroll ===== */
function initHeaderScroll() {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    header?.classList.toggle('scrolled', scroll > 50);
    lastScroll = scroll;
  });
}

/* ===== Intersection Observer for Animations ===== */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.category-card, .section-title, .banners-container').forEach((el) => observer.observe(el));
}

/* ===== Product Detail Page ===== */
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');
  const id = idParam ? parseInt(idParam, 10) : NaN;

  if (!id || Number.isNaN(id)) {
    window.location.href = 'index.html';
    return;
  }

  const product = products.find((p) => p.id === id);
  if (!product) {
    window.location.href = 'index.html';
    return;
  }

  const details = productDetails[id] || {};

  const mainImg = document.getElementById('detailMainImg');
  const thumbsContainer = document.getElementById('detailThumbs');
  const nameEl = document.getElementById('detailName');
  const categoryEl = document.getElementById('detailCategory');
  const typeEl = document.getElementById('detailType');
  const priceEl = document.getElementById('detailPrice');
  const descrEl = document.getElementById('detailDescription');
  const topNotesEl = document.getElementById('detailTopNotes');
  const heartNotesEl = document.getElementById('detailHeartNotes');
  const baseNotesEl = document.getElementById('detailBaseNotes');
  const compositionEl = document.getElementById('detailComposition');
  const longDescrEl = document.getElementById('detailLongDescription');
  const usageEl = document.getElementById('detailUsage');
  const volumesContainer = document.getElementById('detailVolumes');
  const buyBtn = document.getElementById('detailBuyBtn');
  const backBtn = document.getElementById('detailBackBtn');

  if (nameEl) nameEl.textContent = product.name;
  if (categoryEl) categoryEl.textContent = product.categoryName;
  if (typeEl) typeEl.textContent = details.type || product.categoryName || '';
  if (priceEl) priceEl.textContent = product.price;
  if (descrEl) descrEl.textContent = details.description || '';
  if (topNotesEl) topNotesEl.textContent = details.topNotes || '';
  if (heartNotesEl) heartNotesEl.textContent = details.heartNotes || '';
  if (baseNotesEl) baseNotesEl.textContent = details.baseNotes || '';
  if (compositionEl) compositionEl.textContent = details.composition || 'Состав уточняется.';
  const longDescrText = details.longDescription || '';
  if (longDescrEl) longDescrEl.textContent = longDescrText;
  const longBlock = document.getElementById('detailLongBlock');
  const extraRow = document.querySelector('.product-extra-row');
  if (longBlock) longBlock.classList.toggle('is-hidden', !longDescrText);
  if (extraRow) extraRow.classList.toggle('no-description', !longDescrText);
  if (usageEl) {
    usageEl.textContent =
      details.usage ||
      'Наносить на чистую сухую кожу в области запястий, шеи или за ушами, избегая попадания в глаза.';
  }

  const images = product.images && product.images.length ? product.images : [product.img];
  let currentIndex = 0;

  function updateGallery(index) {
    if (!mainImg) return;
    currentIndex = (index + images.length) % images.length;
    mainImg.src = images[currentIndex];
    mainImg.alt = `${product.name} фото ${currentIndex + 1}`;

    if (thumbsContainer) {
      thumbsContainer.querySelectorAll('.product-thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
      });
    }
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = images
      .map(
        (src, index) => `
        <button class="product-thumb${index === 0 ? ' active' : ''}" data-index="${index}">
          <img src="${src}" alt="${product.name} фото ${index + 1}">
        </button>
      `
      )
      .join('');

    thumbsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.product-thumb');
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (!Number.isNaN(idx)) {
        updateGallery(idx);
      }
    });
  }

  const prevBtn = document.querySelector('.gallery-arrow-thumbs.prev');
  const nextBtn = document.querySelector('.gallery-arrow-thumbs.next');
  prevBtn?.addEventListener('click', () => updateGallery(currentIndex - 1));
  nextBtn?.addEventListener('click', () => updateGallery(currentIndex + 1));

  updateGallery(0);

  const volumes = [10, 30, 50, 100];
  const basePrice = product.price;
  let selectedVolume = 100;
  let currentUnitPrice = getPriceForVolume(basePrice, 100);

  const updatePriceByVolume = (volume) => {
    selectedVolume = volume;
    currentUnitPrice = getPriceForVolume(basePrice, volume);
    if (priceEl) priceEl.textContent = formatPrice(currentUnitPrice);
  };

  if (volumesContainer) {
    volumesContainer.innerHTML = volumes
      .map(
        (v, index) =>
          `<button class="volume-option${index === 0 ? ' active' : ''}" data-volume="${v}">${v} мл</button>`
      )
      .join('');

    volumesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.volume-option');
      if (!btn) return;
      const volume = parseInt(btn.dataset.volume, 10);
      volumesContainer.querySelectorAll('.volume-option').forEach((b) => {
        b.classList.toggle('active', b === btn);
      });
      updatePriceByVolume(volume);
    });
  }

  updatePriceByVolume(100);

  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      addToCart(product.id, { volume: selectedVolume, unitPrice: currentUnitPrice });
    });
  }

  // Expand/collapse extra text blocks
  const initExpandable = (blockId) => {
    const block = document.getElementById(blockId);
    if (!block) return;
    const text = block.querySelector('.product-extra-text');
    const toggle = block.querySelector('.product-extra-toggle');
    if (!text || !toggle) return;

    let expanded = false;

    const update = () => {
      block.classList.toggle('expanded', expanded);
      toggle.textContent = expanded ? 'Свернуть' : 'Развернуть';
    };

    toggle.addEventListener('click', () => {
      expanded = !expanded;
      update();
    });

    update();
  };

  initExpandable('detailLongBlock');
  initExpandable('detailUsageBlock');
  initExpandable('detailCompositionBlock');

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = 'index.html';
    }
  };

  backBtn?.addEventListener('click', handleBack);
}

/* ===== Init ===== */
function init() {
  loadCart();
  updateCartCount();

  const page = document.body.dataset.page || 'home';

  if (page === 'home') {
    renderProducts();
    initBanners();
    initFilters();
    initSidebarFilters();
    initNavigation();
    initMobileMenu();
    initSearch();
    initCart();
    initHeaderScroll();
    initScrollAnimations();
  } else if (page === 'product') {
    initNavigation();
    initMobileMenu();
    initSearch();
    initCart();
    initHeaderScroll();
    initProductDetailPage();
  } else if (page === 'checkout') {
    initNavigation();
    initMobileMenu();
    initSearch();
    initCart();
    initHeaderScroll();
    initCheckoutPage();
  }
}

document.addEventListener('DOMContentLoaded', init);
