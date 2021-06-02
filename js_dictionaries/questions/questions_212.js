var questions_dict = {
	11349 : ["How do I get my 21/2 year old to leave the cat alone?", 8, "Toddler & Preschooler", 0, "25512b28dedb5738ac242400e7bf6f68aa", "https://answers.yahoo.com/question/index?qid=20070420104509AARIXnL"],
	11350 : ["How do you tell your child they can't have an expensive Christmas gift?", 12, "Toddler & Preschooler", 0, "25512b28dedb5738ac242400e7bf6f68aa", "https://answers.yahoo.com/question/index?qid=20071212072718AA5E6lq"],
	11351 : ["Who is your favorite comedian from past and present?", 27, "Television", 0, "881e7114c255064de017f41692ccbf6caa", "https://answers.yahoo.com/question/index?qid=20070522093326AA4fle0"],
	11352 : ["I'd like to know of any support groups for chronic pain in the Eugene Or area.?", 2, "General Health Care", 0, "bf59f6d5ae91c1134dffa7640575316baa", "https://answers.yahoo.com/question/index?qid=20070130163503AAL3nhh"],
	11353 : ["my first grader is being asked to write sentences the second day of school?", 18, "Grade-Schooler", 0, "AA11821229", "https://answers.yahoo.com/question/index?qid=20060927093612AA7559k"],
	11354 : ["Would Mr.Anderson vs Dolph Ziggler be a good feud IYO?", 3, "Wrestling", 0, "J9u8hmBfaa", "https://answers.yahoo.com/question/index?qid=20110215020207AAQMi7H"],
	11355 : ["Would Bryan Danielson and Billy Kidman make a good match?", 6, "Wrestling", 0, "J9u8hmBfaa", "https://answers.yahoo.com/question/index?qid=20110218023403AAYDRwq"],
	11356 : ["Rate this card and choose the winner?", 6, "Wrestling", 0, "J9u8hmBfaa", "https://answers.yahoo.com/question/index?qid=20101224184448AAIXMIX"],
	11357 : ["Which better feud for Daniel Bryan. Bryan vs Ted Dibiase or Bryan vs Dolph Ziggler?", 9, "Wrestling", 0, "J9u8hmBfaa", "https://answers.yahoo.com/question/index?qid=20101220190041AAN7K3x"],
	11358 : ["who's more similiar to Benoit?Bryan Danielson or Davey Richards + message to Kawajaj(RWF owner)?", 6, "Wrestling", 0, "J9u8hmBfaa", "https://answers.yahoo.com/question/index?qid=20100509034512AAaoevA"],
	11359 : ["Awesome Kong is coming to the WWE?", 8, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20110411190845AAwMZV1"],
	11360 : ["How many superstars hav held a world title and tag title at the same time?", 3, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20100802022811AAQNREi"],
	11361 : ["A TNA King of the Mountain question?(Plez answer)?", 2, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20100528020828AAAoWlH"],
	11362 : ["Is this a Good TNA Slammiversary?Plez answer?", 1, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20100528021735AAYKFjW"],
	11363 : ["Are you upset we neva Saw?", 5, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20100528051104AAHBIPz"],
	11364 : ["Every one name a TNA vs WWE match ple?", 4, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20100528051504AA87MTM"],
	11365 : ["Every one name a TNA vs WWE match plez?", 10, "Wrestling", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20100528052137AAawv4K"],
	11366 : ["How do I get that 'Pump'' Feeling?", 3, "Diet & Fitness", 0, "GJQIL0RZaa", "https://answers.yahoo.com/question/index?qid=20111129081756AAghpA9"],
	11367 : ["What are healthy fats?", 9, "Diet & Fitness", 0, "GJQIL0RZaa", "https://answers.yahoo.com/question/index?qid=20111129123237AAL527k"],
	11368 : ["How do I become a rapper?", 4, "Music", 0, "GJQIL0RZaa", "https://answers.yahoo.com/question/index?qid=20110928133319AACjDEN"],
	11369 : ["Why do Cena Haters lie about John Cena?", 12, "Wrestling", 0, "GJQIL0RZaa", "https://answers.yahoo.com/question/index?qid=20100324050932AAtjERZ"],
	11370 : ["who is your all-time favourite wreslter in the wwe raw and smackdown?", 20, "Wrestling", 0, "GJQIL0RZaa", "https://answers.yahoo.com/question/index?qid=20081110083416AALZVxa"],
	11371 : ["Whos number 23 in the AFL?", 8, "Football (Australian)", 0, "RJMrJN3waa", "https://answers.yahoo.com/question/index?qid=20080906150136AAr34i9"],
	11372 : ["Do prosecutors scare you?", 8, "Law Enforcement & Police", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061126165502AAswIk6"],
	11373 : ["Will a limo driver drive me to the liquor store on the way to my hotel?", 7, "Other - Cars & Transportation", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061117114243AAoGz5i"],
	11374 : ["Who thought ludacris's new album is weak?", 2, "Music", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061117121230AA5ppST"],
	11375 : ["Can't stay focused during sex?", 9, "Men's Health", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061117121614AAsQmbK"],
	11376 : ["Craziest Party ever?", 12, "Polls & Surveys", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061118102258AACKews"],
	11377 : ["How can I recieve cash thorugh a credit card?", 3, "Personal Finance", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061110075920AA6B9cn"],
	11378 : ["I'm a one minute man in the morning?", 11, "Singles & Dating", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061108121356AAO2Dq2"],
	11379 : ["Who thinks Nevada will pass the marijuana bill?", 7, "Politics", 0, "AA11618848", "https://answers.yahoo.com/question/index?qid=20061107113827AA8Cqze"],
	11380 : ["Sheamus vs Edge/Undertaker vs Shawn Michaels at Wrestlemania?", 9, "Wrestling", 0, "gVlTlpb2aa", "https://answers.yahoo.com/question/index?qid=20100127192403AAt7Fh8"],
	11381 : ["Do you think the Internet Wrestling community ruined wrestling?", 11, "Wrestling", 0, "gVlTlpb2aa", "https://answers.yahoo.com/question/index?qid=20100116100415AAzFhpW"],
	11382 : ["What do you think of these circumstances?", 5, "Immigration", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20100711081434AAs7y1X"],
	11383 : ["Is there a country that sends?", 4, "Government", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20100814115214AArmKUu"],
	11384 : ["What is wrong with my 1998 monte carlo?", 2, "Maintenance & Repairs", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20101226215822AAIfx8O"],
	11385 : ["Where on the internet can I find articles by experts?", 1, "Homework Help", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20110217165543AAT7ls3"],
	11386 : ["Can the Delegates change their endorsements at the Convention?", 7, "Elections", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20080610215930AAyMAdj"],
	11387 : ["Why are Obama supporters so naive about the war and sound like?", 11, "Elections", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20080611114916AAZ77eq"],
	11388 : ["If the Democrat Primaries started today!?", 8, "Elections", 0, "bf563611997105cddb27bc4878086aa2aa", "https://answers.yahoo.com/question/index?qid=20080517111433AA99adB"],
	11389 : ["Whats a good cleansing method for psoriasis/sebborhic dermatitis for the face?", 5, "Diseases & Conditions", 0, "FZSG52E2aa", "https://answers.yahoo.com/question/index?qid=20110208204341AAJyXpj"],
	11390 : ["Want to start a small business (beauty supply store)?", 4, "Small Business", 0, "FZSG52E2aa", "https://answers.yahoo.com/question/index?qid=20110507080916AA2CTVj"],
	11391 : ["How can I keep cats out of my garden without upsetting my dog?", 6, "Other - Home & Garden", 0, "GyazLn5laa", "https://answers.yahoo.com/question/index?qid=20111017062414AA2LEMI"],
	11392 : ["any real work from home jobs or careers?", 7, "Careers & Employment", 0, "FZSG52E2aa", "https://answers.yahoo.com/question/index?qid=20101017183933AAJFf5t"],
	11393 : ["Why do Indians think Black women or people in general are bad people?", 12, "Cultures & Groups", 0, "FZSG52E2aa", "https://answers.yahoo.com/question/index?qid=20100325113617AAFHVuZ"],
	11394 : ["Who's Better Volume 42(RIP Eddie Guerrero Edition)?", 5, "Wrestling", 0, "gVlTlpb2aa", "https://answers.yahoo.com/question/index?qid=20091113063132AAeqYTj"],
	11395 : ["What kind of sewing machine should my fiancée get?", 6, "Hobbies & Crafts", 0, "AZfyLLt6aa", "https://answers.yahoo.com/question/index?qid=20111226232254AAvZ0w0"],
	11396 : ["Who do you think will win BLOOMBERG or THOMPSON?", 2, "Elections", 0, "gVlTlpb2aa", "https://answers.yahoo.com/question/index?qid=20091101205946AAQ8OjF"],
	11397 : ["What is Rosa Mendes going to do on ECW?", 8, "Wrestling", 0, "gVlTlpb2aa", "https://answers.yahoo.com/question/index?qid=20091102055506AAITdrX"],
	11398 : ["pup peeing when excited?", 11, "Dogs", 0, "usesFg1Paa", "https://answers.yahoo.com/question/index?qid=20080315031237AAyAaGr"],
}