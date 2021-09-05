var questions_dict = {
	401 : ["What hospital would you go to for emergency abdominal surgery in LA county?", 4, "Medicine", 8, "B1npBafjaa", "https://answers.yahoo.com/question/index?qid=20210124030558AARmR80"],
	402 : ["Lingual tonsil  transplant?", 4, "Medicine", 5, "NYSM7Wv8aa", "https://answers.yahoo.com/question/index?qid=20210125002814AAwRU5F"],
	403 : ["Does the Corona Virus injection contain any artificial colourings?", 8, "Medicine", 7, "qB0k1GIgaa", "https://answers.yahoo.com/question/index?qid=20210123161628AA6uIIB"],
	404 : ["Is 2000mg of Tylenol safe?", 6, "Medicine", 1, "WbVE1cXKaa", "https://answers.yahoo.com/question/index?qid=20210125033310AAHitMR"],
	405 : ["Why can't we just let other countries replicate the vaccines?", 9, "Medicine", 2, "Yc9m693Yaa", "https://answers.yahoo.com/question/index?qid=20210126130438AAe002k"],
	406 : ["Can you decline a student shadowing a doctor while getting examed?", 8, "Medicine", 16, "vOryCmgwaa", "https://answers.yahoo.com/question/index?qid=20210127155635AARhBoB"],
	407 : ["When some falls in small drops we say it is \"dripping\", but can it also describe an action?", 4, "Medicine", 3, "urX3upzcaa", "https://answers.yahoo.com/question/index?qid=20210115015646AAcyQNs"],
	408 : ["Can I overdose on melatonin?", 4, "Medicine", 3, "qB0k1GIgaa", "https://answers.yahoo.com/question/index?qid=20210118031226AAOWPMG"],
	409 : ["Can you request your old school to get rid of your photoday photo yahoo?", 5, "Medicine", 2, "6aTjQm6kaa", "https://answers.yahoo.com/question/index?qid=20210117071356AAVmekW"],
	410 : ["Why do patients take IV fluids in the hospital?", 10, "Medicine", 11, "6aTjQm6kaa", "https://answers.yahoo.com/question/index?qid=20210115033556AAzUgZd"],
	411 : ["Does ibuprofen cause high blood pressure if taken for several days I dose I took 800mg total in a day ?", 7, "Medicine", 10, "qB0k1GIgaa", "https://answers.yahoo.com/question/index?qid=20210116163649AAZvBNC"],
	412 : ["Why is this not possible 30 60 90 right triangle problem?", 4, "Medicine", 3, "a8pRDaIyaa", "https://answers.yahoo.com/question/index?qid=20210119213721AAAdR8H"],
	413 : ["Is a family member allowed to help an elderly person with their medication? ?", 6, "Medicine", 5, "AA10954511", "https://answers.yahoo.com/question/index?qid=20210102051935AAWotkI"],
	414 : ["Is taking medication temporarily possible for people with epilepsy and they can drive again without medication?", 8, "Medicine", 9, "zRPRphYsaa", "https://answers.yahoo.com/question/index?qid=20210101224724AAdhJvT"],
	415 : ["Mom in icu... coma patient for two years ?", 4, "Medicine", 8, "wrttboTlaa", "https://answers.yahoo.com/question/index?qid=20210106185924AAWE4Ws"],
	416 : ["Why would someone be in a vegetative state after anesthesia?", 4, "Medicine", 4, "RYTRviifaa", "https://answers.yahoo.com/question/index?qid=20210107232829AARw4Wq"],
	417 : ["Acetaminophen safe doses?", 6, "Medicine", 5, "UIH3Ts5Caa", "https://answers.yahoo.com/question/index?qid=20201230010536AA7vjPa"],
	418 : ["what would happen if I took 3 Benadryls?", 5, "Medicine", 6, "yKjwkDqdaa", "https://answers.yahoo.com/question/index?qid=20210101034446AARSCg5"],
	419 : ["Does smoking make your blood thinner especially when taking medication?", 6, "Medicine", 1, "52Ir0z50aa", "https://answers.yahoo.com/question/index?qid=20201231172310AAAl3YS"],
	420 : ["I am a woman in Engineering School and I am also studying Business and Finance in a college.I just started taking online lessons to become a?", 9, "Engineering", 4, "VUdaZUpwaa", "https://answers.yahoo.com/question/index?qid=20201229154638AA8sltW"],
	421 : ["On which continent is the United States?", 15, "Geography", 13, "A3WAIgoeaa", "https://answers.yahoo.com/question/index?qid=20201020115048AAvUwxb"],
	422 : ["name the river that forms a border between the states of washington ang oregon?", 11, "Geography", 21, "dsi4oLDVaa", "https://answers.yahoo.com/question/index?qid=20201019232136AA4StFS"],
	423 : ["Where is the most isolated place in Europe ?", 4, "Geography", 6, "AA12022384", "https://answers.yahoo.com/question/index?qid=20201026104459AA0Hlih"],
	424 : ["Why is Long Island considered a part of Mainland USA but not Hawaii?", 9, "Geography", 4, "2yFSkim8aa", "https://answers.yahoo.com/question/index?qid=20201023001334AAU4eSj"],
	425 : ["What is a state in the Desert Southwest that is dry and sunny ?", 5, "Geography", 2, "fMLI1elAaa", "https://answers.yahoo.com/question/index?qid=20201026004620AAFKHIA"],
	426 : ["Is it true Morocco is closer to Europe than South Africa ?", 10, "None", 24, "None", "https://answers.yahoo.com/question/index?qid=20201008195037AABw4dC"],
	427 : ["What state is Denver located in ?", 8, "Geography", 12, "fMLI1elAaa", "https://answers.yahoo.com/question/index?qid=20201009202842AAWZskO"],
	428 : ["If the Earth is 'flat,' then does it have less humans on it than statistically reported?", 4, "Geography", 3, "dU8aU9wTaa", "https://answers.yahoo.com/question/index?qid=20201012225356AAhQDAK"],
	429 : ["Can Europe really be defined as a continent?", 6, "Geography", 2, "x7kOP9CGaa", "https://answers.yahoo.com/question/index?qid=20201013081708AArBJbP"],
	430 : ["What country has the highest population?", 7, "Geography", 15, "jpB33HHQaa", "https://answers.yahoo.com/question/index?qid=20201012180417AA5ZLPk"],
	431 : ["If the distance between another two villages on the map is 48cm how far apart are they?", 8, "Geography", 4, "Og9gYBdXaa", "https://answers.yahoo.com/question/index?qid=20201012084909AAPNodj"],
	432 : ["what is the total miles on my freguent flyer account?", 4, "Geography", 2, "Ys7DBU95aa", "https://answers.yahoo.com/question/index?qid=20201015174958AACGGny"],
	433 : ["Are Britain and Canada among the largest US states ?", 17, "Geography", 15, "JKXNu8ykaa", "https://answers.yahoo.com/question/index?qid=20201018070307AAIpBnL"],
	434 : ["Is Alaska a country?", 6, "Geography", 3, "3Pirsji5aa", "https://answers.yahoo.com/question/index?qid=20201001162300AAZy9oM"],
	435 : ["How come African countries that Chumpsky called \"sh*thole\" have very few Covid deaths (e.g. Tanzania has 21, Rwanda 29, Botswana 16)?", 8, "Geography", 12, "1nmeTYvqaa", "https://answers.yahoo.com/question/index?qid=20201001184516AAtoJrv"],
	436 : ["Where in the United States is there a highway called Route 52?", 5, "Geography", 6, "fMLI1elAaa", "https://answers.yahoo.com/question/index?qid=20201004202504AAXTCwl"],
	437 : ["are deserts near the equator?", 10, "Geography", 16, "14ZuJMDvaa", "https://answers.yahoo.com/question/index?qid=20201002112222AApMCdn"],
	438 : ["Have you ever been to Knightsbridge in London?", 5, "Geography", 0, "F0uLexezaa", "https://answers.yahoo.com/question/index?qid=20201005212549AAfV9EY"],
	439 : ["What continent is New Zealand part of?", 6, "Geography", 7, "S2BKEPAHaa", "https://answers.yahoo.com/question/index?qid=20200920092233AAErObC"],
	440 : ["What are the largest cities in your state?", 7, "None", 12, "None", "https://answers.yahoo.com/question/index?qid=20200920104327AAmKn2N"],
	441 : ["What continent is Poland in ?", 6, "Geography", 10, "CqFhiTKPaa", "https://answers.yahoo.com/question/index?qid=20200922203719AADQBQu"],
	442 : ["Wouldn't Rising Sea Levels Reduce Elevation? ?", 4, "Geography", 4, "6WnyOguGaa", "https://answers.yahoo.com/question/index?qid=20200925121229AAn5yPN"],
	443 : ["If the geography professor is showing photos of his travels on a PowerPoint lecture, he is NOT necessarily giving it out to students, right?", 6, "Geography", 6, "oRT4E9Geaa", "https://answers.yahoo.com/question/index?qid=20200926235006AAEQ4LF"],
	444 : ["How many country in the world?", 6, "Geography", 1, "jpB33HHQaa", "https://answers.yahoo.com/question/index?qid=20200927161250AAKTEsz"],
	445 : ["Where is a place in the United States where the population is predominantly white, American born, and Christian ?", 6, "Geography", 7, "fMLI1elAaa", "https://answers.yahoo.com/question/index?qid=20200928041617AALzVjg"],
	446 : ["How many states would there be if the U.S expanded globally?", 4, "Geography", 3, "kr4vzB6Oaa", "https://answers.yahoo.com/question/index?qid=20201001150429AAXArrg"],
	447 : ["are past lives real?", 7, "Geography", 3, "8JxgeMWaaa", "https://answers.yahoo.com/question/index?qid=20201002114601AAa1OKb"],
	448 : ["Is it rude to ask if someone is gay?", 8, "Geography", 8, "vNX9IX9faa", "https://answers.yahoo.com/question/index?qid=20200910074649AA31N3O"],
	449 : ["How come most businesses ignore Antarctica? Are they racist against Antarcticans?", 4, "Geography", 2, "dU8aU9wTaa", "https://answers.yahoo.com/question/index?qid=20200915050009AAxbHPL"],
	450 : ["How do I find out where in West Asia I'm from?", 5, "Geography", 6, "YOqbGO2Maa", "https://answers.yahoo.com/question/index?qid=20200915015900AAMiWjh"],
}