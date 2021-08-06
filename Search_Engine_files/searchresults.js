// Search Results Module
// Derek Morales derekm2@uci.edu

var lemmatizer = require("javascript-lemmatizer/js/lemmatizer.js");
var posTagger = require("wink-pos-tagger/src/wink-pos-tagger.js");
//var natural = require('natural');
var fs = require("fs");

//const language = "EN";
//const defaultCategory = 'N';
//const defaultCategoryCapitalized = 'NNP';
//var lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
//var ruleSet = new natural.RuleSet('EN');
const { questions } = require("wink-lexicon/src/lexicon");

var stopWords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', "another", 'and', 'any',
    'are', "aren't", 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but',
    'by', "can", "can't", 'cannot', 'could', "couldn't", 'did', "didn't", 'do', 'does', "doesn't", 'doing', "don't",
    'down', 'during', 'each', "every", 'few', 'for', 'from', 'further', 'had', "hadn't", 'has', "hasn't", 'have',
    "haven't", 'having', 'he', "he'd", "he'll", "he's", 'her', "hello", 'here', "here's", 'hers', 'herself', 'him',
    'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if', 'in', 'into', 'is', "isn't",
    'it', "it's", 'its', 'itself', "let's", 'like', 'me', 'more', 'most', "mustn't", 'my', 'myself', 'no', 'nor',
    'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out',
    'over', 'own', 'same', "shan't", 'she', "she'd", "she'll", "she's", 'should', "shouldn't", "wince", 'so', 'some',
    'such', 'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there',
    "there's", 'these', 'they', "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to',
    'too', "us", 'under', 'until', 'up', 'very', 'was', "wasn't", 'we', "we'd", "we'll", "we're", "we've", 'were',
    "weren't", 'what', "what's", 'when', "when's", 'where', "where's", 'which', 'while', 'who', "who's",
    'whom', 'why', "why's", "will", 'with', 'within', "won't", 'would', "wouldn't", 'you', "you'd", "you'll", "you're", "you've",
    'your', 'yours', 'yourself', 'yourselves']

function JSTokenize(text) {
    // Version of my previous tokenizer, translated into JavaScript
    var tokenlist = [];
    var splittext = text.split(" ");
    for (var i = 0; i != splittext.length; i++) {
        var currenttoken = "";
        var ltoken = splittext[i].toLowerCase();
        for (var x = 0; x < ltoken.length; x++) {
            var code = ltoken.charCodeAt(x);
            if ((code > 47 && code < 58) || // numeric (0-9)
                (code > 64 && code < 91) || // upper alpha (A-Z)
                (code > 96 && code < 123)) { // lower alpha (a-z)
                currenttoken += ltoken[x];
            }
            else {
                if (currenttoken != '' && (stopWords.includes(currenttoken) == false)) {
                    tokenlist.push(currenttoken);
                }
                currenttoken = "";
            }
        }
        if (currenttoken != '' && (stopWords.includes(currenttoken) == false)) {
            tokenlist.push(currenttoken);
        }
    }
    return tokenlist;
}

function convertPOSList(POSList) {
    for (var x = 0; x < POSList.length; x++) {
        speech = POSList[x].pos;
        if (speech[0] == "V") {
            POSList[x] = "verb";
        }
        else if ((speech[0] == "N") || (speech == "CD")) {
            POSList[x] = "noun";
        }
        else if (speech[0] == "J") {
            POSList[x] = "adj";
        }
        else if (speech[0] == "R") {
            POSList[x] = "adv";
        }
    }
    return POSList;
}

function lemmatizetokens(tokenlist) {
    // Adjusted version of lemmatizetokens that does not use Node.js

    var tagger = posTagger();
    POSListTemp = tagger.tagRawTokens(tokenlist);
    POSList = convertPOSList(POSListTemp);
    //console.log(POSList);

    //var tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
    //POSListTemp = tagger.tag(tokenlist);
    // Not sure how this POSList is formatted now. Should check later. Possible issues with
    // languages later too. Maybe not if we use the stemmer.
    //POSList = convertPOSList(POSListTemp);

    var lemma = new lemmatizer();
    var lemmalist = [];
    for (var y = 0; y < tokenlist.length; y++) {
        if (typeof POSList[y] == "object")
        {
            lemmalist.push(lemma.only_lemmas(tokenlist[y])[0]);
        }
        else
        {
            lemmalist.push(lemma.only_lemmas(tokenlist[y], POSList[y])[0]);
        }
    }
    return lemmalist;
}

