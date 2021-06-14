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
        lemmalist.push(lemmatizer.only_lemmas(tokenlist[y], POSList[y]));
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