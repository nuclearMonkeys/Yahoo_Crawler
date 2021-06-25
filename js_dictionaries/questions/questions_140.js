var questions_dict = {
	7001 : ["Are we any close to finding a exoplanet that's in the habitable zone with ETs yet?", 6, "Astronomy & Space", 2, "FiCIAYGGaa", "https://answers.yahoo.com/question/index?qid=20210407043903AAU5oBw"],
	7002 : ["When is the last alien from Mars going to land and say hello to me already?", 5, "Astronomy & Space", 8, "FiCIAYGGaa", "https://answers.yahoo.com/question/index?qid=20210408051253AAp4E3Y"],
	7003 : ["Why did the public lose interest in the space program?", 19, "Astronomy & Space", 27, "mrqLlZhXaa", "https://answers.yahoo.com/question/index?qid=20210403182331AA0FdHl"],
	7004 : ["Is Mars too far for a practicable human base this century....?", 6, "Astronomy & Space", 7, "oxjgA8c5aa", "https://answers.yahoo.com/question/index?qid=20210407160812AAsu4LG"],
	7005 : ["What's the next good Astronomy message board after this is over?", 7, "Astronomy & Space", 5, "4d3a7bbc1dffd218b8922b7e1819ce90aa", "https://answers.yahoo.com/question/index?qid=20210407025550AAUBF3X"],
	7006 : ["Why do some think that U.S. astronauts never did land on the moon?  How did this idea get started?", 10, "Astronomy & Space", 24, "3ZerbcnEaa", "https://answers.yahoo.com/question/index?qid=20210404221615AAH3XmZ"],
	7007 : ["Why aren't there any plans to build a commercial space station that space tourists can go to?", 8, "Astronomy & Space", 2, "E6IgnT59aa", "https://answers.yahoo.com/question/index?qid=20210405165137AA42piA"],
	7008 : ["it took the united states only six years to reach the moon in the 1960s. why is it taking decades to return in the 21st century?", 10, "Astronomy & Space", 2, "0cc349e5b23bb03a0dcb7d4307ba36b0aa", "https://answers.yahoo.com/question/index?qid=20210404224642AAuGS4E"],
	7009 : ["Could another planet or moon exist where you don't need a spacesuit to even breathe?", 11, "Astronomy & Space", 9, "d3cd3e0f2e8feaaff79363574632bf96aa", "https://answers.yahoo.com/question/index?qid=20210404180220AA8Bi1w"],
	7010 : ["When you look at a star that's light years away, are you really looking into the past?", 10, "Astronomy & Space", 4, "S0H33kOiaa", "https://answers.yahoo.com/question/index?qid=20210405022621AAqFGUz"],
	7011 : ["why are no private companies planning to mine the Moon?", 11, "Astronomy & Space", 18, "EdAyghPUaa", "https://answers.yahoo.com/question/index?qid=20210403153643AAJWrXV"],
	7012 : ["What are the chances of civilisations on other planets, and will we ever meet them?", 9, "Astronomy & Space", 2, "aJ5f8IdPaa", "https://answers.yahoo.com/question/index?qid=20210404091135AA2R9Ot"],
	7013 : ["What is the best way to test space lasers?", 4, "Astronomy & Space", 2, "E6IgnT59aa", "https://answers.yahoo.com/question/index?qid=20210407233814AAog79a"],
	7014 : ["Is there anything more beautiful than looking down at Earth from a space station or low-Earth orbit?", 4, "Astronomy & Space", 3, "E6IgnT59aa", "https://answers.yahoo.com/question/index?qid=20210407143448AAK9nvm"],
	7015 : ["Why is it we can find all these planets yet we have visited none of them?", 15, "Astronomy & Space", 22, "JT2qcRC6aa", "https://answers.yahoo.com/question/index?qid=20210402162412AAicFgC"],
	7016 : ["Is Uranus going to reveal itself on the night of April 19?", 5, "Astronomy & Space", 12, "8OooyGM8aa", "https://answers.yahoo.com/question/index?qid=20210406210632AAdoaAE"],
	7017 : ["Would it be unethical for someone to willingly go on a one way trip to Mars?", 8, "Astronomy & Space", 10, "E6IgnT59aa", "https://answers.yahoo.com/question/index?qid=20210405015026AAtfVcJ"],
	7018 : ["What was the closest distance to Uranus humankind has ever reached?", 4, "Astronomy & Space", 6, "cyIPEOLYaa", "https://answers.yahoo.com/question/index?qid=20210408031158AAvoc5T"],
	7019 : ["Our Moon in its elliptical orbit travels fastest when it is?", 4, "Astronomy & Space", 6, "RzRsajtDaa", "https://answers.yahoo.com/question/index?qid=20210408033511AAfxA2y"],
	7020 : ["Do you think aliens are using - or will use - the sun and the other planets in the solar system more than humans ?", 5, "Astronomy & Space", 6, "2ifr1sIRaa", "https://answers.yahoo.com/question/index?qid=20210407010656AAF6VxY"],
	7021 : ["Why doesn't Space X use Spaceport America?", 5, "Astronomy & Space", 6, "E6IgnT59aa", "https://answers.yahoo.com/question/index?qid=20210407195658AAGAYHo"],
	7022 : ["Is astronomy based on physics or is physics based on astronomy?", 7, "Astronomy & Space", 5, "ybcrCe9baa", "https://answers.yahoo.com/question/index?qid=20210406113815AAFYqNr"],
	7023 : ["Since we use the term \"moon\" for the satellite of any planet should be have an official name for our moon?", 22, "Astronomy & Space", 11, "cb1c8e5fcd8492bc3787fd1b614481ecaa", "https://answers.yahoo.com/question/index?qid=20210403160504AAyVPFF"],
	7024 : ["will the James Webb Space Telescope finally launch this year, or was it delayed again or cancelled?", 8, "Astronomy & Space", 3, "yNhUEpxHaa", "https://answers.yahoo.com/question/index?qid=20210406212945AAtTdvB"],
	7025 : ["Why black hole was not named white hole? ?", 4, "Astronomy & Space", 1, "0GPMDJYKaa", "https://answers.yahoo.com/question/index?qid=20210410002817AAIJsDE"],
	7026 : ["If the Universe expanded from the single point, what do observers that were sitting at the edge of it see if they look towards...?", 7, "Astronomy & Space", 6, "bXMPytYEaa", "https://answers.yahoo.com/question/index?qid=20210408035238AABLIJm"],
	7027 : ["Is life possible on the star Vega?", 16, "Astronomy & Space", 20, "0GPMDJYKaa", "https://answers.yahoo.com/question/index?qid=20210405132206AAcuXyT"],
	7028 : ["Should humans colonize other planets?", 6, "Astronomy & Space", 10, "ANhwSuGIaa", "https://answers.yahoo.com/question/index?qid=20210411082324AAYvfBI"],
	7029 : ["How dar is the moon?", 10, "Astronomy & Space", 4, "0b6yxPlAaa", "https://answers.yahoo.com/question/index?qid=20210409130847AAMkiWA"],
	7030 : ["Dream about space and aliens?", 6, "Astronomy & Space", 6, "dwPrLpdJaa", "https://answers.yahoo.com/question/index?qid=20210411111713AAoSqeK"],
	7031 : ["Have you ever seen the other side of the Moon?", 7, "Astronomy & Space", 2, "UpP7rFHGaa", "https://answers.yahoo.com/question/index?qid=20210411031626AARFWnU"],
	7032 : ["How many planets send representatives to the Miss Universe pageant?", 7, "Astronomy & Space", 12, "FiCIAYGGaa", "https://answers.yahoo.com/question/index?qid=20210411052807AAQuYfn"],
	7033 : ["Was the energy released in the formation of the Universe Big Bang arguably bigger or smaller than the power of the nuke on Hiroshima Japan ?", 5, "Astronomy & Space", 10, "ejoQezrBaa", "https://answers.yahoo.com/question/index?qid=20210412185015AA5PqXq"],
	7034 : ["If an incense stick burns at 1400 Degrees Fahrenheit (760 Celsius) why can't it melt aluminium or inflict near instant third degree burns ? ?", 7, "Other - Science", 12, "nzwVK2Xraa", "https://answers.yahoo.com/question/index?qid=20200916175926AAzcJhW"],
	7035 : ["Is he cheating?", 5, "Other - Science", 3, "b2acf57f08fe6f558c997db984a74b15aa", "https://answers.yahoo.com/question/index?qid=20200926231259AA1DGVA"],
	7036 : ["What does it mean that I have an IQ of 80?", 10, "Other - Science", 16, "X7Owy4fgaa", "https://answers.yahoo.com/question/index?qid=20200926200026AAn3DEa"],
	7037 : ["Are aliens space monsters?", 8, "Other - Science", 3, "rUr92P0qaa", "https://answers.yahoo.com/question/index?qid=20201005011744AAzETBX"],
	7038 : ["If the sun was the size of a quark how big would the universe be?", 4, "Astronomy & Space", 3, "uVVMUO73aa", "https://answers.yahoo.com/question/index?qid=20210414003517AAZRB6s"],
	7039 : ["By how much has imagination developed through NOT KNOWING about the Earth, the sea, the solar system, the universe etc. ?", 4, "Astronomy & Space", 4, "2ifr1sIRaa", "https://answers.yahoo.com/question/index?qid=20210414112619AAlUUJa"],
	7040 : ["How attractive is Uranus for human exploration?", 8, "Astronomy & Space", 13, "P8dIznazaa", "https://answers.yahoo.com/question/index?qid=20210411204901AAU5Y8i"],
	7041 : ["Has anyone else besides me just learning that NASSA faked the moon landing? ?", 30, "Astronomy & Space", 149, "6wTdtWX7aa", "https://answers.yahoo.com/question/index?qid=20210408042706AASSIBt"],
	7042 : ["When a person has depression how do the eyes look?", 1, "Mental Health", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190908073338AAyE3zu"],
	7043 : ["My blood pressure was 137/78 with a pulse of 86. Is this normal?", 11, "Diseases & Conditions", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190909072231AAJUweX"],
	7044 : ["The reason I don't want to marry or have kids is because sometimes your wife and kids can be annoying. Is this okay to feel this way?", 5, "Marriage & Divorce", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190910073400AAWEgBG"],
	7045 : ["Based on research, what are the differences between brains of black and white people?", 6, "Other - Science", 22, "BZbvSrwUaa", "https://answers.yahoo.com/question/index?qid=20201027124415AAnfbL2"],
	7046 : ["When I go to the doctors office and sit in the waiting room I mumble to myself. Is this okay?", 7, "Jokes & Riddles", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190824075116AAnFlKR"],
	7047 : ["One day I had 4 sausage patties, tuna salad, vegetables, and cornbread. Is this a good food combination?", 9, "Cooking & Recipes", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190828071815AAUSqcH"],
	7048 : ["If a person eats runny yams, will it give them diarrhea?", 1, "Other - Health", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190902093317AAeI9i0"],
	7049 : ["What happens if you get into a fight with someone at the doctor's office?", 3, "Law & Ethics", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190816072519AAm5ecA"],
	7050 : ["If I go into a Burger King barefoot will I be asked to leave?", 24, "Fast Food", 0, "wXmU1U4naa", "https://answers.yahoo.com/question/index?qid=20190816083256AAw7Yyd"],
}