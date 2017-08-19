/* eslint-disable */
//type 1:sniadanie, 2:sniadanie2, 3:obiad, 4:obiad2

const meals = [
 {
 	id:0,
 	type: 1,
 	day: 1,
 	name: 'Jaglanka z pistacjami i malinami',
 	desc: '½ opakowania malin, 3 łyżki kaszy jaglanej, 2 łyżki pistacji. Kaszę ugotuj na miękko na wodzie według instrukcji na opakowaniu. Wyłóż do miski, dodaj pistacje i maliny.',
 	hint: 'Tutaj spokojnie można wykorzystać orzechy nerkowca, migdały, albo orzech brazylijski zamiast pistacji.Można kaszę jaglaną zamienić na płatki owsiane.'
 },
 {
 	id:1,
 	type: 2,
 	day: 1,
 	name: 'Kanapki z awokado i jajkiem',
 	desc: '2 kromki chleba pełnoziarnistego, 1 jajo, Pół awokado, 3 łyżeczki pietruszki, 1 ząbek czosnku, sól pieprz. Awokado rozgnieźć widelcem i połączyć z pietruszką i zgnieczonym czosnkiem, doprawić solą i pieprzem. Jajko ugotować oddzielnie. Podawać w formie kanapek z pastą awokado i ugotownym jajkiem. ',
 	hint: ''
 },
 {
 	id:2,
 	type: 3,
 	day: 1,
 	name:'Makaron z pesto i orzechami' ,
 	desc: '5 pomidorków koktajowych, garść makaronu pełnoziarnistego (50g), łyżeczka pesto z bazyli zielonego, łyżka orzechów włoskich. Ugotuj makaron, pokrój drobno orzechy, wymieszaj z pesto i pomidorkami, wymieszaj wszystko z makaronem.',
 	hint: 'Można zrobić oczywiście pesto samodzielnie, ale to trochę trwa, są dostępne pesto bez dodatku konserwantów, ważne żeby skład był jak najkrótszy.'
 },
 {
 	id:3,
 	type: 4,
 	day: 1,
 	name: 'Wołowina',
 	desc:'150 g mięsa wołowego (może to być rostbef, może być gulaszowe), 2 marchewki, 1 papryka, 2 łyżeczki masła klarowanego, sałata lodowa, 1 łyżka oliwy z oliwek, garść orzechów nerkowca. Wołowinę pieczemy z marchewkami, papryką pociętą na kawałki i z dodatkiem masła. Podajemy z sałatą lodową wymieszaną z oliwą i orzechami nerkowca',
 	hint: ' Jak podwoisz liczbę składników będzie od razu ugotowane na następny dzień'
 },
 {
 	id: 4,
 	type: 1,
 	day: 2,
 	name: 'Szakszuka',
 	desc: '3 jajka gotowane na pomidorach (2 pomidory obrane ze skórki i pokrojone w kostkę), łyżka masła klarowanego, Mix sałat z rukolą, granatem, startą surową marchewką polane 2 łyżkami oliwy z oliwek.',
 	hint: 'To jest świetne rozwiązanie na śniadanie na ciepło.'
 },
 {
 	id: 5,
 	type: 2,
 	day: 2,
 	name: 'Owsianka z gruszką i imbirem.',
 	desc: '5 łyżek płatków owsianych, ½ szklanki mleczka kokosowego, 2 łyżki płatków migdałowych, 1 średnia gruszka, kawałek imbiru (5g). Płatki owsiane ugotować na wodzie, po ugotowaniu dodać pokrojoną gruszkę, zalać mleczkiem kokosowym i podaawać z płatkami migdałowymi. Imbir zetrzeć na górę.',
 	hint: ' Imbir świeży możemy zastąpić imbirem sproszkowanym, jeśli wolisz inny owoc, spokojnie możesz wymienić. Imbir poprawia trawienie i przyśpiesza metabolizm.'
 },
 {
 	id: 6,
 	type: 3,
 	day: 2,
 	name: 'Indyk pieczony ze szpinakiem' ,
 	desc: ' 1 filet piersi z indyka (150g) usmażony na patelni grillowej, szklanka ugotowanego szpinaku, 1 ząbek czosnku, sól, pieprz, rukola, 1 łyżeczka masła klarowanego. Na patelni rozgrzać masło, wgnieść czosnek i ugotować szpinak. Indyka ugrillować oddzielnie. Podawać z sałatą z oliwą i szpinakiem. ',
 	hint: ''
 },
 {
 	id: 7,
 	type: 4,
 	day: 2,
 	name: 'Sałatka z ciecierzycą ',
 	desc: '3 łyżki ciecierzycy z puszki, albo ugotowanej(wcześniej trzeba namoczyć)  dwie  garści sałaty lodowej,  1 średnia papryka pokrojoną w kostkę. Ciecierzycę ugotować do miękkości, dodać do niej paprykę,  sałatę lodową odrobinę soli himalajskiej, oregano. Skropić oliwą i dokładnie wymieszać. ',
 	hint:''
 },
 {
 	id: 8,
 	type: 1,
 	day: 3,
 	name: 'JAJECZNICA',
 	desc: 'Udusić na wodzie z 1 łyżeczkę oliwy z oliwek, obranego pomidora, cukinię, (objętość 1 szklanki) 1 łyżkę ziaren słonecznika. Do uduszonych warzyw wlać roztrzepane 3 jajka. Wszystko razem wymieszać Doprawić solą i pieprzem do smaku',
 	hint: '',
 },
  {
 	id: 9,
 	type: 2,
 	day: 3,
 	name: 'Jaglanka z bananem, masłem orzechowym i migdałami.',
 	desc: '3 łyżki suchej kaszy jaglanej, 1 banan, 2 łyżeczki masła orzechowego, 1 łyżka płatków migdałów. Kaszę jaglaną ugotować na wodzie, do ugotowanej kaszy dodać pokrojonego w talarki banana i masło orzechowe, podawać posypane migdałami.',
 	hint: 'Można kaszę jaglaną zamienić na płatki owsiane.',
 },
  {
 	id: 10,
 	type: 3,
 	day: 3,
 	name: 'Kurczak na słodko w curry i z ananasem.',
 	desc:'Porcja piersi z kurczaka (150g), wymieszać z marynatą z oliwy z oliwek, przyprawy curry, pokrojonego kawałaka imbiru, poddusić na patelni. 3 plastry ananasa z zalewy pokroić w kostkę i dodać do uduszonego kurczaka. Zjeść z mixem sałat z oliwą z oliwek. ',
 	hint: '',
 },
  {
 	id: 11,
 	type: 4,
 	day: 3,
 	name: 'Kaszotto z pomidorami i czerwoną fasolą.',
 	desc: '3  łyżki  suchej kaszy gryczanej, ½ puszki pomidorów ½ puszki czerwonej fasolki, 1 łyżeczka masła klarowanego, 1 łyżeczka masła orzechowego, ząbek czosnku, Kaszę ugotować, na patelnii wok podsmażyć czosnek, pomidory i fasolę, dodać masło orzechowego, masło klarowane i sos sojowy. Wymieszać z ugotowaną kaszą',
 	hint: ''
 },
 {
 	id:12,
 	type:1,
 	day:4,
 	name: 'Jajka sadzone w papryce z chlebem żytnim',
 	desc: '1 papryka żółta i 1 papryka czerwona, 3 jajka, 1 łyżeczka oleju kokosowego albo masła klarowanrgo. Przekroić papryke w poprzek tak by uzyskać szablon, położyć na patelni, wcześniej posmarowanej olejem. Wbić jajka do wnętrza papryki, usmażyć. Podawać z i resztą papryki.',
 	hint:''
 },
 {
 	id:14,
 	type:2,
 	day:4,
 	name:'Jaglanka z borówkami',
 	desc: '6 łyżek mleka roślinnego, 3 łyżki suchej kaszy jaglanej, garść borówek amerykańskich, łyżka migdałów w płatkach. Kaszę ugotuj do miękkości na wodzie. Wyłóż do miseczki, dodaj mleko, borówki i migdały.',
 	hint:'Można pominąć mleko roślinne, bez dodawania mleka, tak samo jak wcześniej można wymienić kaszę jaglaną na płatki owsiane.'
 },
 {
 	id:15,
 	type:3,
 	day:4,
 	name:'Grillowana pierś z indyka z fasolką szparagową',
 	desc:'1 porcja piersi z indyka (150g), 1 duża miseczka  ugotowanej fasolki szparagowej, łyżka oleju kokosowego/masła klarowanego , łyżka uprażonych nasion dynii. Indyka zgrillować na patelnii, wcześniej zamarynować w solii, pieprzu i papryce w proszku i oleju. Podawać z ugotowaną fasolką, posypać uprażonymi pestkamii dynii.',
 	hint:''
 },
 {
 	id:16,
 	type:4,
 	day:4,
 	name:'Makaron pełnoziarnisty z cukinią',
 	desc:'Porcja makaronu pełnoziarnistego (40g), ½ cukini zielonej (300g), 1 łyżka masła orzechowego, łyżeczka sosu sojowego, Makaron ugotować, w patelnii wok z sosem sojowym poddusić pokrojoną w plastry cukinie, dodać masło orzechowe, następnie ugotowany makaron, podawać posypane swieżą pietruszką.',
 	hint:''
 },
 {
 	id:17,
 	type:1,
 	day:5,
 	name:'Jaglanka na mleku kokosowym',
 	desc:'3 łyżki kaszy jaglanej, 1 łyżka stołowa mleczka kokosowego, gruszka. Kaszę dokładnie wypłukać zimną wodą, następnie przelać wrzątkiem. Wlać świeży wrzątek i gotować pod przykryciem 7 minut, pozostawić chwilę pod przykryciem by kasza „doszła”.Następnie zaprawić mleczkiem kokosowym Dodać do niej cynamon i duszoną gruszkę, wcześniej pokrojoną w kostkę i z niewielką ilością wody chwilę podgotowaną.',
 	hint:'Gruszka jest wymienna na inny owoc, nie wiem jeszcze jaki jest Twój poziom potrzeby słodkiego, gruszka dosyć dobrze w początkowych etapach zaspokaja naszą potrzebę na słodkie, po odstawieniu np. słodkich napojów. Ale jeśli masz ochotę, na owoce leśne typu jagody, maliny, czy inny owoc to jak najbardziej może być, unikamy latem suszonych owoców. '
 },
 {
 	id:18,
 	type:2,
 	day:5,
 	name:'Kanapki z polędwicą z indyka',
 	desc:'2 kromki chleba graham albo innego chleb pełnoziarnistego, 3 plasterki polędwicy z indyka, ½ papryki czerwonej, ½ awokado, 1 cały pomidor, 2 łyżeczki masła. Chleb posmarować masłem i przygotować kanapki z resztą składników. ',
 	hint:''
 },
 {
 	id:19,
 	type:3,
 	day:5,
 	name:'Risotto z pieczarkami i czerwoną fasolą',
 	desc:'8 pieczarek , 3 łyżki suchego ryżu brązowego, kieliszek wina białego półwytrawego, 3 łyżki fasoli z zalewy, 2 łyżki koncentratu pomidorowego, 3 małe kulki sera mozzaerlla, 1 ostra papryczka, łyżka oleju rzepakowego, ząbek czosnku, szczypta kurkumy, szczypta curry, szczypta papryki słodkiej. Dodatkowo przygotuj: ok 100 ml wody.Ugotuj ryż. Posiekaj drobno papryczki. Jeśli chcesz by potrawa była ostrzejsza, wykorzystaj również ziarenka. By uzyskać łagodniejszy smak, pozbądź się ziarenek i/ lub użyj mniej ostrej papryczki. Podsmaż czosnek z pieczarkami. Dodaj ostrą papryczkę. Zalej winem i gotuj do momentu, aż w połowie wyparuje. Dodaj koncentrat z wodą i fasolkę. Wymieszaj ryż z sosem, dodaj przyprawy. Gotuj przez chwilę. Dodaj na potrawę starty ser.',
 	hint:''
 },
 {
 	id:20,
 	type:4,
 	day:5,
 	name:'Sałatka z awokado i grillowanym indykiem',
 	desc:'Mix sałat z rukolą, pierś z kurczaka(150g),sezam nasiona (1 łyżka),  ½ awokado, pomidor, 1 ogórek, 2 łyżki oliwy z oliwek. Wymieszać garść sałaty, garść rukoli, 1 pomidora. Indyka zgrillować, pokroić w kawałki. Dodać pokrojone w kostkę awokado. Na patelnii podprażyć łyżkę sezamu , doprawić oliwą z oliwek. Wymieszać wszystko.',
 	hint:''
 },
 {
 	id:21,
 	type:1,
 	day:6,
 	name:'Owsianka makowa',
 	desc:'3 łyżki płatków owsianych, 1 łyżka maku, 1 łyżka mleczka kokosowego.Płatki owsiane ugotować na wodzie z łyżką maku, po ugotowaniu dodać mleczko kokosowe.',
 	hint:'Jeśli zostały Ci jakieś owoce możesz je dodać.',
 },
 {
 	id:22,
 	type:2,
 	day:6,
 	name:'Kanapki z pastą marchewkową, sałatą i sezamem',
 	desc:'2 kromki chleba żytniego albo pełnoziarnistego, 1 marchew, 4 liście sałaty lodowej, 2 łyżki sezamu, łyżka oliwy z oliwek. Marchew poddgotować i zmiksować blenderem, następnie dodać oliwę, doprawić solą i pieprzem. Posmarować kanapki pastą posypać sezamem i sałatą.',
 	hint:''
 },
 {
 	id:23,
 	type:3,
 	day:6,
 	name:'Indyk w sosie z zielonego groszku',
 	desc:' Porcja fileta z indyka (150g), szklanka mrożonego groszku(może być też świeży groszek zielony), łyżeczka masła klarowanego, 1 cebula, 1 ząbek czosnku, 3 łyżki mleczka kokosowego, sól, pieprz, łyżeczka sosu sojowego. Indyka zamarynować w ulubionych ziołach i usmażyć na niewielkiej ilości oleju. Na patelni podsmażyć na maśle pokrojoną cebulę, czosnek i dodać wcześniej ugotowany groszek, chwilę przesmażyć i dodać mleczko kokosowe oraz doprawić solą, pieprzem i sosem sojowym. Podawać razem z indykiem',
 	hint:''
 },
 {
 	id:24,
 	type:4,
 	day:6,
 	name:'Makaron z brokułem i masłem orzechowym',
 	desc:'Porcja makaronu żytniego (45g), ½ małego brokuła, 2 łyżki masła orzechowego, łyżeczka oliwy z oliwek. Makaron ugotować. Brokuła ugotować na parze na średnio miękko. Na oddzielnej patelnii dodać parę kropel sosu sojowego, pokrojony brokuł i rozrobione z oliwą masło orzechowe. Wszystko razem przesmażyć i podwać z makaronem',
 	hint:''
 },
 {
 	id:25,
 	type:1,
 	day:7,
 	name:'Omlet owocowy',
 	desc:'Omlet z 3 jajek, mus malinowy 2 garście, 3 orzechy włoskie, 1,5 łyżki oleju kokosowego, 2 łyżki płatków owsianych do omletu. Omlet smażymy na oleju kokosowym, podajemy z malinami zblendowanymi i posypane uprażonymi orzechami włoskimi.',
 	hint:''
 },
 {
 	id:26,
 	type:2,
 	day:7,
 	name:'Owsianka z migdałami, orzechami, siemieniem lnianym, słonecznikiem',
 	desc:' 3 łyżki płatków owsianych górskic, 1 łyżka  płatków migdałowych, 3 orzechy włoskie (10g), 1 łyżka siemienia lnianego, 1 garść nasion słonecznika(30g), 1 łyżeczka cynamonu. Płatki owsiane zalać wodą i ustawić na ogniu, gotować, doprawić cynamonem chwilę pogotować. Po ugotowaniu dodać migdały, orzechy, siemię lniane, słonecznik.',
 	hint:''
 },
 {
 	id:27,
 	type:3,
 	day:7,
 	name:'Sałatka z buraczkami, morelą i indykiem',
 	desc:'Mix sałat z rukola- 1 opakowanie, 1 burak, 2 morele, kawałek indyka (100g), 2 łyżki oliwy z oliwek, sól, pieprz. Indyka ugrillować na patelni, buraka zetrzeć na tarce o grubych oczkach, morele pokroić w drobną kostkę, wymieszać wszystko z oliwą i sałatą.',
 	hint:''
 },
 {
 	id:28,
 	type:4,
 	day:7,
 	name:'Kasza gryczana z natką pietruszki, pomidorami suszonymi i slonecznikiem',
 	desc:'1/3 szklanki kaszy gryczanej surowej, 2 łyżeczki natki pietruszki, 3 plastry pomidorów suszonych, 1 łyżeczka nasion słonecznika, , 1łyżka oliwy z oliwek, Łyżeczka kurkumy, Sól, pieprz. Kaszę gryczaną ugotować na miękko. Wymieszać z pokrojonymi w kostkę pomidorami, dodać natkę pietruszki, łyżkę oliwy, doprawić kurkumą, solą, pieprzem i posypać uprażonymi nasionami słonecznika.',
 	hint:''
 },
 {
 	id:29,
 	type:1,
 	day:8,
 	name:'Owsianka z bananem, masłem orzechowym i migdałami.',
 	desc:'3 łyżki suchych płatków owsianych , 1 banan, 2 łyżeczki masła orzechowego, 1 łyżka płatków migdałów. Płatki owsiane ugotować na wodzie, do ugotowanej kaszy dodać pokrojonego w talarki banana i masło orzechowe, podawać posypane migdałami.',
 	hint:''
 },
 {
 	id:30,
 	type:2,
 	day:8,
 	name:'Mix sałat z jajkiem ugotowanym na twardo, ogórkiem, szczypiorkiem.',
 	desc:'1 jajko, Mix sałat z rukolą- opakowanie, 1 ogórek, 3 łyżki jogurtu naturalnego, 1 łyżka szczypiorku drobno pokrojonego, 1 cebula szalotka, 1 pomidor, 1 łyżka oliwy z oliwek, sól pieprz. W oddzielnym kubeczku wymieszać jogurt naturalny z oliwą przyprawami. Sałatę, szczypiorek, cebulę wymieszać w misce, dołożyć pokrojonego w kostkę ogórka i jajko. Podawać polane sosem z jogurtu.',
 	hint:''
 },
 {
 	id:31,
 	type:3,
 	day:8,
 	name:'Dorsz z fasolką i szpinakiem',
 	desc:'1 filet z dorsza(150g), 1  garść fasolki szparagowej,  1  garść, szpinaku, 1 łyżka oleju kokosowego Dorsza posmaruj pesto, zawiń w folię aluminiową i upiecz w piekarniku (około 30 minut w 180 stopniach).Fasolkę ugotuj w lekko osolonej wodzie, szpinak można poddusić na patelni z dodatkiem oleju kokosowego. Podawaj posypane sezamem.',
 	hint:''
 },
 {
 	id:32,
 	type:4,
 	day:8,
 	name:'Ryż z pieczarkami i pestkami dynii',
 	desc:'3 łyżki suchego ryżu brązowego, 8 pieczarek, łyżeczka masła klarowanego, 2 łyżki nasion dynii. Ryż ugotować oddzielnie z przyprawami. Na patelnii podsmażyć pieczarki na maśle, dodać ugotowany ryż, posypać uprażonymi ziarnami dyni.',
 	hint:''
 },
 {
 	id:33,
 	type:1,
 	day:9,
 	name:'Jajecznica z kurkami',
 	desc:'3 jajka, 2  średnie pomidory,  garść świezych kurek, 1 łyżeczka pietruszki, łyżeczka szczypiorku, 1 kromka chleba, 1 łyżka oleju rzepakowego. Jajecznicę przygotować z warzywami i kurkami,  usmażyć. Podawać z chlebem',
 	hint:''
 },
 {
 	id:34,
 	type:2,
 	day:9,
 	name:'Kanapka z papryką i jajkiem',
 	desc:'2  kromki chleba pełnoziarnistego, 1 jajko 1 łyżka oliwy/1 łyżeczka masła, 2 łyżeczki pietruszki, sól pieprz, 1 papryka. Paprykę pokroić w paski i wymieszać z pietruszką doprawić solą i pieprzem. Jajka ugotować oddzielnie. Podawać w formie kanapek  posmarowanych masłem pokrojonym ugotownym jajkiem  i sałatką z papryki.',
 	hint:''
 },
 {
 	id:35,
 	type:3,
 	day:9,
 	name:'Sałata z kurczakiem',
 	desc:'150g piersi z kurczaka, ½ awokado, 1 pomidor, 1 ogórek, garść sałaty zielonej, garść szpinaku zielonego, kiełki, garśc orzechów(dowolnych), 3 łyżki oliwy z oliwek. Kurczaka można zamarynować w papryce w proszku i następnie usmażyć na niewielkiej ilości albo masła klarowanego(łyżeczka) albo ugotować na parze, następnie pokroić go na kawałki i wymieszać z pokrojonymi warzywami i oliwą.',
 	hint:' Pojawia się swieży szpinak, spróbuj, czy Ci smakuje na surowo.'
 },
 {
 	id:36,
 	type:4,
 	day:9,
 	name:'Makaron pełnoziarnisty  z grillowaną cukinią, i masłem orzechowym.',
 	desc:' Porcja makaronu pełnoziarnistego(40g), 1 cukinia zielona,  1 łyżka masła orzechowego, łyżeczka sosu sojowego, Makaron ugotować, w patelnii wok z sosem sojowym poddusić pokrojoną w plastry cukinie, dodać masło orzechowe, następnie ugotowany makaron, podawać posypane parmezanem',
 	hint:''
 },
 {
 	id:37,
 	type:1,
 	day:10,
 	name:'Jajecznica z warzywami',
 	desc:'Podprażyć na patelni 1 łyżkę nasion dynii. Pokroić: 1 cukinie, 1 marchewkę, kawałek pora/cebulę. w  miseczce roztrzepać 3 jajka, doprawić bazylią i dodać do warzyw. Można dodać kiełki. Całość wylać na patelnię z 1 łyżką oleju kokosowego. Podpiec z obu stron',
 	hint:''
 },
 {
 	id:38,
 	type:2,
 	day:10,
 	name:'Ryż z malinami',
 	desc:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam.',
 	hint:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam. Mogą być inne owoce niż maliny. Nie muszą być te płatki ryżowe, mogą być owsiane, ale spróbuj sobie  bo dosyć szybko się robi i smakują jak ryż, jak by było za suche spokojnie możesz dodać kefir. '
 },
 {
 	id:39,
 	type:3,
 	day:10,
 	name:'Wątróbka z porem i orzechami',
 	desc:'Wątróbka(150g) pieczona w poszatkowanym porem ( 1 sztuka) z orzechami (garść),łyżeczką masła klarowanego Wątróbkę upiec w folii z posztkowanym porem, ząbkiem czosnku i masłem.',
 	hint:''
 },
 {
 	id:40,
 	type:4,
 	day:10,
 	name:'Ryż smażony z brokułem i marchewką.',
 	desc:'3 łyzki suchego ryżu brązowego. ½ średniego brokuła, 1 marchew starta na tarce o grubych oczkach, łyżeczka masła klarowanego, łyżka jogurtu naturalnego, plaster sera feta. Ryż ugotować oddzielnie, na patelnii na maśle podsmażyć brokuła pokruszonego, startą marchew, pod koniec smażenia, dodać jogurt. Podawać z ryżem i pokruszonym serem feta.',
 	hint:''
 },
 {
 	id:41,
 	type: 1,
 	day: 11,
 	name: 'Jaglanka z pistacjami i malinami',
 	desc: '½ opakowania malin, 3 łyżki kaszy jaglanej, 2 łyżki pistacji. Kaszę ugotuj na miękko na wodzie według instrukcji na opakowaniu. Wyłóż do miski, dodaj pistacje i maliny.',
 	hint: 'Tutaj spokojnie można wykorzystać orzechy nerkowca, migdały, albo orzech brazylijski zamiast pistacji.Można kaszę jaglaną zamienić na płatki owsiane.'
 },
 {
 	id:42,
 	type: 2,
 	day: 11,
 	name: 'Kanapki z awokado i jajkiem',
 	desc: '2 kromki chleba pełnoziarnistego, 1 jajo, Pół awokado, 3 łyżeczki pietruszki, 1 ząbek czosnku, sól pieprz. Awokado rozgnieźć widelcem i połączyć z pietruszką i zgnieczonym czosnkiem, doprawić solą i pieprzem. Jajko ugotować oddzielnie. Podawać w formie kanapek z pastą awokado i ugotownym jajkiem. ',
 	hint: ''
 },
 {
 	id:43,
 	type: 3,
 	day: 11,
 	name:'Makaron z pesto i orzechami' ,
 	desc: '5 pomidorków koktajowych, garść makaronu pełnoziarnistego (50g), łyżeczka pesto z bazyli zielonego, łyżka orzechów włoskich. Ugotuj makaron, pokrój drobno orzechy, wymieszaj z pesto i pomidorkami, wymieszaj wszystko z makaronem.',
 	hint: 'Można zrobić oczywiście pesto samodzielnie, ale to trochę trwa, są dostępne pesto bez dodatku konserwantów, ważne żeby skład był jak najkrótszy.'
 },
 {
 	id:44,
 	type: 4,
 	day: 11,
 	name: 'Wołowina',
 	desc:'150 g mięsa wołowego (może to być rostbef, może być gulaszowe), 2 marchewki, 1 papryka, 2 łyżeczki masła klarowanego, sałata lodowa, 1 łyżka oliwy z oliwek, garść orzechów nerkowca. Wołowinę pieczemy z marchewkami, papryką pociętą na kawałki i z dodatkiem masła. Podajemy z sałatą lodową wymieszaną z oliwą i orzechami nerkowca',
 	hint: ' Jak podwoisz liczbę składników będzie od razu ugotowane na następny dzień'
 },
 {
 	id: 45,
 	type: 1,
 	day: 12,
 	name: 'Szakszuka',
 	desc: '3 jajka gotowane na pomidorach (2 pomidory obrane ze skórki i pokrojone w kostkę), łyżka masła klarowanego, Mix sałat z rukolą, granatem, startą surową marchewką polane 2 łyżkami oliwy z oliwek.',
 	hint: 'To jest świetne rozwiązanie na śniadanie na ciepło.'
 },
 {
 	id: 46,
 	type: 2,
 	day: 12,
 	name: 'Owsianka z gruszką i imbirem.',
 	desc: '5 łyżek płatków owsianych, ½ szklanki mleczka kokosowego, 2 łyżki płatków migdałowych, 1 średnia gruszka, kawałek imbiru (5g). Płatki owsiane ugotować na wodzie, po ugotowaniu dodać pokrojoną gruszkę, zalać mleczkiem kokosowym i podaawać z płatkami migdałowymi. Imbir zetrzeć na górę.',
 	hint: ' Imbir świeży możemy zastąpić imbirem sproszkowanym, jeśli wolisz inny owoc, spokojnie możesz wymienić. Imbir poprawia trawienie i przyśpiesza metabolizm.'
 },
 {
 	id: 47,
 	type: 3,
 	day: 12,
 	name: 'Indyk pieczony ze szpinakiem' ,
 	desc: ' 1 filet piersi z indyka (150g) usmażony na patelni grillowej, szklanka ugotowanego szpinaku, 1 ząbek czosnku, sól, pieprz, rukola, 1 łyżeczka masła klarowanego. Na patelni rozgrzać masło, wgnieść czosnek i ugotować szpinak. Indyka ugrillować oddzielnie. Podawać z sałatą z oliwą i szpinakiem. ',
 	hint: ''
 },
 {
 	id: 48,
 	type: 4,
 	day: 12,
 	name: 'Sałatka z ciecierzycą ',
 	desc: '3 łyżki ciecierzycy z puszki, albo ugotowanej(wcześniej trzeba namoczyć)  dwie  garści sałaty lodowej,  1 średnia papryka pokrojoną w kostkę. Ciecierzycę ugotować do miękkości, dodać do niej paprykę,  sałatę lodową odrobinę soli himalajskiej, oregano. Skropić oliwą i dokładnie wymieszać. ',
 	hint:''
 },
 {
 	id: 49,
 	type: 1,
 	day: 13,
 	name: 'JAJECZNICA',
 	desc: 'Udusić na wodzie z 1 łyżeczkę oliwy z oliwek, obranego pomidora, cukinię, (objętość 1 szklanki) 1 łyżkę ziaren słonecznika. Do uduszonych warzyw wlać roztrzepane 3 jajka. Wszystko razem wymieszać Doprawić solą i pieprzem do smaku',
 	hint: '',
 },
  {
 	id: 50,
 	type: 2,
 	day: 13,
 	name: 'Jaglanka z bananem, masłem orzechowym i migdałami.',
 	desc: '3 łyżki suchej kaszy jaglanej, 1 banan, 2 łyżeczki masła orzechowego, 1 łyżka płatków migdałów. Kaszę jaglaną ugotować na wodzie, do ugotowanej kaszy dodać pokrojonego w talarki banana i masło orzechowe, podawać posypane migdałami.',
 	hint: 'Można kaszę jaglaną zamienić na płatki owsiane.',
 },
  {
 	id: 51,
 	type: 3,
 	day: 13,
 	name: 'Kurczak na słodko w curry i z ananasem.',
 	desc:'Porcja piersi z kurczaka (150g), wymieszać z marynatą z oliwy z oliwek, przyprawy curry, pokrojonego kawałaka imbiru, poddusić na patelni. 3 plastry ananasa z zalewy pokroić w kostkę i dodać do uduszonego kurczaka. Zjeść z mixem sałat z oliwą z oliwek. ',
 	hint: '',
 },
  {
 	id: 52,
 	type: 4,
 	day: 13,
 	name: 'Kaszotto z pomidorami i czerwoną fasolą.',
 	desc: '3  łyżki  suchej kaszy gryczanej, ½ puszki pomidorów ½ puszki czerwonej fasolki, 1 łyżeczka masła klarowanego, 1 łyżeczka masła orzechowego, ząbek czosnku, Kaszę ugotować, na patelnii wok podsmażyć czosnek, pomidory i fasolę, dodać masło orzechowego, masło klarowane i sos sojowy. Wymieszać z ugotowaną kaszą',
 	hint: ''
 },
 {
 	id: 53,
 	type:1,
 	day: 14,
 	name: 'Jajka sadzone w papryce z chlebem żytnim',
 	desc: '1 papryka żółta i 1 papryka czerwona, 3 jajka, 1 łyżeczka oleju kokosowego albo masła klarowanrgo. Przekroić papryke w poprzek tak by uzyskać szablon, położyć na patelni, wcześniej posmarowanej olejem. Wbić jajka do wnętrza papryki, usmażyć. Podawać z i resztą papryki.',
 	hint:''
 },
 {
 	id: 54,
 	type:2,
 	day: 14,
 	name:'Jaglanka z borówkami',
 	desc: '6 łyżek mleka roślinnego, 3 łyżki suchej kaszy jaglanej, garść borówek amerykańskich, łyżka migdałów w płatkach. Kaszę ugotuj do miękkości na wodzie. Wyłóż do miseczki, dodaj mleko, borówki i migdały.',
 	hint:'Można pominąć mleko roślinne, bez dodawania mleka, tak samo jak wcześniej można wymienić kaszę jaglaną na płatki owsiane.'
 },
 {
 	id: 55,
 	type:3,
 	day: 14,
 	name:'Grillowana pierś z indyka z fasolką szparagową',
 	desc:'1 porcja piersi z indyka (150g), 1 duża miseczka  ugotowanej fasolki szparagowej, łyżka oleju kokosowego/masła klarowanego , łyżka uprażonych nasion dynii. Indyka zgrillować na patelnii, wcześniej zamarynować w solii, pieprzu i papryce w proszku i oleju. Podawać z ugotowaną fasolką, posypać uprażonymi pestkamii dynii.',
 	hint:''
 },
 {
 	id: 56,
 	type:4,
 	day: 14,
 	name:'Makaron pełnoziarnisty z cukinią',
 	desc:'Porcja makaronu pełnoziarnistego (40g), ½ cukini zielonej (300g), 1 łyżka masła orzechowego, łyżeczka sosu sojowego, Makaron ugotować, w patelnii wok z sosem sojowym poddusić pokrojoną w plastry cukinie, dodać masło orzechowe, następnie ugotowany makaron, podawać posypane swieżą pietruszką.',
 	hint:''
 },
 {
 	id: 57,
 	type:1,
 	day: 15,
 	name:'Jaglanka na mleku kokosowym',
 	desc:'3 łyżki kaszy jaglanej, 1 łyżka stołowa mleczka kokosowego, gruszka. Kaszę dokładnie wypłukać zimną wodą, następnie przelać wrzątkiem. Wlać świeży wrzątek i gotować pod przykryciem 7 minut, pozostawić chwilę pod przykryciem by kasza „doszła”.Następnie zaprawić mleczkiem kokosowym Dodać do niej cynamon i duszoną gruszkę, wcześniej pokrojoną w kostkę i z niewielką ilością wody chwilę podgotowaną.',
 	hint:'Gruszka jest wymienna na inny owoc, nie wiem jeszcze jaki jest Twój poziom potrzeby słodkiego, gruszka dosyć dobrze w początkowych etapach zaspokaja naszą potrzebę na słodkie, po odstawieniu np. słodkich napojów. Ale jeśli masz ochotę, na owoce leśne typu jagody, maliny, czy inny owoc to jak najbardziej może być, unikamy latem suszonych owoców. '
 },
 {
 	id: 58,
 	type:2,
 	day: 15,
 	name:'Kanapki z polędwicą z indyka',
 	desc:'2 kromki chleba graham albo innego chleb pełnoziarnistego, 3 plasterki polędwicy z indyka, ½ papryki czerwonej, ½ awokado, 1 cały pomidor, 2 łyżeczki masła. Chleb posmarować masłem i przygotować kanapki z resztą składników. ',
 	hint:''
 },
 {
 	id: 59,
 	type:3,
 	day: 15,
 	name:'Risotto z pieczarkami i czerwoną fasolą',
 	desc:'8 pieczarek , 3 łyżki suchego ryżu brązowego, kieliszek wina białego półwytrawego, 3 łyżki fasoli z zalewy, 2 łyżki koncentratu pomidorowego, 3 małe kulki sera mozzaerlla, 1 ostra papryczka, łyżka oleju rzepakowego, ząbek czosnku, szczypta kurkumy, szczypta curry, szczypta papryki słodkiej. Dodatkowo przygotuj: ok 100 ml wody.Ugotuj ryż. Posiekaj drobno papryczki. Jeśli chcesz by potrawa była ostrzejsza, wykorzystaj również ziarenka. By uzyskać łagodniejszy smak, pozbądź się ziarenek i/ lub użyj mniej ostrej papryczki. Podsmaż czosnek z pieczarkami. Dodaj ostrą papryczkę. Zalej winem i gotuj do momentu, aż w połowie wyparuje. Dodaj koncentrat z wodą i fasolkę. Wymieszaj ryż z sosem, dodaj przyprawy. Gotuj przez chwilę. Dodaj na potrawę starty ser.',
 	hint:''
 },
 {
 	id: 60,
 	type:4,
 	day: 15,
 	name:'Sałatka z awokado i grillowanym indykiem',
 	desc:'Mix sałat z rukolą, pierś z kurczaka(150g),sezam nasiona (1 łyżka),  ½ awokado, pomidor, 1 ogórek, 2 łyżki oliwy z oliwek. Wymieszać garść sałaty, garść rukoli, 1 pomidora. Indyka zgrillować, pokroić w kawałki. Dodać pokrojone w kostkę awokado. Na patelnii podprażyć łyżkę sezamu , doprawić oliwą z oliwek. Wymieszać wszystko.',
 	hint:''
 },
 {
 	id: 61,
 	type:1,
 	day: 16,
 	name:'Owsianka makowa',
 	desc:'3 łyżki płatków owsianych, 1 łyżka maku, 1 łyżka mleczka kokosowego.Płatki owsiane ugotować na wodzie z łyżką maku, po ugotowaniu dodać mleczko kokosowe.',
 	hint:'Jeśli zostały Ci jakieś owoce możesz je dodać.',
 },
 {
 	id: 62,
 	type:2,
 	day: 16,
 	name:'Kanapki z pastą marchewkową, sałatą i sezamem',
 	desc:'2 kromki chleba żytniego albo pełnoziarnistego, 1 marchew, 4 liście sałaty lodowej, 2 łyżki sezamu, łyżka oliwy z oliwek. Marchew poddgotować i zmiksować blenderem, następnie dodać oliwę, doprawić solą i pieprzem. Posmarować kanapki pastą posypać sezamem i sałatą.',
 	hint:''
 },
 {
 	id: 63,
 	type:3,
 	day: 16,
 	name:'Indyk w sosie z zielonego groszku',
 	desc:' Porcja fileta z indyka (150g), szklanka mrożonego groszku(może być też świeży groszek zielony), łyżeczka masła klarowanego, 1 cebula, 1 ząbek czosnku, 3 łyżki mleczka kokosowego, sól, pieprz, łyżeczka sosu sojowego. Indyka zamarynować w ulubionych ziołach i usmażyć na niewielkiej ilości oleju. Na patelni podsmażyć na maśle pokrojoną cebulę, czosnek i dodać wcześniej ugotowany groszek, chwilę przesmażyć i dodać mleczko kokosowe oraz doprawić solą, pieprzem i sosem sojowym. Podawać razem z indykiem',
 	hint:''
 },
 {
 	id: 64,
 	type:4,
 	day: 16,
 	name:'Makaron z brokułem i masłem orzechowym',
 	desc:'Porcja makaronu żytniego (45g), ½ małego brokuła, 2 łyżki masła orzechowego, łyżeczka oliwy z oliwek. Makaron ugotować. Brokuła ugotować na parze na średnio miękko. Na oddzielnej patelnii dodać parę kropel sosu sojowego, pokrojony brokuł i rozrobione z oliwą masło orzechowe. Wszystko razem przesmażyć i podwać z makaronem',
 	hint:''
 },
 {
 	id: 65,
 	type:1,
 	day: 17,
 	name:'Omlet owocowy',
 	desc:'Omlet z 3 jajek, mus malinowy 2 garście, 3 orzechy włoskie, 1,5 łyżki oleju kokosowego, 2 łyżki płatków owsianych do omletu. Omlet smażymy na oleju kokosowym, podajemy z malinami zblendowanymi i posypane uprażonymi orzechami włoskimi.',
 	hint:''
 },
 {
 	id: 66,
 	type:2,
 	day: 17,
 	name:'Owsianka z migdałami, orzechami, siemieniem lnianym, słonecznikiem',
 	desc:' 3 łyżki płatków owsianych górskic, 1 łyżka  płatków migdałowych, 3 orzechy włoskie (10g), 1 łyżka siemienia lnianego, 1 garść nasion słonecznika(30g), 1 łyżeczka cynamonu. Płatki owsiane zalać wodą i ustawić na ogniu, gotować, doprawić cynamonem chwilę pogotować. Po ugotowaniu dodać migdały, orzechy, siemię lniane, słonecznik.',
 	hint:''
 },
 {
 	id: 67,
 	type:3,
 	day: 17,
 	name:'Sałatka z buraczkami, morelą i indykiem',
 	desc:'Mix sałat z rukola- 1 opakowanie, 1 burak, 2 morele, kawałek indyka (100g), 2 łyżki oliwy z oliwek, sól, pieprz. Indyka ugrillować na patelni, buraka zetrzeć na tarce o grubych oczkach, morele pokroić w drobną kostkę, wymieszać wszystko z oliwą i sałatą.',
 	hint:''
 },
 {
 	id: 68,
 	type:4,
 	day: 17,
 	name:'Kasza gryczana z natką pietruszki, pomidorami suszonymi i slonecznikiem',
 	desc:'1/3 szklanki kaszy gryczanej surowej, 2 łyżeczki natki pietruszki, 3 plastry pomidorów suszonych, 1 łyżeczka nasion słonecznika, , 1łyżka oliwy z oliwek, Łyżeczka kurkumy, Sól, pieprz. Kaszę gryczaną ugotować na miękko. Wymieszać z pokrojonymi w kostkę pomidorami, dodać natkę pietruszki, łyżkę oliwy, doprawić kurkumą, solą, pieprzem i posypać uprażonymi nasionami słonecznika.',
 	hint:''
 },
 {
 	id: 69,
 	type:1,
 	day: 18,
 	name:'Owsianka z bananem, masłem orzechowym i migdałami.',
 	desc:'3 łyżki suchych płatków owsianych , 1 banan, 2 łyżeczki masła orzechowego, 1 łyżka płatków migdałów. Płatki owsiane ugotować na wodzie, do ugotowanej kaszy dodać pokrojonego w talarki banana i masło orzechowe, podawać posypane migdałami.',
 	hint:''
 },
 {
 	id: 70,
 	type:2,
 	day: 18,
 	name:'Mix sałat z jajkiem ugotowanym na twardo, ogórkiem, szczypiorkiem.',
 	desc:'1 jajko, Mix sałat z rukolą- opakowanie, 1 ogórek, 3 łyżki jogurtu naturalnego, 1 łyżka szczypiorku drobno pokrojonego, 1 cebula szalotka, 1 pomidor, 1 łyżka oliwy z oliwek, sól pieprz. W oddzielnym kubeczku wymieszać jogurt naturalny z oliwą przyprawami. Sałatę, szczypiorek, cebulę wymieszać w misce, dołożyć pokrojonego w kostkę ogórka i jajko. Podawać polane sosem z jogurtu.',
 	hint:''
 },
 {
 	id: 71,
 	type:3,
 	day: 18,
 	name:'Dorsz z fasolką i szpinakiem',
 	desc:'1 filet z dorsza(150g), 1  garść fasolki szparagowej,  1  garść, szpinaku, 1 łyżka oleju kokosowego Dorsza posmaruj pesto, zawiń w folię aluminiową i upiecz w piekarniku (około 30 minut w 180 stopniach).Fasolkę ugotuj w lekko osolonej wodzie, szpinak można poddusić na patelni z dodatkiem oleju kokosowego. Podawaj posypane sezamem.',
 	hint:''
 },
 {
 	id: 72,
 	type:4,
 	day: 18,
 	name:'Ryż z pieczarkami i pestkami dynii',
 	desc:'3 łyżki suchego ryżu brązowego, 8 pieczarek, łyżeczka masła klarowanego, 2 łyżki nasion dynii. Ryż ugotować oddzielnie z przyprawami. Na patelnii podsmażyć pieczarki na maśle, dodać ugotowany ryż, posypać uprażonymi ziarnami dyni.',
 	hint:''
 },
 {
 	id: 73,
 	type:1,
 	day: 19,
 	name:'Jajecznica z kurkami',
 	desc:'3 jajka, 2  średnie pomidory,  garść świezych kurek, 1 łyżeczka pietruszki, łyżeczka szczypiorku, 1 kromka chleba, 1 łyżka oleju rzepakowego. Jajecznicę przygotować z warzywami i kurkami,  usmażyć. Podawać z chlebem',
 	hint:''
 },
 {
 	id: 74,
 	type:2,
 	day: 19,
 	name:'Kanapka z papryką i jajkiem',
 	desc:'2  kromki chleba pełnoziarnistego, 1 jajko 1 łyżka oliwy/1 łyżeczka masła, 2 łyżeczki pietruszki, sól pieprz, 1 papryka. Paprykę pokroić w paski i wymieszać z pietruszką doprawić solą i pieprzem. Jajka ugotować oddzielnie. Podawać w formie kanapek  posmarowanych masłem pokrojonym ugotownym jajkiem  i sałatką z papryki.',
 	hint:''
 },
 {
 	id: 75,
 	type:3,
 	day: 19,
 	name:'Sałata z kurczakiem',
 	desc:'150g piersi z kurczaka, ½ awokado, 1 pomidor, 1 ogórek, garść sałaty zielonej, garść szpinaku zielonego, kiełki, garśc orzechów(dowolnych), 3 łyżki oliwy z oliwek. Kurczaka można zamarynować w papryce w proszku i następnie usmażyć na niewielkiej ilości albo masła klarowanego(łyżeczka) albo ugotować na parze, następnie pokroić go na kawałki i wymieszać z pokrojonymi warzywami i oliwą.',
 	hint:' Pojawia się swieży szpinak, spróbuj, czy Ci smakuje na surowo.'
 },
 {
 	id: 76,
 	type:4,
 	day: 19,
 	name:'Makaron pełnoziarnisty  z grillowaną cukinią, i masłem orzechowym.',
 	desc:' Porcja makaronu pełnoziarnistego(40g), 1 cukinia zielona,  1 łyżka masła orzechowego, łyżeczka sosu sojowego, Makaron ugotować, w patelnii wok z sosem sojowym poddusić pokrojoną w plastry cukinie, dodać masło orzechowe, następnie ugotowany makaron, podawać posypane parmezanem',
 	hint:''
 },
 {
 	id: 77,
 	type:1,
 	day: 20,
 	name:'Jajecznica z warzywami',
 	desc:'Podprażyć na patelni 1 łyżkę nasion dynii. Pokroić: 1 cukinie, 1 marchewkę, kawałek pora/cebulę. w  miseczce roztrzepać 3 jajka, doprawić bazylią i dodać do warzyw. Można dodać kiełki. Całość wylać na patelnię z 1 łyżką oleju kokosowego. Podpiec z obu stron',
 	hint:''
 },
 {
 	id: 78,
 	type:2,
 	day: 20,
 	name:'Ryż z malinami',
 	desc:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam.',
 	hint:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam. Mogą być inne owoce niż maliny. Nie muszą być te płatki ryżowe, mogą być owsiane, ale spróbuj sobie  bo dosyć szybko się robi i smakują jak ryż, jak by było za suche spokojnie możesz dodać kefir. '
 },
 {
 	id: 79,
 	type:3,
 	day: 20,
 	name:'Wątróbka z porem i orzechami',
 	desc:'Wątróbka(150g) pieczona w poszatkowanym porem ( 1 sztuka) z orzechami (garść),łyżeczką masła klarowanego Wątróbkę upiec w folii z posztkowanym porem, ząbkiem czosnku i masłem.',
 	hint:''
 },
 {
 	id: 80,
 	type:4,
 	day: 20,
 	name:'Ryż smażony z brokułem i marchewką.',
 	desc:'3 łyzki suchego ryżu brązowego. ½ średniego brokuła, 1 marchew starta na tarce o grubych oczkach, łyżeczka masła klarowanego, łyżka jogurtu naturalnego, plaster sera feta. Ryż ugotować oddzielnie, na patelnii na maśle podsmażyć brokuła pokruszonego, startą marchew, pod koniec smażenia, dodać jogurt. Podawać z ryżem i pokruszonym serem feta.',
 	hint:''
 },
 {
 	id: 81,
 	type: 1,
 	day: 21,
 	name: 'Jaglanka z pistacjami i malinami',
 	desc: '½ opakowania malin, 3 łyżki kaszy jaglanej, 2 łyżki pistacji. Kaszę ugotuj na miękko na wodzie według instrukcji na opakowaniu. Wyłóż do miski, dodaj pistacje i maliny.',
 	hint: 'Tutaj spokojnie można wykorzystać orzechy nerkowca, migdały, albo orzech brazylijski zamiast pistacji.Można kaszę jaglaną zamienić na płatki owsiane.'
 },
 {
 	id: 82,
 	type: 2,
 	day: 21,
 	name: 'Kanapki z awokado i jajkiem',
 	desc: '2 kromki chleba pełnoziarnistego, 1 jajo, Pół awokado, 3 łyżeczki pietruszki, 1 ząbek czosnku, sól pieprz. Awokado rozgnieźć widelcem i połączyć z pietruszką i zgnieczonym czosnkiem, doprawić solą i pieprzem. Jajko ugotować oddzielnie. Podawać w formie kanapek z pastą awokado i ugotownym jajkiem. ',
 	hint: ''
 },
 {
 	id: 83,
 	type: 3,
 	day: 21,
 	name:'Makaron z pesto i orzechami' ,
 	desc: '5 pomidorków koktajowych, garść makaronu pełnoziarnistego (50g), łyżeczka pesto z bazyli zielonego, łyżka orzechów włoskich. Ugotuj makaron, pokrój drobno orzechy, wymieszaj z pesto i pomidorkami, wymieszaj wszystko z makaronem.',
 	hint: 'Można zrobić oczywiście pesto samodzielnie, ale to trochę trwa, są dostępne pesto bez dodatku konserwantów, ważne żeby skład był jak najkrótszy.'
 },
 {
 	id: 84,
 	type: 4,
 	day: 21,
 	name: 'Wołowina',
 	desc:'150 g mięsa wołowego (może to być rostbef, może być gulaszowe), 2 marchewki, 1 papryka, 2 łyżeczki masła klarowanego, sałata lodowa, 1 łyżka oliwy z oliwek, garść orzechów nerkowca. Wołowinę pieczemy z marchewkami, papryką pociętą na kawałki i z dodatkiem masła. Podajemy z sałatą lodową wymieszaną z oliwą i orzechami nerkowca',
 	hint: ' Jak podwoisz liczbę składników będzie od razu ugotowane na następny dzień'
 },
 {
 	id: 85,
 	type: 1,
 	day: 22,
 	name: 'Szakszuka',
 	desc: '3 jajka gotowane na pomidorach (2 pomidory obrane ze skórki i pokrojone w kostkę), łyżka masła klarowanego, Mix sałat z rukolą, granatem, startą surową marchewką polane 2 łyżkami oliwy z oliwek.',
 	hint: 'To jest świetne rozwiązanie na śniadanie na ciepło.'
 },
 {
 	id: 86,
 	type: 2,
 	day: 22,
 	name: 'Owsianka z gruszką i imbirem.',
 	desc: '5 łyżek płatków owsianych, ½ szklanki mleczka kokosowego, 2 łyżki płatków migdałowych, 1 średnia gruszka, kawałek imbiru (5g). Płatki owsiane ugotować na wodzie, po ugotowaniu dodać pokrojoną gruszkę, zalać mleczkiem kokosowym i podaawać z płatkami migdałowymi. Imbir zetrzeć na górę.',
 	hint: ' Imbir świeży możemy zastąpić imbirem sproszkowanym, jeśli wolisz inny owoc, spokojnie możesz wymienić. Imbir poprawia trawienie i przyśpiesza metabolizm.'
 },
 {
 	id: 87,
 	type: 3,
 	day: 22,
 	name: 'Indyk pieczony ze szpinakiem' ,
 	desc: ' 1 filet piersi z indyka (150g) usmażony na patelni grillowej, szklanka ugotowanego szpinaku, 1 ząbek czosnku, sól, pieprz, rukola, 1 łyżeczka masła klarowanego. Na patelni rozgrzać masło, wgnieść czosnek i ugotować szpinak. Indyka ugrillować oddzielnie. Podawać z sałatą z oliwą i szpinakiem. ',
 	hint: ''
 },
 {
 	id: 88,
 	type: 4,
 	day: 22,
 	name: 'Sałatka z ciecierzycą ',
 	desc: '3 łyżki ciecierzycy z puszki, albo ugotowanej(wcześniej trzeba namoczyć)  dwie  garści sałaty lodowej,  1 średnia papryka pokrojoną w kostkę. Ciecierzycę ugotować do miękkości, dodać do niej paprykę,  sałatę lodową odrobinę soli himalajskiej, oregano. Skropić oliwą i dokładnie wymieszać. ',
 	hint:''
 },
 {
 	id: 89,
 	type: 1,
 	day: 23,
 	name: 'JAJECZNICA',
 	desc: 'Udusić na wodzie z 1 łyżeczkę oliwy z oliwek, obranego pomidora, cukinię, (objętość 1 szklanki) 1 łyżkę ziaren słonecznika. Do uduszonych warzyw wlać roztrzepane 3 jajka. Wszystko razem wymieszać Doprawić solą i pieprzem do smaku',
 	hint: '',
 },
  {
 	id: 90,
 	type: 2,
 	day: 23,
 	name: 'Jaglanka z bananem, masłem orzechowym i migdałami.',
 	desc: '3 łyżki suchej kaszy jaglanej, 1 banan, 2 łyżeczki masła orzechowego, 1 łyżka płatków migdałów. Kaszę jaglaną ugotować na wodzie, do ugotowanej kaszy dodać pokrojonego w talarki banana i masło orzechowe, podawać posypane migdałami.',
 	hint: 'Można kaszę jaglaną zamienić na płatki owsiane.',
 },
  {
 	id: 91,
 	type: 3,
 	day: 23,
 	name: 'Kurczak na słodko w curry i z ananasem.',
 	desc:'Porcja piersi z kurczaka (150g), wymieszać z marynatą z oliwy z oliwek, przyprawy curry, pokrojonego kawałaka imbiru, poddusić na patelni. 3 plastry ananasa z zalewy pokroić w kostkę i dodać do uduszonego kurczaka. Zjeść z mixem sałat z oliwą z oliwek. ',
 	hint: '',
 },
  {
 	id: 92,
 	type: 4,
 	day: 23,
 	name: 'Kaszotto z pomidorami i czerwoną fasolą.',
 	desc: '3  łyżki  suchej kaszy gryczanej, ½ puszki pomidorów ½ puszki czerwonej fasolki, 1 łyżeczka masła klarowanego, 1 łyżeczka masła orzechowego, ząbek czosnku, Kaszę ugotować, na patelnii wok podsmażyć czosnek, pomidory i fasolę, dodać masło orzechowego, masło klarowane i sos sojowy. Wymieszać z ugotowaną kaszą',
 	hint: ''
 },
 {
 	id: 93,
 	type:1,
 	day: 24,
 	name: 'Jajka sadzone w papryce z chlebem żytnim',
 	desc: '1 papryka żółta i 1 papryka czerwona, 3 jajka, 1 łyżeczka oleju kokosowego albo masła klarowanrgo. Przekroić papryke w poprzek tak by uzyskać szablon, położyć na patelni, wcześniej posmarowanej olejem. Wbić jajka do wnętrza papryki, usmażyć. Podawać z i resztą papryki.',
 	hint:''
 },
 {
 	id: 94,
 	type:2,
 	day: 24,
 	name:'Jaglanka z borówkami',
 	desc: '6 łyżek mleka roślinnego, 3 łyżki suchej kaszy jaglanej, garść borówek amerykańskich, łyżka migdałów w płatkach. Kaszę ugotuj do miękkości na wodzie. Wyłóż do miseczki, dodaj mleko, borówki i migdały.',
 	hint:'Można pominąć mleko roślinne, bez dodawania mleka, tak samo jak wcześniej można wymienić kaszę jaglaną na płatki owsiane.'
 },
 {
 	id: 95,
 	type:3,
 	day: 24,
 	name:'Grillowana pierś z indyka z fasolką szparagową',
 	desc:'1 porcja piersi z indyka (150g), 1 duża miseczka  ugotowanej fasolki szparagowej, łyżka oleju kokosowego/masła klarowanego , łyżka uprażonych nasion dynii. Indyka zgrillować na patelnii, wcześniej zamarynować w solii, pieprzu i papryce w proszku i oleju. Podawać z ugotowaną fasolką, posypać uprażonymi pestkamii dynii.',
 	hint:''
 },
 {
 	id: 96,
 	type:4,
 	day: 24,
 	name:'Makaron pełnoziarnisty z cukinią',
 	desc:'Porcja makaronu pełnoziarnistego (40g), ½ cukini zielonej (300g), 1 łyżka masła orzechowego, łyżeczka sosu sojowego, Makaron ugotować, w patelnii wok z sosem sojowym poddusić pokrojoną w plastry cukinie, dodać masło orzechowe, następnie ugotowany makaron, podawać posypane swieżą pietruszką.',
 	hint:''
 },
 {
 	id: 97,
 	type:1,
 	day: 25,
 	name:'Jaglanka na mleku kokosowym',
 	desc:'3 łyżki kaszy jaglanej, 1 łyżka stołowa mleczka kokosowego, gruszka. Kaszę dokładnie wypłukać zimną wodą, następnie przelać wrzątkiem. Wlać świeży wrzątek i gotować pod przykryciem 7 minut, pozostawić chwilę pod przykryciem by kasza „doszła”.Następnie zaprawić mleczkiem kokosowym Dodać do niej cynamon i duszoną gruszkę, wcześniej pokrojoną w kostkę i z niewielką ilością wody chwilę podgotowaną.',
 	hint:'Gruszka jest wymienna na inny owoc, nie wiem jeszcze jaki jest Twój poziom potrzeby słodkiego, gruszka dosyć dobrze w początkowych etapach zaspokaja naszą potrzebę na słodkie, po odstawieniu np. słodkich napojów. Ale jeśli masz ochotę, na owoce leśne typu jagody, maliny, czy inny owoc to jak najbardziej może być, unikamy latem suszonych owoców. '
 },
 {
 	id: 98,
 	type:2,
 	day: 25,
 	name:'Kanapki z polędwicą z indyka',
 	desc:'2 kromki chleba graham albo innego chleb pełnoziarnistego, 3 plasterki polędwicy z indyka, ½ papryki czerwonej, ½ awokado, 1 cały pomidor, 2 łyżeczki masła. Chleb posmarować masłem i przygotować kanapki z resztą składników. ',
 	hint:''
 },
 {
 	id: 99,
 	type:3,
 	day: 25,
 	name:'Risotto z pieczarkami i czerwoną fasolą',
 	desc:'8 pieczarek , 3 łyżki suchego ryżu brązowego, kieliszek wina białego półwytrawego, 3 łyżki fasoli z zalewy, 2 łyżki koncentratu pomidorowego, 3 małe kulki sera mozzaerlla, 1 ostra papryczka, łyżka oleju rzepakowego, ząbek czosnku, szczypta kurkumy, szczypta curry, szczypta papryki słodkiej. Dodatkowo przygotuj: ok 100 ml wody.Ugotuj ryż. Posiekaj drobno papryczki. Jeśli chcesz by potrawa była ostrzejsza, wykorzystaj również ziarenka. By uzyskać łagodniejszy smak, pozbądź się ziarenek i/ lub użyj mniej ostrej papryczki. Podsmaż czosnek z pieczarkami. Dodaj ostrą papryczkę. Zalej winem i gotuj do momentu, aż w połowie wyparuje. Dodaj koncentrat z wodą i fasolkę. Wymieszaj ryż z sosem, dodaj przyprawy. Gotuj przez chwilę. Dodaj na potrawę starty ser.',
 	hint:''
 },
 {
 	id: 100,
 	type:4,
 	day: 25,
 	name:'Sałatka z awokado i grillowanym indykiem',
 	desc:'Mix sałat z rukolą, pierś z kurczaka(150g),sezam nasiona (1 łyżka),  ½ awokado, pomidor, 1 ogórek, 2 łyżki oliwy z oliwek. Wymieszać garść sałaty, garść rukoli, 1 pomidora. Indyka zgrillować, pokroić w kawałki. Dodać pokrojone w kostkę awokado. Na patelnii podprażyć łyżkę sezamu , doprawić oliwą z oliwek. Wymieszać wszystko.',
 	hint:''
 },
 {
 	id: 101,
 	type:1,
 	day: 26,
 	name:'Owsianka makowa',
 	desc:'3 łyżki płatków owsianych, 1 łyżka maku, 1 łyżka mleczka kokosowego.Płatki owsiane ugotować na wodzie z łyżką maku, po ugotowaniu dodać mleczko kokosowe.',
 	hint:'Jeśli zostały Ci jakieś owoce możesz je dodać.',
 },
 {
 	id: 102,
 	type:2,
 	day: 26,
 	name:'Kanapki z pastą marchewkową, sałatą i sezamem',
 	desc:'2 kromki chleba żytniego albo pełnoziarnistego, 1 marchew, 4 liście sałaty lodowej, 2 łyżki sezamu, łyżka oliwy z oliwek. Marchew poddgotować i zmiksować blenderem, następnie dodać oliwę, doprawić solą i pieprzem. Posmarować kanapki pastą posypać sezamem i sałatą.',
 	hint:''
 },
 {
 	id: 103,
 	type:3,
 	day: 26,
 	name:'Indyk w sosie z zielonego groszku',
 	desc:' Porcja fileta z indyka (150g), szklanka mrożonego groszku(może być też świeży groszek zielony), łyżeczka masła klarowanego, 1 cebula, 1 ząbek czosnku, 3 łyżki mleczka kokosowego, sól, pieprz, łyżeczka sosu sojowego. Indyka zamarynować w ulubionych ziołach i usmażyć na niewielkiej ilości oleju. Na patelni podsmażyć na maśle pokrojoną cebulę, czosnek i dodać wcześniej ugotowany groszek, chwilę przesmażyć i dodać mleczko kokosowe oraz doprawić solą, pieprzem i sosem sojowym. Podawać razem z indykiem',
 	hint:''
 },
 {
 	id: 104,
 	type:4,
 	day: 26,
 	name:'Makaron z brokułem i masłem orzechowym',
 	desc:'Porcja makaronu żytniego (45g), ½ małego brokuła, 2 łyżki masła orzechowego, łyżeczka oliwy z oliwek. Makaron ugotować. Brokuła ugotować na parze na średnio miękko. Na oddzielnej patelnii dodać parę kropel sosu sojowego, pokrojony brokuł i rozrobione z oliwą masło orzechowe. Wszystko razem przesmażyć i podwać z makaronem',
 	hint:''
 },
 {
 	id: 105,
 	type:1,
 	day: 27,
 	name:'Omlet owocowy',
 	desc:'Omlet z 3 jajek, mus malinowy 2 garście, 3 orzechy włoskie, 1,5 łyżki oleju kokosowego, 2 łyżki płatków owsianych do omletu. Omlet smażymy na oleju kokosowym, podajemy z malinami zblendowanymi i posypane uprażonymi orzechami włoskimi.',
 	hint:''
 },
 {
 	id: 106,
 	type:2,
 	day: 27,
 	name:'Owsianka z migdałami, orzechami, siemieniem lnianym, słonecznikiem',
 	desc:' 3 łyżki płatków owsianych górskic, 1 łyżka  płatków migdałowych, 3 orzechy włoskie (10g), 1 łyżka siemienia lnianego, 1 garść nasion słonecznika(30g), 1 łyżeczka cynamonu. Płatki owsiane zalać wodą i ustawić na ogniu, gotować, doprawić cynamonem chwilę pogotować. Po ugotowaniu dodać migdały, orzechy, siemię lniane, słonecznik.',
 	hint:''
 },
 {
 	id: 107,
 	type:3,
 	day: 27,
 	name:'Sałatka z buraczkami, morelą i indykiem',
 	desc:'Mix sałat z rukola- 1 opakowanie, 1 burak, 2 morele, kawałek indyka (100g), 2 łyżki oliwy z oliwek, sól, pieprz. Indyka ugrillować na patelni, buraka zetrzeć na tarce o grubych oczkach, morele pokroić w drobną kostkę, wymieszać wszystko z oliwą i sałatą.',
 	hint:''
 },
 {
 	id: 108,
 	type:4,
 	day: 27,
 	name:'Kasza gryczana z natką pietruszki, pomidorami suszonymi i slonecznikiem',
 	desc:'1/3 szklanki kaszy gryczanej surowej, 2 łyżeczki natki pietruszki, 3 plastry pomidorów suszonych, 1 łyżeczka nasion słonecznika, , 1łyżka oliwy z oliwek, Łyżeczka kurkumy, Sól, pieprz. Kaszę gryczaną ugotować na miękko. Wymieszać z pokrojonymi w kostkę pomidorami, dodać natkę pietruszki, łyżkę oliwy, doprawić kurkumą, solą, pieprzem i posypać uprażonymi nasionami słonecznika.',
 	hint:''
 },
 {
 	id: 109,
 	type:1,
 	day: 28,
 	name:'Owsianka z bananem, masłem orzechowym i migdałami.',
 	desc:'3 łyżki suchych płatków owsianych , 1 banan, 2 łyżeczki masła orzechowego, 1 łyżka płatków migdałów. Płatki owsiane ugotować na wodzie, do ugotowanej kaszy dodać pokrojonego w talarki banana i masło orzechowe, podawać posypane migdałami.',
 	hint:''
 },
 {
 	id: 110,
 	type:2,
 	day: 28,
 	name:'Mix sałat z jajkiem ugotowanym na twardo, ogórkiem, szczypiorkiem.',
 	desc:'1 jajko, Mix sałat z rukolą- opakowanie, 1 ogórek, 3 łyżki jogurtu naturalnego, 1 łyżka szczypiorku drobno pokrojonego, 1 cebula szalotka, 1 pomidor, 1 łyżka oliwy z oliwek, sól pieprz. W oddzielnym kubeczku wymieszać jogurt naturalny z oliwą przyprawami. Sałatę, szczypiorek, cebulę wymieszać w misce, dołożyć pokrojonego w kostkę ogórka i jajko. Podawać polane sosem z jogurtu.',
 	hint:''
 },
 {
 	id: 111,
 	type:3,
 	day: 28,
 	name:'Dorsz z fasolką i szpinakiem',
 	desc:'1 filet z dorsza(150g), 1  garść fasolki szparagowej,  1  garść, szpinaku, 1 łyżka oleju kokosowego Dorsza posmaruj pesto, zawiń w folię aluminiową i upiecz w piekarniku (około 30 minut w 180 stopniach).Fasolkę ugotuj w lekko osolonej wodzie, szpinak można poddusić na patelni z dodatkiem oleju kokosowego. Podawaj posypane sezamem.',
 	hint:''
 },
 {
 	id: 112,
 	type:4,
 	day: 28,
 	name:'Ryż z pieczarkami i pestkami dynii',
 	desc:'3 łyżki suchego ryżu brązowego, 8 pieczarek, łyżeczka masła klarowanego, 2 łyżki nasion dynii. Ryż ugotować oddzielnie z przyprawami. Na patelnii podsmażyć pieczarki na maśle, dodać ugotowany ryż, posypać uprażonymi ziarnami dyni.',
 	hint:''
 },
 {
 	id: 113,
 	type:1,
 	day: 29,
 	name:'Jajecznica z kurkami',
 	desc:'3 jajka, 2  średnie pomidory,  garść świezych kurek, 1 łyżeczka pietruszki, łyżeczka szczypiorku, 1 kromka chleba, 1 łyżka oleju rzepakowego. Jajecznicę przygotować z warzywami i kurkami,  usmażyć. Podawać z chlebem',
 	hint:''
 },
 {
 	id: 114,
 	type:2,
 	day: 29,
 	name:'Kanapka z papryką i jajkiem',
 	desc:'2  kromki chleba pełnoziarnistego, 1 jajko 1 łyżka oliwy/1 łyżeczka masła, 2 łyżeczki pietruszki, sól pieprz, 1 papryka. Paprykę pokroić w paski i wymieszać z pietruszką doprawić solą i pieprzem. Jajka ugotować oddzielnie. Podawać w formie kanapek  posmarowanych masłem pokrojonym ugotownym jajkiem  i sałatką z papryki.',
 	hint:''
 },
 {
 	id: 115,
 	type:3,
 	day: 29,
 	name:'Sałata z kurczakiem',
 	desc:'150g piersi z kurczaka, ½ awokado, 1 pomidor, 1 ogórek, garść sałaty zielonej, garść szpinaku zielonego, kiełki, garśc orzechów(dowolnych), 3 łyżki oliwy z oliwek. Kurczaka można zamarynować w papryce w proszku i następnie usmażyć na niewielkiej ilości albo masła klarowanego(łyżeczka) albo ugotować na parze, następnie pokroić go na kawałki i wymieszać z pokrojonymi warzywami i oliwą.',
 	hint:' Pojawia się swieży szpinak, spróbuj, czy Ci smakuje na surowo.'
 },
 {
 	id: 116,
 	type:4,
 	day: 29,
 	name:'Makaron pełnoziarnisty  z grillowaną cukinią, i masłem orzechowym.',
 	desc:' Porcja makaronu pełnoziarnistego(40g), 1 cukinia zielona,  1 łyżka masła orzechowego, łyżeczka sosu sojowego, Makaron ugotować, w patelnii wok z sosem sojowym poddusić pokrojoną w plastry cukinie, dodać masło orzechowe, następnie ugotowany makaron, podawać posypane parmezanem',
 	hint:''
 },
 {
 	id: 117,
 	type:1,
 	day: 30,
 	name:'Jajecznica z warzywami',
 	desc:'Podprażyć na patelni 1 łyżkę nasion dynii. Pokroić: 1 cukinie, 1 marchewkę, kawałek pora/cebulę. w  miseczce roztrzepać 3 jajka, doprawić bazylią i dodać do warzyw. Można dodać kiełki. Całość wylać na patelnię z 1 łyżką oleju kokosowego. Podpiec z obu stron',
 	hint:''
 },
 {
 	id: 118,
 	type:2,
 	day: 30,
 	name:'Ryż z malinami',
 	desc:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam.',
 	hint:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam. Mogą być inne owoce niż maliny. Nie muszą być te płatki ryżowe, mogą być owsiane, ale spróbuj sobie  bo dosyć szybko się robi i smakują jak ryż, jak by było za suche spokojnie możesz dodać kefir. '
 },
 {
 	id: 119,
 	type:3,
 	day: 30,
 	name:'Wątróbka z porem i orzechami',
 	desc:'Wątróbka(150g) pieczona w poszatkowanym porem ( 1 sztuka) z orzechami (garść),łyżeczką masła klarowanego Wątróbkę upiec w folii z posztkowanym porem, ząbkiem czosnku i masłem.',
 	hint:''
 },
 {
 	id: 120,
 	type:4,
 	day: 30,
 	name:'Ryż smażony z brokułem i marchewką.',
 	desc:'3 łyzki suchego ryżu brązowego. ½ średniego brokuła, 1 marchew starta na tarce o grubych oczkach, łyżeczka masła klarowanego, łyżka jogurtu naturalnego, plaster sera feta. Ryż ugotować oddzielnie, na patelnii na maśle podsmażyć brokuła pokruszonego, startą marchew, pod koniec smażenia, dodać jogurt. Podawać z ryżem i pokruszonym serem feta.',
 	hint:''
 },
  {
 	id: 121,
 	type:1,
 	day: 31,
 	name:'Jajecznica z warzywami',
 	desc:'Podprażyć na patelni 1 łyżkę nasion dynii. Pokroić: 1 cukinie, 1 marchewkę, kawałek pora/cebulę. w  miseczce roztrzepać 3 jajka, doprawić bazylią i dodać do warzyw. Można dodać kiełki. Całość wylać na patelnię z 1 łyżką oleju kokosowego. Podpiec z obu stron',
 	hint:''
 },
 {
 	id: 122,
 	type:2,
 	day: 31,
 	name:'Ryż z malinami',
 	desc:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam.',
 	hint:'Płatki ryżowe (3 łyżki), miseczka malin, 1 łyżka ziaren sezamu, garść orzechów. Płatki ryżowe zalać wodą i odczekać 2 minuty, dodać maliny i sezam. Mogą być inne owoce niż maliny. Nie muszą być te płatki ryżowe, mogą być owsiane, ale spróbuj sobie  bo dosyć szybko się robi i smakują jak ryż, jak by było za suche spokojnie możesz dodać kefir. '
 },
 {
 	id: 123,
 	type:3,
 	day: 31,
 	name:'Wątróbka z porem i orzechami',
 	desc:'Wątróbka(150g) pieczona w poszatkowanym porem ( 1 sztuka) z orzechami (garść),łyżeczką masła klarowanego Wątróbkę upiec w folii z posztkowanym porem, ząbkiem czosnku i masłem.',
 	hint:''
 },
 {
 	id: 124,
 	type:4,
 	day: 31,
 	name:'Ryż smażony z brokułem i marchewką.',
 	desc:'3 łyzki suchego ryżu brązowego. ½ średniego brokuła, 1 marchew starta na tarce o grubych oczkach, łyżeczka masła klarowanego, łyżka jogurtu naturalnego, plaster sera feta. Ryż ugotować oddzielnie, na patelnii na maśle podsmażyć brokuła pokruszonego, startą marchew, pod koniec smażenia, dodać jogurt. Podawać z ryżem i pokruszonym serem feta.',
 	hint:''
 }			
];

export default meals;

/*
,
 {
 	id:,
 	type:,
 	day:,
 	name:,
 	desc:,
 	hint:''
 },
 {
 	id:,
 	type:,
 	day:,
 	name:,
 	desc:,
 	hint:,
 }	
 */