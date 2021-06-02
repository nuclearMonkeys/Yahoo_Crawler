var questions_dict = {
	15956 : ["¿Como se calculan el numero de vueltas de un dinamo para obtener X cantidad de Watts?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20150220114346AA4OAcd"],
	15957 : ["cerchi in lega alfa 156 per un passat?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20140511065813AAC3WnY"],
	15958 : ["¿que piensan de estas palabras : \"una MADRE es un regalo de Dios \"?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20100507210506AAXovDu"],
	15959 : ["de que tienes ganas o que quiseras ahcer en estos momentos , hechen a volar la imaginacion :) ¡¡?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20100512145302AAcuYMQ"],
	15960 : ["¿que es aquello que perdiste y quisieras recuperar , algo que sea muy importante para ti?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20100512150335AAPRhCb"],
	15961 : ["Que paginas tienes en \"FAVORITOS\"??", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080103094946AA2y1Vc"],
	15962 : ["¿amigos/as me podrian ayudar a pensar ?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20130122160321AAnsZJ0"],
	15963 : ["es permitido el derrame de petróleo en Mauricio?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070901211051AA9duST"],
	15964 : ["sera que tengo ideas muy peligrosas para Mauricio?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070901214319AAUmxIq"],
	15965 : ["¿Te sueles enojar por lo que la vida no te ha dado?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080331085344AAerFig"],
	15966 : ["¿Tu casa es tu refugio o todo lo contrario...que opinas?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080401095105AA8ZH9n"],
	15967 : ["¿Si tu salud es buena, cómo haces para cuidarla y no deteriorarla?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080401095330AAVLFf3"],
	15968 : ["¿Que piensan de los que está sucediendo en Argentina...con el campo?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080401095547AAU349c"],
	15969 : ["¿Que prefieren chatear o hablar por teléfono con sus amigos?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080401095813AAwLzK2"],
	15970 : ["¿Que piensan y recuerdan cuando digo Queenstown?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080401100150AANiKgP"],
	15971 : ["¿Sueles decir seguidamente a tus amigos y familia que las amas?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080402093004AAWyiRN"],
	15972 : ["¿Que recuerdos te trae la palabra MAR....?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080402093503AA2TAuA"],
	15973 : ["¿Problemas amorosos Leanlo no les cuesta nada?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120204165836AA7wccP"],
	15974 : ["¿Problemas amorosos Leanlo no les cuesta nada?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120204171254AAlejB1"],
	15975 : ["¿Mi cadera mide 90 cm, la circunferencia , ¿esta bien? o es mucho?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120221170745AAcM4PI"],
	15976 : ["¿Mi cadera mide 90 cm, la circunferencia , ¿esta bien? o es mucho?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120221175812AA21X5V"],
	15977 : ["¿Si mi cadera mide 90 cm , cuando tendria que medir mi cintura para no ser desproporcionada?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120221180105AAVRK7i"],
	15978 : ["¿Si mi cadera mide 90 cm , cuando tendria que medir mi cintura para no ser desproporcionada?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120221180429AA9Zyqy"],
	15979 : ["que tal la propuesta de que todos los habitantes de Mauricio ?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070902113945AAkoFOO"],
	15980 : ["que pasa en Mauricio?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070902204711AARpJXi"],
	15981 : ["Es peligroso visitar Mauricio a altas horas de la noche?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070903143329AAeMgqw"],
	15982 : ["no se confundan, soy el 1er hombre odalisco!..?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070903180208AApCbGw"],
	15983 : ["morko y pescada empanizada, no les da calor el disfraz?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070903180658AAsI03C"],
	15984 : ["muevan el esqueleto, ??", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070903183422AAXcS8O"],
	15985 : ["y tu invitado, que le regalaste a Ladry?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070903185158AAKMbuh"],
	15986 : ["alguna chica en la fiesta dudo de mi sexualidad con mi disfraz?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070903193453AA78TzC"],
	15987 : ["¿Qué relaciones hacen cuando escribo El Mundo del Arte?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080402093724AAfsse0"],
	15988 : ["¿Tienen amigos de otras nacionalidades...de donde?....?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080402094006AATGoFp"],
	15989 : ["¿Sabemos comprender y perdonar?...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080402094318AAF9dil"],
	15990 : ["\"Lo dijo Charles Chaplin\"...?...Si...!!!!?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080402094637AAVqsxq"],
	15991 : ["¿Agradeces el privilegio de tener amigos...?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20080403111247AAGqUFa"],
	15992 : ["¿Si mi cadera mide 90 cm , cuando tendria que medir mi cintura para no ser desproporcionada?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120221181145AAAkCFS"],
	15993 : ["¿Cuando dice 90-60-90 el ultimo 90 son las caderas o la cola?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120223050649AA5pi4U"],
	15994 : ["¿Cuando dice 90-60-90 el ultimo 90 son las caderas o la cola?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120223051420AAYi84s"],
	15995 : ["¿Desde donde se mide la cadera? es toda la circunferencia?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120223052300AAF2ccD"],
	15996 : ["¿Cuantas calorias gastas haciendo 40 minutos de aerobico?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120223181309AAQjpA3"],
	15997 : ["¿Cuantas calorias gastas haciendo 40 minutos de aerobico?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120223181506AAfpy7f"],
	15998 : ["¿Cuantas calorias pierdo haciendo gym box y/o x-55 en una hora?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20120224053157AAGPtCK"],
	15999 : ["quieres votar por mi como presidente del Poder Judicial de Mauricio?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070904111742AAioW6D"],
	16000 : ["que hacemos cuando comprobemos que hay vacío de poder?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070906193542AAdBfkY"],
	16001 : ["No es un orgullo para los mauricianos tener la primera celebridad de aqui?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070907142723AAc4O2e"],
	16002 : ["te pondrías de novia(o) con el ex novio de tu mejor amigo(a)?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070909160810AAVLCZP"],
	16003 : ["hola te imaginas que en yahoo respuestas todos pudiesemos hablar al mismo tiempo??", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070909163707AAmmuJg"],
	16004 : ["cuál es el efecto psicológico de matar al tigre y después tenerle miedo al cuero?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070910194811AA65B9i"],
	16005 : ["por qué a veces cuando nos estamos durmiendo sentimos cómo si nos fuesemos a caer?", 0, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20070912183852AAkTYRN"],
}