var questions_dict = {
	7569 : ["How did “Doe” come to be used as a generic surname?", 5, "Genealogy", 8, "HpJ4wwC7aa", "https://answers.yahoo.com/question/index?qid=20210129193219AAtbRDz"],
	7570 : ["How far in the past has your family traced your genealogy?", 24, "Genealogy", 13, "l1DC3HEJaa", "https://answers.yahoo.com/question/index?qid=20210203020802AAbbpo0"],
	7571 : ["How do you find out about a grandparent without opening up old wounds?", 8, "Genealogy", 6, "6aTjQm6kaa", "https://answers.yahoo.com/question/index?qid=20210206185009AAvX6qG"],
	7572 : ["Do grizzle bears and kodiaks live in the Mountains ?", 6, "Genealogy", 4, "q8ZMupYVaa", "https://answers.yahoo.com/question/index?qid=20210208032930AAIjErI"],
	7573 : ["How to I identify my great great grandparents?", 8, "Genealogy", 7, "n4qKtSMFaa", "https://answers.yahoo.com/question/index?qid=20210212192907AArKFXI"],
	7574 : ["What would happen if a person sets off fireworks at a wedding without being invited? Would the fireworks scare guests?", 4, "Law & Ethics", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200504093033AAXEMMJ"],
	7575 : ["How do you make your spaghetti?", 13, "Cooking & Recipes", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200504184257AASOOWT"],
	7576 : ["Was there a time your church had a pancake breakfast?", 4, "Religion & Spirituality", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200502074053AAFdy1V"],
	7577 : ["If you play your flat screen for 6 hours a day, will the TV screen go out faster?", 2, "TVs", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200502205122AAgEVjx"],
	7578 : ["Was there a time when a lifeguard yelled at you for not obeying pool rules?", 0, "Swimming & Diving", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200503054448AA3bWS2"],
	7579 : ["How many cell phones do you own?", 15, "Cell Phones & Plans", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200428185829AAY1FOs"],
	7580 : ["I went to Manteca Waterslides with my school. I almost drowned when I went on the slide in my jeans. If I had drowned, is the park liable?", 4, "Law & Ethics", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200429040900AAgC9Wg"],
	7581 : ["I feel that today's shows are destroying our society and world. They have no values. Shows from the 1950s to 1990s are better. Do you agree?", 6, "Polls & Surveys", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200429074644AAoAr92"],
	7582 : ["Why are lots of school lunches being thrown away at school?", 6, "Other - Food & Drink", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200427064003AAZ58dA"],
	7583 : ["Do you like to write poetry?", 13, "Poetry", 13, "xPhyMGXtaa", "https://answers.yahoo.com/question/index?qid=20201109180212AAG4Ink"],
	7584 : ["is it not annoying to be around someone who is always \"joking\"? (if are wanting to think seriously, be serious, etc)? why they are like that?", 8, "Etiquette", 9, "4SJX06SDaa", "https://answers.yahoo.com/question/index?qid=20210417152637AARtXIM"],
	7585 : ["Christians, a simple yes or no: Evolution. Do you acknowledge it or deny it? ?", 45, "Religion & Spirituality", 101, "4dDITL7waa", "https://answers.yahoo.com/question/index?qid=20210416163012AAKydJf"],
	7586 : ["Christians, it's been fifth teen years. Can't you come up with something better than bible verses and blind faith.?", 4, "Religion & Spirituality", 2, "UkQEt9j7aa", "https://answers.yahoo.com/question/index?qid=20210420004804AAD0Sg0"],
	7587 : ["Are Muslims  upset  more Arabics are being born again  Christian's than they could imagine ?", 4, "Religion & Spirituality", 2, "1dj4wKCpaa", "https://answers.yahoo.com/question/index?qid=20210420010919AAh9c3q"],
	7588 : ["Atheists, what is your FULL opinion of alcohol?", 4, "Religion & Spirituality", 5, "Y01rzj1Aaa", "https://answers.yahoo.com/question/index?qid=20210420011118AAEiKBF"],
	7589 : ["How come people think that I'm an idiot for making videos for tiktok and youtube to raise awareness?", 4, "Cultures & Groups", 2, "jGxFJgFiaa", "https://answers.yahoo.com/question/index?qid=20210420012021AAKAqIS"],
	7590 : ["If an omnipotent benevolent god had created us and wanted us to know so, why not simply have us born with the knowledge of its existence?", 4, "Religion & Spirituality", 1, "LPNXhbLlaa", "https://answers.yahoo.com/question/index?qid=20210420020018AAVV0Zx"],
	7591 : ["What percentage of Christian realize that there are at least 2 non-Christians for each Christian in the world?", 5, "Religion & Spirituality", 3, "LSJ8BmHVaa", "https://answers.yahoo.com/question/index?qid=20210420025924AAPcN8C"],
	7592 : ["Twin boy names ?", 6, "Baby Names", 1, "34VXCyvVaa", "https://answers.yahoo.com/question/index?qid=20210416020348AAt1B3S"],
	7593 : ["Why are parents allowed to ask their kids to do stuff that they (the parent) can do themselves? ?", 14, "Parenting", 15, "j7M7e4uuaa", "https://answers.yahoo.com/question/index?qid=20210411055324AAjoFKa"],
	7594 : ["Which boy name ?", 11, "Baby Names", 2, "jA1lq7U4aa", "https://answers.yahoo.com/question/index?qid=20210414034216AABBjS3"],
	7595 : ["Looking for unique baby names starting with “B” nothing crazy just nice unique names? ?", 10, "Baby Names", 7, "4ilM2hCwaa", "https://answers.yahoo.com/question/index?qid=20210414123346AAJDxly"],
	7596 : ["I just started taking contraception and we are also using condom as extra protection, but can I still get pregnant?", 5, "Pregnancy", 0, "YYOXheVOaa", "https://answers.yahoo.com/question/index?qid=20210417100540AAkyMvy"],
	7597 : ["What's your favorite baby name?", 4, "Baby Names", 1, "jA1lq7U4aa", "https://answers.yahoo.com/question/index?qid=20210418171918AAJOp5o"],
	7598 : ["Should I name my child Lucifer?", 6, "Baby Names", 5, "EM3PacM1aa", "https://answers.yahoo.com/question/index?qid=20210416194423AAeSzQ7"],
	7599 : ["What should I name my son?", 6, "Baby Names", 3, "EM3PacM1aa", "https://answers.yahoo.com/question/index?qid=20210416194928AAtnDu4"],
	7600 : ["Princess as a title?", 14, "Baby Names", 9, "969fOW29aa", "https://answers.yahoo.com/question/index?qid=20210414004410AAIlB7B"],
	7601 : ["Remember when we went to raves?", 9, "Dancing", 18, "ND8Yhqhaaa", "https://answers.yahoo.com/question/index?qid=20200826222649AAB3HV8"],
	7602 : ["How could I get the opportunity to see Swan Lake? 🦢 ?", 8, "Dancing", 10, "rU3OK0h7aa", "https://answers.yahoo.com/question/index?qid=20200827184953AA5amM6"],
	7603 : ["algebra 2 ?", 8, "Dancing", 1, "zGT9WteYaa", "https://answers.yahoo.com/question/index?qid=20200913031121AAgOz7R"],
	7604 : ["Have you ever tried dancing/watching an ethnic dance? How was your experience? What did youfeel adter watching it?", 11, "Dancing", 15, "0KXRlEnFaa", "https://answers.yahoo.com/question/index?qid=20200921013912AAwjf7F"],
	7605 : ["Difference between dance teacher, dance instructor, and dance choreographer?", 6, "Dancing", 5, "cbMTODDZaa", "https://answers.yahoo.com/question/index?qid=20200929223400AAGy2cr"],
	7606 : ["Were you taught what to do when pulled over?", 8, "Dancing", 16, "AA10059108", "https://answers.yahoo.com/question/index?qid=20201023021229AA6JdZb"],
	7607 : ["is david duchovney from the X Files good looking?", 7, "Dancing", 6, "OmCctnoQaa", "https://answers.yahoo.com/question/index?qid=20201121103126AAxxv35"],
	7608 : ["Do you mix cornmeal and waffle mix in your cornbread? I tried it and it came out with a good flavor.?", 3, "Cooking & Recipes", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200412072923AA35s9E"],
	7609 : ["Is Nursebottom or Nursebottoms a real surname?", 4, "Genealogy", 1, "tUi3W3v0aa", "https://answers.yahoo.com/question/index?qid=20210224153120AAR3mre"],
	7610 : ["When a couple who isn't married have a kid, what determines the kid's last name?", 9, "Genealogy", 5, "2pjJbwrQaa", "https://answers.yahoo.com/question/index?qid=20210223015435AAIQv5f"],
	7611 : ["Why are aunts and uncles referred to by both their relation to you, as well as their name?", 12, "Genealogy", 15, "6Nxqnywuaa", "https://answers.yahoo.com/question/index?qid=20210225073425AARAr6V"],
	7612 : ["Can ethnicity results determine parent/child relationship?", 7, "Genealogy", 8, "6Nxqnywuaa", "https://answers.yahoo.com/question/index?qid=20210227182637AAF3ljh"],
	7613 : ["Search marriage records UK?", 6, "Genealogy", 9, "o5cNx99Caa", "https://answers.yahoo.com/question/index?qid=20210228132915AAIznA8"],
	7614 : ["what can the family do if the Neice have taken all of mom's access. She just passed away in Nov.2020?", 7, "Genealogy", 7, "aTkrVh6Caa", "https://answers.yahoo.com/question/index?qid=20210228103225AALEvHa"],
	7615 : ["My dad died when I was a child and I know nothing about his side of the family how do I find out more?", 10, "Genealogy", 6, "tUi3W3v0aa", "https://answers.yahoo.com/question/index?qid=20210306105808AAUwmZh"],
	7616 : ["How can I research my family lineage back to Moldavia?", 4, "Genealogy", 2, "Z9WNdLo2aa", "https://answers.yahoo.com/question/index?qid=20210312063410AAGVgvl"],
	7617 : ["When I stutter some people laugh at me. I feel bad sometimes. Can speech therapy help?", 4, "Psychology", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200406075409AAUTxOo"],
	7618 : ["If you do blood work with your doctor are the results sent to your house or does your doctor call you in?", 3, "Polls & Surveys", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20200403061243AAlgS6T"],
}