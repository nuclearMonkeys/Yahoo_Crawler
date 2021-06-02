var questions_dict = {
	5148 : ["Will the New York Giants win the NFC East?", 7, "Football (American)", 2, "vZMGSDQHaa", "https://answers.yahoo.com/question/index?qid=20210408144822AAbNJVz"],
	5149 : ["Are the Los Angeles Rams considered a powerhouse?", 6, "Football (American)", 5, "mhlGMAp0aa", "https://answers.yahoo.com/question/index?qid=20210410055901AAlK4tE"],
	5150 : ["How come white Ben roethlisberger wasn't dropped from enforcement for rape but black Deshaun Watson is ?", 9, "Football (American)", 8, "Lnli5g73aa", "https://answers.yahoo.com/question/index?qid=20210408193940AAcGWA1"],
	5151 : ["Was football better when John Madden & Pat Summerall were calling the games?", 4, "Football (American)", 4, "Lnli5g73aa", "https://answers.yahoo.com/question/index?qid=20210412174026AAnR3bY"],
	5152 : ["Why do footballers think anyone cares if they boycott social media or not?", 8, "Football (Soccer)", 15, "q1BX2eXuaa", "https://answers.yahoo.com/question/index?qid=20210409174135AAAxyNi"],
	5153 : ["3 trailer park Bois go round the outside ?", 8, "Football", 10, "HxG1DOfcaa", "https://answers.yahoo.com/question/index?qid=20210409220451AAig9aC"],
	5154 : ["So we will probably have PSG, Man City and Chelsea all in a CL semi final this year. Nobody could have foreseen this 20 years ago right?", 4, "Football (Soccer)", 1, "q1BX2eXuaa", "https://answers.yahoo.com/question/index?qid=20210413211346AAtNjIA"],
	5155 : ["TOTTENHAM 1-3 MAN UTD - Justice has been done?", 7, "Football", 1, "HxG1DOfcaa", "https://answers.yahoo.com/question/index?qid=20210411173112AAss3EC"],
	5156 : ["Thoughts on Neymar celebrating in front of Kimmich?", 4, "Football", 3, "cq22NZX5aa", "https://answers.yahoo.com/question/index?qid=20210414104251AANVZez"],
	5157 : ["EFS: Now that Y!A is going away, where will you go next?", 11, "Football", 4, "N40eZLUzaa", "https://answers.yahoo.com/question/index?qid=20210410172304AAbZW1c"],
	5158 : ["Golf doesn't make me happy anymore. Time to quit? ?", 6, "Golf", 6, "RUf88a5Zaa", "https://answers.yahoo.com/question/index?qid=20200813192556AAif5Hj"],
	5159 : ["I dont know much about golf ⛳ is Tiger Woods still good 🐅?", 7, "Golf", 6, "0TZNIS0eaa", "https://answers.yahoo.com/question/index?qid=20200913005436AA1lrZK"],
	5160 : ["Should the golf course pay for my broken windshield?", 6, "Golf", 2, "g1JEaBYJaa", "https://answers.yahoo.com/question/index?qid=20200929043237AAxH56G"],
	5161 : ["Would a golf ⛳️ 🏌️ tournament  \nwithout golf be possible?", 5, "Golf", 0, "om7Aep3Qaa", "https://answers.yahoo.com/question/index?qid=20200930132736AArtvoe"],
	5162 : ["If you had to choose between a used iron set of Callaway rogues for $300 or Mizuno JPX-825 for $220 which would you choose and why?", 7, "Golf", 1, "B9cQzzBraa", "https://answers.yahoo.com/question/index?qid=20201002042032AAXhLMf"],
	5163 : ["Is it weird for a woman to take a man a small gift on the first date  like a shot glass with the golf ball made in it because he loves golf?", 8, "Golf", 4, "cN2ZiKW2aa", "https://answers.yahoo.com/question/index?qid=20201004013238AAru35f"],
	5164 : ["do you like to play golf?", 5, "Golf", 0, "cwJ2EWMOaa", "https://answers.yahoo.com/question/index?qid=20201016112701AAyBNzl"],
	5165 : ["Is 49.2GB bigger than 795MB?", 6, "Golf", 6, "DIpcIMfCaa", "https://answers.yahoo.com/question/index?qid=20201016001353AAzf4q8"],
	5166 : ["If Texans management has no role in Deshaun Watson accusations then why haven't they dropped him from the team yet? Isn't that suspicious?", 5, "Football (American)", 3, "dcXLUuoDaa", "https://answers.yahoo.com/question/index?qid=20210412003619AAImFzG"],
	5167 : ["How will the Carolina Panthers do with Sam Darnold ?", 7, "Football (American)", 5, "6k06A4UAaa", "https://answers.yahoo.com/question/index?qid=20210411172633AAzDJXV"],
	5168 : ["Could someone explain to me what Shalise Manza Young's article meant about Brett Favre?", 4, "Football (American)", 16, "AA10842651", "https://answers.yahoo.com/question/index?qid=20210416051250AAMpwte"],
	5169 : ["True or False: Kyle Pitts is overrated?", 5, "Football (American)", 0, "sy1NyA0raa", "https://answers.yahoo.com/question/index?qid=20210415230542AAd2reG"],
	5170 : ["How come all of a sudden the Los Angeles Rams become a popular team?", 4, "Football (American)", 2, "mhlGMAp0aa", "https://answers.yahoo.com/question/index?qid=20210417072000AATVmb6"],
	5171 : ["In team Sports, Should \"Away\" teams be banned from defeating \"home\" teams?", 4, "Football (American)", 1, "j7M7e4uuaa", "https://answers.yahoo.com/question/index?qid=20210417095035AALWgVk"],
	5172 : ["What comes between underrated and overrated?", 6, "Football (American)", 3, "dtG8Rzlqaa", "https://answers.yahoo.com/question/index?qid=20210415173105AAYa32K"],
	5173 : ["Where is Hillsborough ?", 9, "Football (Soccer)", 8, "UY8ny1vFaa", "https://answers.yahoo.com/question/index?qid=20210415131516AAXqxYa"],
	5174 : ["Should I complain about employees at Subway closing an hour early?", 11, "Fast Food", 10, "ZbOxmchGaa", "https://answers.yahoo.com/question/index?qid=20210326141653AAKApA2"],
	5175 : ["Is Popeyes really better in Louisiana?", 13, "Fast Food", 7, "psHG634vaa", "https://answers.yahoo.com/question/index?qid=20210327214309AADi2zI"],
	5176 : ["Will Burger King bring back the 99 cent Whopper?", 17, "Fast Food", 10, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20210329063014AAzcPqo"],
	5177 : ["Do you like sweet chilli chicken wrap from McDonald's?", 8, "Fast Food", 3, "Mbq7XIO8aa", "https://answers.yahoo.com/question/index?qid=20210329103534AAxmqlk"],
	5178 : ["Was John F Kennedy most famous for being assassinated?", 10, "France", 20, "55XWsWHsaa", "https://answers.yahoo.com/question/index?qid=20190702215455AANfi2s"],
	5179 : ["What are some good vegan foods to try?", 15, "France", 18, "rchwUoFkaa", "https://answers.yahoo.com/question/index?qid=20190708013610AAjFrJe"],
	5180 : ["Why are people attracted to people who are attracted to other races?", 4, "France", 1, "S2aeGQpdaa", "https://answers.yahoo.com/question/index?qid=20190717014610AAy9Jyy"],
	5181 : ["Golf driver goes 200 yards straight then 200 yards to the right? Why ?", 4, "Golf", 3, "RmUzA6mvaa", "https://answers.yahoo.com/question/index?qid=20201024164801AAEXnFe"],
	5182 : ["what is your favorite thing to do on a golf course?", 11, "Golf", 6, "cwJ2EWMOaa", "https://answers.yahoo.com/question/index?qid=20201022171421AAoqSy1"],
	5183 : ["Is it illegal to drive a golf cart with your eyes closed?", 7, "Golf", 1, "WjJRbJ5zaa", "https://answers.yahoo.com/question/index?qid=20201104012642AAvR6sZ"],
	5184 : ["Who will win the Masters ?", 6, "Golf", 4, "4Uqagfj9aa", "https://answers.yahoo.com/question/index?qid=20201112022443AAaitfQ"],
	5185 : ["What do you need to play golf?", 11, "Golf", 6, "JjdsC2pjaa", "https://answers.yahoo.com/question/index?qid=20201129150215AAebgN7"],
	5186 : ["Vintage pictures? ?", 4, "Golf", 2, "iATPVinCaa", "https://answers.yahoo.com/question/index?qid=20201230204642AAjcyk7"],
	5187 : ["Would any of these violate the rules of golf?", 6, "Golf", 3, "Pc0QjrQ4aa", "https://answers.yahoo.com/question/index?qid=20201231200959AAhWaOI"],
	5188 : ["what kind of golf videos do you like?", 7, "Golf", 9, "bhMV0CsUaa", "https://answers.yahoo.com/question/index?qid=20210120003602AADxy9m"],
	5189 : ["Have you ever been part of a golfing community?", 7, "Golf", 5, "sypOj6ggaa", "https://answers.yahoo.com/question/index?qid=20210216203959AAef1Dz"],
	5190 : ["Tiger Woods was involved in a car crash. It was his third crash in a few years. The others were 2009 and 2017. Is his career over?", 4, "Golf", 2, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20210223225528AA0JjSB"],
	5191 : ["When are the NHL playoffs?", 8, "Hockey", 12, "Zu2Q7buNaa", "https://answers.yahoo.com/question/index?qid=20201201214458AAWBfw0"],
	5192 : ["Best thing ever for NHL that they will have an All-Canadian league for this NHL season?", 6, "Hockey", 7, "w0PnxXyfaa", "https://answers.yahoo.com/question/index?qid=20201222102526AAxZhXm"],
	5193 : ["In his PRIME, how GREAT of a player was former Edmonton Oilers/Los Angeles Kings/New York Rangers Centre Wayne Gretzky?", 11, "Hockey", 25, "byF6dTjfaa", "https://answers.yahoo.com/question/index?qid=20201231234755AA0Zn99"],
	5194 : ["Are you supporting the NHL league in 2021 season ?", 12, "Hockey", 10, "y9Y12soRaa", "https://answers.yahoo.com/question/index?qid=20210105050119AAzJoBe"],
	5195 : ["Are you a fan of the new jersey devils?", 4, "Hockey", 1, "kgBPU4xxaa", "https://answers.yahoo.com/question/index?qid=20210114205311AAyI9c0"],
	5196 : ["Why exactly is the NHL Stanley cup called stanley cup? Was it named after someone named Stanley in the NHL?", 6, "Hockey", 8, "qvAQlfyhaa", "https://answers.yahoo.com/question/index?qid=20210114205403AAJShRh"],
	5197 : ["Would you rather live in Boston, Dallas, New York, San Jose, Tampa, or Toronto and why?", 6, "Hockey", 3, "NaSgrh7Haa", "https://answers.yahoo.com/question/index?qid=20210117174320AAfJG0u"],
}