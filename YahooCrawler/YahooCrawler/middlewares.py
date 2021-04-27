# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html

import time
from scrapy import signals
from selenium import webdriver
from scrapy.http import HtmlResponse
from selenium.webdriver.common.by import By
#from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

# useful for handling different item types with a single interface
from itemadapter import is_item, ItemAdapter

class SeleniumDownloaderMiddleware(object):
    # Uses Selenium to scroll down a Yahoo Answers page to get questions (INCOMPLETE)
    def __init__(self):
        self.driver = webdriver.Chrome(executable_path = "C:\\Users\\ROX Tigers DJ\\Documents\\Side Projects\\Yahoo Crawler\\Chrome Driver\\chromedriver.exe")

    def process_request(self, request, spider):
        self.driver.get(request.url)
        WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[2]/div[2]/div[3]/button[2]"))).click()
        #self.driver.find_element_by_css_selector('button.Buttons__primaryBtn___3eT1h Buttons__roundBtnBase___Q8yuU Buttons__btnBase___2Z659 Modal__alertActionBtn___1TrvT').click()
        last_height = self.driver.execute_script("return document.body.scrollHeight")
        new_height = None
        reached_page_end = False
        while not reached_page_end: 
            self.driver.find_element_by_xpath('//body').send_keys(Keys.END)
            time.sleep(3)
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if last_height == new_height:
                reached_page_end = True
            else:
                last_height = new_height
        body = self.driver.page_source
        return HtmlResponse(self.driver.current_url, body = body, encoding = 'utf-8', request = request)

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
