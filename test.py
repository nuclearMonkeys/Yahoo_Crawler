import os
import json
import ast # This is for the user of literal eval
# from os import walk

# This script is meant to modify the answers and questions
# js files. This is meant to be modified when we need specific
# changes to the q_id and a_ids. Sections will frequently be
# commented and uncommented

if __name__ == '__main__':
    path = "./js/dictionaries/answers"

    file = open(path + "/answers.js", 'r')

    rows = file.readlines()

    rows.pop(0)
    rows.pop(-1)

    for row in rows:
        print(row)

    # The dictionary between old q_ids/a_ids and the
    # new q_ids_/a_ids

    ########################################################################
    # path = "./js_dictionaries/answers"

    # filename_id_start_to_end = dict()

    # filenames = os.listdir(path)

    # filenames = sorted(filenames, key=lambda x: int(x.partition('_')[2].partition('.')[0]))

    # current_file_index = 1 # This isn't 0 based

    # i = 0

    # for filename in filenames:
    #     file = open(path + "/" + filename, 'r')

    #     rows = file.readlines()

    #     rows.pop(0)
    #     rows.pop(-1)

    #     for row in rows:
    #         id_string = ""
            
    #         for element in row:
    #             if (element == ' '):
    #                 i += 1
    #                 # id_string = id_string[1:]
    #                 filename_id_start_to_end[id_string] = i
    #                 break
    #             else:
    #                 id_string += element

    #             current_file_index += 1

    #     file.close()
    ########################################################################

    # The section that revises the q_ids/a_ids

    ########################################################################
    # revised_file = open("./js_dictionaries/questions/questions.js", 'w')
    # revised_file.write("var questions_dict = {\n")

    # for filename in filenames:
    #     original_file = open(path + "/" + filename, 'r')
    #     rows = original_file.readlines()
    #     rows.pop(0)
    #     rows.pop(-1)
    #     original_file.close()

    #     # print(rows)
        

    #     for row in rows:
    #         id_string = ""

    #         for element in row:
    #             if (element == ' '):
    #                 break
    #             else:
    #                 id_string += element

    #         revised_row = row

    #         # revised_id_string = '"' + id_string + '"'
    #         revised_row = revised_row.replace(id_string, '\t' + str(filename_id_start_to_end[id_string]))

    #         # if (row == rows[-1]):
    #         #     revised_row = revised_row[:-2]

    #         revised_file.write(revised_row)

    # revised_file.write("\n}")

    # revised_file.close()
    ########################################################################

    # Transition to answers
    ########################################################################
    # path = "./js_dictionaries/answers"

    # filenames = os.listdir(path)

    # filenames = sorted(filenames, key=lambda x: int(x.partition('_')[2].partition('.')[0]))

    # revised_file = open(path + "/answers.js", 'w')
    # revised_file.write("var answers_dict = {\n")

    # for filename in filenames:
    #     original_file = open(path + "/" + filename, 'r')
        
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
    #         revised_row += '"' + values[2] + '"],\n'

            # revised_file.write(revised_row)

        # original_file.close()
    
    # revised_file.write("}")