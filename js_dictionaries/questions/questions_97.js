var questions_dict = {
	4851 : ["Who do you think is better at the same age Luka Doncic or Larry Bird?", 6, "Basketball", 2, "kgBPU4xxaa", "https://answers.yahoo.com/question/index?qid=20201231035726AAXiQFf"],
	4852 : ["How good do you think Luka Doncic is?", 8, "Basketball", 5, "kV0MJL2Aaa", "https://answers.yahoo.com/question/index?qid=20201231035139AAJZb2X"],
	4853 : ["Can I wear contact lenses while playing basketball?", 6, "Basketball", 2, "FK38rAFkaa", "https://answers.yahoo.com/question/index?qid=20210115141346AAsJrKQ"],
	4854 : ["Will James Harden be able to make the Nets contenders by playing alongside with the two other stars the Nets now have in their team?", 11, "Basketball", 7, "s2Yoz3qWaa", "https://answers.yahoo.com/question/index?qid=20210114011240AAZTBiH"],
	4855 : ["Why do Black people always support a Black boxer against a white boxer?", 8, "Boxing", 4, "ri0l8y4faa", "https://answers.yahoo.com/question/index?qid=20201213165717AAeqMhS"],
	4856 : ["If Logan Paul beats Mayweather, should he get a fight with Tyson?", 11, "Boxing", 4, "ri0l8y4faa", "https://answers.yahoo.com/question/index?qid=20201212180231AAt5GgP"],
	4857 : ["In the UK, is the day after Christmas really dedicated to the sport of boxing?", 4, "Boxing", 1, "Pc0QjrQ4aa", "https://answers.yahoo.com/question/index?qid=20201217164926AArV1Af"],
	4858 : ["Is it dumb that Logan Paul is fighting Floyd Mayweather?", 7, "Boxing", 0, "Ya1gZDnYaa", "https://answers.yahoo.com/question/index?qid=20201220023133AAlnkUk"],
	4859 : ["Do you think Sugar Ray Robinson is the greatest \n boxer of all time?", 16, "Boxing", 5, "Xm8crry3aa", "https://answers.yahoo.com/question/index?qid=20201222035437AAm8i1Z"],
	4860 : ["Who is the best player in the NBA right now?", 15, "Basketball", 20, "f0NRJxl3aa", "https://answers.yahoo.com/question/index?qid=20210116164810AAAJtkX"],
	4861 : ["Are you ready for the summer?", 9, "Basketball", 9, "HmeYalzraa", "https://answers.yahoo.com/question/index?qid=20210207055738AAvz3Ay"],
	4862 : ["All-time starting 5: Hakeem, Magic, Malone, Pippen, Jordan ... What line-up is better?", 5, "Basketball", 4, "x1Ze89pZaa", "https://answers.yahoo.com/question/index?qid=20210212050846AAaV9BO"],
	4863 : ["name the overrated nba players?", 7, "Basketball", 12, "8lKXI101aa", "https://answers.yahoo.com/question/index?qid=20210221211919AArsMvx"],
	4864 : ["Can you make The NBA at 37?", 7, "Basketball", 0, "uqflsWD0aa", "https://answers.yahoo.com/question/index?qid=20210226145654AAcQTQr"],
	4865 : ["Whatever happened to the NBA team Vancouver Grizzlies? And why does the NBA only have ONE Canadian team?", 11, "Basketball", 6, "JT2qcRC6aa", "https://answers.yahoo.com/question/index?qid=20210225023741AAeet2e"],
	4866 : ["Who can stop Gonzaga in the NCAA tournament?", 6, "Basketball", 3, "74952ed678a6ad90560f5a699c221b7caa", "https://answers.yahoo.com/question/index?qid=20210303194632AA1Ek9e"],
	4867 : ["Who would win Muhammad Ali versus iron Mike Tyson in their prime?", 9, "Boxing", 4, "JKjEXQtaaa", "https://answers.yahoo.com/question/index?qid=20210118040814AADUPId"],
	4868 : ["Do you think 37 is too old to take a boxing class?", 9, "Boxing", 5, "4pQBiJiuaa", "https://answers.yahoo.com/question/index?qid=20210122033409AA5ldzp"],
	4869 : ["UFC vs Boxing?", 6, "Boxing", 3, "BCHZGb8Paa", "https://answers.yahoo.com/question/index?qid=20210125012758AACQxkz"],
	4870 : ["Who would win a boxing match Mayweather in his prime or Pacquiao in his prime ?", 5, "Boxing", 6, "V2hFyXZxaa", "https://answers.yahoo.com/question/index?qid=20210127234122AA5oZYm"],
	4871 : ["How do ppl freely stream events that others pay for,like sports or boxing etc ?", 4, "Boxing", 1, "TdmTjKt8aa", "https://answers.yahoo.com/question/index?qid=20210203023808AAY2TQA"],
	4872 : ["Has Lebron even earned the right to be compared to Jordan?", 10, "Basketball", 13, "fd747af047fac4ce6b0786a13d942ae6aa", "https://answers.yahoo.com/question/index?qid=20210302032508AAPA5xy"],
	4873 : ["If you are playing pickup basketball and you have the first pick are you taking Kobe Bryant or Larry Bird ?", 13, "Basketball", 15, "kV0MJL2Aaa", "https://answers.yahoo.com/question/index?qid=20210301164039AAP8sCG"],
	4874 : ["Is the NBA really disliked by most of the population in American now ?", 6, "Basketball", 7, "y9Y12soRaa", "https://answers.yahoo.com/question/index?qid=20210307112834AATJlRk"],
	4875 : ["Was former NBA PF/C Tim Duncan underrated ?", 4, "Basketball", 2, "vkIBoGoHaa", "https://answers.yahoo.com/question/index?qid=20210311015942AAMXvDe"],
	4876 : ["Thoughts on Blake Griffin joining the Brooklyn Nets to make it a even bigger super team? ?", 12, "Basketball", 13, "6k06A4UAaa", "https://answers.yahoo.com/question/index?qid=20210308013011AAL4qLn"],
	4877 : ["Why were nba players bigger more muscular 20 years ago than now? ?", 6, "Basketball", 1, "Yp2KRrOiaa", "https://answers.yahoo.com/question/index?qid=20210312142256AADIvxJ"],
	4878 : ["Is Kobe Bryant the greatest clutch shooter in NBA history?", 8, "Basketball", 12, "75YsqYoMaa", "https://answers.yahoo.com/question/index?qid=20210309154820AAonQDk"],
	4879 : ["Are the Brooklyn Nets the most STACKED team in NBA HISTORY ?", 12, "Basketball", 4, "vkIBoGoHaa", "https://answers.yahoo.com/question/index?qid=20210311021009AACkE1j"],
	4880 : ["Floyd Mayweather never fought anyone in thier prime True or False?", 5, "Boxing", 7, "TdmTjKt8aa", "https://answers.yahoo.com/question/index?qid=20210216062228AAnMJz2"],
	4881 : ["Why are some big people fast? ?", 5, "Boxing", 1, "1JSFjdRdaa", "https://answers.yahoo.com/question/index?qid=20210217134007AA9XbLS"],
	4882 : ["Are the Klitschko brothers the most overrated boxers?", 6, "Boxing", 3, "xmP6udDwaa", "https://answers.yahoo.com/question/index?qid=20210218042241AAawDRv"],
	4883 : ["There are no women in NBA??? Equality when?", 15, "Basketball", 41, "JT2qcRC6aa", "https://answers.yahoo.com/question/index?qid=20210309180251AApuyx3"],
	4884 : ["What are your thoughts on my USA olympic basketball team? Let me know what you like or what you'd change... see below?", 7, "Basketball", 4, "4LwIlIRoaa", "https://answers.yahoo.com/question/index?qid=20210311201206AAoNK7N"],
	4885 : ["Can short people be good basketball players?", 13, "Basketball", 6, "kV0MJL2Aaa", "https://answers.yahoo.com/question/index?qid=20210312183728AAKMj82"],
	4886 : ["What Month does March Madness take place?", 12, "Basketball", 7, "SD1kABizaa", "https://answers.yahoo.com/question/index?qid=20210313041544AAMaGgP"],
	4887 : ["Asian Basketball Post Pandemic?", 7, "Basketball", 4, "X9bW7AJ1aa", "https://answers.yahoo.com/question/index?qid=20210316032350AAG1wsQ"],
	4888 : ["WHY ARE THE LOS ANGELES LAKERS THE BEST TEAM IN THE NBA!!!??", 14, "Basketball", 6, "Ycrd0y0eaa", "https://answers.yahoo.com/question/index?qid=20210316054641AAAI3RG"],
	4889 : ["Is it wrong to lust after married women?", 6, "Basketball", 4, "rQnbwQtPaa", "https://answers.yahoo.com/question/index?qid=20210323043509AAndKSY"],
	4890 : ["When does March Madness begin?  ?", 5, "Basketball", 4, "VWJRGn4Laa", "https://answers.yahoo.com/question/index?qid=20210324031711AAVksow"],
	4891 : ["Was Jordan basically unanimously considered the best of all time before he won his first ring?", 5, "Basketball", 6, "IJ1v2YCZaa", "https://answers.yahoo.com/question/index?qid=20210324211942AA41iOu"],
	4892 : ["Could the best WNBA team beat the worst NBA team?", 14, "Basketball", 12, "X9bW7AJ1aa", "https://answers.yahoo.com/question/index?qid=20210324234433AAyPv81"],
	4893 : ["Floyd Mayweather could have cleaned out the entire middleweight division if he had wanted true or false?", 8, "Boxing", 7, "TdmTjKt8aa", "https://answers.yahoo.com/question/index?qid=20210225175451AA2b2b0"],
	4894 : ["How often do boxers fake a knockdown?", 6, "Boxing", 7, "8wI9kUkYaa", "https://answers.yahoo.com/question/index?qid=20210301100657AA6zXHO"],
	4895 : ["Who is the strongest heavyweight boxer right now?", 6, "Boxing", 2, "FkfKvVVYaa", "https://answers.yahoo.com/question/index?qid=20210304025955AABJ71t"],
	4896 : ["Whom do you think will win the series ? India or Australia?", 23, "Cricket", 13, "k2Akl64Xaa", "https://answers.yahoo.com/question/index?qid=20201229090704AAEgtAk"],
	4897 : ["Why oh kind sir why Indian government should put an embargo on Australia for the racist abuse of SCG crowd, what's your say?", 5, "Cricket", 6, "dm6dAumGaa", "https://answers.yahoo.com/question/index?qid=20210109232306AA2NJ0G"],
	4898 : ["there is sledging in cricket-does this include racist sledging?", 6, "Cricket", 2, "lJ4Aqi5Jaa", "https://answers.yahoo.com/question/index?qid=20210110235921AAYp742"],
	4899 : ["Mates, Is this the end of Cummins, Lyonn, Hazlewood, and Starc?", 4, "Cricket", 0, "HPOYwToiaa", "https://answers.yahoo.com/question/index?qid=20210119181425AA79AFA"],
	4900 : ["Who won 1992 World Cup cricket?", 21, "Cricket", 16, "lF7W5zotaa", "https://answers.yahoo.com/question/index?qid=20210115093800AAzfcbI"],
}