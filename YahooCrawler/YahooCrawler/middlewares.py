# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html

from scrapy import signals
from selenium import webdriver
from scrapy.http import HtmlResponse
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait

# useful for handling different item types with a single interface
from itemadapter import is_item, ItemAdapter

class SeleniumDownloaderMiddleware(object):
    # Uses Selenium to scroll down a Yahoo Answers page to get questions (INCOMPLETE)
    def __init__(self):
        self.driver = webdriver.Chrome(executable_path = "C:\\Users\\ROX Tigers DJ\\Documents\\Side Projects\\Yahoo Crawler\\Chrome Driver\\chromedriver.exe")

    def process_request(self, request, spider):
        self.driver.get(request.url)
        questions = self.driver.find_elements_by_css_selector("li.CategoryStreamsList__streamItem___2Jgqs CategoryStreamsList__discoverStreamItem___G2MIg")
        while len(questions) < 80: # Doesn't go past 60 for some reason, not scrolling
            try:
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                WebDriverWait(self.driver, 10).until(lambda driver: new_questions(driver, len(questions)))
                questions = self.driver.find_elements_by_css_selector("li.CategoryStreamsList__streamItem___2Jgqs CategoryStreamsList__discoverStreamItem___G2MIg")
            except TimeoutException:
                break
        body = self.driver.page_source
        return HtmlResponse(self.driver.current_url, body = body, encoding = 'utf-8', request = request)

def new_questions(driver, length):
    return len(driver.find_elements_by_css_selector("li.CategoryStreamsList__streamItem___2Jgqs CategoryStreamsList__discoverStreamItem___G2MIg")) > length

class YahoocrawlerSpiderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the spider middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        # Called for each response that goes through the spider
        # middleware and into the spider.

        # Should return None or raise an exception.
        return None

    def process_spider_output(self, response, result, spider):
        # Called with the results returned from the Spider, after
        # it has processed the response.

        # Must return an iterable of Request, or item objects.
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        # Called when a spider or process_spider_input() method
        # (from other spider middleware) raises an exception.

        # Should return either None or an iterable of Request or item objects.
        pass

    def process_start_requests(self, start_requests, spider):
        # Called with the start requests of the spider, and works
        # similarly to the process_spider_output() method, except
        # that it doesn’t have a response associated.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)


class YahoocrawlerDownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        # Called for each request that goes through the downloader
        # middleware.

        # Must either:
        # - return None: continue processing this request
        # - or return a Response object
        # - or return a Request object
        # - or raise IgnoreRequest: process_exception() methods of
        #   installed downloader middleware will be called
        return None

    def process_response(self, request, response, spider):
        # Called with the response returned from the downloader.

        # Must either;
        # - return a Response object
        # - return a Request object
        # - or raise IgnoreRequest
        return response

    def process_exception(self, request, exception, spider):
        # Called when a download handler or a process_request()
        # (from other downloader middleware) raises an exception.

        # Must either:
        # - return None: continue processing this exception
        # - return a Response object: stops process_exception() chain
        # - return a Request object: stops process_exception() chain
        pass

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)
