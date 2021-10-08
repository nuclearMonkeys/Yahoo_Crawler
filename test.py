import os
import json
import ast # This is for the user of literal eval


# This script is meant to modify the answers and questions
# js files. This is meant to be modified when we need specific
# changes to the q_id and a_ids. Sections will frequently be
# commented and uncommented

def complex_encode(object):
    # check using isinstance method
    if isinstance(object, complex):
        return [object.real, object.imag]
    # raised error using exception handling if object is not complex
    raise TypeError(repr(object) + " is not JSON serialized")

if __name__ == '__main__':
    pass

    # path = "./js_dictionaries/users"

    # filenames = os.listdir(path)

    # filenames = sorted(filenames, key=lambda x: int(x.partition('_')[2].partition('.')[0]))

    # revised_file = open(path + "/" + "users.js", 'w')
    # revised_file.write("var users_dict = {\n")

    # for filename in filenames:
    #     file = open(path + "/" + filename, 'r')

    #     rows = file.readlines()

    #     rows.pop(0)
    #     rows.pop(-1)

    #     for row in rows:
    #         revised_file.write(row)

    #     file.close()

    # revised_file.write("}\n")
    # revised_file.close()

    # file = open(path + "/users.js", 'w')

    # file.close()

    ######################################################################
    # path = "./js_dictionaries/answers"

    # file = open(path + "/answers.js", 'r', encoding='utf-8')

    # rows = file.readlines()

    # rows.pop(0)
    # rows.pop(-1)

    # q_ids_to_a_ids = dict()

    # for row in rows:
    #     i = 0

    #     for element in row:
    #         i += 1
    #         if element == ":":
    #             i += 1
    #             break
    #     # print(row[i:])
    #     values = ast.literal_eval(row[i:])[0]
        
    #     if values[1] not in q_ids_to_a_ids:
    #         q_ids_to_a_ids[values[1]] = list()
    #     current_q_id = int(row[1:i-2])
    #     q_ids_to_a_ids[values[1]].append(current_q_id)

    #     # print(str(values[1]) +  " " + row[1:i-2])

    # file.close()

    # revised_file = open(path + "/questions_to_answers.js", 'w', encoding='utf-8')

    # revised_file.write("var questions_answers_dict = {\n")

    # print("what")

    # for element in q_ids_to_a_ids.items():
    #     revised_file.write("\t" + str(element[0]) + " : [")
    #     for a_id in element[1][:-1]:
    #         revised_file.write(str(a_id) + ", ")
    #     revised_file.write(str(element[1][-1]) + "],\n")

    # revised_file.write("}")

    # revised_file.close()
    # print(rows)

    # The dictionary between old q_ids/a_ids and the
    # new q_ids_/a_ids

    ########################################################################
    # path = "./js_dictionaries/questions"

    # filename_id_start_to_end = dict()

    # # filenames = os.listdir(path)

    # # filenames = sorted(filenames, key=lambda x: int(x.partition('_')[2].partition('.')[0]))

    # current_file_index = 1 # This isn't 0 based

    # i = 0

    # file = open("./js_dictionaries/questions.js", 'r', encoding='utf-8')

    # rows = file.readlines()

    # rows.pop(0)
    # rows.pop(-1)

    # for row in rows:
    #     id_string = ""
        
    #     for element in row:
    #         if (element == ' '):
    #             i += 1
    #             # id_string = id_string[1:]
    #             filename_id_start_to_end[id_string] = i
    #             # print(id_string)
    #             break
    #         else:
    #             id_string += element

    #         current_file_index += 1

    #     # print(row)

    # file.close()
    ########################################################################

    # The section that revises the q_ids/a_ids

    ########################################################################
    revised_file = open("./js_dictionaries/answers/answers.json", 'w', encoding='utf-8')

    original_file = open("./js_dictionaries/answers/answers.js", 'r', encoding='utf-8')

    rows = original_file.readlines()

    rows.pop(0)
    rows.pop(-1)

    original_file.close()

    # print(rows)


    for row in rows:
        
        id_string = ""
        i = 0

        for element in row:
            i += 1
            if element == ":":
                i += 1
                break

        id_string = row[:i-3]

        values = ast.literal_eval(row[i:])[0]
        values[0] = values[0].replace("’", "'").replace("\n", "\\n").replace('"', '\\"')

        revised_row = "{"

        # questions
        # revised_row += '"qId": {}, '.format(id_string.lstrip())
        # revised_row += '"questionTitle": "{}", '.format(values[0])
        # revised_row += '"questionText": "{}", '.format(values[1])
        # revised_row += '"numOfAnswers": {}, '.format(values[2])
        # revised_row += '"category": "{}", '.format(values[3])
        # revised_row += '"numOfLikes": {}, '.format(values[4])
        # revised_row += '"uId": "{}"'.format(values[5])

        # answers
        revised_row += '"aId": {}, '.format(id_string.lstrip())
        revised_row += '"answer": "{}", '.format(values[0])
        revised_row += '"qId": {}, '.format(values[1])
        revised_row += '"uId": "{}", '.format(values[2])
        revised_row += '"numOfAns": {}'.format(values[3])

        # user
        # revised_row += '"uId": {}, '.format(id_string.lstrip())
        # revised_row += '"username": "{}"'.format(row[i+1:-3])

        # questions_to_answers
        # revised_row += '"qId": {}, '.format(id_string.lstrip())
        # revised_row += '"listOfAns": {}'.format(row[i:-2])

        # revisedIdString = '"' + id_string + '"'
        # revised_row = revised_row.replace(id_string, '\t' + str(filename_id_start_to_end[id_string]))

        # if (row == rows[-1]):
        #     revised_row = revised_row[:-2]

        revised_row += "}\n"

        revised_file.write(revised_row)

    revised_file.close()
    #######################################################################

    # Transition to answers
    ########################################################################
    # path = "./js_dictionaries/answers"

    # filenames = os.listdir(path)

    # filenames = sorted(filenames, key=lambda x: int(x.partition('_')[2].partition('.')[0]))

    # revised_file = open(path + "/answers.js", 'w', encoding='utf-8')
    # revised_file.write("var answers_dict = {\n")

    # for filename in filenames:
    #     original_file = open(path + "/" + filename, 'r', encoding='utf-8')
        
    #     rows = original_file.readlines()

    #     rows.pop(0)
    #     rows.pop(-1)

    #     for row in rows:
    #         i = 0

    #         for element in row:
    #             i += 1
    #             if element == ":":
    #                 i += 1
    #                 break
    #         values = ast.literal_eval(row[i:])[0]
    #         values[0] = values[0].replace("’", "'").replace("\n", "\\n").replace('"', '\\"')
    #         values[1] = filename_id_start_to_end["\t"+ str(values[1])]

    #         revised_row = row[:i]
    #         revised_row += '["' + values[0] + '", '
    #         revised_row += str(values[1]) + ', '
    #         revised_row += '"' + values[2] + '", '
    #         revised_row += str(values[3]) + '],\n'

    #         revised_file.write(revised_row)

    #     original_file.close()
    
    # revised_file.write("}")

    #######################################################################
    # path = "./js_dictionaries/questions"

    # file = open(path + "/questions.js", 'r')

    # rows = file.readlines()

    # rows.pop(0)
    # rows.pop(-1)

    # revised_file = open(path + "/questions_0.js", 'w')

    # revised_file.write("var questions_dict = {\n")

    # for row in rows:
    #     i = 0

    #     for element in row:
    #         i += 1
    #         if element == ":":
    #             i += 1
    #             break

    #     try:
    #         values = ast.literal_eval(row[i:])[0]
    #         values[0].replace("’", "'").replace("\n", "\\n").replace('"', '\"')
    #         if values[1] == None:
    #             values[1] = "None"

    #         revised_file.write(row[:i])
    #         revised_file.write("[")
    #         for value in values[:-1]:
    #             if type(value) == str:
    #                 revised_file.write('"' + str(value) + '\", ')
    #             else:
    #                 revised_file.write(str(value) + ", ")
    #         revised_file.write('"' + values[-1] + '"],\n')
    #         # revised_file.write(row[:i] + json.dumps(values, default = 'utf-8') + ",\n")
    #         # print(repr(json.dumps(values, default = complex_encode) + ",\n"))

    #     except:
    #         print("err")

    

    # revised_file.write("}")

    # file.close()
    # revised_file.close()