# Derek Morales derekm2@uci.edu

import scrapy
import json
#from scrapy.loader import ItemLoader
from YahooCrawler.items import QuestionItem
from YahooCrawler.items import AnswerItem
from urllib.parse import urljoin

class YahooSpider(scrapy.Spider):
    name = 'Battery'
    allowed_domains = ['answers.yahoo.com']
    start_urls = ['https://answers.yahoo.com/']
    current_qid = 0
    current_aid = 0

    def parse(self, response):
        frontitem = QuestionItem() # For questions
        frontanswers = AnswerItem()
        for question in response.css('li.CategoryStreamsList__streamItem___2Jgqs.CategoryStreamsList__discoverStreamItem___G2MIg'):
            current_link = urljoin('https://answers.yahoo.com', question.css('a.QuestionCard__title___1DKC-').attrib['href'])
            params = [question.css('a.QuestionCard__title___1DKC-::text').get(), question.css('span.QuestionInfo__answersCount___1gokz::text').get(), question.css('div::text').get(), current_link]
            # Title, numofanswers, link, upvotes
            yield response.follow(current_link, callback = self.parse_answers, meta = {'questitem': frontitem, 'ansitem': frontanswers, 'params': params})

        #for category in response.css('li.CategoryNav__item___11rAo'):
            #next_page = urljoin('https://answers.yahoo.com', category.css('a').attrib['href'])
            #yield response.follow(next_page, callback = self.parse_categories)

    def parse_categories(self, response):
        # For parsing through the individual categories, to retrieve more questions
        item = QuestionItem()
        for question in response.css('div.QuestionCard__questionCard___18EIQ'):
            item['title'] = question.css('a.QuestionCard__title___1DKC-::text').get()
            item['numofanswers'] = question.css('span.QuestionInfo__answersCount___1gokz::text').get()
            quest_link = urljoin('https://answers.yahoo.com', question.css('a.QuestionCard__title___1DKC-').attrib['href'])
            item['link'] = quest_link
            yield response.follow(quest_link, callback = self.parse_answers, meta={'olditem': item})
            yield item

    def parse_subcategories(self, response):
        # For parsing through the subcategories of individual categories    
        pass

    def parse_answers(self, response):
        # For parsing through a question's answers
        questitem = response.meta.get('questitem')
        ansitem = response.meta.get('ansitem')
        params = response.meta.get('params')

        self.current_qid += 1
        qcurrent = self.current_qid
        questitem['q_id'] = qcurrent
        questitem['title'] = params[0]
        questitem['numofanswers'] = params[1]
        questitem['upvotes'] = params[2]
        questitem['link'] = params[3]
        questitem['user'] = response.css('a.UserProfile__userName___1d1RW::text').get()
        try:
            page = response.css('a.UserProfile__userName___1d1RW').attrib['href']
            questitem['u_id'] = page[25:]
            userlink = urljoin('https://answers.yahoo.com', page)
            questitem['userpage'] = userlink
        except:
            questitem['userpage'] = None
        questitem['questiontext'] = response.css('div.ExpandableContent__content___2Iw4v::text').get()
        questitem['category'] = response.xpath('/html/body/div/div[1]/div/div/main/div/div[3]/div[1]/div[1]/div/div[2]/div/a[2]/text()').get()
        yield questitem
        for answer in response.css('div.Answer__answer___FdhNY'):
            self.current_aid += 1
            acurrent = self.current_aid
            ansitem['a_id'] = acurrent
            ansitem['q_id'] = qcurrent
            fullanswer = answer.css('div.ExpandableContent__content___2Iw4v').css('p::text').getall()
            ansitem['answer'] = ' '.join(fullanswer)
            ansitem['user'] = answer.css('a.UserProfile__userName___1d1RW::text').get()
            try:
                upage = answer.css('a.UserProfile__userName___1d1RW').attrib['href']
                ansitem['u_id'] = upage[25:]
                ansitem['userpage'] = urljoin('https://answers.yahoo.com', upage)
            except:
                ansitem['u_id'] = None
                ansitem['userpage'] = None
            buttons = answer.css('button.Buttons__linkBtn___1gAIw.Buttons__btnBase___2Z659.Buttons__withIcon___3aIam')
            ansitem['likes'] = buttons[0].css('span::text').get()
            ansitem['dislikes'] = buttons[1].css('span::text').get()
            yield ansitem
