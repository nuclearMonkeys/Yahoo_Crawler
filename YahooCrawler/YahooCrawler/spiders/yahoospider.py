# Derek Morales derekm2@uci.edu

import scrapy
import json
#from scrapy.loader import ItemLoader
from YahooCrawler.items import YahoocrawlerItem
from urllib.parse import urljoin

class YahooSpider(scrapy.Spider):
    name = 'Battery'
    allowed_domains = ['answers.yahoo.com']
    start_urls = ['https://answers.yahoo.com/']

    def parse(self, response):
        frontitem = YahoocrawlerItem()
        for question in response.css('li.CategoryStreamsList__streamItem___2Jgqs.CategoryStreamsList__discoverStreamItem___G2MIg'):
            current_link = urljoin('https://answers.yahoo.com', question.css('a.QuestionCard__title___1DKC-').attrib['href'])
            params = [question.css('a.QuestionCard__title___1DKC-::text').get(), question.css('span.QuestionInfo__answersCount___1gokz::text').get(), question.css('div::text').get(), current_link]
            # Title, numofanswers, link, upvotes
            yield response.follow(current_link, callback = self.parse_answers, meta = {'olditem': frontitem, 'params': params})

        #for category in response.css('li.CategoryNav__item___11rAo'):
            #next_page = urljoin('https://answers.yahoo.com', category.css('a').attrib['href'])
            #yield response.follow(next_page, callback = self.parse_categories)

    def parse_categories(self, response):
        # For parsing through the individual categories, to retrieve more questions
        item = YahoocrawlerItem()
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
        olditem = response.meta.get('olditem')
        params = response.meta.get('params')
        olditem['title'] = params[0]
        olditem['numofanswers'] = params[1]
        olditem['upvotes'] = params[2]
        olditem['link'] = params[3]
        olditem['user'] = response.xpath('/html/body/div/div[1]/div/div/main/div/div[3]/div[1]/div[1]/div/div[1]/div[2]/a/text()').get()
        userlink = urljoin('https://answers.yahoo.com', response.xpath('/html/body/div/div[1]/div/div/main/div/div[3]/div[1]/div[1]/div/div[1]/div[2]/a/@href'))
        olditem['userpage'] = userlink
        olditem['questiontext'] = response.xpath('/html/body/div/div[1]/div/div/main/div/div[3]/div[1]/div[2]/div/p/text()').get()
        olditem['category'] = response.xpath('/html/body/div/div[1]/div/div/main/div/div[3]/div[1]/div[1]/div/div[2]/div/a[2]/text()').get()
        all_answers = list()
        for answer in response.css('ul.AnswersList__answersList___2ikkB'):
            user = dict()
            fullanswer = answer.css('p::text').getall()
            user['answer'] = ' '.join(fullanswer)
            user['user'] = answer.css('a.UserProfile__userName___1d1RW::text')
            user['userpage'] = urljoin('https://answers.yahoo.com', answer.css('a.UserProfile__userName___1d1RW').attrib['href'])
            user['likes'] = 
            user['dislikes'] =
            all_answers.append(user)
        yield olditem
