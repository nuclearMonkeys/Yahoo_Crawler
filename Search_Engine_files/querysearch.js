// Derek Morales derekm2@uci.edu

var stopWords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
             'v', 'w', 'x', 'y', 'z', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any',
             'are', "aren't", 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but',
             'by', "can't", 'cannot', 'could', "couldn't", 'did', "didn't", 'do', 'does', "doesn't", 'doing', "don't",
             'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', "hadn't", 'has', "hasn't", 'have',
             "haven't", 'having', 'he', "he'd", "he'll", "he's", 'her', 'here', "here's", 'hers', 'herself', 'him',
             'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if', 'in', 'into', 'is', "isn't",
             'it', "it's", 'its', 'itself', "let's", 'me', 'more', 'most', "mustn't", 'my', 'myself', 'no', 'nor',
             'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out',
             'over', 'own', 'same', "shan't", 'she', "she'd", "she'll", "she's", 'should', "shouldn't", 'so', 'some',
             'such', 'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there',
             "there's", 'these', 'they', "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to',
             'too', 'under', 'until', 'up', 'very', 'was', "wasn't", 'we', "we'd", "we'll", "we're", "we've", 'were',
             "weren't", 'what', "what's", 'when', "when's", 'where', "where's", 'which', 'while', 'who', "who's",
             'whom', 'why', "why's", 'with', "won't", 'would', "wouldn't", 'you', "you'd", "you'll", "you're", "you've",
             'your', 'yours', 'yourself', 'yourselves']

function isAlphaNumeric(str) // Code taken from https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript.
{
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

function JSTokenize(text)
{
    var tokenlist = [];
    var splittext = text.split(" ");
    for (var i = 0; i != splittext.length; i++)
    {
        var currenttoken = "";
        var ltoken = splittext[i].toLowerCase();
        for (var x = 0; x < ltoken.length; x++)
        {
            var code = ltoken.charCodeAt(x);
            if ((code > 47 && code < 58) || // numeric (0-9)
                (code > 64 && code < 91) || // upper alpha (A-Z)
                (code > 96 && code < 123)) { // lower alpha (a-z)
                currenttoken += ltoken[x];
            }
            else {
                if (typeof currenttoken != 'string' && !(currenttoken in stopWords))
                {
                    tokenlist.push(currenttoken);
                }
                currenttoken = "";
            }
        }
        if (typeof currenttoken != 'string' && !(currenttoken in stopWords))
        {
            tokenlist.push(currenttoken);
        }
    }
    return tokenlist;
}