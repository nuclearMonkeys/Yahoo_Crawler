import re
import extruct
from scrapy.spiders import CrawlSpider, Rule
from w3lib.url import url_query_cleaner
from scrapy.linkextractors import LinkExtractor

def process_links(links):
    for link in links:
        link.url = url_query_cleaner(link.url)
        yield link

class TestCrawler(CrawlSpider):
    name = 'test'
    allowed_domains = ['crawler-test.com']
    start_urls = ['https://crawler-test.com/']
    rules = (Rule(LinkExtractor(
        deny = [
            re.escape('http://crawler-test.com/redirects/'),
            re.escape('http://crawler-test.com/infinite/'),
            re.escape('https://crawler-test.com/redirects/'),
            re.escape('https://crawler-test.com/infinite/'),
            ],
        ), 
        process_links=process_links,
        callback='parse_item',
        follow=True),
    )

    def parse_item(self, response):
        return {
            'url': response.url,
            'metadata': extruct.extract(
                response.text,
                response.url,
                syntaxes=['opengraph', 'json-ld']
            ),
        }