function sortByKeyNumbers1(a, b)
{
    // Sorts the list of dictionaries by their highest numbers
    if (a.query < b.query)
    {
        return 1;
    }
    if (a.query > b.query)
    {
        return -1;
    }
    return 0;
}

function sortByKeyNumbers2(a, b)
{
    // Not sure yet how this function will work. Probably with the aggregate word frequencies.
    //zero_a = numberofZeros(a.query);
    //zero_b = numberofZeros(b.query);
    sum_a = a.query.reduce((a, b) => a + b, 0);
    sum_b = b.query.reduce((a, b) => a + b, 0);
    if (a.query.length < b.query.length)
    {
        return 1;
    }
    if (a.query.length > b.query.length)
    {
        return -1;
    }
    return 0;
}

function numberofZeros(quest_list)
{
    var counter = 0;
    for (var item = 0; item < quest_list.length; item++)
    {
        if (quest_list[item] == 0)
        {
            counter++;
        }
    }
    return counter;
}

function mainSearch(query) // Parsing through the main query and giving a list of results.
{
    tokenquery = JSTokenize(query);
    lemmaquery = lemmatizetokens(tokenquery);
    const post = fs.readFileSync("JSPostings_List.json");
    const wordi = fs.readFileSync("JSWord_Frequency.json");
    var json_str1 = "";
    var json_str2 = "";
    json_str1 += post.toString();
    json_str2 += wordi.toString();

    const postings = JSON.parse(json_str1);
    const wordfreq = JSON.parse(json_str2);

    var questionlist = [];
    if (lemmaquery.length == 0)
    {
        // For empty queries
        return questionlist;
    }
    else if (lemmaquery.length == 1)
    {
        // For parsing through single word queries
        qs = postings[lemmaquery[0]];
        if (qs != undefined)
        {
            for (var x in qs)
            {
                var words = wordfreq[qs[x]];
                if (words != undefined)
                {
                    var question_dict = {"qid": qs[x]};
                    var query_num = words[lemmaquery[0]];
                    question_dict["query"] = query_num;
                    questionlist.push(question_dict);
                }
            }
            questionlist.sort(sortByKeyNumbers1);
            //console.log(questionlist);
            var final_quest = [];
            for (var qt in questionlist)
            {
                current_qid = questionlist[qt].qid;
                final_quest.push(current_qid);
            }
            return final_quest;
        }
    }
    else if (lemmaquery.length > 1)
    {
        // For parsing through multiple word queries
        // return questionlist;
        var temp_questions = new Set();
        for (var index in lemmaquery)
        {
            qs2 = postings[lemmaquery[index]];
            if (qs2 != undefined)
            {
                for (var y in qs2)
                {
                    var words = wordfreq[qs2[y]];
                    if (words != undefined)
                    {
                        var question_dict = {"qid": qs2[y]};
                        //var query_arr = new Array(lemmaquery.length);
                        var query_arr = [];
                        for (var ind in lemmaquery)
                        {
                            var query_num = words[lemmaquery[ind]];
                            if (query_num != undefined)
                            {
                                query_arr.push(query_num);
                            }
                        }
                        question_dict["query"] = query_arr;
                        temp_questions.add(question_dict);
                        // Find a way to add to the set for easy sorting later on.
                        // JUST ADD UP THE WORD FREQUENCIES STUPID
                    }
                }
            }
        }
        questionlist = Array.from(temp_questions);
        questionlist.sort(
            (q_a, q_b) =>
                q_b.query.length - q_a.query.length ||
                q_b.query.reduce((a, b) => a + b, 0) - q_a.query.reduce((a, b) => a + b, 0),
        );
        //console.log(questionlist);
        var final_quest = [];
        for (var qt in questionlist)
        {
            current_qid = questionlist[qt].qid;
            final_quest.push(current_qid);
        }
        return final_quest;
    }
}

//results = mainSearch("Trump lost");
//console.log(results);