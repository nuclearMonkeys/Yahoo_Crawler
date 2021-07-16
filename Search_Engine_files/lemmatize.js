// Lemmatizer and File Construction Module
// Derek Morales derekm2@uci.edu

var lemmatizer = require("javascript-lemmatizer/js/lemmatizer.js");
var posTagger = require("wink-pos-tagger/src/wink-pos-tagger.js");
var fs = require("fs");
var directory_name = './questions/'
var files = fs.readdirSync('./questions/');

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

function isAlphaNumeric(str) // Code taken from https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript.
{
    // Used to determine alphanumeric characters
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

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

function getObjectKeysAlphabetical(obj) // Function pulled from https://stackoverflow.com/questions/20998405/sort-json-dictionary-of-dictionaries-alphabetically-by-value
{
    var keys = [],
        key;

    for (key in obj) {
        if (obj.hasOwnProperty(key))
            keys.push(key);
    }

    keys.sort();

    return keys;
}

var word_frequency = {}; // For Word Frequency file
var postings = {}; // For Postings List file
var p_dict = {};
for (var y = 0; y < files.length; y++)
{
    const buf = fs.readFileSync(directory_name + files[y]);
    var json_string = "";
    json_string += buf.toString();
    const obj = JSON.parse(json_string);
    for (var key in obj) {
        var value = obj[key];
        var q_title = value[0];
        token_list = JSTokenize(q_title);
        lemma_list = lemmatizetokens(token_list);
        var q_dict = {};
        for (var word in lemma_list) {
            if (lemma_list[word] !== undefined)
            {
                if (q_dict.hasOwnProperty(lemma_list[word]) == false) { // Word Frequency section
                    q_dict[lemma_list[word]] = 1;
                }
                else {
                    q_dict[lemma_list[word]] += 1;
                }

                if (p_dict.hasOwnProperty(lemma_list[word]) == false) { // Postings List section
                    p_dict[lemma_list[word]] = new Set();
                    p_dict[lemma_list[word]].add(key);
                }
                else {
                    p_dict[lemma_list[word]].add(key);
                }
            }
        }
        word_frequency[key] = q_dict;
    }
}

var json_string2 = JSON.stringify(word_frequency);
fs.writeFileSync("JSWord_Frequency.json", json_string2);

var keys = getObjectKeysAlphabetical(p_dict);
for (var key in keys) {
    var value = p_dict[keys[key]];
    postings[keys[key]] = Array.from(value);
}

var json_string3 = JSON.stringify(postings);
fs.writeFileSync("JSPostings_List.json", json_string3);