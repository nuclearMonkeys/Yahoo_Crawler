var questions_dict = {
	1201 : ["Should you not wear makeup if you are wearing a white top?", 7, "Makeup", 2, "OdyqQ39Haa", "https://answers.yahoo.com/question/index?qid=20210218221220AARVjJL"],
	1202 : ["Can my employer say I quit/force me out of unemployment?", 4, "Yahoo Widgets", 4, "cK28Kl0Uaa", "https://answers.yahoo.com/question/index?qid=20210402164834AAf1Nvk"],
	1203 : ["What do you use to take off your makeup?", 15, "None", 9, "None", "https://answers.yahoo.com/question/index?qid=20210216162541AAIi1xS"],
	1204 : ["What is the deadline for filing US federal income taxes this year?", 10, "Taxes", 10, "6aTjQm6kaa", "https://answers.yahoo.com/question/index?qid=20210411202132AArvaG8"],
	1205 : ["What is the best product file your tax return?", 4, "Taxes", 1, "qxvToLU9aa", "https://answers.yahoo.com/question/index?qid=20210415210706AAaaeiJ"],
	1206 : ["Texas Property Taxes for Disabled Vets?", 6, "Taxes", 1, "OFHzkVsOaa", "https://answers.yahoo.com/question/index?qid=20210414003650AAIlASY"],
	1207 : ["Why my tax return decrease when I answer yes to “did the student complete the firts 4 years of post secondary education?", 7, "Taxes", 12, "jRNoLxaOaa", "https://answers.yahoo.com/question/index?qid=20210413230509AAjfkjU"],
	1208 : ["Is it possible filing taxes on paper reduces the chances of being flagged for an audit?", 7, "Taxes", 6, "WOugJxMvaa", "https://answers.yahoo.com/question/index?qid=20210414142431AASOZD6"],
	1209 : ["Is a hard,moveable lymph node likely to be cancer in the armpit?", 4, "Women's Health", 6, "7eb3fd3226605d4f11ad285a2b5a5ab4aa", "https://answers.yahoo.com/question/index?qid=20210418185600AAFBhQ6"],
	1210 : ["30 with no beard?", 10, "Men's Health", 4, "P2C0o1FBaa", "https://answers.yahoo.com/question/index?qid=20210414234704AAx3XsE"],
	1211 : ["Do you save or spend more money?", 5, "Yahoo Widgets", 10, "KeZr0mXVaa", "https://answers.yahoo.com/question/index?qid=20200723124731AA1EbkC"],
	1212 : ["Do you like wearing a face mask?", 6, "Yahoo Widgets", 12, "KeZr0mXVaa", "https://answers.yahoo.com/question/index?qid=20200723063745AA0DK9r"],
	1213 : ["Do you believe God creates coronavirus was in China and world spread now because it is behind God's secret reason? Yes? No? or Don't Know? ?", 7, "Yahoo Widgets", 7, "AA11447210", "https://answers.yahoo.com/question/index?qid=20200807213655AAhSW2n"],
	1214 : ["Why do people think a man should be responsible for a child when the woman is the one who stole his sperm without his knowledge?", 6, "Yahoo Widgets", 9, "AA12022384", "https://answers.yahoo.com/question/index?qid=20191126120904AAm3w4H"],
	1215 : ["when I enter my password, it gets covered with xxxx?", 6, "Yahoo Widgets", 9, "qwTc9lWyaa", "https://answers.yahoo.com/question/index?qid=20191210212935AARJRX3"],
	1216 : ["I am happy with Donald Trump is a hero. Do you agree he will win election in next two term? ?", 8, "Yahoo Widgets", 52, "7veMBorEaa", "https://answers.yahoo.com/question/index?qid=20200412185319AA9kLSD"],
	1217 : ["Do you think it is bad to play music at night at 1 am?", 4, "Yahoo Widgets", 0, "gpUE7M6naa", "https://answers.yahoo.com/question/index?qid=20200505080820AAwCQfl"],
	1218 : ["What do you see when you look in a mirror?", 5, "Yahoo Widgets", 10, "KeZr0mXVaa", "https://answers.yahoo.com/question/index?qid=20200723080338AAKjBoF"],
	1219 : ["How do you like your eggs cooked?", 5, "Yahoo Widgets", 13, "KeZr0mXVaa", "https://answers.yahoo.com/question/index?qid=20200723091040AAd9twN"],
	1220 : ["whats my password?", 9, "Yahoo Widgets", 1, "o4q8NoN5aa", "https://answers.yahoo.com/question/index?qid=20190924180034AAbD9cZ"],
	1221 : ["can instagrams be hacked?", 9, "Yahoo Widgets", 3, "d6oV9P3Taa", "https://answers.yahoo.com/question/index?qid=20190926214024AA95jY5"],
	1222 : ["How much worse will things get if the Democrats win big in 2020?", 10, "Yahoo Widgets", 20, "1amF7oNwaa", "https://answers.yahoo.com/question/index?qid=20190824041956AAnrhXx"],
	1223 : ["Why doesn't the media understand that China is paying for the tariffs because China devalues their currency?", 6, "Yahoo Widgets", 5, "AA10123414", "https://answers.yahoo.com/question/index?qid=20190826150413AARp5Oc"],
	1224 : ["Is atheism a religion, cult, disease, or some sort of hilarious mental disorder?", 13, "Yahoo Widgets", 31, "4xNi8jCEaa", "https://answers.yahoo.com/question/index?qid=20190824152720AA8to7O"],
	1225 : ["If liberals were in charge, would they seek to make trade deals with the drug cartels to import cocaine and other drugs?", 9, "Yahoo Widgets", 23, "EBOpNap0aa", "https://answers.yahoo.com/question/index?qid=20190826011512AAhw1Ok"],
	1226 : ["How long is the drive from Kentucky to Berlin Germany?", 5, "Yahoo Widgets", 2, "5E6bhc7Caa", "https://answers.yahoo.com/question/index?qid=20190823212935AADpB4Z"],
	1227 : ["What should I do if my partner is a snowflake?", 4, "Yahoo Widgets", 5, "FjCbCkhzaa", "https://answers.yahoo.com/question/index?qid=20190825031533AADaBiQ"],
	1228 : ["Damn. IF I Was Raped By Celebrities You'd Think They Could At Least Spare a Couple Of Bucks..?", 4, "Yahoo Widgets", 1, "VYusr8gsaa", "https://answers.yahoo.com/question/index?qid=20190820030646AA8G3ss"],
	1229 : ["Co worker issue?", 23, "Yahoo Widgets", 24, "lziq152Jaa", "https://answers.yahoo.com/question/index?qid=20190819025723AAXs8Pd"],
	1230 : ["Rush Limbaugh: “They (White House reporters) sound like a bunch of 6-year-old first graders shouting at the teacher.” True or false?", 6, "Yahoo Widgets", 7, "bNjsdqwnaa", "https://answers.yahoo.com/question/index?qid=20190823184930AAvkApD"],
	1231 : ["Why do far left people yell a nd scream so much?", 6, "Yahoo Widgets", 9, "NoRP4iyNaa", "https://answers.yahoo.com/question/index?qid=20190823035714AAc5I2g"],
	1232 : ["i want to remove ads from my search engine?", 6, "Yahoo Search", 0, "XXcjtAjTaa", "https://answers.yahoo.com/question/index?qid=20180825012101AAljNW6"],
	1233 : ["how to get search back on yahoo?", 4, "Yahoo Search", 2, "yKrzXITOaa", "https://answers.yahoo.com/question/index?qid=20180901184716AA6b46A"],
	1234 : ["First time box mods?", 4, "Yahoo Shopping", 0, "YHqNaTboaa", "https://answers.yahoo.com/question/index?qid=20190102213819AAfxolZ"],
	1235 : ["Where did porch monkey come from?", 3, "Yahoo Shopping", 3, "GIzL3Yo5aa", "https://answers.yahoo.com/question/index?qid=20190106181040AAVj6Az"],
	1236 : ["O have not received my order . It was a kiss yosemite baseball cap . 2395 plus shipping?", 2, "Yahoo Shopping", 1, "YNUuIayjaa", "https://answers.yahoo.com/question/index?qid=20190123201910AAm8erX"],
	1237 : ["Is Lord Fireball the greatest user in Yahoo Answers history?", 15, "Yahoo Widgets", 30, "391fb23dafd355005ac7c816295c4b03aa", "https://answers.yahoo.com/question/index?qid=20190821170848AAHjI01"],
	1238 : ["Has Hillary blamed Russia yet today?", 5, "Yahoo Widgets", 10, "VYusr8gsaa", "https://answers.yahoo.com/question/index?qid=20190826142248AAz9bPS"],
	1239 : ["How do I remove my personal information from a yahoo search?", 2, "Yahoo Search", 4, "FcTbNgrzaa", "https://answers.yahoo.com/question/index?qid=20180903184644AAJsgx0"],
	1240 : ["why can I not get nude images on my images search?", 4, "Yahoo Search", 1, "ThyG36d3aa", "https://answers.yahoo.com/question/index?qid=20181018001047AAFvW3E"],
	1241 : ["how to find someone on yahoo?", 3, "Yahoo Search", 9, "AE41H8wIaa", "https://answers.yahoo.com/question/index?qid=20181023145125AAZpwZl"],
	1242 : ["Why did I don t get any result for any search in yahoo?", 2, "Yahoo Search", 4, "KfKcKM29aa", "https://answers.yahoo.com/question/index?qid=20181103170924AAyWaPz"],
	1243 : ["how do you find a yahoo user?", 4, "Yahoo Search", 4, "VTNOlUg5aa", "https://answers.yahoo.com/question/index?qid=20181108162103AAAFGlF"],
	1244 : ["I have my safe search of but when I look up adult content it still says change safesearch settings?", 4, "Yahoo Search", 2, "40EfktGgaa", "https://answers.yahoo.com/question/index?qid=20181109200716AAWD5VO"],
	1245 : ["How can i search porn?", 6, "Yahoo Search", 4, "fHQqpyLcaa", "https://answers.yahoo.com/question/index?qid=20181212031215AA4nHd2"],
	1246 : ["A few weeks ago, a 2-liter bottle of Safeway cola cost 89 cents! Now it costs $1.25??? This is robbery! Why does everything have to be so?", 9, "Yahoo Shopping", 8, "o4sN2zWwaa", "https://answers.yahoo.com/question/index?qid=20190120222446AA6pzwu"],
	1247 : ["Why is the damn Tfal \"ActiFry\" air cooker so crazy expensive?", 4, "Yahoo Shopping", 14, "x53OaZDJaa", "https://answers.yahoo.com/question/index?qid=20190209161341AAto8uv"],
	1248 : ["What's wrong with 'rent-to-buy'?", 6, "Current Events", 12, "GR634bzYaa", "https://answers.yahoo.com/question/index?qid=20190305155425AAPh8TD"],
	1249 : ["Where I can Get Best deals on Lords & Taylor products during Black Friday 2019?", 5, "Yahoo Shopping", 3, "ijkejpB7aa", "https://answers.yahoo.com/question/index?qid=20190316094843AAivBS5"],
	1250 : ["can I buy something which is made by white people with their hands?", 3, "None", 1, "None", "https://answers.yahoo.com/question/index?qid=20190322182332AABkGiw"],
}