# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
#from scrapy.loader import ItemLoader
#from itemloaders.processors import TakeFirst, MapCompose
#from w3lib.html import remove_tags

class YahoocrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    title = scrapy.Field()
    numofanswers = scrapy.Field()
    category = scrapy.Field()
    link = scrapy.Field()
    upvotes = scrapy.Field()
    user = scrapy.Field()
    userpage = scrapy.Field()
    questiontext = scrapy.Field()
    answers = scrapy.Field()
    
