from collections import OrderedDict
import json
import database_modifier as dbase

if __name__ == '__main__':
    # json_file = input()
     
    with open("test_crawl14.json") as data_file:
        data = data_file.read().replace("'", "''")

    # parse file
    objs = json.loads(data)

    # converting dict_keys into a list is inefficent

    connection = dbase.connect_to_database("localhost", "root", "", "yahoo_answers_archive")

    for obj in objs:
        if ( next(iter(obj.keys())) == "q_id" and len(dbase.read_query(connection, "SELECT * FROM users WHERE u_id = \"{}\"".format(obj['u_id']))) == 0 ):
            dbase.insert_user(connection, "'{}'".format(obj['u_id']), "'{}'".format(obj['user'])) 

        if ( next(iter(obj.keys())) == "q_id" and len(dbase.read_query(connection, "SELECT * FROM questions WHERE q_id = \"{}\"".format(obj['q_id']))) == 0 ):
            dbase.insert_question(connection, obj['q_id'], \
                "'{}'".format(obj['title']), \
                "0" if obj['numofanswers'] == None else "'{}'".format(obj['numofanswers'].split()[0]), \
                "'{}'".format(obj['category']), \
                "'{}'".format(obj['upvotes']), \
                "'{}'".format(obj['u_id'])\
            )

        if ( next(iter(obj.keys())) == "a_id" and len(dbase.read_query(connection, "SELECT * FROM answers WHERE a_id = \"{}\"".format(obj['a_id']))) == 0 ):
            dbase.insert_answer(connection, obj['a_id'], \
                "'{}'".format(obj['answer']), \
                "'{}'".format(obj['q_id']), \
                "'{}'".format(obj['u_id'])
            )

# for obj in objs:
#     print(obj['q_id'])