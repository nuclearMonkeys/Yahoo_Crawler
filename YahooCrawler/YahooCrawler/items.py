# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
#from scrapy.loader import ItemLoader
#from itemloaders.processors import TakeFirst, MapCompose
#from w3lib.html import remove_tags

class QuestionItem(scrapy.Item):
    # define the fields for your item here like:
    q_id = scrapy.Field()
    title = scrapy.Field()
    numofanswers = scrapy.Field()
    category = scrapy.Field()
    link = scrapy.Field()
    upvotes = scrapy.Field()
    user = scrapy.Field()
    u_id = scrapy.Field()
    userpage = scrapy.Field()
    questiontext = scrapy.Field()
    
class AnswerItem(scrapy.Item):
    a_id = scrapy.Field()
    answer = scrapy.Field()
    user = scrapy.Field()
    u_id = scrapy.Field()
    userpage = scrapy.Field()
    likes = scrapy.Field()
    dislikes = scrapy.Field()
    q_id = scrapy.Field()
    
