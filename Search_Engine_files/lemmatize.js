// Derek Morales derekm2@uci.edu

var token = require("./tokenize");
var lemmatizer = require("./javascript-lemmatizer");
var posTagger = require("./wink-pos-tagger");
var fs = require("fs");

function convertPOSList(POSList)
{
    for (var x = 0; x < POSList.length; x++)
    {
        speech = POSList[x].pos;
        if (speech[0] == "V")
        {
            POSList[x] = "verb";
        }
        else if (speech[0] == "N")
        {
            POSList[x] = "noun";
        }
        else if (speech[0] == "J")
        {
            POSList[x] = "adj";
        }
        else if (speech[0] == "R")
        {
            POSList[x] = "adv";
        }
    }
}

function lemmatizetokens(tokenlist)
{
    var tagger = posTagger();
    POSListTemp = tagger.tagRawTokens(tokenlist);
    POSList = convertPOSList(POSListTemp);
    var lemmatizer = new lemmatizer();
    var lemmalist = [];
    for (var y = 0; y < tokenlist.length; y++)
    {
        lemmalist.push(lemmatizer.only_lemmas(tokenlist[y], POSList[y])[0]);
    }
    return lemmalist;
}

function JSReadingFreq(wordfrequency)
{
    // A version of the function used to create a word frequency file, translated
    // into Javascript.

}

function JSReadingPost(postingslist)
{
    // A version of the function used to create a postings list file, translated
    // into Javascript.
}

fs.readFile("yahoo_questions.json", function(err, buf) {
    var json_string = "";
    if (err) 
    {
        return console.error(err);
    }
    json_string += buf.toString();
    const obj = JSON.parse(json_string);
    for (var key in obj)
    {
        var value = obj[key];
        var q_title = value[0];
        token_list = JSTokenize(q_title);
        lemma_list = lemmatizetokens(token_list);
        var q_dict = {};
        for (var word in lemma_list)
        {
            if (!(word in q_dict))
            {
                q_dict[word] = 1;
            }
            else
            {
                q_dict[word] += 1;
            }
        }
        json_string2 = "";
        
    }
});