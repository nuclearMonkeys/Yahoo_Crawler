import json
import SQL_Python_files.database_modifier as dbase
import SQL_Python_files.id_modifier as id
# from id_modifier import _q_id_counter, _a_id_counter, _q_id_marker, _a_id_marker

##################################################################
# This is the main file. Run this will having XAMPP connected to #
# both Apache and MySQL in localhost.                            #
##################################################################

if __name__ == '__main__':
    # json_file = input()
    file_names = ["test_crawl14.json", "test_crawl16.json", "test_crawl17.json"]
    file_list = [open("database_json/" + file, 'r', encoding='utf-8') for file in file_names]

    # check_if_answer_dup(connection, {"a_id": 12179, "q_id": 925, "answer": "I personally loved it...because the person I rode with hates Wild Mouse Rides. XD Best ride EVER. ...Seriously, that was really stupid (well, okay, it was smart, but in a mean way) for them to advertise it as a \"roller coaster\" since it''s a \"wild mouse coaster\". The trick they did with it was that they just called it a \"coaster\", not a \"roller coaster\". That''s where they''re getting everyone. I guess my wait wasn''t SO bad, but it was long and boring. I wasn''t upset however, because the above really did happen. But I was with my family, and not all of them were as fortunate. And DAAAAAMN...were they pi$$ed!!! Worst experience of their lives. Seriously, they''ll probably take it down in like (hopefully) 10 years once it''s run its course. Seriously, it''s such a disappointment to all fans of the series and the park. That was a really stupid move on Six Flags'' part...unless you''re a parent and your child loved it of course. And if the child was scared of his or her mind, then those 10 years might actually come true. XD Oh well. Here''s to hoping that Six Flags gives us a good Free Fall replacement...because that''s the end of Batman & Robin. =\\ ", "user": "MetaWarrior", "u_id": "RTzJhnBSaa", "userpage": "https://answers.yahoo.com/activity/questions?show=RTzJhnBSaa", "likes": "1", "dislikes": "0"})

    # emotes such as =\ makes the MySQL database confused and gives a syntax error

    # with open("test_crawl14.json") as data_file:
    #     data = data_file.read().replace("'", "''")

    # parse file
    # objs = json.loads(data)

    # converting dict_keys into a list is inefficent

    connection = dbase.connect_to_database("localhost", "root", "", "yahoo_answers_archive")

    while (not file_list[-1].closed):
        for data_file in file_list:
            data = data_file.read().replace("'", "''").replace("\\\\", "\\\\ ")
            objs = json.loads(data)

            for obj in objs:
                if id.check_if_question_dup(connection, obj) or id.check_if_answer_dup(connection, obj):
                    print("continue")
                    continue

                if ( next(iter(obj.keys())) == "q_id" and len(dbase.read_query(connection, "SELECT * FROM users WHERE u_id = \"{}\"".format(obj['u_id']))) == 0 ):
                    dbase.insert_user(connection, "'{}'".format(obj['u_id']), "'{}'".format(obj['user'])) 

                if ( next(iter(obj.keys())) == "q_id" and len(dbase.read_query(connection, "SELECT * FROM questions WHERE q_id = \'{}\'".format(obj['q_id']))) == 0 ):
                    print("q_id: {}".format(obj['q_id']))
                    dbase.insert_question(connection, obj['q_id'], \
                        "'{}'".format(obj['title']), \
                        "None" if obj['questiontext'] == "" else "'{}'".format(obj['questiontext']), \
                        "0" if obj['numofanswers'] == None else "'{}'".format(obj['numofanswers'].split()[0]), \
                        "'{}'".format(obj['category']), \
                        "'{}'".format(obj['upvotes']), \
                        "'{}'".format(obj['u_id']), \
                        "'{}'".format(obj['link']) \
                    )
                    id.q_id_increment()

                if ( next(iter(obj.keys())) == "a_id" and len(dbase.read_query(connection, "SELECT * FROM answers WHERE a_id = \"{}\"".format(obj['a_id']))) == 0 ):
                    print("a_id: {}".format(obj['a_id']))
                    dbase.insert_answer(connection, obj['a_id'], \
                        "'{}'".format(obj['answer']), \
                        "'{}'".format(obj['q_id']), \
                        "'{}'".format(obj['u_id']),
                        "{}".format(int(obj['likes']) - int(obj['dislikes']))
                    )
                    id.a_id_increment()
            
            # The next json file will reset to q_id = 1 and a_id = 1
            # id.q_id_marker = id.q_id_counter + 2
            # id.a_id_marker = id.a_id_counter + 2
            
            id.between_json_increment()
            data_file.close()
            print("File closed")

# for obj in objs:
#     print(obj['q_id'])