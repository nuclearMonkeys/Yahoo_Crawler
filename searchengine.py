# Derek Morales derekm2@uci.edu

import json
import math
from wordfreq import tokenizeAndLemmatize

class Yahoo_Search:
    # The main class used for searching questions.
    def __init__(self):
        with open("word_frequency2.json", encoding = 'utf-8', errors = 'ignore') as word_frequency:
            self.word_freq = json.loads(word_frequency.read())
        with open("Yahoo_postingslist.json", encoding = 'utf-8', errors = 'ignore') as postings_list:
            self.post_list = json.loads(postings_list.read())
    
    def _tfidfListCreate(self, query):
        # Calculating the tf and idf for a query, in the form of a list.
        tfidfList = list()
        newquery = list()
        visited_terms = set()
        for term in query:
            if term not in visited_terms:
                visited_terms.add(term)
                newquery.append(term)
                tf = 1 + math.log(query.count(term)) # Calculation of the term frequency for the query.
                idf = 1 # IDF stays at 1 since its the query.
                tfidfList.append(tf * idf)
        return newquery, tfidfList

    def _MainSearch(self, query):
        # Main function used to take a query from the user and search through the crawled
        # data for all matching questions or questions with those terms. Requires wordfreq.py
        # to be run first.
        current_query = tokenizeAndLemmatize(query)
        cquery_len = len(query)
        if cquery_len <= 0:
            return []

if __name__ == "__main__":
    search = Yahoo_Search()
    query = input("Enter your search query: ")
    questions = search._MainSearch(query)
    for q in questions:
        print(q)