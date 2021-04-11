# AUTHOR = Derek Morales (derekm2@uci.edu)
import logging
import re
import requests
from urllib.parse import urlparse
from urllib.parse import urljoin
from collections import deque
from bs4 import BeautifulSoup

logging.basicConfig(format='%(asctime)s (%(name)s) %(levelname)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p',
                        level=logging.INFO)

class Crawler:
    ''' A basic crawler class responsible for scraping urls. Made from scratch and without scrapy for the time being. '''
    def __init__(self, frontier = []):
        self.frontier = frontier # Links that are to be visited
        self.queue = deque() # Purposes of finding crawler traps
        self.visited = list() # Links we have already visited
        self.pattern = re.compile(r'.*?([^\/\&?]{4,})(?:[\/\&\?])(.*?\1){3,}.*')
        # Regular Expression from: https://stackoverflow.com/questions/32821640/regex-matching-unknown-groups-that-repeat
        self.trapactions = {"action=download", "action=edit", "action=login"} # Actions that may be crawler traps
    
    def crawl(self, url):
        html = requests.get(url).text
        for next_link in self.extract_links(url, html):
##            if self.is_valid(next_link):
            if (next_link not in self.frontier) and (next_link not in self.visited):
                self.frontier.append(next_link)

    def extract_links(self, url, html):
        soup = BeautifulSoup(html, "html.parser")
        outputLinks = [a_tag.get('href') for a_tag in soup.find_all('a')]
        outputLinks = [urljoin(url, link) for link in outputLinks]
        return outputLinks

##    def is_valid(self, url):
##        parsed = urlparse(url)
##        self.queue.appendleft(parsed) # History queue
##
##        # Check: URLs without http/https
##        if parsed.scheme not in set(["http", "https"]):
##            return False
##        # Check: repeated directories (TRAP)
##        if re.match(self.pattern, url):
##            return False
##        # Check: queries with trap actions (TRAP)
##        if parsed.query in self.trapactions:
##            return False
##        # Check: URLs with same path and fragments
##        queueList = list(self.queue) 	# Local queue for speed
##        netlocCheck = [q.netloc == parsed.netloc for q in queueList]
##        if all(netlocCheck):            # Check: same URL
##            pathCheck = [q.path == parsed.path for q in queueList]
##            if all(pathCheck):          # Check: same path
##                fragCheck = [not q.fragment == '' for q in queueList]
##                if all(fragCheck):      # Check: has fragments
##                    return False

    def start(self):
        while self.frontier:
            url = self.frontier.pop(0)
            logging.info(f'Currently crawling: {url}')
            try:
                self.crawl(url)
            except Exception:
                logging.exception(f'Failed to crawl: {url}')
            finally:
                self.visited.append(url)

if __name__ == '__main__':
    Crawler(frontier = ['https://crawler-test.com/']).start()
