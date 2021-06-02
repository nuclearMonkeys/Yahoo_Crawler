var questions_dict = {
	2001 : ["why is yahoo shutting down yahoo answers ?", 6, "Other - Yahoo Products", 13, "rqAmrPHtaa", "https://answers.yahoo.com/question/index?qid=20210405181721AAx1kqH"],
	2002 : ["\"Yahoo Will be right back... Thank you for your patience. Our engineers are working quickly to resolve the issue.?", 4, "Other - Yahoo Products", 4, "oXcbt0HZaa", "https://answers.yahoo.com/question/index?qid=20210411213031AARtsnb"],
	2003 : ["Why is Yahoo Answer shutting down?", 5, "Other - Yahoo Products", 2, "JrL8kwoUaa", "https://answers.yahoo.com/question/index?qid=20210412004114AAabWAh"],
	2004 : ["Did Yahoo fire all their YA engineers before their funeral? The way this site has been malfunctioning, management must be running it.?", 6, "None", 1, "None", "https://answers.yahoo.com/question/index?qid=20210411123439AAdhPVq"],
	2005 : ["Do two incomplete people make eachother complete?", 4, "Other - Yahoo Products", 1, "KXqFpWAIaa", "https://answers.yahoo.com/question/index?qid=20210416020847AAUXFfa"],
	2006 : ["Fellow trolls, when Yahoo! Answers closes down, where shall we find our new home?", 8, "Other - Yahoo Products", 3, "xbCXQMJBaa", "https://answers.yahoo.com/question/index?qid=20210416035007AAORuRR"],
	2007 : ["Julian Assange exposed Democrats. Is that why they cheer his arrest?", 12, "Yahoo Autos", 29, "LMgUpEgjaa", "https://answers.yahoo.com/question/index?qid=20190411150407AA7JzXL"],
	2008 : ["I asked I got a smog test last year and why do I need to get another one this year Im wating for an answer?", 6, "Yahoo Autos", 6, "MWWmSGiFaa", "https://answers.yahoo.com/question/index?qid=20190508203910AAWwYzc"],
	2009 : ["where to go to drive fast?", 7, "None", 13, "None", "https://answers.yahoo.com/question/index?qid=20190526022008AA0Cnp6"],
	2010 : ["If the U.S. has conflict with Iran, isn't Obummer responsible for Iran buying weapons and killing Americans with the billions he gave them?", 8, "None", 18, "None", "https://answers.yahoo.com/question/index?qid=20190527212221AA7i4XE"],
	2011 : ["I live in NC. I bought a van that says total loss claim on the title. I didn?", 6, "Yahoo Autos", 2, "tmvyx1DEaa", "https://answers.yahoo.com/question/index?qid=20190725151922AASqIST"],
	2012 : ["Should I buy this car or should I wait ?", 17, "Yahoo Autos", 9, "vCGz9JQOaa", "https://answers.yahoo.com/question/index?qid=20190805185921AAgipRq"],
	2013 : ["I own a 2017 Lamborghini Huracan and I do not like it because it's not a 2019 model? What should I do?", 8, "Yahoo Autos", 7, "DtUrAhFnaa", "https://answers.yahoo.com/question/index?qid=20190815222354AAU9Mid"],
	2014 : ["Does anyone have a carbon dioxide to oxygen converter, using plant life based technology, I can use to reverse global warming?", 25, "None", 52, "None", "https://answers.yahoo.com/question/index?qid=20190716182034AAIwLqs"],
	2015 : ["How can you protect money from fire?", 5, "Yahoo Finance", 0, "AA10030221", "https://answers.yahoo.com/question/index?qid=20190723102733AAozbA2"],
	2016 : ["How many votes did Trump lose with his latest stupid tweets?", 15, "Yahoo Finance", 38, "805caef9e3551e66c6aa7d0019aa93eaaa", "https://answers.yahoo.com/question/index?qid=20190730005529AAlGTS4"],
	2017 : ["How much lower will the stock market go under Trade War Trump?", 5, "Yahoo Finance", 9, "sXllHr8Vaa", "https://answers.yahoo.com/question/index?qid=20190805100750AAkq7Vp"],
	2018 : ["Is the Pound Sterling likely to increase any further this month?", 10, "Yahoo Finance", 10, "ktqIgDpZaa", "https://answers.yahoo.com/question/index?qid=20190807171639AAj3021"],
	2019 : ["how do I add Cash to my portfolio?", 7, "Yahoo Finance", 2, "nxUZbrTGaa", "https://answers.yahoo.com/question/index?qid=20190925183727AAWOZq8"],
	2020 : ["What is the best city to pursue an acting career; Hollywood, New York City or Atlanta?", 4, "Theater & Acting", 13, "RZiZz05xaa", "https://answers.yahoo.com/question/index?qid=20201118122322AA7n1kQ"],
	2021 : ["Why do some actors have lisps but not when they are acting?", 8, "Theater & Acting", 5, "6fdY7YGOaa", "https://answers.yahoo.com/question/index?qid=20201119152220AAopFq4"],
	2022 : ["Does an actor write his own plays?", 11, "None", 17, "None", "https://answers.yahoo.com/question/index?qid=20201120002554AAjYDxi"],
	2023 : ["Is it ok to use eyeliner on your eyebrows?", 13, "Makeup", 10, "94Q1dLZGaa", "https://answers.yahoo.com/question/index?qid=20210308205500AAZfhFA"],
	2024 : ["Does anyone else detest those dolled-up Instagram photos??", 9, "Makeup", 4, "675O7PJzaa", "https://answers.yahoo.com/question/index?qid=20210311022725AA3cRrX"],
	2025 : ["I'm ugly even with makeup on what do I do ?", 20, "None", 18, "None", "https://answers.yahoo.com/question/index?qid=20210308210352AAgopRv"],
	2026 : ["When will it be time to get on with getting a job?", 9, "Makeup", 22, "cDKy9Bf5aa", "https://answers.yahoo.com/question/index?qid=20210315081757AAF8zxo"],
	2027 : ["Does your maid live with you like mine does?", 11, "Makeup", 8, "154dzJ1Faa", "https://answers.yahoo.com/question/index?qid=20210313075155AAFKaPs"],
	2028 : ["What's your fave makeup? ?", 12, "Makeup", 9, "Qs37KvQkaa", "https://answers.yahoo.com/question/index?qid=20210314124416AAQba5N"],
	2029 : ["Whats your favorite soap essence ?", 17, "None", 18, "None", "https://answers.yahoo.com/question/index?qid=20210315233111AAeLfgg"],
	2030 : ["Have you ever seen a person and thought that if they took more care of themselves they would be more attractive? ?", 10, "Other - Beauty & Style", 11, "AAX9LOypaa", "https://answers.yahoo.com/question/index?qid=20210320133920AAQuLrI"],
	2031 : ["What is your favourite perfume?", 8, "Other - Beauty & Style", 2, "I1x1vy2laa", "https://answers.yahoo.com/question/index?qid=20210325073121AAroj68"],
	2032 : ["Washed my paycheck?", 10, "Taxes", 22, "vQsgYBl5aa", "https://answers.yahoo.com/question/index?qid=20210414144512AAcyeX5"],
	2033 : ["I live with my mum and I havs agoraphobia unemployed 24 what to do ?", 20, "Mental Health", 41, "PLbU2zcYaa", "https://answers.yahoo.com/question/index?qid=20210412172458AAbyGWH"],
	2034 : ["Has Covid-19 killed more people than the Swine Flu pandemic 2009?", 5, "Diseases & Conditions", 4, "4T3g3cnXaa", "https://answers.yahoo.com/question/index?qid=20210418144248AAhJ00d"],
	2035 : ["If a person you know seems to be developing narcissistic qualities,is there any way to prevent the personality disorder?", 6, "Mental Health", 8, "1rsxr8MLaa", "https://answers.yahoo.com/question/index?qid=20210417192223AAJCB4I"],
	2036 : ["If Trump supporters know so much more about infectious disease than actual doctors, why not become a infectious disease doctor? ?", 5, "Diseases & Conditions", 7, "y3T64Uy7aa", "https://answers.yahoo.com/question/index?qid=20210418150450AA0XPhU"],
	2037 : ["can i lose 70lbs in 5 months? ?", 6, "Diet & Fitness", 8, "V3n5RC5Kaa", "https://answers.yahoo.com/question/index?qid=20210417212757AAyqplQ"],
	2038 : ["Did Donald Trump shut down Yahoo Answers?", 5, "None", 3, "None", "https://answers.yahoo.com/question/index?qid=20210420022637AANOMVh"],
	2039 : ["If Chauvin is found not guilty of murder and he later appeals, will white people prepare for riots ?", 5, "Politics", 5, "eaB4GcCOaa", "https://answers.yahoo.com/question/index?qid=20210420023120AAD9e3h"],
	2040 : ["Only two hours left and I just want to say this: REPUBLICANS SUCK AND ARE EVILLLL?", 5, "Politics", 3, "c2Zl7RSmaa", "https://answers.yahoo.com/question/index?qid=20210420023233AAVD8SE"],
	2041 : ["Goodbye everyone. I can't believe it but everything in this life eventually reaches an end. See you on reddit or quora?", 5, "Politics", 2, "RVHS7basaa", "https://answers.yahoo.com/question/index?qid=20210420023428AAni0KG"],
	2042 : ["Should Derek Chauvin be the next host of Jeopardy?", 5, "None", 5, "None", "https://answers.yahoo.com/question/index?qid=20210420023450AASrfMU"],
	2043 : ["The end is near astronomy and space?", 5, "Astronomy & Space", 3, "FiCIAYGGaa", "https://answers.yahoo.com/question/index?qid=20210417191656AA52tJq"],
	2044 : ["What does it take to become a very successful engineer?", 4, "Engineering", 1, "1SPE0fFSaa", "https://answers.yahoo.com/question/index?qid=20210418231056AA57Nu7"],
	2045 : ["is it normal to spontainosly combust asking for a friend?", 5, "Chemistry", 2, "csfOc9rzaa", "https://answers.yahoo.com/question/index?qid=20210417204525AAXD4yG"],
	2046 : ["If evolution is real?", 8, "Biology", 4, "72498f2eafc6f2f55258c8707b536214aa", "https://answers.yahoo.com/question/index?qid=20210415231335AAsfu0V"],
	2047 : ["Could there be an explanation in string theory for the occurrence of residual hauntings?", 5, "Alternative", 11, "fH6tW0XWaa", "https://answers.yahoo.com/question/index?qid=20210417225326AAhOUrQ"],
	2048 : ["Astronomy and space, this would be my final message from trolls united.?", 4, "Astronomy & Space", 5, "FiCIAYGGaa", "https://answers.yahoo.com/question/index?qid=20210419035518AAclJSD"],
	2049 : ["are aliens ex cluding us on earth from their plans to move forward?", 4, "None", 3, "None", "https://answers.yahoo.com/question/index?qid=20210419041654AAVxg2f"],
	2050 : ["Is it sexist to question whether or not a woman would have been hired/promoted if she weren't attractive, if you'd feel the same about a man?", 5, "None", 0, "None", "https://answers.yahoo.com/question/index?qid=20210419013243AAkb3kL"],
}