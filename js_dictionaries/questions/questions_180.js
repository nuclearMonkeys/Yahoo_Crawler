var questions_dict = {
	9001 : ["aidensfield(heartbeat) where is it?", 1, "Other - Destinations", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20071116095442AAdH9PP"],
	9002 : ["peter garrett,kate blanchette and turnbull.?", 1, "Yahoo Answers", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20071005104208AA52Bri"],
	9003 : ["global warming...the final solution?", 18, "Climate Change", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070805113337AArcKCu"],
	9004 : ["iraq,would it be better if...?", 3, "Current Events", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070722113424AApeMwg"],
	9005 : ["time to bring back the death penalty?", 8, "Current Events", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070629111106AAp606K"],
	9006 : ["intruments for cars?", 1, "Maintenance & Repairs", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070630014301AAzi9mV"],
	9007 : ["norton spyware scan.?", 2, "Yahoo Toolbar", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070619010054AAJiCad"],
	9008 : ["burial in the u.k?", 1, "Other - Society & Culture", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070619012414AAIz6SB"],
	9009 : ["so slow computer?", 3, "Hardware", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070619112837AAE1YKh"],
	9010 : ["asked two questions.?", 1, "Yahoo Answers", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070620104742AA3ijOK"],
	9011 : ["browser add-ons?", 4, "Internet", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20070514013114AA1BW7C"],
	9012 : ["stolen ram,want it back.?", 6, "Hardware", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20061103002923AAm8QGP"],
	9013 : ["can cheese and other foodstuffs be legally be brought into thailand when i return from australia?", 1, "Immigration", 0, "d935c3e236ab2118c3bdf23fde99f59aaa", "https://answers.yahoo.com/question/index?qid=20060908005137AAWEc2W"],
	9014 : ["Impossible insomnia?", 4, "Other - Health", 0, "yCUK3vvJaa", "https://answers.yahoo.com/question/index?qid=20070704051318AALCxvV"],
	9015 : ["When do you think will World of Warcraft lose it's popularity?", 6, "Video & Online Games", 0, "yCUK3vvJaa", "https://answers.yahoo.com/question/index?qid=20070316122859AAA6iJQ"],
	9016 : ["What are your bad habbits that make you mad but you can't quit doing?", 6, "Mental Health", 0, "yCUK3vvJaa", "https://answers.yahoo.com/question/index?qid=20070326033531AAJTQRH"],
	9017 : ["What are the bad sides of nutrients used to gain body mass?", 2, "Diet & Fitness", 0, "yCUK3vvJaa", "https://answers.yahoo.com/question/index?qid=20070330095223AA07bvw"],
	9018 : ["What's the most tragic song you've ever heard?", 27, "Music", 0, "yCUK3vvJaa", "https://answers.yahoo.com/question/index?qid=20070301150949AA5JsDJ"],
	9019 : ["Why does my girlfriend sometimes say that...?", 10, "Singles & Dating", 0, "yCUK3vvJaa", "https://answers.yahoo.com/question/index?qid=20070226015258AAOJjtd"],
	9020 : ["In Christianity, what is the difference between the \"Body of Christ\" and \"The Bride\"?", 14, "Religion & Spirituality", 0, "1RKpbHocaa", "https://answers.yahoo.com/question/index?qid=20160723204322AAiIzxA"],
	9021 : ["In Genesis ch5 we see that Noah was the 10th generation from Adam so...?", 9, "Religion & Spirituality", 0, "1RKpbHocaa", "https://answers.yahoo.com/question/index?qid=20120420191256AAawXGt"],
	9022 : ["Is it safe to use just lodgestone to build a fire pit?", 2, "Do It Yourself (DIY)", 0, "g2D27vf3aa", "https://answers.yahoo.com/question/index?qid=20111216163717AAoa6t6"],
	9023 : ["Why do tea partiers love George Soros and Pon Raul so much?", 9, "Politics", 0, "g2D27vf3aa", "https://answers.yahoo.com/question/index?qid=20110816094742AAkxc1M"],
	9024 : ["What makes more sense? Terrorists attack us because they hate our freedoms or we're occupying their land?", 13, "Politics", 0, "g2D27vf3aa", "https://answers.yahoo.com/question/index?qid=20101028082415AARqI67"],
	9025 : ["Have people that complain about insurance prices not picked themselves up by their boot straps?", 3, "Politics", 0, "g2D27vf3aa", "https://answers.yahoo.com/question/index?qid=20101021080601AAyJKyr"],
	9026 : ["Did George Washington know that Tea Party followers were going to be against the government he fought for?", 5, "Politics", 0, "g2D27vf3aa", "https://answers.yahoo.com/question/index?qid=20101014120551AAyvZWj"],
	9027 : ["Who's moving to California if they legalize marijuana for the masses?", 5, "Law & Ethics", 0, "g2D27vf3aa", "https://answers.yahoo.com/question/index?qid=20101002150256AAo3fbt"],
	9028 : ["Is this the only verse that the doctrine of the Rapture is based on?", 13, "Religion & Spirituality", 0, "1RKpbHocaa", "https://answers.yahoo.com/question/index?qid=20081204064020AAZlj5q"],
	9029 : ["Those who support Obama, are you willing to sacrifice your job for him?", 16, "Elections", 0, "f9089da3646d378f6e78bf639f6a51c3aa", "https://answers.yahoo.com/question/index?qid=20081008232510AAfFH96"],
	9030 : ["help with a at &t pantech cell phone?", 2, "Cell Phones & Plans", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20121018173056AAQr2S0"],
	9031 : ["ok i have a question about a kitten and a cat?", 7, "Cats", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20101223113713AAMeaT4"],
	9032 : ["is their anyone who can help me with music?", 2, "Music", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20101225091543AA7NHVT"],
	9033 : ["Did anybody turn out to be exactly what they wanted to be?", 9, "Community Service", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20090208153152AAs4jUQ"],
	9034 : ["why do atheist say \"God bless you\"?", 30, "Religion & Spirituality", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20081227121901AANcHye"],
	9035 : ["do you make a to do list every day?", 18, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080920221903AAb4RS7"],
	9036 : ["does anyone care to share what there avatar really means?", 11, "Cultures & Groups", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080606203014AALrPww"],
	9037 : ["Do you think employers give enough time off for bereavement ?", 6, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080607060521AA8yi8X"],
	9038 : ["Has anyone ever asked a question on here, only to have a very rude person go out of there way to answer it?", 13, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080601131745AAHpwTu"],
	9039 : ["what just happened? I tried to pick a best answer for my question?", 2, "Yahoo Answers", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080605133752AA1eHxE"],
	9040 : ["do you guys sometimes feel close to some of the people on here enough to ever?", 11, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080605134148AA67zvf"],
	9041 : ["what is your favorite meal that your mother always made when you were growing up?", 11, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080605141743AAi53yd"],
	9042 : ["I've been in the hospital for 2 1/2 days, discharged with no answers and still very ill, does this sound?", 13, "Diseases & Conditions", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080605165845AA4ILAm"],
	9043 : ["Do you think God plays favortism?", 8, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080606044108AABtX1y"],
	9044 : ["do you smoke cigarettes? and if so how much a day?", 14, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080606054806AAEgo4r"],
	9045 : ["have you ever had such a bad dream example: about your spouse or lover?", 6, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080606063210AAUBm6C"],
	9046 : ["Do you consider yourself to be an emotional person?", 7, "Other - Society & Culture", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080527083710AAFyUNM"],
	9047 : ["please help with math problem?", 7, "Mathematics", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20080313111023AAcMafU"],
	9048 : ["any doctors GP or obgyn gyn pa nurse please help?", 10, "Women's Health", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20071030120127AAeZ1pr"],
	9049 : ["How do i know the difference between an invention or just a really good idea?", 9, "Engineering", 0, "FrZkfexqaa", "https://answers.yahoo.com/question/index?qid=20071114125142AAItJPH"],
	9050 : ["In TV series Vikings, why is Ragnar Lothbrok so determined to have a son?", 1, "Television", 0, "AA10871374", "https://answers.yahoo.com/question/index?qid=20140209174137AAm4Ojb"],
}