var questions_dict = {
	3101 : ["A truck is stuck on the railroad tracks, is there a bill to pay?", 7, "Rail", 13, "nKE2qZe4aa", "https://answers.yahoo.com/question/index?qid=20200930000652AANXzE1"],
	3102 : ["Do public trains have wi-fi available while you travel?", 7, "Rail", 1, "l3Jay0Mbaa", "https://answers.yahoo.com/question/index?qid=20200827213005AAID1oN"],
	3103 : ["Are steel tie railway tracks used just in the UK or are they also used in the USA and other parts of the world?", 7, "Rail", 12, "QpP1xJ4Naa", "https://answers.yahoo.com/question/index?qid=20200830112125AAZA5SR"],
	3104 : ["Should Australia just trial a new level crossing light sequence which consists of a steady yellow light before the two flashing red lights?", 4, "Rail", 1, "BcvbZX8caa", "https://answers.yahoo.com/question/index?qid=20200904122706AALZoPU"],
	3105 : ["I have this, and believe it a railroad related piece but don't know what it is. Can anyone tell me what it is? ?", 5, "Rail", 4, "73iVsGPyaa", "https://answers.yahoo.com/question/index?qid=20200906150629AA0xPZm"],
	3106 : ["How come brake vans and cabooses are just no longer a requirement for freight trains today? Is this because of better braking systems?", 9, "Rail", 7, "l9Tgf12Oaa", "https://answers.yahoo.com/question/index?qid=20200905081114AAGFMYq"],
	3107 : ["Is there an Amtrak train that goes from Philadelphia to Harrisburg ?", 4, "Rail", 3, "fMLI1elAaa", "https://answers.yahoo.com/question/index?qid=20200814021447AA7ArTJ"],
	3108 : ["Am I the only one who likes riding trains?", 5, "Rail", 7, "6qZbVlKJaa", "https://answers.yahoo.com/question/index?qid=20200816155534AApPXao"],
	3109 : ["What is the history of the Burlington Northern railroad in the USA and when was it just formed and by who?", 7, "Rail", 11, "QpP1xJ4Naa", "https://answers.yahoo.com/question/index?qid=20200827090343AAsnu9Y"],
	3110 : ["I need to rent a car for a month but not sure how to get there without paying for a taxi?", 6, "Commuting", 4, "zDJCU5rdaa", "https://answers.yahoo.com/question/index?qid=20210119211317AA2cE0X"],
	3111 : ["How do people work in Canada?", 10, "Commuting", 14, "JAKVhrHRaa", "https://answers.yahoo.com/question/index?qid=20210202122114AAYtDSb"],
	3112 : ["Whose fault was this?", 7, "Commuting", 10, "leIXzQGdaa", "https://answers.yahoo.com/question/index?qid=20210216144756AA0uAqh"],
	3113 : ["Is there a way to plan a trip showing speed limits of the route?", 8, "Commuting", 6, "kX9c3dUkaa", "https://answers.yahoo.com/question/index?qid=20210218235838AAydy1i"],
	3114 : ["How do changes on trains work?", 8, "Rail", 10, "9AQJlpIxaa", "https://answers.yahoo.com/question/index?qid=20201020075251AAE4w5d"],
	3115 : ["Someone please help me with a train journey through London. I'm panicking about it. It's in the details.?", 4, "Rail", 1, "B3wuHu8Jaa", "https://answers.yahoo.com/question/index?qid=20201027233604AA32eHQ"],
	3116 : ["How hard it is to construct railway infrastructure ? (tracks and stations)?", 7, "Rail", 2, "thsSVt6Gaa", "https://answers.yahoo.com/question/index?qid=20201108014923AAYrwKe"],
	3117 : ["What type of horn do you think our number 84 should have?", 4, "Rail", 4, "AgLLvVMiaa", "https://answers.yahoo.com/question/index?qid=20201112183744AAA2QuK"],
	3118 : ["Does anyone know how to get from LA to San Francisco for cheap?", 11, "Rail", 25, "cK28Kl0Uaa", "https://answers.yahoo.com/question/index?qid=20201124003745AAhMFk3"],
	3119 : ["Why does New York have subways, but Chicago has elevated trains?", 6, "Rail", 9, "oL6FUbshaa", "https://answers.yahoo.com/question/index?qid=20201127222034AAQDdsa"],
	3120 : ["I live in Mississippi and got fired for not driving on icey roads?", 20, "Safety", 29, "Lv0taCyvaa", "https://answers.yahoo.com/question/index?qid=20210215190830AA05sc3"],
	3121 : ["I know it is not legal to ride in a normal trailer when being pulled, but can you have passengers in the 5th wheel trailer while driving?", 6, "Safety", 6, "MOZrUExDaa", "https://answers.yahoo.com/question/index?qid=20210222224814AAFnR6x"],
	3122 : ["I saw the terrible crash Tiger Woods was in! I hope he will be all right! How come in a rollover the front airbags don't deploy?", 18, "Safety", 82, "AA11197089", "https://answers.yahoo.com/question/index?qid=20210223220238AA4wSYz"],
	3123 : ["The car speed 55 to 70 miles is very fast and you can't drive ?", 14, "Safety", 57, "ngOsv5Kiaa", "https://answers.yahoo.com/question/index?qid=20210225214627AAvF356"],
	3124 : ["What is your opinion of this use of hazard flashers in a car?", 5, "Safety", 10, "cb1c8e5fcd8492bc3787fd1b614481ecaa", "https://answers.yahoo.com/question/index?qid=20210304003056AAbSFbu"],
	3125 : ["Do the majority of those who learn to drive at a driving school understand how to turn the steering wheel when the instructor teaches them?", 5, "Safety", 3, "rCZe4XUxaa", "https://answers.yahoo.com/question/index?qid=20210311194518AA2ct9S"],
	3126 : ["Why are there so many drug addicts who are on public transportation?", 7, "Commuting", 4, "IY4QSajIaa", "https://answers.yahoo.com/question/index?qid=20210220223407AACfeGR"],
	3127 : ["What's the longest commute to work you would consider reasonable?", 9, "Commuting", 13, "yKjwkDqdaa", "https://answers.yahoo.com/question/index?qid=20210220224746AAZAZlt"],
	3128 : ["Should I commute to my university 40 minutes away or dorm?", 5, "Commuting", 2, "nJB92k7xaa", "https://answers.yahoo.com/question/index?qid=20210303182441AAiZY4p"],
	3129 : ["Why it take so long to drive between cities in South Africa compared to Ireland?", 4, "Commuting", 2, "gjUpsUZAaa", "https://answers.yahoo.com/question/index?qid=20210308191920AAPAI5H"],
	3130 : ["Is it going to be hard to get a driver's license if your parents won't let you practice driving ?", 6, "Commuting", 6, "56f7791c16875200e7c89ce0bbaf53cbaa", "https://answers.yahoo.com/question/index?qid=20210309141840AADCGeZ"],
	3131 : ["Is it cheaper to live in Tampa or commute?", 7, "Commuting", 3, "Cflbk6Jxaa", "https://answers.yahoo.com/question/index?qid=20210309165208AAPpwXG"],
	3132 : ["Any Overnight Trains Besides Amtrak in USA?", 8, "Rail", 4, "fDmiu67Xaa", "https://answers.yahoo.com/question/index?qid=20201129183733AAGAQVR"],
	3133 : ["I heard a train horn outside but I live no where near train station or train railroad?", 11, "Rail", 9, "QpP1xJ4Naa", "https://answers.yahoo.com/question/index?qid=20201206013829AAYL6to"],
	3134 : ["What is a CSX engineers work schedule like? Do you get any time off?", 4, "Rail", 12, "QpP1xJ4Naa", "https://answers.yahoo.com/question/index?qid=20201223232251AAgstA6"],
	3135 : ["Why is taking a train as expensive as a a plane ?", 11, "Rail", 27, "HwMSi61Faa", "https://answers.yahoo.com/question/index?qid=20201227055124AAeYx53"],
	3136 : ["When is America going to invest into MagLev Trains ?", 12, "Rail", 13, "y9Y12soRaa", "https://answers.yahoo.com/question/index?qid=20210112110208AAYlgV0"],
	3137 : ["How many times on the same journey is an inspector allowed to ask to see your rail ticket ?", 10, "Rail", 12, "GYn2W13laa", "https://answers.yahoo.com/question/index?qid=20210113072809AANHAT6"],
	3138 : ["how do i sign up for covi 19 shots?", 9, "Rail", 17, "k1UUnpJfaa", "https://answers.yahoo.com/question/index?qid=20210119174640AALo8rz"],
	3139 : ["If your being tailgated and doing the speed limit or 5pmh over, how do you react?", 21, "Safety", 59, "xcamy9ERaa", "https://answers.yahoo.com/question/index?qid=20210308041206AAaStqp"],
	3140 : ["Is it a good idea to keep a club (anti theft device) in your car?", 8, "Safety", 8, "uQ5U5esPaa", "https://answers.yahoo.com/question/index?qid=20210312060847AAPbclj"],
	3141 : ["How do I overcome fear of driving on main roads?", 5, "Safety", 0, "rCZe4XUxaa", "https://answers.yahoo.com/question/index?qid=20210316054307AAKbFKb"],
	3142 : ["UTV street legal?", 5, "Safety", 7, "AA10065267", "https://answers.yahoo.com/question/index?qid=20210317013146AACAcfR"],
	3143 : ["I ran a Stop sign while driving. Will I have to go to traffic school?", 4, "Safety", 5, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20210320083355AAW6rjP"],
	3144 : ["Do I need to \"wait\" at an intersection when making a right hand turn when the light has a \"RED ARROW\"?", 5, "Safety", 4, "6BvkwLljaa", "https://answers.yahoo.com/question/index?qid=20210319215653AAZNI9z"],
	3145 : ["Why can't females backup properly in their vehicles?", 6, "Safety", 15, "bqLvWpcZaa", "https://answers.yahoo.com/question/index?qid=20210324170430AAC4wH8"],
	3146 : ["How do you commute if you don't drive?", 19, "Commuting", 24, "IY4QSajIaa", "https://answers.yahoo.com/question/index?qid=20210309204623AAkCszD"],
	3147 : ["How far above the speed limit is safe to drive?", 11, "Commuting", 46, "bqLvWpcZaa", "https://answers.yahoo.com/question/index?qid=20210311171059AAlE3Wb"],
	3148 : ["Did someone who kept asking about transit bus year and metrorail years vs calendar years have a disability?", 5, "Commuting", 27, "oRT4E9Geaa", "https://answers.yahoo.com/question/index?qid=20210318172658AAOzQdM"],
	3149 : ["are major roadways still pretty empty during rush hour times? why? how depends?", 4, "Commuting", 4, "umPv7MFbaa", "https://answers.yahoo.com/question/index?qid=20210323035115AAKtVvK"],
	3150 : ["How many days a week of working in person would you consider moving closer to the job instead of commuting?", 7, "Commuting", 10, "NO1hpAMiaa", "https://answers.yahoo.com/question/index?qid=20210323213959AAjh7Ht"],
}