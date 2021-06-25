var questions_dict = {
	5551 : ["Why does crocodiles walk so gayly?", 7, "France", 1, "0rgRizWMaa", "https://answers.yahoo.com/question/index?qid=20190616054048AAgMdRv"],
	5552 : ["Am I able to get re hired if I have a interview?", 6, "Germany", 3, "n08wbJoKaa", "https://answers.yahoo.com/question/index?qid=20190717002448AAY42kD"],
	5553 : ["Boss wants me to work with difficult employee?", 10, "Germany", 11, "xC1cREOraa", "https://answers.yahoo.com/question/index?qid=20190717014626AAdJRye"],
	5554 : ["Is this a good method to get a relatively new car for comparatively less money?", 6, "Germany", 9, "nK05rdSlaa", "https://answers.yahoo.com/question/index?qid=20190729222544AAXGsoa"],
	5555 : ["what happens when you drink jim beam?", 7, "Germany", 2, "g3ZVSJeCaa", "https://answers.yahoo.com/question/index?qid=20190804012223AAh2DIC"],
	5556 : ["Can you use PayPal balance for Uber?", 4, "Germany", 0, "o0N5dTygaa", "https://answers.yahoo.com/question/index?qid=20190821190508AAHsyTE"],
	5557 : ["Do I need some form of card to shop at Whole Foods?", 5, "Germany", 0, "QGDLbltbaa", "https://answers.yahoo.com/question/index?qid=20190822162006AAp9Iqn"],
	5558 : ["Can i move out of my landlord's house if we have a court case going on?", 7, "Germany", 19, "w6X4WdLsaa", "https://answers.yahoo.com/question/index?qid=20190822063118AA9j29N"],
	5559 : ["How to make quick money until I get payed ?", 7, "Germany", 3, "HdLKZwkyaa", "https://answers.yahoo.com/question/index?qid=20190822140233AAbAewG"],
	5560 : ["Do you trust CNN? CNN Director Charlie Chester made some startling admissions to an undercover journalist from Project Veritas, ?", 8, "Media & Journalism", 10, "kc8XR076aa", "https://answers.yahoo.com/question/index?qid=20210413212100AAxJxlO"],
	5561 : ["Federal prosecution gives 'most comprehensive presentation' showing that some Capitol rioters stashed firearms – ‘SOME??' How many is that? ?", 6, "Media & Journalism", 5, "D7QMdqY5aa", "https://answers.yahoo.com/question/index?qid=20210415160515AAlWGm4"],
	5562 : ["Are many British people bored of hearing daily about the US on UK news as you don't care about the race riots there?", 8, "Media & Journalism", 8, "kuHSYEKjaa", "https://answers.yahoo.com/question/index?qid=20210415080633AAw2K3F"],
	5563 : ["Do you think the leaked UFO photo by Pentagon is a scam?", 7, "Media & Journalism", 2, "QcpQC0eMaa", "https://answers.yahoo.com/question/index?qid=20210416150444AA8I2P2"],
	5564 : ["Are scientists gods?", 15, "Argentina", 15, "fHQqpyLcaa", "https://answers.yahoo.com/question/index?qid=20190513045729AAzwqH6"],
	5565 : ["Why can't dems handle the truth? Baltimore is a dump. A total mess. Why pretend otherwise?", 41, "Argentina", 215, "9535d40205e67996eef08db4d32873a1aa", "https://answers.yahoo.com/question/index?qid=20190729150938AAowjEx"],
	5566 : ["President Trump has denounced white supremacy and racism INCLUDING after Charlotesville. Why do the media lie unabashedly? Why do people...?", 12, "Argentina", 19, "ZwL0Q16kaa", "https://answers.yahoo.com/question/index?qid=20190805055933AAx6wpr"],
	5567 : ["8 Sales Role Play Exercises to Hone Your Negotiation Skills Digital Marketing Company in San Francisco ?", 6, "Argentina", 0, "nXnq0vs9aa", "https://answers.yahoo.com/question/index?qid=20190820055018AAVyYUT"],
	5568 : ["True or false: coconuts, rice, soy sauce and bananas are staples in your diet?", 57, "Argentina", 91, "2IjUbSWkaa", "https://answers.yahoo.com/question/index?qid=20190826195120AAZvFET"],
	5569 : ["How risky is the job of an electrician?", 11, "Australia", 8, "LEyyUqjtaa", "https://answers.yahoo.com/question/index?qid=20210203114835AAPIoFH"],
	5570 : ["Do roller blinds go inside or outside the window?", 21, "Australia", 13, "kfopMRD7aa", "https://answers.yahoo.com/question/index?qid=20210203111814AApeak7"],
	5571 : ["What has the most copper in it to scrap?", 4, "Australia", 0, "QJE9MRW1aa", "https://answers.yahoo.com/question/index?qid=20210213160544AANQnwZ"],
	5572 : ["How do you pay for scrap metal?", 7, "Australia", 4, "QfmlOBJoaa", "https://answers.yahoo.com/question/index?qid=20210217164033AAmkIHG"],
	5573 : ["Many attempts have been made to see if 'right wing' can be reduced to some detectable standard. All have failed. So if you use that term?", 7, "Indonesia", 2, "9LKqj3fZaa", "https://answers.yahoo.com/question/index?qid=20190817173614AAYtU5W"],
	5574 : ["Quick three question survey for school project?", 6, "Indonesia", 4, "95c1m1u9aa", "https://answers.yahoo.com/question/index?qid=20190826015440AADBsnZ"],
	5575 : ["What's better for cleaning vinegar or isopropyl alcohol?", 18, "Canada", 11, "GdGdvpQVaa", "https://answers.yahoo.com/question/index?qid=20200914094533AAwJvDA"],
	5576 : ["Who is Jason Boynton from Vancouver bc ?", 8, "Canada", 3, "BiJmOXFkaa", "https://answers.yahoo.com/question/index?qid=20210113054632AASPmie"],
	5577 : ["Where to recycle factory car radios and electornics.?", 10, "Ireland", 4, "4ll73rtIaa", "https://answers.yahoo.com/question/index?qid=20190122001118AAwSBpp"],
	5578 : ["(Poll) Why are white people so annoying?", 12, "Ireland", 5, "6LMUDDQcaa", "https://answers.yahoo.com/question/index?qid=20190420160316AAKnKfh"],
	5579 : ["I live in PA, and a lot of the cashiers have really long nails, especially the blacks, isnt this unhygieic, what if Im scratched?", 7, "France", 1, "45a773de89c6b6a94a5780801566c620aa", "https://answers.yahoo.com/question/index?qid=20190806203356AAjTKeQ"],
	5580 : ["My wife was attacked by a giant bat creature!?", 10, "France", 6, "SsYLcN0Waa", "https://answers.yahoo.com/question/index?qid=20190811090641AAe6zuQ"],
	5581 : ["should I pay off my credit cards or build an emergency fund first?", 9, "France", 5, "rchwUoFkaa", "https://answers.yahoo.com/question/index?qid=20190822210240AAig5ja"],
	5582 : ["How many stamps would be needed to mail a thin magazine in a 9x12 envelope ?", 7, "Germany", 1, "E45sH24faa", "https://answers.yahoo.com/question/index?qid=20190822200914AAvr2Hz"],
	5583 : ["should I pay off my credit cards or build an emergency fund first?", 10, "Germany", 8, "rchwUoFkaa", "https://answers.yahoo.com/question/index?qid=20190822210229AAi26yY"],
	5584 : ["How I can exchange one million euro not original?", 11, "Germany", 0, "Y0PbnMLSaa", "https://answers.yahoo.com/question/index?qid=20190824125627AAubFab"],
	5585 : ["Help. My dogs gets stuck on the middle of the stairs?", 7, "Dogs", 5, "7K3rPLz0aa", "https://answers.yahoo.com/question/index?qid=20210419120734AAjbBVn"],
	5586 : ["Are dogs and cats actually telepathic friends?", 8, "Dogs", 7, "fH6tW0XWaa", "https://answers.yahoo.com/question/index?qid=20210419020726AAsMZbp"],
	5587 : ["Should I take my dog to the vet?", 11, "Dogs", 11, "969fOW29aa", "https://answers.yahoo.com/question/index?qid=20210419022153AAI81cT"],
	5588 : ["Why does my dog bite me when I beat him?", 12, "Dogs", 14, "GEz0ekEYaa", "https://answers.yahoo.com/question/index?qid=20210419115728AA1MKAm"],
	5589 : ["why does my iphone drain so much battery overnight?", 7, "Personal Finance", 1, "JAKVhrHRaa", "https://answers.yahoo.com/question/index?qid=20210417110857AAqTZst"],
	5590 : ["Have you spent $200 on groceries?", 10, "Personal Finance", 9, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20210416091311AA0pg49"],
	5591 : ["Why is the PS3 Store shutting down?", 5, "Games & Gear", 2, "weQ6UTXvaa", "https://answers.yahoo.com/question/index?qid=20210413192459AAsn4vq"],
	5592 : ["Is GTA IV available on Xbox One format?", 7, "Games & Gear", 0, "VWpT79S5aa", "https://answers.yahoo.com/question/index?qid=20210307011504AA4b5FL"],
	5593 : ["How often should you clean the inside of your PC?", 5, "Games & Gear", 1, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20210314061958AAZ1l18"],
	5594 : ["If my budget is £500 for a Gaming PC - what would you advise me to do ?", 6, "Games & Gear", 5, "VYT3t9fbaa", "https://answers.yahoo.com/question/index?qid=20210313223300AADscm4"],
	5595 : ["Is it still worth getting a Playstation 3?", 5, "Games & Gear", 4, "iO6pQpeBaa", "https://answers.yahoo.com/question/index?qid=20210323123631AAH4Yeh"],
	5596 : ["Why does PS store gift cards have taxes?", 5, "Games & Gear", 2, "iO6pQpeBaa", "https://answers.yahoo.com/question/index?qid=20210410174130AAtAIDw"],
	5597 : ["Do you believe that you can't see the difference between 30fps and 144fps?", 7, "Games & Gear", 3, "iO6pQpeBaa", "https://answers.yahoo.com/question/index?qid=20210410063106AAfH3ji"],
	5598 : ["Do you have VTech phones?", 9, "Land Phones", 3, "uccpQzeNaa", "https://answers.yahoo.com/question/index?qid=20200917114242AABGevM"],
	5599 : ["...........?", 6, "Land Phones", 4, "CNjVfE2Paa", "https://answers.yahoo.com/question/index?qid=20201005032624AArTP4l"],
	5600 : ["What hapens to (landline) phone numbers after they are canceled?", 9, "Land Phones", 5, "yKjwkDqdaa", "https://answers.yahoo.com/question/index?qid=20201013164145AAuc5Wo"],
}