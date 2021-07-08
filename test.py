import os
import json
# from os import walk

if __name__ == '__main__':
    path = "./js_dictionaries/questions"

    filename_id_start_to_end = dict()

    filenames = os.listdir(path)

    filenames = sorted(filenames, key=lambda x: int(x.partition('_')[2].partition('.')[0]))

    current_file_index = 1 # This isn't 0 based

    i = 0

    for filename in filenames:
        file = open(path + "/" + filename, 'r')

        rows = file.readlines()

        rows.pop(0)
        rows.pop(-1)

        for row in rows:
            id_string = ""
            
            for element in row:
                if (element == ' '):
                    i += 1
                    # id_string = id_string[1:]
                    filename_id_start_to_end[id_string] = i
                    break
                else:
                    id_string += element

                current_file_index += 1

        file.close()
        
    # print(filename_id_start_to_end)

    # for item in filename_id_start_to_end.items():
    #     print(item)
    # print()

    for filename in filenames:
        original_file = open(path + "/" + filename, 'r')
        rows = original_file.readlines()
        rows.pop(0)
        rows.pop(-1)
        original_file.close()

        revised_file = open("./Search_Engine_files/questions_JSON" + "/" + filename[:len(filename)-3] + ".json", 'w')

        # print(rows)
        revised_file.write("{\n")

        for row in rows:
            id_string = ""

            for element in row:
                if (element == ' '):
                    break
                else:
                    id_string += element

            revised_row = row

            revised_id_string = '"' + id_string + '"'
            revised_row = revised_row.replace(id_string, '\t"' + str(filename_id_start_to_end[id_string]) + '"')

            # print(row)
            if (row == rows[-1]):
                # print(revised_row)
                revised_row = revised_row[:-2]
                # print(revised_row)

            revised_file.write(revised_row)

        revised_file.write("\n}")

        revised_file.close()
        # break