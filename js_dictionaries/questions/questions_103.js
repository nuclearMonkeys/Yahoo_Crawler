var questions_dict = {
	5699 : ["Is it okay for me to go out once every 2 weeks?", 5, "Austria", 1, "huUjNbYXaa", "https://answers.yahoo.com/question/index?qid=20200705220330AAe6LQf"],
	5700 : ["How about you get a life?", 12, "Austria", 5, "3ryh6OpPaa", "https://answers.yahoo.com/question/index?qid=20200704201812AAoZdiA"],
	5701 : ["What really makes you angry? ?", 8, "Brazil", 6, "X3ceQ0Z9aa", "https://answers.yahoo.com/question/index?qid=20200325205905AAGQ2A4"],
	5702 : ["What is a good caption for this?", 5, "Brazil", 7, "HdLKZwkyaa", "https://answers.yahoo.com/question/index?qid=20200515153537AAv0K4R"],
	5703 : ["Why are Argentinian people so prone to commit murder over minor traffic accidents?", 5, "Argentina", 3, "1faT0CyDaa", "https://answers.yahoo.com/question/index?qid=20191125080902AAwMfe4"],
	5704 : ["Do you prefer cats or dogs? ?", 17, "Argentina", 8, "43sVTaCMaa", "https://answers.yahoo.com/question/index?qid=20200325205749AA6FE8m"],
	5705 : ["No matter when the affair between Charles and Camilla actually began during his marriage to Diana, wouldn't logic dictate that...?", 8, "Royalty", 25, "gRZNp2fbaa", "https://answers.yahoo.com/question/index?qid=20190108171525AA8VHkd"],
	5706 : ["Have you ever had a thought about me outside of Yahoo Answers?", 10, "Argentina", 15, "VCjKywWVaa", "https://answers.yahoo.com/question/index?qid=20181126043802AAJSVCQ"],
	5707 : ["Will William and Harry be having Christmas dinner together, seeing as their wives are at each others throats.?", 8, "Royalty", 23, "Iqp3ZUAlaa", "https://answers.yahoo.com/question/index?qid=20181211145148AARgzql"],
	5708 : ["I'm going to invite Anne, Princess Royal for dinner. What do you suggest I make her?", 9, "Royalty", 22, "TKDl7Bbuaa", "https://answers.yahoo.com/question/index?qid=20181217201104AAfs1q5"],
	5709 : ["Should I visit Argentina?", 5, "Argentina", 1, "Mk8g71wTaa", "https://answers.yahoo.com/question/index?qid=20181015075450AA1C7lo"],
	5710 : ["There hasn't been a single item about the royals on the TV today, Are they slipping.?", 7, "Argentina", 13, "d900XEySaa", "https://answers.yahoo.com/question/index?qid=20181102173520AA3OlCN"],
	5711 : ["When is Queen Elizabeth going to reclaim her right to rule France?", 11, "Royalty", 15, "EJ8GZz9xaa", "https://answers.yahoo.com/question/index?qid=20181116015902AAsAPQt"],
	5712 : ["Why does Trump constantly praise himself despite the fact he's a petulant loser who's accomplished nothing on his own?", 5, "Argentina", 20, "HDjCiz9Haa", "https://answers.yahoo.com/question/index?qid=20181128231559AAASVGZ"],
	5713 : ["Am I expected to get the coronovirus vaccine just so that the greedy pigs who run Australia can open our international borders again?", 6, "Australia", 2, "A7tcEW9taa", "https://answers.yahoo.com/question/index?qid=20210409073626AAocuEu"],
	5714 : ["Where can i get my social interaction now that yahoo is closing? The lockdown meant i spent more time on here and it really helped me. ?", 10, "Australia", 11, "733da09d0cb9e9d0f08ae79290ca1491aa", "https://answers.yahoo.com/question/index?qid=20210406003520AA3BNKe"],
	5715 : ["My holiday/vacation to Australia questions?", 4, "Australia", 1, "7eb3fd3226605d4f11ad285a2b5a5ab4aa", "https://answers.yahoo.com/question/index?qid=20210411193339AAYqeGU"],
	5716 : ["Are Verizon out of their minds for depriving the internet of your genius?", 11, "Australia", 12, "wnsFO3GCaa", "https://answers.yahoo.com/question/index?qid=20210407222157AARRnBX"],
	5717 : ["Should the owners of Yahoo pay us compensation because they are closing answers down ?", 12, "Australia", 23, "QyOUO3piaa", "https://answers.yahoo.com/question/index?qid=20210407180124AAcA0Ml"],
	5718 : ["Help with planned trip to Australia?", 5, "Australia", 1, "OibJLHH3aa", "https://answers.yahoo.com/question/index?qid=20210411011551AA9F3Lq"],
	5719 : ["Only people who were born in Australia and hold no other citizenship should have priority on returning to Australia?", 8, "Australia", 15, "A7tcEW9taa", "https://answers.yahoo.com/question/index?qid=20210406015148AAasylj"],
	5720 : ["Is AB going for a record.?", 4, "Australia", 1, "e1GGppWSaa", "https://answers.yahoo.com/question/index?qid=20210409123704AAMrsYe"],
	5721 : ["Should those on Level 5 and Level 6 be given some form of compensation for the time they wasted pursuing the glory of Level 7 ?", 4, "Australia", 0, "A7tcEW9taa", "https://answers.yahoo.com/question/index?qid=20210410074910AA4dIxo"],
	5722 : ["Where is a good place that I can annoy Australians when Yahoo Answers is gone?", 4, "Australia", 6, "A7tcEW9taa", "https://answers.yahoo.com/question/index?qid=20210410081200AAmcJRk"],
	5723 : ["Yahoo Answers is shutting down next month. What am I going to do now?", 16, "Australia", 51, "A7tcEW9taa", "https://answers.yahoo.com/question/index?qid=20210405205010AA23izI"],
	5724 : ["Why is Yahoo Answers shutting down?", 9, "Yahoo Answers", 6, "GMS3uazCaa", "https://answers.yahoo.com/question/index?qid=20210419065232AAQkTOW"],
	5725 : ["Where do you plan to go after yahoo answers shutdown for online questions ?", 6, "Yahoo Answers", 7, "y9Y12soRaa", "https://answers.yahoo.com/question/index?qid=20210420021014AAkWJ73"],
	5726 : ["What's a useful piece of info you got from Yahoo Answers?", 6, "Yahoo Answers", 9, "2HC8CB3haa", "https://answers.yahoo.com/question/index?qid=20210420024549AAybLqQ"],
	5727 : ["Can't this site even shut down properly?", 6, "Yahoo Answers", 4, "Ef4IFyFcaa", "https://answers.yahoo.com/question/index?qid=20210420041015AAENi1W"],
	5730 : ["How long have you been using Yahoo Answers?", 10, "Yahoo Answers", 10, "AA11252878", "https://answers.yahoo.com/question/index?qid=20210418175358AAvRiWK"],
	5735 : ["Are all the questions on this site fake? ?", 5, "Yahoo Answers", 1, "S8Yge3Bfaa", "https://answers.yahoo.com/question/index?qid=20210420031937AAfYQ3i"],
	5736 : ["Is Yahoo Answers over now?", 5, "Yahoo Answers", 0, "sppePx0gaa", "https://answers.yahoo.com/question/index?qid=20210420040049AA0p0XN"],
	5743 : ["Why did Yahoo Answers always restart your question limit at 8pm EST?", 5, "Yahoo Answers", 1, "KXqFpWAIaa", "https://answers.yahoo.com/question/index?qid=20210420000205AAUPPvD"],
	5746 : ["How do I handle these last hours on Yahoo Answers when there is no tomorrow on here?", 5, "Yahoo Answers", 3, "jgedIY8taa", "https://answers.yahoo.com/question/index?qid=20210420014245AA63pxC"],
	5749 : ["Yahoo Answers is still allowing questions. Did YA fail you for the last time?", 5, "Yahoo Answers", 1, "f2af9abbd07b024c845bf28f97ee9b35aa", "https://answers.yahoo.com/question/index?qid=20210420040328AA1cTRw"],
	5750 : ["Yahoo lives, bitchesssssss  😎\n😎\n😎?", 5, "Yahoo Answers", 1, "lDuOrNbpaa", "https://answers.yahoo.com/question/index?qid=20210420040523AAHscvD"],
	5757 : ["Only three more hours of Yahoo Answers?", 6, "Yahoo Answers", 1, "1fCGE9gKaa", "https://answers.yahoo.com/question/index?qid=20210420004828AAwXfeo"],
	5758 : ["Is this really the last 4 hours of yahoo answers before it becomes read only?", 6, "Yahoo Answers", 3, "Dvapiqwsaa", "https://answers.yahoo.com/question/index?qid=20210420014116AAy8o0w"],
	5759 : ["When does the orange screen and green screen version of Yahoo Answers start?", 9, "Yahoo Answers", 6, "1fCGE9gKaa", "https://answers.yahoo.com/question/index?qid=20210419025016AAfYeQI"],
	5760 : ["Has anyone considered Yahoo's notice that appears at the top of this page?", 14, "Yahoo Answers", 26, "170t3moLaa", "https://answers.yahoo.com/question/index?qid=20210417200226AAafGJB"],
	5761 : ["If my Yahoo! Answers account gets deleted due to me breaking the rules, does my email get deleted?", 8, "Yahoo Answers", 4, "3CCQQbkpaa", "https://answers.yahoo.com/question/index?qid=20210419170303AAAFOwo"],
	5762 : ["Might the end of Yahoo Answers not happen?", 12, "Yahoo Answers", 2, "5NPzdwt4aa", "https://answers.yahoo.com/question/index?qid=20210418090807AArUrwc"],
	5763 : ["What other sites are similar to Yahoo Answers?", 25, "Yahoo Answers", 52, "NuLLXwFxaa", "https://answers.yahoo.com/question/index?qid=20210413202714AAjIn1J"],
	5764 : ["Will Yahoo survive as a search engine and mail ?", 11, "Yahoo Answers", 7, "VVNX1P3jaa", "https://answers.yahoo.com/question/index?qid=20210419012806AAvsvFH"],
	5765 : ["Why is this happening on Yahoo Answers and is there a way to reverse their decision, see below?", 9, "Yahoo Answers", 16, "WYyioTQuaa", "https://answers.yahoo.com/question/index?qid=20210417123326AAEcnXX"],
	5766 : ["For those of you who have been in Yahoo! Answers for a long time, have you EVER imagined Yahoo! Answers shutting down?", 9, "Yahoo Answers", 10, "1fCGE9gKaa", "https://answers.yahoo.com/question/index?qid=20210419182205AAVkXIz"],
	5767 : ["At what time will YA go into read only mode? Midnight?", 10, "Yahoo Answers", 9, "1fCGE9gKaa", "https://answers.yahoo.com/question/index?qid=20210419143958AAppFYL"],
	5768 : ["Who was the absolute genius who thought shutting Yahoo Answers down was a good idea?", 7, "Yahoo Answers", 11, "C3OKIdDfaa", "https://answers.yahoo.com/question/index?qid=20210418155339AAR7ZX8"],
	5769 : ["When yahoo answers shuts down, what platform are you migrating to? ?", 12, "Yahoo Answers", 38, "TdTTMrwraa", "https://answers.yahoo.com/question/index?qid=20210418155527AAS1ELd"],
	5770 : ["Where will you losers go to answer questions?", 11, "Yahoo Answers", 24, "hdz1vY9Uaa", "https://answers.yahoo.com/question/index?qid=20210418185704AAQB3qH"],
}