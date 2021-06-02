var questions_dict = {
	151 : ["Did Yahoo Answers die of natural causes or is there a conspiracy?", 8, "Diseases & Conditions", 5, "d9d2vgjWaa", "https://answers.yahoo.com/question/index?qid=20210410095036AAu9VQk"],
	152 : ["Should I still get vaccinated for Covid if i'm young and healthy?", 4, "Diseases & Conditions", 1, "I1x1vy2laa", "https://answers.yahoo.com/question/index?qid=20210413223151AAQ3J8P"],
	153 : ["What's that illness for?", 4, "Diseases & Conditions", 2, "jto20DtQaa", "https://answers.yahoo.com/question/index?qid=20210414031855AAKtygB"],
	154 : ["Do you think a hybrid animal still counts as it's subspecies? What percent original should it be to count?", 5, "Zoology", 1, "0b6yxPlAaa", "https://answers.yahoo.com/question/index?qid=20210315014228AAfXXyN"],
	155 : ["Could crocodiles hibernate?", 7, "Zoology", 1, "SqG1lS1oaa", "https://answers.yahoo.com/question/index?qid=20210314115707AA2FyKo"],
	156 : ["a polar bear just escaped at my local zoo. It is running in the direction of my 6th year old son. WHAT SHOULD I DO ?", 9, "Zoology", 6, "NZWaQ137aa", "https://answers.yahoo.com/question/index?qid=20210313191844AAKoBFo"],
	157 : ["are giraffes related to horses?", 7, "Zoology", 9, "taj5QiGiaa", "https://answers.yahoo.com/question/index?qid=20210316211701AAPBL1Z"],
	158 : ["Could a Tyrannosaurus Rex see in a pitch black room ? how good was it's eye sight really ?", 4, "Zoology", 2, "kz04oBhsaa", "https://answers.yahoo.com/question/index?qid=20210319160601AA0S2Tb"],
	159 : ["Why are there zoos? is it not cruel to take an animal out of their environment? ?", 7, "Zoology", 3, "JAKVhrHRaa", "https://answers.yahoo.com/question/index?qid=20210318215843AAnK3L4"],
	160 : ["Are we the most fascinating species to ever evolve on earth?", 6, "Zoology", 7, "xHsQFPsBaa", "https://answers.yahoo.com/question/index?qid=20210319182316AAhis9D"],
	161 : ["Should I buy these wheels?", 5, "Other - Cars & Transportation", 3, "EMC7JwVBaa", "https://answers.yahoo.com/question/index?qid=20210324171034AATDuLj"],
	162 : ["My DMV refuses to give me a CDL Permit until I have \"a regular driver license\". I do not need it, but I do a need a CDL, what can I do?", 13, "Other - Cars & Transportation", 30, "DfC3o1KVaa", "https://answers.yahoo.com/question/index?qid=20210321154115AAgv9CX"],
	163 : ["Anyone still scared of covid19?", 5, "Diseases & Conditions", 7, "ESFO4P1Baa", "https://answers.yahoo.com/question/index?qid=20210413085921AAAklrm"],
	164 : ["Would you forgive someone's past if they were mentally ill?", 4, "None", 11, "None", "https://answers.yahoo.com/question/index?qid=20210414165151AAoBigO"],
	165 : ["Spot on my arm shape liked TURTLE is it cancer?", 6, "Diseases & Conditions", 3, "m5whfFq7aa", "https://answers.yahoo.com/question/index?qid=20210412211746AA4R551"],
	166 : ["How did humans avoid skin cancer and sunburns in the past when there weren't houses ?", 4, "Diseases & Conditions", 2, "I1x1vy2laa", "https://answers.yahoo.com/question/index?qid=20210415014624AA2fQJC"],
	167 : ["Do you have to self isolate if someone in your house ?", 5, "None", 1, "None", "https://answers.yahoo.com/question/index?qid=20210413231348AA0h9Em"],
	168 : ["Is my dad right about this pandemic?", 26, "Diseases & Conditions", 81, "Ef4IFyFcaa", "https://answers.yahoo.com/question/index?qid=20210407233518AABsV2U"],
	169 : ["Does a beer is likely to cause diabetes if u drink twice a week ?", 5, "Diseases & Conditions", 7, "qB0k1GIgaa", "https://answers.yahoo.com/question/index?qid=20210414033211AA4CQkO"],
	170 : ["PA gets weather like Texas is experiencing now every winter from November through March. Why don't the wind turbines fail there?", 5, "Weather", 6, "8drOkCMFaa", "https://answers.yahoo.com/question/index?qid=20210219004657AA193OX"],
	171 : ["Wil the weather be warmer before spring?", 4, "Weather", 0, "5hc3RRdpaa", "https://answers.yahoo.com/question/index?qid=20210220132900AAmUwtq"],
	172 : ["Where does winter happen?", 4, "Weather", 2, "oL6FUbshaa", "https://answers.yahoo.com/question/index?qid=20210220210449AAUa0TE"],
	173 : ["How did our ancestors survive weather conditions worse than 26 degrees outside?", 12, "None", 10, "None", "https://answers.yahoo.com/question/index?qid=20210216142424AAz75ts"],
	174 : ["What insect is this?", 6, "Zoology", 8, "WtTT2waMaa", "https://answers.yahoo.com/question/index?qid=20210319194805AARW496"],
	175 : ["Are there any species of animals in which the female initiates courtship or pursues the male?", 5, "Zoology", 8, "hFEVDyaDaa", "https://answers.yahoo.com/question/index?qid=20210320224021AACvhuA"],
	176 : ["Besides pigeons and gulls what bird species are commonly considered urban/street birds?", 6, "None", 3, "None", "https://answers.yahoo.com/question/index?qid=20210321100542AAra3NT"],
	177 : ["Are sharks fish ?", 5, "Zoology", 2, "hD25pT1Laa", "https://answers.yahoo.com/question/index?qid=20210323171457AAK0BsO"],
	178 : ["Do you think it's fair to say that dinosaurs like the T Rex are more powerful and devastating than anything on planet earth right now?", 11, "None", 8, "None", "https://answers.yahoo.com/question/index?qid=20210320192914AAYjUT1"],
	179 : ["How often do you see a trans am on the road?", 10, "Other - Cars & Transportation", 17, "yKjwkDqdaa", "https://answers.yahoo.com/question/index?qid=20210325175338AAwTbd9"],
	180 : ["Does not having a personal car mean you have no freedom to travel ?", 7, "None", 6, "None", "https://answers.yahoo.com/question/index?qid=20210327003438AAtUycb"],
	181 : ["Can fasting reverse type 2 diabetes?", 11, "Diseases & Conditions", 7, "JKXzvK88aa", "https://answers.yahoo.com/question/index?qid=20210409085108AAQqWDu"],
	182 : ["Did the Covid vaccine hurt or make you sick?", 21, "Diseases & Conditions", 10, "5acc65580523dbea48e3f5dc6aba8cb2aa", "https://answers.yahoo.com/question/index?qid=20210409114620AAFvW9e"],
	183 : ["Are people with slightly less than perfect vision still supposed to wear glasses and/or contacts?", 4, "Optical", 5, "JguoEQYxaa", "https://answers.yahoo.com/question/index?qid=20210305020245AA7uHGj"],
	184 : ["can my eye doctor stop me from buying contact lenses from other places?", 5, "Optical", 4, "UEGf9OAMaa", "https://answers.yahoo.com/question/index?qid=20210304145555AA4LzcI"],
	185 : ["Texas Snow Storm?", 5, "Weather", 7, "fRU0yOOBaa", "https://answers.yahoo.com/question/index?qid=20210219205415AAugtYU"],
	186 : ["I've shoveled 4 inches of snow in Colorado TWICE this week, once with the temperature below zero.  What's Texas's problem?", 7, "Weather", 6, "NaSgrh7Haa", "https://answers.yahoo.com/question/index?qid=20210218192207AAKfyoJ"],
	187 : ["Can moonlight melt snow?", 4, "Weather", 5, "tD28NEWgaa", "https://answers.yahoo.com/question/index?qid=20210223061956AAdps8f"],
	188 : ["Why are the top three wind energy producing states all red?", 6, "Weather", 4, "8wI9kUkYaa", "https://answers.yahoo.com/question/index?qid=20210223113508AAhqCbU"],
	189 : ["Are you a little scared of bumble bees?", 5, "Zoology", 1, "nYETHYwfaa", "https://answers.yahoo.com/question/index?qid=20210324145211AABB7N5"],
	190 : ["Doesn't a 'safety in numbers' birthing/hatching tactic mean that some individual newborn animals are being asked to 'take one for the team'?", 7, "None", 3, "None", "https://answers.yahoo.com/question/index?qid=20210324062553AAox8EZ"],
	191 : ["Could Triceratops be gray in color in the real world if they were alive today since larger reptiles & land mammals are mostly dull in color?", 7, "Zoology", 0, "v3fcRg2Qaa", "https://answers.yahoo.com/question/index?qid=20210326110800AAE31d6"],
	192 : ["Are pelicans, pigeons, seagulls and pheasants dinosaurs ?", 10, "Zoology", 7, "b1233d2957b6685f6644485ce17a6f62aa", "https://answers.yahoo.com/question/index?qid=20210323195119AA0pwzC"],
	193 : ["Is it normal for people to have one eye that appears smaller (or is squintier) when smiling in photos?", 4, "Optical", 4, "OHT3IxA8aa", "https://answers.yahoo.com/question/index?qid=20210307171857AAiGofC"],
	194 : ["Is it standard to be told to isolate for 9 days before a cataracts?", 7, "Optical", 8, "IdMHtfmvaa", "https://answers.yahoo.com/question/index?qid=20210308133101AATFNBj"],
	195 : ["Why was I told to wear glasses full time?", 7, "Optical", 1, "U2lp7Jv5aa", "https://answers.yahoo.com/question/index?qid=20210309100841AAi42d3"],
	196 : ["How did the sun manage to melt the snow on a day where it was 17 degrees out?", 9, "None", 1, "None", "https://answers.yahoo.com/question/index?qid=20210222230922AAiFiuP"],
	197 : ["Could anyone in layman's terms say why, if there's global warming, why for most of 2021 it has been so perishing cold here,where it normally?", 7, "Weather", 21, "IdMHtfmvaa", "https://answers.yahoo.com/question/index?qid=20210306115958AA2WMif"],
	198 : ["I want to start a Mango ranch but I live in Idaho.  How do I get around the cold weather?", 5, "Weather", 0, "xMFykjaDaa", "https://answers.yahoo.com/question/index?qid=20210308011248AAJx3mt"],
	199 : ["Can it thunder when it's snowing?", 10, "Weather", 10, "at40O8cLaa", "https://answers.yahoo.com/question/index?qid=20210306162512AAx2t8a"],
	200 : ["Can it snow when it's 40 degrees?", 16, "Weather", 9, "DzjXOF3Iaa", "https://answers.yahoo.com/question/index?qid=20210306194156AAUnf3M"],
}