# Derek Morales derekm2@uci.edu

import nltk
from nltk.corpus import wordnet
from nltk.stem import WordNetLemmatizer
import math
import json

# Words that will not be included in the word frequency list.
stopWords = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
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
             'your', 'yours', 'yourself', 'yourselves'}

# DICT FORMAT: {question_title, number of answers, category, upvotes, u_id, link}
# For REFERENCE

def tokenize(souptext):
    # Used to convert a string into a list of tokens.
    token_list = list()
    data = souptext.split()
    for word in data:
        l_token = word.lower()
        current_token = str()
        for character in l_token:
            if (ord(character) in range(97, 123)):
                current_token += character
            else:
                if current_token != str() and current_token not in stopWords:
                    token_list.append(current_token)
                current_token = str()
        if current_token != str() and current_token not in stopWords:
            token_list.append(current_token)
    return token_list

def get_wordnet_pos(word):
    # Map POS tag to first character lemmatize() accepts (method from https://www.machinelearningplus.com/nlp/lemmatization-examples-python/)
    tag = nltk.pos_tag([word])[0][1][0].upper()  # Accepts a list of word(s) and gets the part of speech of a word.
    tag_dict = {"J": wordnet.ADJ,
                "N": wordnet.NOUN,
                "V": wordnet.VERB,
                "R": wordnet.ADV}  # Dictionary used to convert nltk pos tags into wordnet pos tags.

    return tag_dict.get(tag, wordnet.NOUN)  # Returns the appropriate pos tag from wordnet.


WordNet = WordNetLemmatizer()
def tokenizeAndLemmatize(text):
    # Return a list of lemmatized tokens for search engine purposes later.
    # Get a list of all the tokens in the text.
    tokenList = tokenize(text)
    # Lemmatize every token in the token list using WordNet and add it to the lemmalist in reverse order,
    # while excluding lemmatized tokens of length 1
    lemmaList = list()
    for tokenIndex in range(len(tokenList) - 1, -1, -1):
        ogToken = tokenList.pop(tokenIndex)
        token = WordNet.lemmatize(ogToken, get_wordnet_pos(ogToken))
        if len(token) > 1:
            lemmaList.append(token)
    # Reverse the lemmatized tokens list back to the original token list order
    lemmaList.reverse()
    return lemmaList

def check_if_question(entry):
    # Checking if an entry in the json file is a question or not. OBSOLETE
    if "a_id" in entry:
        return False
    return True

def json_reading_freq(word_frequency):
    # Reading the json files with the crawl information for the purposes of
    # compiling word frequency for each question and answer.
    with open("yahoo_questions.json", encoding='utf-8', errors='ignore') as crawl_data:
        YahooObject = json.loads(crawl_data.read())
        for entries in YahooObject:
            q_info = YahooObject.get(entries)
            q_title = q_info[0]
            try:
                print(q_title)
            except:
                continue
            token_list = tokenizeAndLemmatize(q_title) # [entries, dict()]
            indiv_q = dict()
            for word in token_list:
                if indiv_q.get(word) != None:
                    indiv_q[word] += 1
                else:
                    indiv_q[word] = 1
            word_frequency[entries] = indiv_q

def json_reading_post(crawl_dict):
    # Reading the json files with the crawl information for the purposes of
    # creating a postings list for easier access to a certain question with
    # a specific word. In theory, should make searches easier.
    temp_dict = dict()
    with open("yahoo_questions.json", encoding='utf-8', errors='ignore') as crawl_data2:
        YahooObject2 = json.loads(crawl_data2.read())
        for entries in YahooObject2:
            q_info2 = YahooObject2.get(entries)
            q_title2 = q_info2[0]
            try:
                print(q_title2)
            except:
                continue
            token_list2 = tokenizeAndLemmatize(q_title2)
            quest_id = entries
            for word in token_list2:
                if temp_dict.get(word) != None:
                    temp_dict[word].add(quest_id)
                else:
                    temp_dict[word] = {quest_id}
    
    for key in sorted(temp_dict):
        crawl_dict[key] = list(temp_dict[key])

def tf_idf(json_file, word_freq, postings):
    # Compiles the term frequency and the inverse document frequency for each
    # word, then multiples the two values. Writes a new file.
    # SCRAPPED
    term_freq = list()
    quest_count = len(word_freq)
    for d in word_freq:
        current_doc = [d[0]]
        word_dict = d[1]
        numofwords = len(word_dict.keys())
        doc_dict = dict()
        for word, value in word_dict.items():
            tf = value/float(numofwords)
            doc_dict[word] = tf
        current_doc.append(doc_dict)
        term_freq.append(current_doc)
    
    inverse_freq = dict()
    for w, v in postings.items():
        current_word = w
        idf = math.log(quest_count/len(v))
        inverse_freq[w] = idf

if __name__ == "__main__":
    # crawl_test = ["test_crawl15.json", "test_crawl16.json", "test_crawl17.json"]
    crawl_dict1 = dict()
    crawl_dict2 = dict()
    with open("word_frequency.json", "w") as outfile:
        json_reading_freq(crawl_dict1)
        json_list = json.dumps(crawl_dict1)
        outfile.write(json_list)
    with open("Yahoo_postingslist.json", "w") as outfile2:
        json_reading_post(crawl_dict2)
        json_dict = json.dumps(crawl_dict2)
        outfile2.write(json_dict)
    #with open("YahooBlock.json", "w") as outfile3:
    #    tf_idf(outfile3, crawl_list, crawl_dict)

