const products = [
    { name: "Kit Cronograma capilar (máscara hidrata + ampola)", category: "higiene", type: "cronograma capilar", brand: "Pantene", discountPix: "R$35,10", price: "R$39,00", image: "./higiene/PANTENE KIT SHOT HIDRATA MASCARA 270ML + AMPOLA 15ML.png"},
    { name: "Kit Cronograma capilar (máscara reconstroi + ampola)", category: "higiene", type: "cronograma capilar", brand: "Pantene", discountPix: "R$35,10", price: "R$39,00", image: "./higiene/PANTENE KIT SHOT POTENCIALIZADOR RECONSTROI MASCARA 270ML + AMPOLA 15ML.png"},
    { name: "Condicionador Cachos 175ml", category: "higiene", type: "condicionador", brand: "Pantene", discountPix: "R$12,51", price: "R$13,90", image: "./higiene/PANTENE CONDICIONADOR CACHOS HIDRATA-VITAMINADOS 175ML.png"}, 
    { name: "Shampoo Bambu 200ml ", category: "higiene", type: "shampoo", brand: "Pantene", discountPix: "R$08,55", price: "R$09,50", image: "./higiene/PANTENE PROV BAMBU NUTRI E CRESCE SHAMPOO 200ML.png"},
    { name: "Condicionador Micelar 400ml", category: "higiene", type: "condicionador", brand: "Pantene", discountPix: "R$19,71", price: "R$21,90", image: "./higiene/PANTENE CONDICIONADOR MICICELAR PURIFICA & HIDRATA 400ML.png"}, 
    { name: "Kit Shampoos 200ml", category: "higiene", type: "shampoo", brand: "Head Shoulders", discountPix: "R$22,05", price: "R$24,50", image: "./higiene/KIT HS CRESCIMENTO DESDE A RAIZ VITAMINA E 2 SHAMPOOS DE 200ML.png"},
    { name: "Shampoo Anticaspa 200ml", category: "higiene", type: "shampoo", brand: "Head Shoulders", discountPix: "R$09,90", price: "R$11,00", image: "./higiene/HEAD SHOULDERS SHAMPOO MEN 3 EM 200ML.png"}, 
    { name: "Shampoo Detox capilar 400ml", category: "higiene", type: "shampoo", brand: "Tresemme", discountPix: "R$08,55", price: "R$09,50", image: "./higiene/TRESEMME CONDICIONADOR DETOX CAPILAR 400ML.png"},
    { name: "Escova dental Pack Família", category: "higiene", type: "escova de dente", brand: "Oral-B", discountPix: "R$13,50", price: "R$15,00", image: "./higiene/ESCOVA DENTAL ORAL-B CLEAN PACK FAMILIA 4 ESCOVAS.png"}, 
    { name: "Creme dental 4 em 1 70g", category: "higiene", type: "creme dental", brand: "Oral-B", discountPix: "R$18,00", price: "R$20,00", image: "./higiene/CREME DENTAL ORAL-B 4 EM 1 70G.png"},
    { name: "Creme dental Extra Fresh 70g", category: "higiene", type: "creme dental", brand: "Oral-B", discountPix: "R$04,50", price: "R$05,00", image: "./higiene/CREME DENTAL ORAL-B EXTRA FRESH 70G.png"},
    { name: "Trio Original Morango e Chocolate 20G ", category: "alimentos", type: "cereal", brand: "Trio Original", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO ORIGINAL MORANGO E CHOCOLATE 20G.png"},
    { name: "Trio Original Coco e Chocolate 20G", category: "alimentos", type: "cereal", brand: "Trio Original", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO ORIGINAL COCO E CHOCOLATE 20G.png"},
    { name: "Trio Original Avelã, Castanha e Chocolate 20G ", category: "alimentos", type: "cereal", brand: "Trio Original", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO ORIGINAL AVELA CASTANHA E CHOCOLATE 20G.png"},
    { name: "Trio Original Chantilly 0 Açúcares 18G ", category: "alimentos", type: "cereal", brand: "Trio Original", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO MORANGO E CHANTILLY 0 ACUCARES 18G.png"},
    { name: "Trio Original Banana, Avelã e Morango 20G ", category: "alimentos", type: "cereal", brand: "Trio Original", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO ORIGINAL BANANA AVELA MORANGO  20G.png"},
    { name: "Trio Nuts Amendoas, Castanhas de caju e Chocolate 25G ", category: "alimentos", type: "cereal", brand: "Trio Nuts", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO NUTS AMENDOAS CASTANHA DE CAJU E CHOCOLATE 25G.png"},
    { name: "Trio Granola Banana 25G ", category: "alimentos", type: "cereal", brand: "Trio Granola", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO GRANOLA BANANA 20G.png"},
    { name: "Trio Granola Castanhas 25G ", category: "alimentos", type: "cereal", brand: "Trio Granola", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO GRANOLA CASTANHAS 20G.png"},
    { name: "Trio Granola Chocolate 25G ", category: "alimentos", type: "cereal", brand: "Trio Granola", discountPix: "R$01,80", price: "R$02,00", image: "./alimentos/TRIO GRANOLA CHOCOLATE 20G.png"},
    { name: "Kinder Ovo Meninos 2unid 20G ", category: "alimentos", type: "chocolate", brand: "Kinder OVO", discountPix: "R$15,30", price: "R$17,00", image: "./alimentos/KINDER OVO MENINOS 2UNID 20G.png"},
    { name: "Kinder Ovo Meninas 2unid 20G ", category: "alimentos", type: "chocolate", brand: "Kinder OVO", discountPix: "R$15,30", price: "R$17,00", image: "./alimentos/KINDER OVO MENINAS 2UNID 20G.png"},
    { name: "Licor 43 Diego Zamora 700ml", category: "bebidas", type: "Licor", brand: "Licor 43", discountPix: "R$111,20", price: "R$139,00", image: "./bebidas/LICOR 43 MADE OF SPAIN 700ML.png"},
    { name: "Licor Cacau 700ml", category: "bebidas", type: "Licor", brand: "Marie Brizard", discountPix: "R$40,00", price: "R$50,00", image: "./bebidas/LICOR MARIE BRIZARD CACAU 700ML.png"},
    { name: "Licor Curaçau Blue", category: "bebidas", type: "Licor", brand: "Marie Brizard", discountPix: " R$40,00", price: " R$50,00", image: "./bebidas/LICOR MARIE BRIZARD CURACAU BLUE 700ML.png"},
    { name: "Licor Pêssego 700ml", category: "bebidas", type: "Licor", brand: "Marie Brizard", discountPix: " R$40,00", price: " R$50,00", image: "./bebidas/LICOR MARIE BRIZARD PESSEGO 700ML.png"},
    { name: "Xarope Pêssego 700ml", category: "bebidas", type: "Xarope", brand: "Treisseire", discountPix: "R$48,00", price: "R$60,00", image: "./bebidas/XAROPE TEISSEIRE PESSEGO 700ML.png"},
    { name: "Cachaça 51 Gold 700ml ", category: "bebidas", type: "Cachaça", brand: "51", discountPix: "R$27,92", price: "R$34,90", image: "./bebidas/CACHACA 51 GOLD 700ML.png"},
    { name: "Cachaça Batista Prata 700ml", category: "bebidas", type: "Cachaça", brand: "Batista", discountPix: "R$35,92", price: "44,90", image: "./bebidas/CACHACA BATISTA PRATA 700ML.png"},
    { name: "Cachaça Reserva 51  Carvalho Americano 700ml", category: "bebidas", type: "Cachaça", brand: "51", discountPix: "R$399,20", price: "R$499,00", image: "./bebidas/CACHACA RESERVA 51 CARVALHO AMERICANO 700ML.png"},
    { name: "Cachaça Reserva 51 Rara 700ml", category: "bebidas", type: "Cachaça", brand: "51", discountPix: "R$95,60", price: "R$119,50", image: "./bebidas/CACHACA RESERVA 51 RARA 700ML.png"},
    { name: "Cachaça Reserva 51 Singular 700ml", category: "bebidas", type: "Cachaça", brand: "51", discountPix: "R$95,60", price: "R$119,50", image: "./bebidas/CACHACA RESERVA 51 SINGULAR 700ML.png"},
    { name: "Cachaça Reserva 51 Única 700ml", category: "bebidas", type: "Cachaça", brand: "51", discountPix: "R$95,60", price: "R$119,50", image: "./bebidas/CACHACA RESERVA 51 UNICA 700ML.png"},
    { name: "Cachaça Sepultura 700ml", category: "bebidas", type: "Cachaça", brand: "51", discountPix: "R$63,20", price: "R$79,00", image: "./bebidas/CACHACA SEPULTURA 700ML.png"},
    { name: "Aperitivo Amaro Ramazzotti 700ml", category: "bebidas", type: "Aperitivo", brand: "Ramazzotti", discountPix: "R$71,92", price: "R$89,90", image: "./bebidas/APERITIVO AMARO RAMAZZOTTI 700ML.png"},
    { name: "Aperitivo de Anis Ricard 1L", category: "bebidas", type: "Aperitivo", brand: "Ricard", discountPix: "R$232,00", price: "R$290,00", image: "./bebidas/APERITIVO DE ANIS RICARD 1L.png"},
    { name: "Aperitivo de Vinho Branco Lillet 750ml", category: "bebidas", type: "Aperitivo", brand: "Lillet", discountPix: "R$67,60", price: "R$84,50", image: "./bebidas/APERITIVO DE VINHO BRANCO LILLET 750ML.png"},
    { name: "Aperitivo Fernet Dubar 900ml", category: "bebidas", type: "Aperitivo", brand: "Dubar", discountPix: "R$32,00", price: "R$40,00", image: "./bebidas/APERITIVO FERNET DUBAR 900ML.png"},
    { name: "Aperitivo Rosato Ramazzotti 700ml", category: "bebidas", type: "Aperitivo", brand: "Ramazzotti", discountPix: "R$71,92", price: "R$89,90", image: "./bebidas/APERITIVO ROSATO RAMAZZOTTI 700ML.png"},
    { name: "Gin Orloff 1L", category: "bebidas", type: "Gin", brand: "Orloff", discountPix: "R$23,60", price: "R$29,50", image: "./bebidas/GIN ORLOFF 1L.png"},
    { name: "Gin Bulldog London 750ml", category: "bebidas", type: "Gin", brand: "Bulldog", discountPix: "R$132,00", price: "R$165,00", image: "./bebidas/GIN BULLDOG LONDON 750ML.png"},
    { name: "Composto Negroni Jerez 750ml", category: "bebidas", type: "Composto", brand: "Negroni", discountPix: "R$103,20", price: "R$129,00", image: "./bebidas/COMPOSTO NEGRONI JEREZ 750ML.png"},
    { name: "Gin Plymouth 750ml", category: "bebidas", type: "Gin", brand: "Plymouth Gin", discountPix: "R$167,92", price: "R$209,90", image: "./bebidas/GIN PLYMOUTH 750ML.png"},
    { name: "Gin Amazzoni Rio Negro 750ml", category: "bebidas", type: "Gin", brand: "Amazzoni", discountPix: "R$145,60", price: "R$182,00", image: "./bebidas/GIN AMAZZONI RIO NEGRO 750ML.png"},
    { name: "Gin Amazzoni Maniuara Cítrico 750ml", category: "bebidas", type: "Gin", brand: "Amazzoni", discountPix: "R$124,00", price: "R$155,00", image: "./bebidas/GIN AMAZZONI MANIUARA CITRICO 750ML.png"},
    { name: "Gin Monkey 47 500ml", category: "bebidas", type: "Gin", brand: "Monkey 47", discountPix: "R$227,06", price: "R$283,83", image: "./bebidas/GIN MONKEY 47 500ML.png"},
    { name: "Composto Moscow Mule 750ml", category: "bebidas", type: "Composto", brand: "Moscow", discountPix: "R$120,00", price: "R$150,00", image: "./bebidas/COMPOSTO MOSCOW MULE 750ML.png"},
    { name: "Gin Beefeater Lenon Ginger 750ml", category: "bebidas", type: "Gin", brand: " Beefeater", discountPix: "R$117,23", price: "R$146,54", image: "./bebidas/GIN BEEFEATER LENON GINGER 750ML.png"},
    { name: "Composto Negroni Classico APTK Spirits 750ml", category: "bebidas", type: "Composto", brand: "Negroni", discountPix: "R$103,20", price: "R$129,00", image: "./bebidas/COMPOSTO NEGRONI CLASSICO APTK SPIRITS 750ML.png"},
    { name: "Licor Limoncello APTK 750ml", category: "bebidas", type: "Licor", brand: "Limoncello", discountPix: "R$80,00", price: "R$100,00", image: "./bebidas/LICOR LIMONCELLO APTK 750ML.png"},
    { name: "Rum Cubano Havana Club 3 anos 750ml", category: "bebidas", type: "Rum", brand: "Havana Club", discountPix: "R$59,12", price: "R$73,90", image: "./bebidas/RUM CUBANO HAVANA CLUB 3 ANOS 750ML.png"},
    { name: "Rum Cubano Havana Club 7 anos 750ml", category: "bebidas", type: "Rum", brand: "Havana Club", discountPix: "R$114,40", price: "R$143,00", image: "./bebidas/RUM CUBANO HAVANA CLUB 7 ANOS 750ML.png"},
    { name: "Vodka Absolut 750ml", category: "bebidas", type: "Vodka", brand: "Absolut", discountPix: "R$76,00", price: "R$95,00", image: "./bebidas/VODKA ABSOLUT 750ML.png"},
    { name: "Vodka Absolut 1L", category: "bebidas", type: "Vodka", brand: "Absolut", discountPix: "R$100,80", price: "R$126,00", image: "./bebidas/VODKA ABSOLUT 1l.png"},
    { name: "Vodka Absolut Elix 750ml", category: "bebidas", type: "Vodka", brand: "Absolut", discountPix: "R$111,60", price: "R$139,50", image: "./bebidas/VODKA ABSOLUT ELIX 750ML.png"},
    { name: "Vodka Absolut Vanilia 750ml", category: "bebidas", type: "Vodka", brand: "Absolut", discountPix: "R$88,00", price: "R$110,00", image: "./bebidas/VODKA ABSOLUT VANILIA 750ML.png"},
    { name: "Vodka Orlof 1L", category: "bebidas", type: "Vodka", brand: "Orloff", discountPix: "R$28,00", price: "R$35,00", image: "./bebidas/VODKA ORLOFF 1L.png"},
    { name: "Vodka Skyy 750ml", category: "bebidas", type: "Vodka", brand: "Skyy", discountPix: "R$28,72", price: "R$35,90", image: "./bebidas/VODKA SKYY 750ML.png"},
    { name: "Vodka Svarov 900ml", category: "bebidas", type: "Vodka", brand: "Svarov", discountPix: "R$73,60", price: "R$92,00", image: "./bebidas/VODKA SVAROV 900ML.png"},
    { name: "Whisky Aberlour 14 years 700ml", category: "bebidas", type: "Whisky", brand: "Aberlour", discountPix: "R$319,20", price: "R$399,00", image: "./bebidas/WHISKY ABERLOUR 14 YEARS 700ML.png"},
    { name: "Whisky Ballantines 17 years 750ml ", category: "bebidas", type: "Whisky", brand: "Ballantines", discountPix: "R$283,87", price: "R$354,84", image: "./bebidas/WHISKY BALLANTINES 17 YEARS 750ML.png"},
    { name: "Whisky Chivas 12 years 1L", category: "bebidas", type: "Whisky", brand: "Chivas", discountPix: "R$111,92", price: "R$139,90", image: "./bebidas/WHISKY CHIVAS 12 YEARS 1L.png"},
    { name: "Whisky Glen Moray 12 years 750ml", category: "bebidas", type: "Whisky", brand: "Glen Moray", discountPix: "R$184,00", price: "R$230,00", image: "./bebidas/WHISKY GLEN MORAY 12 YEARS 750ML.png"},
    { name: "Whisky Jameson Sine Metu 1L", category: "bebidas", type: "Whisky", brand: "Jameson", discountPix: "R$128,00", price: "R$160,00", image: "./bebidas/WHISKY JAMESON SINE METU 1L.png"},
    { name: "Whisky Natu Nobilis 250ml", category: "bebidas", type: "Whisky", brand: "Natu Nobilis", discountPix: "R$16,00", price: "R$20,00", image: "./bebidas/WHISKY NATU NOBILIS 250ML.png"},
    { name: "Whisky Passport Scotch 1L", category: "bebidas", type: "Whisky", brand: "Passport Scotch", discountPix: "R$39,20", price: "R$49,00", image: "./bebidas/WHISKY PASSPORT SCOTCH 1L.png"},
    { name: "Whisky Royal Salute 21 years azul 750ml", category: "bebidas", type: "Whisky", brand: "Royal Salute", discountPix: "R$1.673,60", price: "R$2.092,00", image: "./bebidas/WHISKY ROYAL SALUTE 21YEARS AZUL 750ML.png"},
    { name: "Whisky The Glenlivet 18 years 750ml", category: "bebidas", type: "Whisky", brand: "The Glenlivet", discountPix: "R$416,09", price: "R$520,11", image: "./bebidas/WHISKY THE GLENLIVET 18 YEARS 750ML.png"},
    { name: "Vinho Branco Espumante Semi Sec Mumm", category: "bebidas", type: "Espumante", brand: "G.H. Mumm", discountPix: "41,65", price: "59,50", image: "./bebidas/VINHO BRANCO ESPUMANTE DEMI SEC MUMM 750ML.png"},
    { name: "Espumante MOILo Tradition Brut 1,5L ", category: "bebidas", type: "Espumante", brand: "MOILo", discountPix: "R$154,00", price: "R$220,00", image: "./bebidas/ESPUMANTE MOILO TRADITION BRUT 1.5L.png"},
    { name: "Vinho Almaden Cabernet Suave 750ml", category: "bebidas", type: "Vinho", brand: "Almaden", discountPix: "R$38,84", price: "R$55,49", image: "./bebidas/VINHO ALMADEN CABERNET SUAVE 750ML.png"},
    { name: "Vinho Bicentenario Chardonnay 750ml", category: "bebidas", type: "Vinho", brand: "Casadonoso", discountPix: "R$49,60", price: "R$70,85", image: "./bebidas/VINHO BICENTENARIO CHARDONNAY 750ML.png"},
    { name: "Vinho Brasileiro Vinhas Velhas 750ml", category: "bebidas", type: "Vinho", brand: "Vinhas Velhas", discountPix: "R$159,60", price: "R$228,00", image: "./bebidas/VINHO BRASILEIRO VINHAS VELHAS 750ML.png"},
    { name: "Vinho Campo Largo Serra Gaucha 750ml", category: "bebidas", type: "Vinho", brand: "Campo Largo", discountPix: "R$15,40", price: "R$22,00", image: "./bebidas/VINHO CAMPO LARGO SERRA GAUCHA 750ML.png"},
    { name: "Vinho Casadonoso Evolucion Carmenere", category: "bebidas", type: "Vinho", brand: "Casadonoso", discountPix: "R$43,75", price: "R$62,50", image: "./bebidas/VINHO CASADONOSO EVOLUCION CARMENERE 750ML.png"},
    { name: "Vinho Casadonoso Gran Reserva Carmenere Bicentenario 750ml", category: "bebidas", type: "Vinho", brand: "Casadonoso", discountPix: "R$53,83", price: "R$76,90", image: "./bebidas/VINHO CASADONOSO GRAN RESERVA CARMENERE BICENTENARIO 750ML.png"},
    { name: "Vinho Casadonoso Merlot Evolucion 750ml", category: "bebidas", type: "Vinho", brand: "Casadonoso", discountPix: "R$41,93", price: "R$59,90", image: "./bebidas/VINHO CASADONOSO MERLOT EVOLUCION 750ML.png"},
    { name: "Vinho Casadonoso Reserva Sauvignon Blanc 750ml", category: "bebidas", type: "Vinho", brand: "Casadonoso", discountPix: "R$41,93", price: "R$59,90", image: "./bebidas/VINHO CASADONOSO RESERVA SAUVIGNON BLANC 750ML.png"},
    { name: "Vinho Collegiata 2015 750ml", category: "bebidas", type: "Vinho", brand: "Collegiata", discountPix: "R$35,00", price: "R$50,00", image: "./bebidas/VINHO COLLEGIATA 2015 750ML.png"},
    { name: "Vinho Dadivas Tempranillo 750ml", category: "bebidas", type: "Vinho", brand: "Dadivas", discountPix: "R$84,69", price: "R$120,99", image: "./bebidas/VINHO DADIVAS TEMPRANILLO 750ML.png"},
    { name: "Vinho Elos Touringa Tannat 750ml", category: "bebidas", type: "Vinho", brand: "Elos", discountPix: "R$145,60", price: "R$208,00", image: "./bebidas/VINHO ELOS TOURINGA TANNAT 750ML.png"},
    { name: "Vinho Lancatay Cabernet Sauvignon 750ml", category: "bebidas", type: "Vinho", brand: "Lancatay", discountPix: "R$41,93", price: "R$59,90", image: "./bebidas/VINHO LANCATAY CABERNET SAUVIGNON 750ML.png"},
    { name: "Vinho Ldio Carraro Singular Teroldego 750ml", category: "bebidas", type: "Vinho", brand: "Singular", discountPix: "R$145,60", price: "R$208,00", image: "./bebidas/VINHO LDIO CARRARO SINGULAR TEROLDEGO 750ML.png"},
    { name: "Vinho Maison Castel Bordeaux Merlot 2015 750ml", category: "bebidas", type: "Vinho", brand: "Maison Castel", discountPix: "R$48,30", price: "R$69,00", image: "./bebidas/VINHO MAISON CASTEL BORDEAUX MERLOT 2015 750ML.png"},
    { name: "Vinho Maison Castel Cabernet Sauvignon 750ml", category: "bebidas", type: "Vinho", brand: "Maison Castel", discountPix: "R$55,93", price: "R$79,90", image: "./bebidas/VINHO MAISON CASTEL CAB SAUV 750ML.png"},
    { name: "Vinho Maison Castel Merlot 750ml", category: "bebidas", type: "Vinho", brand: "Maison Castel", discountPix: "R$55,93", price: "R$79,90", image: "./bebidas/VINHO MAISON CASTEL MERLOT 750ML.png"},
    { name: "Vinho Maison Castel Syrah 750ml", category: "bebidas", type: "Vinho", brand: "Maison Castel", discountPix: "R$55,93", price: "R$79,90", image: "./bebidas/VINHO MAISON CASTEL SYRAH 750ML.png"},
    { name: "Vinho MOILo Imperial Brandy Solera 750ml", category: "bebidas", type: "Vinho", brand: "MOILo", discountPix: "R$117,53", price: "R$167,90", image: "./bebidas/VINHO MOILO IMPERIAL BRANDY SOLERA 750ML.png"},
    { name: "Vinho Reserva MOILo Cabernet Sauvignon 750ml", category: "bebidas", type: "Vinho", brand: "MOILo", discountPix: "R$61,04", price: "R$87,20", image: "./bebidas/VINHO RESERVA MOILO CABERNET SAUVIGNON 750ML.png"},
    { name: " Vinho Reserva MOILo Merlot 750ml", category: "bebidas", type: "Vinho", brand: "MOILo", discountPix: "R$86,18", price: "R$123,11", image: "./bebidas/VINHO RESERVA MOILO MERLOT 750ML.png"},
    { name: "Vinho Reserva MOILo Tannat 750ml", category: "bebidas", type: "Vinho", brand: "MOILo", discountPix: "R$69,99", price: "R$99,99", image: "./bebidas/VINHO RESERVA MOILO TANNAT 750ML.png"},
    { name: "Vinho Reserva MOILo Tempranillo 750ml", category: "bebidas", type: "Vinho", brand: "MOILo", discountPix: "R$41,93", price: "R$59,90", image: "./bebidas/VINHO RESERVA MOILO TEMPRANILLO 750ML.png"},
    { name: "Vinho Taymente Torrontes 750ml", category: "bebidas", type: "Vinho", brand: "Taymente", discountPix: "R$59,43", price: "R$84,90", image: "./bebidas/VINHO TAYMENTE TORRONTES 750ML.png"},
    { name: "Vinho Tinto Huarpe Maipu Terroir 2010 750ml", category: "bebidas", type: "Vinho", brand: "Huarpe", discountPix: "R$84,35", price: "R$120,50", image: "./bebidas/VINHO TINTO HUARPE MAIPU TERROIR 2010 750ML.png"},
    { name: "Vinho Tinto Huarpe Uco Valley Terroir 2010 750ml", category: "bebidas", type: "Vinho", brand: "Huarpe", discountPix: "R$118,65", price: "R$169,50", image: "./bebidas/VINHO TINTO HUARPE UCO VALLEY TERROIR 2010 750ML.png"},
    { name: "Vinho Tinto Meio Seco Rosso Amabile Tavernello 750ml", category: "bebidas", type: "Vinho", brand: "Tavernello", discountPix: "R$20,93", price: "R$29,90", image: "./bebidas/VINHO TINTO MEIO SECO ROSSO AMABILE TAVERNELLO 750ML.png"},
    { name: "Vinho Tinto Toro Leg Carmenere Reservado 750ml", category: "bebidas", type: "Vinho", brand: "Toro", discountPix: "R$34,30", price: "R$49,00", image: "./bebidas/VINHO TINTO TORO LEG CARMENERE RESERV 750ML.png"},
    { name: "Vinho Toro Centenario Tempranillo Mendoza 750ml", category: "bebidas", type: "Vinho", brand: "Toro", discountPix: "R$34,93", price: "R$49,90", image: "./bebidas/VINHO TORO CENTENARIO TEMPRANILLO MENDOZA 750ML.png"},
    { name: "Vinho Toro Legendario Cabernet Sauvignon 750ml", category: "bebidas", type: "Vinho", brand: "Toro", discountPix: "R$34,90", price: "R$49,00", image: "./bebidas/VINHO TORO LEGENDARIO CABERNET SAUVIGNON 750ML.png"},
    { name: "Vinho Vindima Quorum Lidio Carraro 750ml", category: "bebidas", type: "Vinho", brand: "Lidio Carraro", discountPix: "R$210,00", price: "R$300,00", image: "./bebidas/VINHO VINDIMA QUORUM LIDIO CARRARO 750ML.png"},
    { name: "Vinho Tavernello Tinto 750ml", category: "bebidas", type: "Vinho", brand: "Tavernello", discountPix: "R$39,00", price: "R$55,72", image: "./bebidas/VINHO TAVERNELLO 75OML.png"},
    { name: "Vinho Tavernello Branco 750ml", category: "bebidas", type: "Vinho", brand: "Tavernello", discountPix: "R$39,00", price: "R$55,72", image: "./bebidas/VINHO TAVERNELLO BRANCO 75OML.png"},
    { name: "Pincel Vult 14 - Depositar sombras", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$14,72", price: "R$16,35", image: "./produtos de beleza/PINCEL VULT 14 - DEPOSITAR SOMBRAS.png"},
    { name: "Vult Caixa Display Lápis olho Preto intenso 10x1 1g", category: "beleza", type: "lapis", brand: "Vult", discountPix: "R$155,37", price: "R$172,63", image: "./produtos de beleza/VULT CX DISPLAY LAPIS OLHOS PRETO INTENSO 10x1,1g.png "},
    { name: "Vult Caixa Display Máscara cílios Volume UP 6X10G", category: "beleza", type: "mascara", brand: "Vult", discountPix: "R$147,22", price: "R$163,58", image: "./produtos de beleza/VULT CX DISPLAY MASCARA CILIOS VOLUME UP 6X10G.png"},
    { name: "Vult Hidragloss Rubi 4G", category: "beleza", type: "gloss", brand: "Vult", discountPix: "  R$24,31 ", price: "R$27,01", image: "./produtos de beleza/VULT HIDRAGLOSS RUBI 4G.png"},
    { name: "Australian Gold Protetor corporal Spray gel FPS8 237G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$66,96 ", price: "R$74,40", image: "./produtos de beleza/AG PROTETOR CORPORAL SPRAY GEL FPS8 237G.png"},
    { name: "Niina Secrets Base liquida Hidra glow COR 75", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,07", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 75.png"},
    { name: "Australian Gold Protetor corporal Spray gel FPS30 237G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$72,25", price: "R$80,28", image: "./produtos de beleza/AG PROTETOR CORPORAL SPRAY GEL FPS30 237G.png"},
    { name: "Niina Secrets Base daily tint cream COR 0 25ML", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$54,81", price: "R$60,90", image: "./produtos de beleza/NIINA SCRT BASE DAILY TINT CREAM COR 0 25ML.png"},
    { name: "Australian Gold Acelerador clear 237G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$77,53", price: "R$86,14", image: "./produtos de beleza/AG ACELERADOR CLEAR 237G.png"},
    { name: "Australian Gold Acelerador com Instant bronzer 237G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$78,41", price: "R$87,12", image: "./produtos de beleza/AG ACELERADOR COM INSTANT BRONZER 237G.png"},
    { name: "Australian Gold Acelerador Intensifer 237G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$80,99", price: "R$89,99", image: "./produtos de beleza/AG ACELERADOR INTENSIFER 237G.png"},
    { name: "Australian Gold Acelerador Spray gel clear 237g V2", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$78,41", price: "R$87,12", image: "./produtos de beleza/AG ACELERADOR SPR GEL CLEAR 237g V2.png"},
    { name: "Australian Gold Óleo seco Spray intensifer 237ml V2", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$83,70", price: "R$93,00", image: "./produtos de beleza/AG OLEO SECO SPRAY INTENSIFIER 237ml V2.png"},
    { name: "Australian Gold Kakadu Loção Autobronzeadora 120G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$51,09", price: "R$56,77", image: "./produtos de beleza/AG KAKADU LOCAO AUTOBRONZEADORA 120G.png"},
    { name: "Australian Gold Pós sol Soothing aloe 125G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$39,64", price: "R$44,04", image: "./produtos de beleza/AG POS SOL SOOTHING ALOE 125G.png"},
    { name: "Australian Gold Protetor corporal gel creme FPS30 120G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$39,64", price: "R$44,04", image: "./produtos de beleza/AG PROTETOR CORPORAL GEL CREME FPS 30 120G.png"},
    { name: "Australian Gold Protetor corporal Gel Creme kids FPS 70 120G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$70,48", price: "R$78,32", image: "./produtos de beleza/AG PROTETOR CORPORAL GEL CREME KIDS FPS 70 120G.png"},
    { name: "Australian Gold Protetor corporal Spray gel FPS15 125G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$44,05", price: "R$48,94", image: "./produtos de beleza/AG PROTETOR CORPORAL SPRAY GEL FPS15 125G.png"},
    { name: "Australian Gold Protetor corporal Spray gel FPS15 237G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$69,60", price: "R$77,34", image: "./produtos de beleza/AG PROTETOR CORPORAL SPRAY GEL FPS15 237G.png"},
    { name: "Australian Gold Protetor corporal Spray gel FPS30 125G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$48,45", price: "R$53,83", image: "./produtos de beleza/AG PROTETOR CORPORAL SPRAY GEL FPS30 125G.png"},
    { name: "Australian Gold Protetor corporal Spray gel FPS8 125G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$42,29", price: "R$46,98", image: "./produtos de beleza/AG PROTETOR CORPORAL SPRAY GEL FPS8 125G.png"},
    { name: "Australian Gold Protetor solar facial com Cor Gel creme cor 02 FPS60 40G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$61,66 ", price: "R$68,52", image: "./produtos de beleza/AG PROTETOR SOLAR FACIAL COM COR GEL CREME COR 02 FPS 60 40G.png"},
    { name: "Australian Gold Protetor solar facial com Cor Gel creme cor 03 FPS60 40G", category: "beleza", type: "protetor", brand: "Australian Gold", discountPix: "R$61,66 ", price: "R$68,52", image: "./produtos de beleza/AG PROTETOR SOLAR FACIAL COM COR GEL CREME COR 03 FPS 60 40G.png"},
    { name: "Bio OIL Loção hidratante corporal 175ML", category: "beleza", type: "hidratante", brand: "Bio-OIL", discountPix: "R$46,04", price: "R$51,16", image: "./produtos de beleza/BIO OIL LOCAO HIDRATANTE CORPORAL 175ML.png"},
    { name: "Bio OIL Loção hidratante corporal 250ML", category: "beleza", type: "hidratante", brand: "Bio-OIL", discountPix: "R$64,30", price: "R$71,44", image: "./produtos de beleza/BIO OIL LOCAO HIDRATANTE CORPORAL 250ML.png"},
    { name: "Bio OIL Óleo corporal com Purcellin oil 200ML", category: "beleza", type: "oleo", brand: "Bio-OIL", discountPix: "R$104,27", price: "R$115,85", image: "./produtos de beleza/BIO OIL OLEO CORPORAL COM PURCELLIN OIL 200ML.png"},
    { name: "Bio OIL Óleo corporal Natural 125ML", category: "beleza", type: "oleo", brand: "Bio-OIL", discountPix: "R$99,92", price: "R$111,02", image: "./produtos de beleza/BIO OIL OLEO CORPORAL NATURAL 125ML.png"},
    { name: "Dr. Jones Balm para barbear mMltif shav/sol 100ML", category: "beleza", type: "hidratante", brand: "Dr. Jones", discountPix: "R$48,30 ", price: "R$53,66", image: "./produtos de beleza/DRJ BALM PARA BARBEAR MULTIF SHAV_SOL 100ml.png"},
    { name: "Dr. Jones Shampoo Anticaspa Caspa control 200ML", category: "beleza", type: "shampoo", brand: "Dr. Jones", discountPix: "R$52,69 ", price: "R$58,55", image: "./produtos de beleza/DRJ SHAMPOO ANTICASPA CASPA CONTROL 200ml.png"},
    { name: "Dr. Jones Shampoo Isotonic shower Gel barb/cab/cp 250ml", category: "beleza", type: "shampoo", brand: "Dr. Jones", discountPix: "R$35,97 ", price: "R$39,97", image: "./produtos de beleza/DRJ SHAMPOO ISOTONIC SHOWER GEL BARB_CAB_CP 250ml.png"},
    { name: "Eudora Baby Água colonia 100ml V2", category: "beleza", type: "hidratante", brand: "Eudora", discountPix: "R$72,24 ", price: "R$80,26", image: "./produtos de beleza/EUDORA BABY AGUA COLONIA 100ml V2.png"},
    { name: "Eudora Baby Condicionador 200ML", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$31,92 ", price: "R$35,46", image: "./produtos de beleza/EUDORA BABY CONDICIONADOR 200ML.png"},
    { name: "Eudora Baby Loção Hidratante corporal 200ML", category: "beleza", type: "hidratante", brand: "Eudora", discountPix: "R$41,15 ", price: "R$45,72", image: "./produtos de beleza/EUDORA BABY LOCAO HIDRATANTE CORPORAL 200ML.png"},
    { name: "Eudora Baby Sabonete líquido", category: "beleza", type: "sabonete", brand: "Eudora", discountPix: "R$35,07", price: "R$38,96", image: "./produtos de beleza/EUDORA BABY SABONETE LIQUIDO 200ML.png"},
    { name: "Eudora Baby Shampoo 200ML", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$30,25 ", price: "R$33,59", image: "./produtos de beleza/EUDORA BABY SHAMPOO 200ML.png"},
    { name: "Eudora Kids Shampoo Brilho das estrelas 200ML", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$28,55 ", price: "R$31,72", image: "./produtos de beleza/EUDORA KIDS SHAMPOO BRILHO DAS ESTRELAS 200ML.png"},
    { name: "Instance Creme para pentear Acaí e bambu 200ml", category: "beleza", type: "creme", brand: "Instance", discountPix: "R$33,59 ", price: "R$37,32", image: "./produtos de beleza/INSTANCE CREME PARA PENTEAR ACAI E BAMBU 200ml.png"},
    { name: "Instance Hidratante de mãos Castanhas 30G", category: "beleza", type: "hidratante", brand: "Instance", discountPix: "R$17,63", price: "R$19,59", image: "./produtos de beleza/INSTANCE HIDR DE MAOS CASTANHAS 30G.png"},
    { name: "Instance Hidratante de mãos Leite de avelã 30G", category: "beleza", type: "hidratante", brand: "Instance", discountPix: "R$18,47", price: "R$20,52", image: "./produtos de beleza/INSTANCE HIDR DE MAOS LEITE DE AVELA 30G.png"},
    { name: "Instance Hidratante de mãos Karite 30G", category: "beleza", type: "hidratante", brand: "Instance", discountPix: "R$18,47", price: "R$20,52", image: "./produtos de beleza/INSTANCE HIDRATANTE DE MAOS KARITE 30G.png"},
    { name: "Instance Máscara capilar Açaí e bambu 200G", category: "beleza", type: "mascara", brand: "Instance", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/INSTANCE MASCARA CAPILAR ACAI E BAMBU 200G.png"},
    { name: "Instance Sabonete em Barra Karita 5x85G", category: "beleza", type: "sabonete", brand: "Instance", discountPix: "R$29,40", price: "R$32,66", image: "./produtos de beleza/INSTANCE SABONETE EM BARRA KARITE 5x85G.png"},
    { name: "La piel Hidratante para mãos Ambar dourado FPS15 50G", category: "beleza", type: "hidratante", brand: "La piel", discountPix: "R$27,71", price: "R$30,79", image: "./produtos de beleza/LA PIEL HIDRATANTE PARA MAOS AMBAR DOURADO FPS15 50G.png"},
    { name: "La piel Hidratante para mãos Lotus do oriente FPS15 50G", category: "beleza", type: "hidratante", brand: "La piel", discountPix: "R$27,71", price: "R$30,79", image: "./produtos de beleza/LA PIEL HIDRATANTE PARA MAOS LOTUS DO ORIENTE FPS15 50G.png"},
    { name: "La piel Hidratante para mãos Tâmaras egipcias FPS15 50G", category: "beleza", type: "hidratante", brand: "La piel", discountPix: "R$27,71", price: "R$30,79", image: "./produtos de beleza/LA PIEL HIDRATANTE PARA MAOS TAMARAS EGIPCIAS FPS15 50G.png"},
    { name: "La piel Sabonete líquido corporal Ambar dourado 200ML", category: "beleza", type: "sabonete", brand: "La piel", discountPix: "R$33,76", price: "R$37,51", image: "./produtos de beleza/LA PIEL SABONETE LIQUIDO CORPORAL AMBAR DOURADO 200ML.png"},
    { name: "La piel Sabonete líquido corporal Lotus do oriente 200ML", category: "beleza", type: "sabonete", brand: "La piel", discountPix: "R$33,76", price: "R$37,51", image: "./produtos de beleza/LA PIEL SABONETE LIQUIDO CORPORAL LOTUS DO ORIENTE 200ML.png"},
    { name: "La piel Sabonete líquido corporal Esfoliante Tâmaras egipcias 200ML", category: "beleza", type: "hidratante", brand: "La piel", discountPix: "R$37,46", price: "R$41,62", image: "./produtos de beleza/LA PIEL SABONETE LIQUIDO ESFOLIANTE TAMARAS EGIPCIAS 200ML.png"},
    { name: "Niina Secrets Base Daily tint cream cor 100 25ML", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$54,81", price: "R$60,90", image: "./produtos de beleza/NIINA SCRT BASE DAILY TINT CREAM COR 100 25ML.png"},
    { name: "Niina Secrets base daily tint cream cor 85 25ML", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$54,81", price: "R$60,90", image: "./produtos de beleza/NIINA SCRT BASE DAILY TINT CREAM COR 85 25ML.png"},
    { name: "Niina Secrets base liquita hidra glow cor 100", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$65,44", price: "R$72,72", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 100.png"},
    { name: "Niina Secrets base liquita hidra glow cor 40", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,08", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 40.png"},
    { name: "Niina Secrets base liquita hidra glow cor 45", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,08", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 45.png"},
    { name: "Niina Secrets base liquita hidra glow cor 55", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,08", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 55.png"},
    { name: "Niina Secrets base liquita hidra glow cor 65", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,08", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 65.png"},
    { name: "Niina Secrets base liquita hidra glow cor 70", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,08", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 70.png"},
    { name: "Niina Secrets base liquita hidra glow cor 95", category: "beleza", type: "base", brand: "Niina Secrets", discountPix: "R$67,08", price: "R$74,54", image: "./produtos de beleza/NIINA SCRT BASE LIQUIDA HIDRA GLOW COR 95.png"},
    { name: "Niina Secrets desodorante colonia bloom 100ml", category: "beleza", type: "desodorante", brand: "Niina Secrets", discountPix: "R$130,90", price: "R$145,45", image: "./produtos de beleza/NIINA SCRT DESODORANTE COLONIA BLOOM 100ml.png"},
    { name: "Niina Secrets estojo mini/24", category: "beleza", type: "hidratante", brand: "Niina Secrets", discountPix: "R$114,23", price: "R$126,92", image: "./produtos de beleza/NIINA SCRT ESTOJO MINI_24.png"},
    { name: "Niina Secrets iluminador power glow rose 10g", category: "beleza", type: "iluminador", brand: "Niina Secrets", discountPix: "R$71,18 ", price: "R$79,09", image: "./produtos de beleza/NIINA SCRT ILUMINADOR POWER GLOW ROSE 10g.png"},
    { name: "Niina Secrets palette sombra top secrets 5,6G", category: "beleza", type: "sombra", brand: "Niina Secrets", discountPix: "R$108,81", price: "R$120,90", image: "./produtos de beleza/NIINA SCRT PALETTE SOMBRA TOP SECRETS 5,6G.png"},
    { name: "Niina Secrets pincel multifuncional", category: "beleza", type: "pincel", brand: "Niina Secrets", discountPix: "R$40,98", price: "R$45,53", image: "./produtos de beleza/NIINA SCRT PINCEL MULTIFUNCIONAL.png"},
    { name: "Niina Secrets primer facial", category: "beleza", type: "hidratante", brand: "Niina Secrets", discountPix: "R$62,99", price: "R$69,99", image: "./produtos de beleza/NIINA SCRT PRIMER FACIAL.png"},    
    { name: "Pampers refil shampoo glicerina 350ml", category: "beleza", type: "shammpoo", brand: "Pampers", discountPix: "R$23,18", price: "R$25,76", image: "./produtos de beleza/PAMPERS REFIL SHAMPOO GLICERINA 350ml.png"},
    { name: "Pincel vult 01 - labios", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$16,19", price: "R$17,99", image: "./produtos de beleza/PINCEL VULT 01 - LABIOS.png"},
    { name: "Pincel vult 05 - corretivo", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$13,23", price: "R$14,70", image: "./produtos de beleza/PINCEL VULT 05 - CORRETIVO.png"},
    { name: "Pincel vult 16 - flat chanfrado", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$14,72", price: "R$16,35", image: "./produtos de beleza/PINCEL VULT 16 - FLAT CHANFRADO.png"},
    { name: "Pincel vult 17 - duo fiber pequeno", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$26,55", price: "R$29,50", image: "./produtos de beleza/PINCEL VULT 17 - DUO FIBER PEQUENO.png"},
    { name: "Pincel vult 19 - gota", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$14,72", price: "R$16,35", image: "./produtos de beleza/PINCEL VULT 19 - GOTA.png"},
    { name: "Pincel vult 20 - kabuki", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$35,42", price: "R$39,35", image: "./produtos de beleza/PINCEL VULT 20 - KABUKI.png"},
    { name: "Pincel vult 22 - flat para base", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$22,10", price: "R$24,56", image: "./produtos de beleza/PINCEL VULT 22 - FLAT P_ BASE.png"},
    { name: "Pincel vult 23 - de precisao conico", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$14,72", price: "R$16,35", image: "./produtos de beleza/PINCEL VULT 23 - DE PRECISAO CONICO.png"},
    { name: "Pincel vult 24 - de precisao arred", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$14,72", price: "R$16,35", image: "./produtos de beleza/PINCEL VULT 24 - DE PRECISAO ARRED.png"},
    { name: "Pincel vult 25 - de silicone para olho", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$11,76", price: "R$13,06", image: "./produtos de beleza/PINCEL VULT 25 - DE SILICONE P_ OLHOS.png"},
    { name: "Pincel vult 26 - escova oval", category: "beleza", type: "pincel", brand: "Vult", discountPix: "R$36,10", price: "R$40,11", image: "./produtos de beleza/PINCEL VULT 26 - ESCOVA OVAL.png"},
    { name: "QDB creme hidratante maos 7belo 50g", category: "beleza", type: "hidratante", brand: "Quem Disse, Berenice?", discountPix: "R$22,91", price: "R$25,45", image: "./produtos de beleza/QDB CREME HIDRATANTE MAOS 7BELO 50g.png"},
    { name: "Siage agua lamelar resgate imediato 150ml", category: "beleza", type: "hidratante", brand: "Siage", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE AGUA LAMELAR RESGATE IMEDIATO 150ml.png"},
    { name: "SIAGE ampola cap queratina liq reconstroi os fios 60ml", category: "beleza", type: "hidratante", brand: "Siage", discountPix: "R$41,15", price: "R$45,72", image: "./produtos de beleza/SIAGE AMPOLA CAP QUERATINA LIQ RECONSTROI OS FIOS 60ml.png"},
    { name: "Siage booster acidcolor hair plastia 100Ml", category: "beleza", type: "hidratante", brand: "Siage", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE BOOSTER ACIDCOLOR HAIR PLASTIA 100ML.png"},
    { name: "Siage cc cream cap reconstroi os fios 60ML", category: "beleza", type: "hidratante", brand: "Siage", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE CC CREAM CAP RECONSTROI OS FIOS V3 100ml.png"},
    { name: "Siage condicionador acelera o crescimento V3 200ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR ACELERA O CRESCIMENTO V3 200ml.png"},
    { name: "Siage condicionador cauterizacao dos fios V3 200ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR CAUTERIZACAO DOS FIOS V3 200ml.png"},
    { name: "Siage condicionador cauterizacao dos fios 200ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR CAUTERIZACAO DOS LISOS 200ML.png"},
    { name: "Siage condicionador cica therapy 200ML", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR CICA THERAPY 200ML.png"},
    { name: "Siage condicionador cica therapy 400ML", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE CONDICIONADOR CICA THERAPY 400ml.png"},
    { name: "Siage condicionador combate o frizz 200ml rpck", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR COMBATE O FRIZZ 200ML RPCK.png"},
    { name: "Siage condicionador glow expert 200ML", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR GLOW EXPERT 200ML.png"},
    { name: "Siage condicionador hair plastia 200Ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR HAIR PLASTIA 200ML.png"},
    { name: "Siage condicionador hidratacao micelar 200Ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR HIDRATACAO MICELAR 200ML.png"},
    { name: "Siage condicionador liso intenso v3 200ML", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR LISO INTENSO V3 200ml.png"},
    { name: "Siage condicionador loiro expert V3 200ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR LOIRO EXPERT V3 200ml.png"},
    { name: "Siage condicionador nutri diamond 200ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR NUTRI DIAMOND 200ML.png"},
    { name: "Siage condicionador nutri oleos poderosos 200ml", category: "beleza", type: "condicionador", brand: "Siage", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR NUTRI OLEOS PODEROSOS 200ML.png"},
    { name: "Condicionador Eudora Regeneração Pos Quimica 1L", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$112,56", price: "R$152,06", image: "./produtos de beleza/SIAGE CONDICIONADOR REGEN POS QUIMICA 1000ML.png"},
    { name: "Condicionador Regeneração Pos Quimica 200ml", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR REGEN POS QUIMICA V3 200ml.png"},
    { name: "Condicionador Eudora Resgate Imediato 200ml", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR RESGATE IMEDIATO 200ml B2B.png"},
    { name: "Condicionador Eudora Revela Cachos 200ml", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$46,19", price: "R$51,32", image: "./produtos de beleza/SIAGE CONDICIONADOR REVELA CACHOS V3 200ml.png"},
    { name: "Creme Defrizante Eudora Siage Combate o Frizz 100ML", category: "beleza", type: "Creme", brand: "Eudora", discountPix: "R$41,15", price: "R$45,72", image: "./produtos de beleza/SIAGE CREME DEFRIZANTE COMBATE O FRIZZ 100ML RPCK.png"},
    { name: "Creme Pentear Eudora Revela Cachos 500g", category: "beleza", type: "Creme", brand: "Eudora", discountPix: "R$59,64", price: "R$66,26", image: "./produtos de beleza/SIAGE CREME PENTEAR REVELA CACHOS V3 500g.png"},
    { name: "Elixir Eudora Overnight Nutri Oleos Poderosos", category: "beleza", type: "Creme", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE ELIXIR OVERNIGHT NUTRI OLEOS PODEROSOS.png"},
    { name: "Kit Eudora Pro Cronology Hidratação/Nutrição/Reconstrução", category: "beleza", type: "Kit", brand: "Eudora", discountPix: "R$120,12", price: "R$133,46", image: "./produtos de beleza/SIAGE KIT PRO CRONOLOGY HID_NUTR_RECONS.png"},
    { name: "Leave In Capilar Eudora Cauterizacao Dos Lisos 100ML", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR CAUTERIZACAO DOS LISOS 100ML.png"},
    { name: "Leave In Capilar Eudora Concentrado Cica Therapy 100ML", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR CONCENTRADO CICA THERAPY 100ML.png"},
    { name: "Leave In Capilar Eudora Disciplinant Glow Expert 100ML", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR DISCIPLINANT GLOW EXPERT 100ML.png"},
    { name: "Leave In Capilar Eudora Liso Intenso 100ml", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR LISO INTENSO V3 100ml.png"},
    { name: "Leave In Capilar Eudora Pro Cronology 100ml", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$59,64", price: "R$66,26", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR PRO CRONOLOGY 100ml.png"},
    { name: "Leave In Capilar Eudora Resgate Imediato 100ML", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$55,43", price: "R$61,59", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR RESGATE IMEDIATO 100ML.png"},
    { name: "Leave In Capilar Eudora Spray Resgate Imediato 100ML", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$55,43", price: "R$61,59", image: "./produtos de beleza/SIAGE LEAVE IN CAPILAR SPRAY RESGATE IMEDIATO 100ML.png"},
    { name: "Leave In Capilar Eudora Hidratacao Micelar 100ML", category: "beleza", type: "Leave in", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE LEAVE IN CAPLIAR HIDRATACAO MICELAR 100ML.png"},
    { name: "Magic Spray Eudora Combate o Frizz 50ML", category: "beleza", type: "Spray", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE MAGIC SPRAY COMBATE O FRIZZ 50ML.png"},
    { name: "Mascara Capilar Eudora Acelera o Crescimento 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR ACELERA O CRESCIMENTO V3 250g B2B.png"},
    { name: "Mascara Capilar Eudora Cauterizacao dos Lisos 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR CAUTERIZACAO DOS LISOS 250G.png"},
    { name: "Mascara Capilar Eudora Cica Therapy 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR CICA THERAPY 250G.png"},
    { name: "Mascara Capilar Eudora Combate o Frizz 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR COMBATE O FRIZZ 250G.png"},
    { name: "Mascara Capilar Eudora Glow Expert 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR GLOW EXPERT 250G.png"},
    { name: "Mascara Capilar Eudora Hair Plastia 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR HAIR PLASTIA 250g.png"},
    { name: "Mascara Capilar Eudora Hidratacao Crono Capilar 8x60ml CX", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$221,70", price: "R$246,33", image: "./produtos de beleza/SIAGE MASCARA CAPILAR HIDRATACAO CRONO CAPILAR 8x60ML CX.png"},
    { name: "Mascara Capilar Eudora Hidratacao Micelar 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR HIDRATACAO MICELAR 250G.png"},
    { name: "Mascara Capilar Eudora Liso Intenso 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR LISO INTENSO V3 250g.png"},
    { name: "Mascara Capilar Eudora Loiro Expert 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR LOIRO EXPERT V3 250g.png"},
    { name: "Mascara Capilar Eudora Nutri Oleos Poderosos 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR NUTRI OLEOS PODEROSOS 250G.png"},
    { name: "Mascara Capilar Eudora Nutri Rose 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR NUTRI ROSE V3 250g.png"},
    { name: "Mascara Capilar Eudora Nutricao Crono Capilar 8x60ml CX", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$221,70", price: "R$246,33", image: "./produtos de beleza/SIAGE MASCARA CAPILAR NUTRICAO CRONO CAPILAR 8x60ML CX.png"},
    { name: "Mascara Capilar Eudora Reconstroi os Fios 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR RECONSTROI OS FIOS V3 250g.png"},
    { name: "Mascara Capilar Eudora Reconstrucao Crono Capilar 8x60ml CX", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$221,70", price: "R$246,33", image: "./produtos de beleza/SIAGE MASCARA CAPILAR RECONSTRUCAO CRONO CAPILAR 8x60ML CX.png"},
    { name: "Mascara Capilar Eudora Regeneração Pos Quimica 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR REGEN POS QUIMICA V3 250g.png"},
    { name: "Mascara Capilar Eudora Resgate Imediato 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR RESGATE IMEDIATO 250g B2B.png"},
    { name: "Mascara Capilar Eudora Revela Cachos 250g", category: "beleza", type: "Máscara capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE MASCARA CAPILAR REVELA CACHOS V3 250g B2B.png"},
    { name: "Condicionador Eudora Men Hidratacao Intensa 200ml", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$36,96", price: "R$41,06", image: "./produtos de beleza/SIAGE MEN CONDICIONADOR HIDRATACAO INTENSA 200ML.png"},
    { name: "Shampoo Eudora Men Anticaspa 250ml", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$35,27", price: "R$39,19", image: "./produtos de beleza/SIAGE MEN SHAMPOO ANTICASPA 250ml V2.png"},
    { name: "Shampoo Eudora Men Combate a Caspa 250ml", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$35,27", price: "R$39,19", image: "./produtos de beleza/SIAGE MEN SHAMPOO COMBATE A CASPA 250ML.png"},
    { name: "Shampoo Eudora Men Estimula o Crescimento 250ml", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$35,27", price: "R$39,19", image: "./produtos de beleza/SIAGE MEN SHAMPOO ESTIMULA O CRESCIMENTO 250ML.png"},
    { name: "Shampoo Eudora Men Limpeza Purificante 250ML", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$35,27", price: "R$39,19", image: "./produtos de beleza/SIAGE MEN SHAMPOO LIMPEZA PURIFICANTE 250ML.png"},
    { name: "Tonico Capilar Eudora Men 100ml", category: "beleza", type: "Tônico capilar", brand: "Eudora", discountPix: "R$59,64", price: "R$66,26", image: "./produtos de beleza/SIAGE MEN TONICO CAPILAR 100ML.png"},
    { name: "Oleo Capilar Eudora Reconstroi os Fios 60ml", category: "beleza", type: "Oléo capilar", brand: "Eudora", discountPix: "R$64,68", price: "R$71,86", image: "./produtos de beleza/SIAGE OLEO CAPILAR RECONSTROI OS FIOS V3 60ml.png"},
    { name: "Shampoo Eudora Man Kit Com 2", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$55,43", price: "R$61,59", image: "./produtos de beleza/SIAGE PMPCK SH MEN.png"},
    { name: "Shampoo E Condicionador Eudora Glow Expert", category: "beleza", type: "Kit", brand: "Eudora", discountPix: "R$68,87", price: "R$76,52", image: "./produtos de beleza/SIAGE PMPCK SH_COND GLOW EXPERT.png"},
    { name: "Shampoo E Condicionador Eudora Hair Plastia", category: "beleza", type: "Kit", brand: "Eudora", discountPix: "R$68,87", price: "R$76,52", image: "./produtos de beleza/SIAGE PMPCK SH_COND HAIR PLASTIA.png"},
    { name: "Shampoo E Condicionador Eudora Liso Intenso", category: "beleza", type: "Shampoo e Condicionador", brand: "Eudora", discountPix: "R$68,87", price: "R$76,52", image: "./produtos de beleza/SIAGE PMPCK SH_COND LISO INTENSO.png"},
    { name: "Shampoo E Condicionador Eudora Leav Nutri Rose", category: "beleza", type: "Kit", brand: "Eudora", discountPix: "R$81,47", price: "R$90,52", image: "./produtos de beleza/SIAGE PMPCK SH_COND_LEAV NUTRI ROSE.png"},
    { name: "Shampoo E Mascara Eudora Cica Therapy", category: "beleza", type: "Kit", brand: "Eudora", discountPix: "R$99,96", price: "R$111,06", image: "./produtos de beleza/SIAGE PMPCK SH_MASC CICA THERAPY.png"},
    { name: "Refil Condicionador Eudora Nutri Rose 400ml", category: "beleza", type: "condicionador", brand: "Eudora", discountPix: "R$50,39", price: "R$55,99", image: "./produtos de beleza/SIAGE REFIL CONDICIONADOR NUTRI ROSE 400ML.png"},
    { name: "Refil Shampoo Eudora Nutri Rose 400ml", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$48,71", price: "R$54,12", image: "./produtos de beleza/SIAGE REFIL SHAMPOO NUTRI ROSE 400ml.png"},
    { name: "Shampoo Eudora Acelera o Crescimento 250ml", category: "beleza", type: "Shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO ACELERA O CRESCIMENTO V3 250ml.png"},
    { name: "Siage shampoo cauterizacao dos fios V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO CAUTERIZACAO DOS FIOS V3 250ml.png"},
    { name: "Siage shampoo cauterizacao dos lisos V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO CAUTERIZACAO DOS LISOS 250ML.png"},
    { name: "Siage shampoo cica therapy 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO CICA THERAPY 250ML.png"},
    { name: "Siage shampoo cica therapy 400ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$59,64", price: "R$66,26", image: "./produtos de beleza/SIAGE SHAMPOO CICA THERAPY 400ml.png"},
    { name: "Siage shampoo combate o frizz 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO COMBATE O FRIZZ 250ML.png"},
    { name: "Siage shampoo desmrl loiro expert V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO DESMRL LOIRO EXPERT V3 250ml.png"},
    { name: "Siage shampoo glow expert 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO GLOW EXPERT 250ML.png"},
    { name: "Siage shampoo hair plastia 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO HAIR PLASTIA 250ml.png"},
    { name: "Siage shampoo hidratacao micelar 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO HIDRATACAO MICELAR 250ML.png"},
    { name: "Siage shampoo liso intenso V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO LISO INTENSO V3 250ml.png"},
    { name: "Siage shampoo nutri oleos poderosos 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO NUTRI OLEOS PODEROSOS 250ML.png"},
    { name: "Siage shampoo nutri rose 1000ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$107,52", price: "R$119,46", image: "./produtos de beleza/SIAGE SHAMPOO NUTRI ROSE 1000ml.png"},
    { name: "Siage shampoo nutri rose 400ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$59,64", price: "R$66,26", image: "./produtos de beleza/SIAGE SHAMPOO NUTRI ROSE 400ML.png"},
    { name: "Siage shampoo nutri rose V3 250ml B2B", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO NUTRI ROSE V3 250ml B2B.png"},
    { name: "Siage shampoo pro cronology 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO PRO CRONOLOGY 250ml.png"},
    { name: "Siage shampoo reconstroi os fios 400Ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$59,64", price: "R$66,26", image: "./produtos de beleza/SIAGE SHAMPOO RECONSTROI OS FIOS 400ML.png"},
    { name: "Siage shampoo reconstroi os fios V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO RECONSTROI OS FIOS V3 250ml.png"},
    { name: "Siage shampoo regen pos quimica 1000ml V2", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$107,52", price: "R$119,46", image: "./produtos de beleza/SIAGE SHAMPOO REGEN POS QUIMICA 1000ml V2.png"},
    { name: "Siage shampoo regen pos quimica V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO REGEN POS QUIMICA V3 250ml.png"},
    { name: "Siage shampoo resgate imediato 250ml B2B", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO RESGATE IMEDIATO 250ml B2B.png"},
    { name: "Siage shampoo revela os cachos V3 250ml", category: "beleza", type: "shampoo", brand: "Eudora", discountPix: "R$44,52", price: "R$49,46", image: "./produtos de beleza/SIAGE SHAMPOO REVELA OS CACHOS V3 250ml.png"},
    { name: "Siage spray serum capilar cauterizacao dos fios V3 60ml", category: "beleza", type: "spray", brand: "Eudora", discountPix: "R$62,99", price: "R$69,99", image: "./produtos de beleza/SIAGE SPRAY SERUM CAPILAR CAUTERIZACAO DOS FIOS V3 60ml.png"},
    { name: "Vult base liquida matte hidraluronic N005 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$30,88", price: "R$34,31", image: "./produtos de beleza/VULT BASE LIQUIDA MATTE HIDRALURONIC N005 26ML.png"},
    { name: "Vult base liquida matte hidraluronic N0095 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$30,88", price: "R$34,31", image: "./produtos de beleza/VULT BASE LIQUIDA MATTE HIDRALURONIC N090 26ML.png"},
    { name: "Vult base liquida matte hidraluronic Q075 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$30,88", price: "R$34,31", image: "./produtos de beleza/VULT BASE LIQUIDA MATTE HIDRALURONIC Q075 26ML.png"},
    { name: "Vult base liquida matte hidraluronic Q105 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$30,88", price: "R$34,31", image: "./produtos de beleza/VULT BASE LIQUIDA MATTE HIDRALURONIC Q105 26ML.png"},
    { name: "Vult base liquida matte hidraluronic Q115 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$30,88", price: "R$34,31", image: "./produtos de beleza/VULT BASE LIQUIDA MATTE HIDRALURONIC Q115 26ML.png"},
    { name: "Vult base liquida nado hd v350 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$32,72", price: "R$36,36", image: "./produtos de beleza/VULT BASE LIQUIDA NANO HD COR V350 26ML.png"},
    { name: "Vult base liquida nado hd v360 26ML", category: "beleza", type: "base", brand: "Vult", discountPix: "R$32,72", price: "R$36,36", image: "./produtos de beleza/VULT BASE LIQUIDA NANO HD COR V360 26ML.png"},
    { name: "Vult batom liquito matte nano hd rosa vintage 5ml", category: "beleza", type: "batom", brand: "Vult", discountPix: "R$29,45", price: "R$32,72", image: "./produtos de beleza/VULT BATOM LIQUIDO MATTE NANO HD ROSA VINTAGE 5ml.png"},
    { name: "Vult batom liquito matte nano hd vermelho rubi 5ml", category: "beleza", type: "batom", brand: "Vult", discountPix: "R$29,45", price: "R$32,72", image: "./produtos de beleza/VULT BATOM LIQUIDO MATTE NANO HD VERMELHO RUBI 5ml.png"},
    { name: "Vult batom liquito matte velve camila loures avela punta cana 3,8G", category: "beleza", type: "batom", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT BATOM MATTE VELVE CAMILA LOURES AVELA PUNTA CANA 3,8G.png"},
    { name: "Vult batom liquito matte velve camila loures marrom vegas cana 3,8G", category: "beleza", type: "batom", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT BATOM MATTE VELVE CAMILA LOURES MARROM VEGAS 3,8G.png"},
    { name: "Vult batom liquito matte velve camila loures rose orlando cana 3,8G", category: "beleza", type: "batom", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT BATOM MATTE VELVE CAMILA LOURES ROSE ORLANDO 3,8G.png"},
    { name: "Vult batom liquito matte velve camila loures avela malva madrid 3,8G", category: "beleza", type: "batom", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT BATOM MATTTE VELVE CAMILA LOURES MALVA MADRID 3,8G.png"},
    { name: "Vult bb serum v300 30ML", category: "beleza", type: "hidratante", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT BB SERUM V300 30ML.png"},
    { name: "Vult bb serum v340 30ML", category: "beleza", type: "hidratante", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT BB SERUM V340 30ML.png"},
    { name: "Vult caneta delineador olhos preto 1,0ml", category: "beleza", type: "delineador", brand: "Vult", discountPix: "R$28,63", price: "R$31,81", image: "./produtos de beleza/VULT CANETA DELINEADORA OLHOS PRETA 1,0ml.png"},
    { name: "Vult caneta para sombrancelha 01 1.0ml", category: "beleza", type: "delineador", brand: "Vult", discountPix: "R$35,18", price: "R$39,09", image: "./produtos de beleza/VULT CANETA PARA SOBRANCELHA 01 1,0ml.png"},
    { name: "Vult corretivo liquido nano hd cor v350 6G", category: "beleza", type: "corretivo", brand: "Vult", discountPix: "R$26,17", price: "R$29,08", image: "./produtos de beleza/VULT CORRETIVO LIQUIDO NANO HD COR V350 6G.png"},
    { name: "Vult delineador liquido camila loures azul arraia 3g", category: "beleza", type: "delineador", brand: "Vult", discountPix: "R$27,81", price: "R$30,90", image: "./produtos de beleza/VULT DELINEADOR LIQUIDO CAMILA LOURES AZUL ARRAIA 3g.png"},
    { name: "Vult delineador liquido camila loures marromn loures 3g", category: "beleza", type: "delineador", brand: "Vult", discountPix: "R$27,81", price: "R$30,90", image: "./produtos de beleza/VULT DELINEADOR LIQUIDO CAMILA LOURES MARROM LOURES 3g.png"},
    { name: "Vult delineador liquido camila loures rosa verao 3g", category: "beleza", type: "delineador", brand: "Vult", discountPix: "R$27,81", price: "R$30,90", image: "./produtos de beleza/VULT DELINEADOR LIQUIDO CAMILA LOURES ROSA VERAO 3g.png"},
    { name: "Vult esmalte 5f colecao fun alegria de viver 3g", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE 5F COLECAO FUN ALEGRIA DE VIVER 8ml.png"},
    { name: "Vult esmalte 5f colecao top hits chama ela lexa 8g", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE 5F COLECAO TOP HITS CHAMA ELA LEXA 8ml.png"},
    { name: "Vult esmalte 5f colecao top hits jogada bruta lexa 8g", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE 5F COLECAO TOP HITS JOGADA BRUTA LEXA 8ml.png"},
    { name: "Vult esmalte 5f colecao top hits para de marra 8g", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE 5F COLECAO TOP HITS PARA DE MARRA 8ml.png"},
    { name: "Vult esmalte 5f colecao top hits sapequinha lexa 8g", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE 5F COLECAO TOP HITS SAPEQUINHA LEXA 8ml.png"},
    { name: "Vult esmalte paz amor blue festival 8ml", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE PAZ AMOR BLUE FESTIVAL 8ml.png"},
    { name: "Vult esmalte paz amor rock in red 8ml", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE PAZ AMOR ROCK IN RED 8ml.png"},
    { name: "Vult esmalte soleil ceu azul 8ml", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE SOLEIL CEU AZUL 8ml.png"},
    { name: "Vult esmalte soleil raio sol 8ml", category: "beleza", type: "esmalte", brand: "Vult", discountPix: "R$7,36", price: "R$8,18", image: "./produtos de beleza/VULT ESMALTE SOLEIL RAIO SOL 8ml.png"},
    { name: "Vult gloss labial bronze/ember 5ML", category: "beleza", type: "gloss", brand: "Vult", discountPix: "R$24,38", price: "R$27,09", image: "./produtos de beleza/VULT GLOSS LABIAL BRONZE_EMBR LEXA 5ML.png"},
    { name: "Vult gloss lips 24/7 perol/cintil 5,2ml", category: "beleza", type: "gloss", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT GLOSSY LIPS 24_7 PEROL_CINTIL 5,2ml.png"},
    { name: "Vult hidra balm labial com FPS10 transulucido 7ml", category: "beleza", type: "hidratante", brand: "Vult", discountPix: "R$26,17", price: "R$29,08", image: "./produtos de beleza/VULT HIDRA BALM LABIAL COM FPS10 TRANSLUCIDO 7ml.png"},
    { name: "Vult iluminador meu glow champagne 3G", category: "beleza", type: "iluminador", brand: "Vult", discountPix: "R$23,71", price: "R$26,35", image: "./produtos de beleza/VULT ILUMINADOR MEU GLOW CHAMPAGNE 3G.png"},
    { name: "Vult lapis olhos areia 1,1G", category: "beleza", type: "lapis", brand: "Vult", discountPix: "R$15,54", price: "R$17,26", image: "./produtos de beleza/VULT LAPIS OLHOS AREIA 1,1G.png"},
    { name: "Vult lapis olhos azul oceano 1,1G", category: "beleza", type: "lapis", brand: "Vult", discountPix: "R$15,54", price: "R$17,26", image: "./produtos de beleza/VULT LAPIS OLHOS AZUL OCEANO 1,1G.png"},
    { name: "Vult lapis olhos prata espacial 1,1G", category: "beleza", type: "lapis", brand: "Vult", discountPix: "R$15,54", price: "R$17,26", image: "./produtos de beleza/VULT LAPIS OLHOS PRATA ESPACIAL 1,1G.png"},
    { name: "Vult lapis olhos verde selva 1,1G", category: "beleza", type: "lapis", brand: "Vult", discountPix: "R$15,54", price: "R$17,26", image: "./produtos de beleza/VULT LAPIS OLHOS VERDE SELVA 1,1G.png"},
    { name: "Vult mascara de cilios volume lacrador lexa 10G", category: "beleza", type: "mascara", brand: "Vult", discountPix: "R$37,62", price: "R$41,80", image: "./produtos de beleza/VULT MASCARA DE CILIOS VOLUME LACRADOR LEXA 10G.png"},
    { name: "Vult mega base cor V100 26ml", category: "beleza", type: "base", brand: "Vult", discountPix: "R$22,91", price: "R$25,45", image: "./produtos de beleza/VULT MEGA BASE COR V100 26ML.png"},
    { name: "Vult mega base cor V120 26ml", category: "beleza", type: "base", brand: "Vult", discountPix: "R$22,91", price: "R$25,45", image: "./produtos de beleza/VULT MEGA BASE COR V120 26ML.png"},
    { name: "Vult mega base cor V330 26ml", category: "beleza", type: "base", brand: "Vult", discountPix: "R$22,91", price: "R$25,45", image: "./produtos de beleza/VULT MEGA BASE COR V330 26ML.png"},
    { name: "Vult mega base cor V360 26ml", category: "beleza", type: "base", brand: "Vult", discountPix: "R$22,91", price: "R$25,45", image: "./produtos de beleza/VULT MEGA BASE COR V360 26ML.png"},
    { name: "Vult meu blush golden perolado 3G", category: "beleza", type: "blush", brand: "Vult", discountPix: "R$23,71", price: "R$26,35", image: "./produtos de beleza/VULT MEU BLUSH GOLDEN PEROLADO 3G.png"},
    { name: "Vult paleta de rosto multif camila loures 15,5g", category: "beleza", type: "paleta", brand: "Vult", discountPix: "R$50,72", price: "R$56,35", image: "./produtos de beleza/VULT PALETA DE ROSTO MULTIF CAMILA LOURES 15,5g.png"},
    { name: "Vult paleta de sombra amour 7,2g", category: "beleza", type: "paleta", brand: "Vult", discountPix: "R$50,72", price: "R$56,35", image: "./produtos de beleza/VULT PALETA DE SOMBRAS AMOUR 7,2g.png"},
    { name: "Vult paleta de sombra camila loures 10,8g", category: "beleza", type: "paleta", brand: "Vult", discountPix: "R$65,44", price: "R$72,72", image: "./produtos de beleza/VULT PALETA DE SOMBRAS CAMILA LOURES 10,8g.png"},
    { name: "Vult paleta multif top hits lexa 7,5g", category: "beleza", type: "paleta", brand: "Vult", discountPix: "R$40,90", price: "R$45,44", image: "./produtos de beleza/VULT PALETA MULTIF TOP HITS LEXA 7,5G.png"},
    { name: "Vult pó compacto cor01", category: "beleza", type: "pó", brand: "Vult", discountPix: "R$26,99", price: "R$29,99", image: "./produtos de beleza/VULT PO COMPACTO COR 01.png"},
    { name: "Vult pó compacto facial FPS90 escuuro 6g", category: "beleza", type: "pó", brand: "Vult", discountPix: "R$65,44", price: "R$72,72", image: "./produtos de beleza/VULT PO COMPACTO FACIAL FPS90 ESCURO 6G.png"},
    { name: "Vult quarteto sombrancelha 5g", category: "beleza", type: "paleta", brand: "Vult", discountPix: "R$30,27", price: "R$33,63", image: "./produtos de beleza/VULT QUARTETO SOBRANCELHA 5G.png"},
    { name: "Vult sabonete liquido intimo conforto 200ml", category: "beleza", type: "sabonete", brand: "Vult", discountPix: "R$16,57", price: "R$18,41", image: "./produtos de beleza/VULT SABONETE LIQUIDO INTIMO CONFORTO 200ml.png"}
    
];

// Função para renderizar os produtos no catálogo
function renderizarProdutos(produtos) {
    const catalogContainer = document.getElementById("catalog");
    catalogContainer.innerHTML = ""; // Limpa o conteúdo antes de renderizar

    produtos.forEach(produto => {
        const productCard = `
        <div class="product">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Tipo: ${produto.tipo}</p>
            <p>Marca: ${produto.marca}</p>
            <p>Preço: ${produto.preco}</p>
            <p>Desconto via Pix: ${produto.descontoPix}</p>
            <button class="CATALOGO-btn">COMPRAR</button>
        </div>
        `;

        catalogContainer.innerHTML += productCard; // Adiciona os produtos ao catálogo
    });
}

// Chama a função para renderizar os produtos quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtos);
});

const productsPerPage = 40; // 4 produtos por fileira, 10 fileiras
let currentPage = 1;

const catalog = document.getElementById("catalog");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const brandFilter = document.getElementById("brandFilter");

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedType = typeFilter.value;
    const selectedBrand = brandFilter.value;

    return products.filter(product => {
        return (selectedCategory === "todas" || product.category === selectedCategory) &&
               (selectedType === "todos" || product.type === selectedType) &&
               (selectedBrand === "todas" || product.brand === selectedBrand);
    });
}

function displayProducts(page = 1) {
    const filteredProducts = filterProducts();
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    catalog.innerHTML = "";

    filteredProducts.slice(startIndex, endIndex).forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>Desconto PIX: ${product.discountPix}</p>
        `;

        // Adiciona o evento de clique para abrir o modal de cada produto
        productElement.onclick = function() {
            openProductModal(product);
        };

        catalog.appendChild(productElement);
    });

    prevBtn.disabled = page === 1;
    nextBtn.disabled = endIndex >= filteredProducts.length;
}

function updateFilters() {
    const selectedCategory = categoryFilter.value;

    // Atualizar os tipos de produtos conforme a categoria
    const types = new Set(products
        .filter(p => selectedCategory === "todas" || p.category === selectedCategory)
        .map(p => p.type)
    );
    typeFilter.innerHTML = '<option value="todos">Todos os Tipos</option>';
    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        typeFilter.appendChild(option);
    });

    // Atualizar as marcas conforme o tipo e a categoria
    const selectedType = typeFilter.value;
    const brands = new Set(products
        .filter(p => 
            (selectedCategory === "todas" || p.category === selectedCategory) && 
            (selectedType === "todos" || p.type === selectedType)
        )
        .map(p => p.brand)
    );

    brandFilter.innerHTML = '<option value="todas">Todas as Marcas</option>';
    brands.forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

categoryFilter.addEventListener("change", () => {
    updateFilters(); // Atualiza os tipos com base na categoria selecionada
    displayProducts(1); // Exibe os produtos filtrados
});

typeFilter.addEventListener("change", () => {
    displayProducts(1); // Exibe os produtos filtrados com base no tipo selecionado
});

brandFilter.addEventListener("change", () => {
    displayProducts(1); // Exibe os produtos filtrados com base na marca selecionada
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    displayProducts(currentPage);
});

// Inicializar a página
updateFilters();
displayProducts();

const productModal = document.getElementById("productModal");
const reserveModal = document.getElementById("reserveModal");
const closeButtons = document.querySelectorAll(".close");
const reserveBtn = document.getElementById("reserveBtn");

// Função para abrir o modal com os detalhes do produto
function openProductModal(product) {
    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductName").textContent = product.name;
    document.getElementById("modalProductCategory").textContent = "Categoria: " + product.category;
    document.getElementById("modalProductType").textContent = "Tipo: " + product.type;
    document.getElementById("modalProductBrand").textContent = "Marca: " + product.brand;
    document.getElementById("modalProductPrice").textContent = "Preço: " + product.price;
    document.getElementById("modalProductDiscountPix").textContent = "Desconto via Pix: " + product.discountPix;
    productModal.style.display = "flex"; // Exibe o modal
}

// Função para fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target === productModal) {
        productModal.style.display = "none";
    }
    if (event.target === reserveModal) {
        reserveModal.style.display = "none";
    }
};

// Função para fechar os modais ao clicar no "X"
closeButtons.forEach(button => {
    button.onclick = function() {
        productModal.style.display = "none";
        reserveModal.style.display = "none";
    };
});

// Função para abrir o modal de reserva
reserveBtn.onclick = function() {
    productModal.style.display = "none"; // Fecha o modal de produto
    reserveModal.style.display = "flex"; // Exibe o modal de reserva
};

// Adiciona eventos de clique nos produtos
document.querySelectorAll(".product").forEach((productElement, index) => {
    productElement.onclick = function() {
        openProductModal(products[index]);
    };
});

// Função para formatar automaticamente o CPF
const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", function(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
});

// Formulário de reserva
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
    alert("Produto reservado com sucesso!");
    reserveModal.style.display = "none"; // Fecha o modal após a reserva
});
