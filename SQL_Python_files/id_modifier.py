# id_modifier.py

# Created by: Lyndon de la Torre

import json
import SQL_Python_files.database_modifier as dbase

####################################################################
# The purpose of this script is to check for duplicate questions   #
# and answers from multiple json files. It also modifies the q_ids #
# and a_ids if they aren't duplicates.                             #
####################################################################

# These variables aren't really nessessary as you can just
# increment _q_id_marker & _a_id_marker
_q_id_counter = 0
_a_id_counter = 0

# The purpose of these markers is to correctly iden
_q_id_marker = 0
_a_id_marker = 0

def q_id_increment():
    global _q_id_counter
    _q_id_counter += 1

def a_id_increment():
    global _a_id_counter
    _a_id_counter += 1

def between_json_increment():
    global _q_id_marker
    global _a_id_marker
    _q_id_marker = _q_id_counter
    _a_id_marker = _a_id_counter
    

def check_if_question_dup(connection, current_dict):
    # if the first element in the dict is not q_id
    if ( next(iter(current_dict.keys())) != "q_id" ) :
        return

    query = dbase.read_query(connection, "SELECT * FROM questions WHERE title = \'{}\' AND link = \'{}\'".format(current_dict['title'], current_dict['link']))
    # query = dbase.read_query(connection, "SELECT * FROM questions WHERE title = \'{}\'".format(current_dict['title']))

    # check if the title and link are already in the database
    # if it is, reject it and stop the function
    if query == None or len(query) != 0:
        return True

    current_dict["q_id"] = str(_q_id_marker + current_dict["q_id"])
    return False


def check_if_answer_dup(connection, current_dict):
    '''
    This finds out whether or not the answer already exists by searching
    in the database. If so, stop the function. Else modify the a_id AND
    the corresponding q_id with the q_id_marker
    '''
    if ( next(iter(current_dict.keys())) != "a_id" ) :
        return

    # is the q_id, answer, and u_id the same?
    # (This is the best thing to uniquely identify answers without a_id)
    # question_query = dbase.read_query(connection, "SELECT * FROM questions WHERE q_id = \'{}\'"\
    #     .format(_q_id_counter - int(current_dict['q_id'] + 1)))

    # Find the "true" q_id using q_id + _q_id_marker
    current_dict["q_id"] = _q_id_marker + current_dict["q_id"]

    # if you can't find the q_id, then it was probably
    # skipped since it was a duplicate
    question_query = dbase.read_query(connection, "SELECT * FROM questions WHERE q_id = \'{}\'".format(current_dict['q_id']))

    if len(question_query) == 0:
        return True

    query = dbase.read_query(connection, "SELECT * FROM answers WHERE q_id = \'{}\' AND description = \'{}\' AND u_id = \'{}\'"\
        .format(current_dict['q_id'], current_dict['answer'], current_dict['u_id']))

    # Check to see if the answer already exists
    if query == None or len(query) != 0:
        return True

    current_dict["a_id"] = str(_a_id_marker + current_dict["a_id"])
    return False
    
# For testing purposes
if __name__ == '__main__':
    connection = dbase.connect_to_database("localhost", "root", "", "yahoo_answers_archive")

    file_names = ["test_crawl14.json", "test_crawl16.json", "test_crawl17.json"]
    file_list = [open(file) for file in file_names]

    # check_if_answer_dup(connection, {"a_id": 12179, "q_id": 925, "answer": "I personally loved it...because the person I rode with hates Wild Mouse Rides. XD Best ride EVER. ...Seriously, that was really stupid (well, okay, it was smart, but in a mean way) for them to advertise it as a \"roller coaster\" since it''s a \"wild mouse coaster\". The trick they did with it was that they just called it a \"coaster\", not a \"roller coaster\". That''s where they''re getting everyone. I guess my wait wasn''t SO bad, but it was long and boring. I wasn''t upset however, because the above really did happen. But I was with my family, and not all of them were as fortunate. And DAAAAAMN...were they pi$$ed!!! Worst experience of their lives. Seriously, they''ll probably take it down in like (hopefully) 10 years once it''s run its course. Seriously, it''s such a disappointment to all fans of the series and the park. That was a really stupid move on Six Flags'' part...unless you''re a parent and your child loved it of course. And if the child was scared of his or her mind, then those 10 years might actually come true. XD Oh well. Here''s to hoping that Six Flags gives us a good Free Fall replacement...because that''s the end of Batman & Robin. =\\ ", "user": "MetaWarrior", "u_id": "RTzJhnBSaa", "userpage": "https://answers.yahoo.com/activity/questions?show=RTzJhnBSaa", "likes": "1", "dislikes": "0"})

    # emotes such as =\ makes the MySQL database confused and gives a syntax error

    while (not file_list[-1].closed):
        for data_file in file_list:
            data = data_file.read().replace("'", "''").replace("\\\\", "\\\\ ")
            objs = json.loads(data)
            
            for obj in objs:
                check_if_question_dup(connection, obj)
                check_if_answer_dup(connection, obj)

            data_file.close()
            between_json_increment()
            print("File closed")

    
    connection.close()
