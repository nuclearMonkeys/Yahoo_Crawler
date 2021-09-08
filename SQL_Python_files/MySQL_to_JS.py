import SQL_Python_files.database_modifier as dbase
import SQL_Python_files.id_modifier as id

# These write functions will have redundant code
# I needed a quick fix and copy and pasting code
# is more time efficent short term
# NOTE: Fix this with a generic function

def write_questions(filename, questions):
    current_file_index = 0
    questions_per_file = 50

    # while there's still stuff on the questions list
    while(len(questions) > 0):
        writer = open(filename + "_" + str(current_file_index) + ".js", 'w+', encoding='utf-8')
        current_questions = questions[:questions_per_file]

        question_string = "var questions_dict = {\n"

        for question in current_questions:
            question_string += "\t" + str(question[0]) + " : " + "[" 
            for element in question[1:6]:
                if isinstance(element, str):
                    # This ugly, but it prevents errors
                    element = element.replace("’", "'").replace("\n", "\\n").replace('"', '\\"')
                    question_string += '"' + element + '"' + ", "
                else:
                    question_string += str(element) + ", "
            question_string += '"' + question[6] + '"' + "],\n"

        current_file_index += 1

        writer.writelines(question_string + '}')
        writer.close()

        try:
            
            questions = questions[questions_per_file:]
        except IndexError:
            questions = list()
    
def write_answers(filename, answers):
    current_file_index = 0
    answers_per_file = 50

    # while there's still stuff on the questions list
    while(len(answers) > 0):
        writer = open(filename + "_" + str(current_file_index) + ".js", 'w+', encoding='utf-8')
        current_answers = answers[:answers_per_file]

        answer_string = "var answers_dict = {\n"

        for answer in current_answers:
            answer_string += "\t" + str(answer[0]) + " : " + "["
            for element in answer[1:4]:
                if isinstance(element, str):
                    element = element.replace("’", "'").replace("\n", "\\n").replace('"', '\\"')
                    answer_string += '"' + element + '"' + ", "
                else:
                    answer_string += str(element) + ", "
            answer_string += str(answer[4]) + "],\n"

        current_file_index += 1

        writer.writelines(answer_string + '}')
        writer.close()

        try:
            answers = answers[answers_per_file:]
        except IndexError:
            answers = list()
        

def write_users(filename, users):
    current_file_index = 0
    users_per_file = 50

    while(len(users) > 0):
        writer = open(filename + "_" + str(current_file_index) + ".js", 'w+', encoding='utf-8')
        current_users = users[:users_per_file]

        user_string = "var users_dict = {\n"

        for user in current_users:
            user_string += "\t" + '"' + user[0] + '" : "' + user[1].replace('"', '\\"') + '",\n'
        
        current_file_index += 1

        writer.writelines(user_string + '}')
        writer.close()

        try:
            users = users[users_per_file:]
        except IndexError:
            users = list()

if __name__ == '__main__':
    connection = dbase.connect_to_database("localhost", "root", "", "yahoo_answers_archive")

    questions = dbase.read_query(connection, "SELECT * FROM questions")
    answers = dbase.read_query(connection, "SELECT * FROM answers")
    users = dbase.read_query(connection, "SELECT * FROM users")

    write_questions("./js_dictionaries/questions/questions", questions)
    write_answers("./js_dictionaries/answers/answers", answers)
    write_users("./js_dictionaries/users/users", users)