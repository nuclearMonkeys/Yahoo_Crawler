// Search Results Module
// Derek Morales derekm2@uci.edu

var lemmatizer = require("javascript-lemmatizer/js/lemmatizer.js");
var posTagger = require("wink-pos-tagger/src/wink-pos-tagger.js");
var fs = require("fs");

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
    var tagger = posTagger();
    POSListTemp = tagger.tagRawTokens(tokenlist);
    POSList = convertPOSList(POSListTemp);
    ///console.log(POSList);
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

function mainSearch(query) // Parsing through the main query and giving a list of results.
{
    tokenquery = JSTokenize(query);
    lemmaquery = lemmatizetokens(tokenquery);
    if (lemmaquery.length == 0)
    {
        var arr = [];
        return arr;
    }
    else if (lemmaquery.length == 1)
    {
        // For parsing through single word queries
    }
    else if (lemmaquery.length < 1)
    {
        // For parsing through multiple word queries
    }
}