//typ 1:sniadanie, 2:sniadanie2, 3:obiad, 4:obiad2

const posilki = [
 {
 	id:0,
 	typ: 1,
 	dzien: 1,
 	nazwa: 'Jaglanka z pistacjami i malinami',
 	opis: '½ opakowania malin, 3 łyżki kaszy jaglanej, 2 łyżki pistacji. Kaszę ugotuj na miękko na wodzie według instrukcji na opakowaniu. Wyłóż do miski, dodaj pistacje i maliny.',
 	hint: 'Tutaj spokojnie można wykorzystać orzechy nerkowca, migdały, albo orzech brazylijski zamiast pistacji.'
 },
 {
 	id:1,
 	typ: 2,
 	dzien: 1,
 	nazwa: 'Kanapki z awokado i jajkiem',
 	opis: '2 kromki chleba pełnoziarnistego, 1 jajo, Pół awokado, 3 łyżeczki pietruszki, 1 ząbek czosnku, sól pieprz. Awokado rozgnieźć widelcem i połączyć z pietruszką i zgnieczonym czosnkiem, doprawić solą i pieprzem. Jajko ugotować oddzielnie. Podawać w formie kanapek z pastą awokado i ugotownym jajkiem. ',
 	hint: 'Można kaszę jaglaną zamienić na płatki owsiane. '
 },
 {
 	id:2,
 	typ: 3,
 	dzien: 1,
 	nazwa:'Makaron z pesto i orzechami' ,
 	opis: '5 pomidorków koktajowych, garść makaronu pełnoziarnistego (50g), łyżeczka pesto z bazyli zielonego, łyżka orzechów włoskich. Ugotuj makaron, pokrój drobno orzechy, wymieszaj z pesto i pomidorkami, wymieszaj wszystko z makaronem.',
 	hint: 'Można zrobić oczywiście pesto samodzielnie, ale to trochę trwa, są dostępne pesto bez dodatku konserwantów, ważne żeby skład był jak najkrótszy.'
 },
 {
 	id:3,
 	typ: 4,
 	dzien: 1,
 	nazwa: 'Wołowina',
 	opis:'150 g mięsa wołowego (może to być rostbef, może być gulaszowe), 2 marchewki, 1 papryka, 2 łyżeczki masła klarowanego, sałata lodowa, 1 łyżka oliwy z oliwek, garść orzechów nerkowca. Wołowinę pieczemy z marchewkami, papryką pociętą na kawałki i z dodatkiem masła. Podajemy z sałatą lodową wymieszaną z oliwą i orzechami nerkowca',
 	hint: ' Jak podwoisz liczbę składników będzie od razu ugotowane na następny dzień'
 },
 {
 	id: 4,
 	typ: 1,
 	dzien: 2,
 	nazwa: 'Szakszuka',
 	opis: '3 jajka gotowane na pomidorach (2 pomidory obrane ze skórki i pokrojone w kostkę), łyżka masła klarowanego, Mix sałat z rukolą, granatem, startą surową marchewką polane 2 łyżkami oliwy z oliwek.',
 	hint: 'To jest świetne rozwiązanie na śniadanie na ciepło.'
 },
 {
 	id: 5,
 	typ: 2,
 	dzien: 2,
 	nazwa: 'Owsianka z gruszką i imbirem.',
 	opis: '5 łyżek płatków owsianych, ½ szklanki mleczka kokosowego, 2 łyżki płatków migdałowych, 1 średnia gruszka, kawałek imbiru (5g). Płatki owsiane ugotować na wodzie, po ugotowaniu dodać pokrojoną gruszkę, zalać mleczkiem kokosowym i podaawać z płatkami migdałowymi. Imbir zetrzeć na górę.',
 	hint: ' Imbir świeży możemy zastąpić imbirem sproszkowanym, jeśli wolisz inny owoc, spokojnie możesz wymienić. Imbir poprawia trawienie i przyśpiesza metabolizm.'
 },
 {
 	id: 6,
 	typ: 3,
 	dzien: 2,
 	nazwa: 'Indyk pieczony ze szpinakiem' ,
 	opis: ' 1 filet piersi z indyka (150g) usmażony na patelni grillowej, szklanka ugotowanego szpinaku, 1 ząbek czosnku, sól, pieprz, rukola, 1 łyżeczka masła klarowanego. Na patelni rozgrzać masło, wgnieść czosnek i ugotować szpinak. Indyka ugrillować oddzielnie. Podawać z sałatą z oliwą i szpinakiem. ',
 	hint: ''
 },
 {
 	id: 7,
 	typ: 4,
 	dzien: 2,
 	nazwa: 'Sałatka z ciecierzycą ',
 	opis: '3 łyżki ciecierzycy z puszki, albo ugotowanej(wcześniej trzeba namoczyć)  dwie  garści sałaty lodowej,  1 średnia papryka pokrojoną w kostkę. Ciecierzycę ugotować do miękkości, dodać do niej paprykę,  sałatę lodową odrobinę soli himalajskiej, oregano. Skropić oliwą i dokładnie wymieszać. ',
 	hint:''
 }
];

export default posilki;
/*
 {
 	id: 8,
 	typ: 4,
 	dzien: 2,
 	nazwa:,
 	opis:,
 	hint:
 }
 */