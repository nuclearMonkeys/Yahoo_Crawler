from contextlib import ExitStack

filenames = ["test_crawl14.json", "test_crawl16.json", "test_crawl17.json"]

with ExitStack() as stack:
    files = [
        stack.enter_context(open(filename))
        for filename in filenames
    ]

    print(files[0].closed)

    files[0].close()
    files[1].close()

    print(files[2].closed)

    files[2].close()

    print(files[2].closed)