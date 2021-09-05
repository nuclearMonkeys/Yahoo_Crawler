var questions_dict = {
	11801 : ["¿debo felicitar a mi ex?", 24, "Encuestas y sondeos de opinión", 0, "cLDT8Mi5aa", "https://answers.yahoo.com/question/index?qid=20100305072929AAleiND"],
	11802 : ["¿nos regalamos una canción...?", 9, "Otros - Música y ocio", 0, "cLDT8Mi5aa", "https://answers.yahoo.com/question/index?qid=20100218125536AAMPdsh"],
	11803 : ["¿Cuál sería un buen nombre para un negocio de pequeños contribuyentes?", 1, "Pequeñas y Medianas Empresas", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20131211154815AA4Z9NS"],
	11804 : ["¿Existe alguna desventaja o daño si se usan lentes (de aumento) toda la vida?", 3, "Óptica", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110616151112AAUtbMM"],
	11805 : ["¿Chicharito, crees que algún día México gane la copa mundial?", 9, "Fútbol", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110420151805AA4Zj3s"],
	11806 : ["¿Es normal que piense en esto al buscar pareja?", 13, "Otros - Familia y amigos", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110320232916AAWv4Mc"],
	11807 : ["¿Cómo evito que se inicie sesión cuando checo mi correo?", 4, "Internet", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110215083150AA2qZ9R"],
	11808 : ["¿Por qué se me va el Internet cuando trato de subir un video a YouTube?", 3, "Internet", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110116152212AAxirBm"],
	11809 : ["¿Será difícil encontrar este videojuego?", 6, "Vídeojuegos", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110107155644AAjseqa"],
	11810 : ["¿Cómo mejorar en matemáticas?", 5, "Matemáticas", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20110111000713AAbfa4H"],
	11811 : ["¿Qué pasa cuando eliminas a un amigo en Facebook?", 11, "Internet", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20101224163047AAYkMEx"],
	11812 : ["¿De qué trata el programa \"VH1: Music Players\"?", 2, "Televisión", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20101215221915AAfoimx"],
	11813 : ["¿Cúales son las mejores canciones de rock en español?", 6, "Otros - Música y ocio", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20101022221358AAv8rMc"],
	11814 : ["¿Por qué soy tan exigente?", 9, "Amigos", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20101024213008AAac9tL"],
	11815 : ["¿En Fifa Soccer 09 All Play de Wii, se puede jugar con la selección mexicana en modo DT?", 2, "Vídeojuegos", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20101024221429AASQyw6"],
	11816 : ["¿Por qué tanta gente se trauma con la religión?", 13, "Religión y espiritualidad", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20101025105059AACkRq0"],
	11817 : ["¿Cómo se lee esto?.........?", 2, "Física", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20100920213004AAafYO6"],
	11818 : ["Cómo elimino el nombre de la canción y artista que uso en un video de YouTube?", 1, "Internet", 0, "1V5j6sSdaa", "https://answers.yahoo.com/question/index?qid=20100814150603AALfL2D"],
	11819 : ["¿Que piensan de Lady GaGa?", 7, "Música", 0, "qxrnlHldaa", "https://answers.yahoo.com/question/index?qid=20111007092625AAQrNnO"],
	11820 : ["¿Problema con Auriculares?", 1, "Otros - Electrónica", 0, "qxrnlHldaa", "https://answers.yahoo.com/question/index?qid=20111008160216AAEMn1x"],
	11821 : ["¿Cual es su Figura geometrica preferida?", 6, "Artes visuales", 0, "qxrnlHldaa", "https://answers.yahoo.com/question/index?qid=20111008181106AAfPVvd"],
	11822 : ["¿Que opinan de la Novia del Mundial Larisa Riquelme?", 4, "Otros - Belleza y estilo", 0, "qxrnlHldaa", "https://answers.yahoo.com/question/index?qid=20111008184510AAEYSip"],
	11823 : ["¿que es la realidad y la irrealidad?", 11, "Australia", 0, "IOO7Twixaa", "https://answers.yahoo.com/question/index?qid=20100924005430AAeMHRs"],
	11824 : ["¿que les parece esta cancion que escribí?", 6, "Otros - Música y ocio", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20120807113242AAkt7n5"],
	11825 : ["¿Ayuda!! creo que soy un marciano!! Awwwwh?", 4, "Encuestas y sondeos de opinión", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20120821162255AApE1kj"],
	11826 : ["¿un cucaracho me vio desnuda?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120603131500AAF4T0g"],
	11827 : ["¿porque me pasa esto?????????", 1, "Encuestas y sondeos de opinión", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20120603134240AAFU7jV"],
	11828 : ["¿Si los zombis escuchan cumbia, entonces...zombilleros?", 5, "Encuestas y sondeos de opinión", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20120604090103AAKP9Og"],
	11829 : ["¿Que les parece mi cancion?", 5, "Encuestas y sondeos de opinión", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20120630084505AA1OZGJ"],
	11830 : ["¿que les parece esta imagen?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120421130634AARQaDp"],
	11831 : ["¿sims 1 problema please!!!!!! O.O?", 1, "Otros - Computadoras", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20101203052159AAmmetK"],
	11832 : ["¿juegos para placa nvidia 6150 ?? onboard ?? O.O PLEASE!?", 1, "Video Juegos", 0, "tsKMsWSaaa", "https://answers.yahoo.com/question/index?qid=20101203105639AAy9v4D"],
	11833 : ["porque hay personas que cuestionan lo que Dios hace?", 23, "Religión y Espiritualidad", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070518154326AA0n9Cw"],
	11834 : ["solo para saber, cuanto medis de estatura?", 16, "Exámenes y Tests", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070518221413AAfrzxi"],
	11835 : ["que opinan de alguien que al escuchar de los curas pedofilicos se detiene a defender su religion en vez de...?", 10, "Religión y Espiritualidad", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070430093121AAJmdu7"],
	11836 : ["actualmente se estan viendo muchas problematicas en las escuelas cual consideras...?", 4, "Educación Especial", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070502132748AA4HhCS"],
	11837 : ["porque las preguntas morbosas tienen mas adeptos?", 3, "Mi Yahoo", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070419230846AA2mljz"],
	11838 : ["que es peor en yahoo preguntas? que no respondan tu pregunta o que te respondan con estupideces e insultos?", 5, "Amigos", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070420000328AAO094N"],
	11839 : ["alguien sabe que fue de la vida de los actores niños de cebollitas, chiquititas, amigovios, etc?", 4, "Televisión", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070420003853AApinVv"],
	11840 : ["nunca sentiste que te estas perdiendo de vivir algunas cosas?", 8, "Religión y Espiritualidad", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070424222653AAwI4CX"],
	11841 : ["Vieron a Ricardo Montaner en Gran Hermano 2007? que opinan acerca del mensaje que dio?", 5, "Religión y Espiritualidad", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070425082229AAr7w7h"],
	11842 : ["hay algo mas aburrido que el futbol mexicano?", 25, "Fútbol", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070404235735AAWO1Zo"],
	11843 : ["cual es el poema mas romantico que conoces?", 4, "Amigos", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070408004253AAj38fF"],
	11844 : ["alguien conoce el verdadero origen del \"dia de los inocentes\"?", 9, "Mi Yahoo", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20061228134121AARSVAW"],
	11845 : ["que se puede hacer para divertirse en un dia de viento cuando no se puede salir de casa?", 6, "Encuestas y sondeos", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20061228140502AAwe3Go"],
	11846 : ["El jugador de futbol argentino es el mas \"vivo\" del planeta?", 20, "Fútbol", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070101093910AAjT495"],
	11847 : ["que preferis? vivir una mentira y ser feliz o conocer la verdad aunque te duela?", 32, "Amigos", 0, "0fe6e641af325e4d00d033d4b2c6d39faa", "https://answers.yahoo.com/question/index?qid=20070101101827AAOxN3E"],
	11848 : ["Quieres conocer mi estilo?", 13, "Poesía", 0, "Lm33jicZaa", "https://answers.yahoo.com/question/index?qid=20080309232344AAVOoEM"],
	11849 : ["Mi perra ha sido esterilizada, y amamanta todavia a un gatito de 5 meses, es normal?", 3, "Perros", 0, "443751f88c2f7ed4c0572e951f579588aa", "https://answers.yahoo.com/question/index?qid=20071218125855AAGtT9o"],
	11850 : ["¿Interpretacion de analisis de Perfil Tiroideo?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20081016084520AAeLZa5"],
}