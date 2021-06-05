# Derek Morales derekm2@uci.edu

import json
import math
from wordfreq import tokenizeAndLemmatize

class Yahoo_Search:
    # The main class used for searching questions.
    def __init__(self):
        with open("word_frequency.json", encoding = 'utf-8', errors = 'ignore') as word_frequency:
            self.word_freq = json.loads(word_frequency.read())
        with open("Yahoo_postingslist.json", encoding = 'utf-8', errors = 'ignore') as postings_list:
            self.post_list = json.loads(postings_list.read())
        with open("yahoo_questions.json", encoding = 'utf-8', errors = 'ignore') as questions:
            self.questions = json.loads(questions.read())
    
    def _tfidfListCreate(self, query):
        # Calculating the tf and idf for a query, in the form of a list. SCRAPPED
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
        cquery_len = len(current_query)
        if cquery_len <= 0:
            return []
        question_list = list()
        if len(current_query) == 1:
            qs = self.post_list.get(current_query[0])
            for qid in qs:
                words = self.word_freq.get(qid)
                question_dict = {"qid": qid}
                query_num = words.get(current_query[0])
                question_dict[current_query[0]] = query_num
                question_list.append(question_dict)
            questions = sorted(question_list, key = lambda x: list(x.items())[1], reverse = True)
            final_questions = list()
            for q in list(questions):
                current_qid = q.get("qid")
                final_questions.append(self.questions.get(current_qid)[0])
            return final_questions
        else:
            q_list = list()
            for chara in current_query:
                q_list += self.post_list[chara]
            for entry in self.word_freq:
                for qid in q_list:
                    if entry[0] == qid:
                        question_dict = {"qid": qid}
                        for chara2 in current_query:
                            if chara2 in entry[1].keys():
                                query_num = entry[1][chara2]
                                question_dict[chara2] = query_num
                            else:
                                question_dict[chara2] = 0
                        question_list.append(question_dict)

if __name__ == "__main__":
    search = Yahoo_Search()
    query = input("Enter your search query: ")
    questions = search._MainSearch(query)
    for q in questions:
        print(q)
