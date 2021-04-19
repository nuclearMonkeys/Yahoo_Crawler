# Derek Morales derekm2@uci.edu

import scrapy
from scrapy.loader import ItemLoader
from YahooCrawler.items import YahoocrawlerItem
from urllib.parse import urljoin

class YahooSpider(scrapy.Spider):
    name = 'Battery'
    allowed_domains = ['answers.yahoo.com']
    start_urls = ['https://answers.yahoo.com/']

    def parse(self, response):
        frontitem = YahoocrawlerItem()
        for question in response.css('div.QuestionCard__questionCard___18EIQ'):
            #itemload = ItemLoader(frontitem = YahoocrawlerItem(), selector = question)
            #itemload.add_css('title', 'a.QuestionCard__title___1DKC-')
            #itemload.add_css('numofanswers', 'span.QuestionInfo__answersCount___1gokz')
            #itemload.add_css('category', 'a.QuestionInfo__category___2kFc4')
            #itemload.add_value('link', urljoin('https://answers.yahoo.com', question.css('a.QuestionCard__title___1DKC-').attrib['href']))

            frontitem['title'] = question.css('a.QuestionCard__title___1DKC-::text').get()
            frontitem['numofanswers'] = question.css('span.QuestionInfo__answersCount___1gokz::text').get()
            frontitem['category'] = question.css('a.QuestionInfo__category___2kFc4::text').get()
            current_link = urljoin('https://answers.yahoo.com', question.css('a.QuestionCard__title___1DKC-').attrib['href'])
            frontitem['link'] = current_link

            yield frontitem

        for category in response.css('li.CategoryNav__item___11rAo'):
            next_page = urljoin('https://answers.yahoo.com', category.css('a').attrib['href'])
            yield response.follow(next_page, callback = self.parse_categories)

    def parse_categories(self, response):
        # For parsing through the individual categories, to retrieve more questions
        item = YahoocrawlerItem()
        for question in response.css('div.QuestionCard__questionCard___18EIQ'):
            item['title'] = question.css('a.QuestionCard__title___1DKC-::text').get()
            item['numofanswers'] = question.css('span.QuestionInfo__answersCount___1gokz::text').get()
            item['category'] = question.css('a.QuestionInfo__category___2kFc4::text').get()
            quest_link = urljoin('https://answers.yahoo.com', question.css('a.QuestionCard__title___1DKC-').attrib['href'])
            item['link'] = quest_link

            yield item

    def parse_answers(self):
        # For parsing through a question's answers
        pass
