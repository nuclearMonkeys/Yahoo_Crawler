var questions_dict = {
	2401 : ["Does anyone else hear the birds outside talking? I mean, like really talking English words and sentances?? ?", 4, "Quotations", 2, "64c706e3bfae5a5b8dac617301e92e9baa", "https://answers.yahoo.com/question/index?qid=20210414064524AABu7a2"],
	2402 : ["What does it mean if you say that something's \"better than a kick up the ****\"?", 4, "Quotations", 6, "cbMTODDZaa", "https://answers.yahoo.com/question/index?qid=20210415234045AANY06m"],
	2403 : ["How do you split the housework in your home? ?", 10, "Personal Finance", 3, "pfUZXsjxaa", "https://answers.yahoo.com/question/index?qid=20210417231639AAeM3wN"],
	2404 : ["I'm so scared I'm gonna be a failure as an adult, how do I cope?", 14, "Mental Health", 8, "FZNnwt5jaa", "https://answers.yahoo.com/question/index?qid=20210413202626AA7ndQi"],
	2405 : ["Struggling and not feeling the same after smoking marijuana for the first time ?", 6, "None", 6, "None", "https://answers.yahoo.com/question/index?qid=20210418225800AAHGESg"],
	2406 : ["I scared of a gastro procedure due to anesthesia loss of memory, pain and dying. It's for acid reflux help?", 5, "Diseases & Conditions", 2, "LNHq2KT0aa", "https://answers.yahoo.com/question/index?qid=20210419182232AAl1aPe"],
	2407 : ["Is pasta sauce healthy for you?", 8, "Other - Health", 12, "bgJbaIIoaa", "https://answers.yahoo.com/question/index?qid=20210417210546AAoRKUF"],
	2408 : ["The very basis of property in the U.S. is derived through whiteness and through Black oppression, so BLM rioters have a right to loot, yes?", 5, "Politics", 5, "Fe30a7Dpaa", "https://answers.yahoo.com/question/index?qid=20210420041102AAvphlI"],
	2409 : ["Even though we can still post, I wanna say one final goodbye!?", 5, "None", 16, "None", "https://answers.yahoo.com/question/index?qid=20210420041213AAlYVAi"],
	2410 : ["Looks like we have one more day to argue about politics. Your thoughts and feelings?", 5, "None", 3, "None", "https://answers.yahoo.com/question/index?qid=20210420041957AA4Obgi"],
	2411 : ["What 70s/80s rock album should I buy next?", 5, "None", 2, "None", "https://answers.yahoo.com/question/index?qid=20210420043319AAompl1"],
	2412 : ["Does the last question asked win a prize?", 5, "Politics", 8, "AA12341057", "https://answers.yahoo.com/question/index?qid=20210420044201AAAtl6X"],
	2413 : ["Is anyone else excited about AOC being our next president?", 6, "Politics", 3, "5tj60KUXaa", "https://answers.yahoo.com/question/index?qid=20210420010552AAmYTxn"],
	2414 : ["Why do crocodiles walk so gayly?", 6, "None", 1, "None", "https://answers.yahoo.com/question/index?qid=20210417190755AAtH71e"],
	2415 : ["are most vaccination sites indoors or outdoors?", 8, "Medicine", 3, "VjgqZetcaa", "https://answers.yahoo.com/question/index?qid=20210416163340AAFyP4T"],
	2416 : ["What evidence is there that humans completely came about naturally?", 10, "Biology", 12, "ybcrCe9baa", "https://answers.yahoo.com/question/index?qid=20210416014854AAi3NH5"],
	2417 : ["Is there “Time” in open space?", 8, "None", 8, "None", "https://answers.yahoo.com/question/index?qid=20210416202536AAvJuAv"],
	2418 : ["since people like to claim that all humans were first black, does that mean white people are more evolved since they came later. ?", 14, "Biology", 13, "72498f2eafc6f2f55258c8707b536214aa", "https://answers.yahoo.com/question/index?qid=20210415031748AAyXmKD"],
	2419 : ["Can someone help me with this equation? Reducing to linear form using logs?", 5, "None", 7, "None", "https://answers.yahoo.com/question/index?qid=20210418211901AAQVtoI"],
	2420 : ["Is it possible that many people will experience blood clots or other severe reactions months after taking the Covid vaccine?", 9, "Medicine", 11, "VjgqZetcaa", "https://answers.yahoo.com/question/index?qid=20210416131244AAhgShs"],
	2421 : ["How are women's prisons different from men's prisons?", 7, "Gender & Women's Studies", 2, "cNlouTENaa", "https://answers.yahoo.com/question/index?qid=20210418065004AAf6f29"],
	2422 : ["I'm ashamed to be a man?", 7, "None", 12, "None", "https://answers.yahoo.com/question/index?qid=20210418070608AAHTPuN"],
	2423 : ["Why do big tech, government, billionaires support and fund Feminism?", 8, "None", 8, "None", "https://answers.yahoo.com/question/index?qid=20210417194140AA5bDPS"],
	2424 : ["Why do feminists think islam is the most feminist religion?", 8, "Gender Studies", 11, "a3JqOj9Eaa", "https://answers.yahoo.com/question/index?qid=20210417205848AAaIBEY"],
	2425 : ["What do I do with my life?", 6, "Psychology", 3, "ydVOV3iFaa", "https://answers.yahoo.com/question/index?qid=20210419004256AAvMBeN"],
	2426 : ["Do \"pretty\" girls ever worry that they might not be good enough for a guy?", 5, "None", 7, "None", "https://answers.yahoo.com/question/index?qid=20210419204811AA6Zk1I"],
	2427 : ["Where do I go for understanding of my problems when yahoo answers shuts down?", 11, "Yahoo Answers", 22, "gGZz2EGyaa", "https://answers.yahoo.com/question/index?qid=20210415141614AA80SZ7"],
	2428 : ["How do we get the new orange version of Yahoo  Answers?", 8, "Yahoo Answers", 3, "1fCGE9gKaa", "https://answers.yahoo.com/question/index?qid=20210418124118AANOLnU"],
	2429 : ["Should the person who asks the final question on YA 1 second before 4/20 midnight be given a prize?", 7, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20210419023707AAgBUlb"],
	2430 : ["Why doesn't someone buy Yahoo Answers to keep it going?", 7, "Yahoo Answers", 7, "MtWyniS3aa", "https://answers.yahoo.com/question/index?qid=20210419032518AAYskvc"],
	2431 : ["Please help me with my book blurb!?", 7, "Books & Authors", 9, "2CbcPPVFaa", "https://answers.yahoo.com/question/index?qid=20210409085659AAnTeqh"],
	2432 : ["What makes a good piece of writing?", 7, "Books & Authors", 6, "ESFO4P1Baa", "https://answers.yahoo.com/question/index?qid=20210410133216AAbbf6x"],
	2433 : ["My friend is trying to sell a cook book she created on word document. Is this even legal ?", 8, "Books & Authors", 50, "ytQfxuPyaa", "https://answers.yahoo.com/question/index?qid=20210410043146AAHe4I1"],
	2434 : ["How To Write A Book?", 9, "Books & Authors", 18, "Fln7q63Daa", "https://answers.yahoo.com/question/index?qid=20210410024726AAmlRug"],
	2435 : ["Is Lord of the Rings the most critically panned book of all time, that still somehow has a following?", 11, "None", 34, "None", "https://answers.yahoo.com/question/index?qid=20210407181913AA6dP9y"],
	2436 : ["Did you know that frying fats, meat drippings, and other fats were used to make artillery shells and fuel for depth charges in World War II?", 4, "History", 0, "CFDlpuc2aa", "https://answers.yahoo.com/question/index?qid=20210416212037AArtm34"],
	2437 : ["How can soldiers ever be normal after warfare, when im still upset that someone was rude to me on the phone yesterday and tried to boss me ?", 4, "History", 3, "SHiRD91Oaa", "https://answers.yahoo.com/question/index?qid=20210417015054AAFo26r"],
	2438 : ["how were white people able to capture african and load them onto slave ships?", 15, "History", 40, "8U1aivfwaa", "https://answers.yahoo.com/question/index?qid=20210410223436AAWwcvk"],
	2439 : ["How would you rank every great power (overall) during WW2?", 5, "History", 7, "SAmabN45aa", "https://answers.yahoo.com/question/index?qid=20210416033520AAuXUdm"],
	2440 : ["When did 9/11 happen?", 9, "History", 9, "hBl2ePQRaa", "https://answers.yahoo.com/question/index?qid=20210413233609AAbKZQu"],
	2441 : ["Where can I find weather?", 5, "History", 4, "t4doY3Y5aa", "https://answers.yahoo.com/question/index?qid=20210416161954AAldscW"],
	2442 : ["Explain how someone with Inca genetic code ends up in Texas?", 5, "History", 12, "7fPjNvVNaa", "https://answers.yahoo.com/question/index?qid=20210417011926AAD4Bt4"],
	2443 : ["Why can't I read the comments anymore? It all started about the end of July 2020?", 5, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20200811034607AAaIKBU"],
	2444 : ["If your Indian friend planned to use a time machine to reverse the Partition of India would you report him immediately or look the other way?", 5, "Other - Arts & Humanities", 6, "AA11768465", "https://answers.yahoo.com/question/index?qid=20200812214952AAc5Yt4"],
	2445 : ["Are stationery and stationary pronounced the same? ?", 6, "Other - Arts & Humanities", 5, "bXBEQcn8aa", "https://answers.yahoo.com/question/index?qid=20200816201125AACxkjX"],
	2446 : ["If trump was going to make America great...Why hasn't he done so after  being in office for almost 4years?", 12, "Other - Arts & Humanities", 31, "c05702374b5bc85f3a1502d55060a46eaa", "https://answers.yahoo.com/question/index?qid=20200815141542AAg5E6Y"],
	2447 : ["Why do they say to never put art or jewels in a time capsule?", 6, "Other - Arts & Humanities", 7, "AA12335783", "https://answers.yahoo.com/question/index?qid=20200825024834AAnGSUA"],
	2448 : ["In what situations do \"opposites attract\"?", 4, "Other - Arts & Humanities", 0, "Bfq2vYzsaa", "https://answers.yahoo.com/question/index?qid=20200827064744AATwExX"],
	2449 : ["Whose country do YOU support, the freedom-loving, benevolent people of India or the Comnunist dictatorship of China?", 7, "None", 5, "None", "https://answers.yahoo.com/question/index?qid=20200825062043AAmBosf"],
	2450 : ["I worked at McDonald's we can't let food undercook what are critics talking about, anyway?", 5, "None", 11, "None", "https://answers.yahoo.com/question/index?qid=20210112011701AAaVpHi"],
}