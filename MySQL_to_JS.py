import database_modifier as dbase
import id_modifier as id
import unicodedata
import emoji

def write_questions(filename, questions):
    writer = open(filename, 'w+', encoding='utf-8')
    writer.writelines('var questions_dict = {\n')
    
    # a = "\U0001F600"
    # print(a)
    # writer.writelines(a)

    for question in questions:
        question_string = "\t" + str(question[0]) + " : " + "[" 
        for element in question[1:6]:
            if isinstance(element, str):
                # This ugly, but it prevents errors
                element = element.replace("’", "'").replace("\n", "\\n").replace('"', '\\"')
                question_string += '"' + element + '"' + ", "
            else:
                question_string += str(element) + ", "
        question_string += '"' + question[6] + '"' + "],\n"

        print(question_string)
        writer.writelines(question_string)

    writer.writelines('}')
    
def write_answers(filename, answers):
    writer = open(filename, 'w+', encoding='utf-8')
    writer.writelines('var answers_dict = {\n')

    for answer in answers:
        answer_string = "\t" + str(answer[0]) + " : " + "["
        for element in answer[1:3]:
            if isinstance(element, str):
                # This ugly, but it prevents errors
                element = element.replace("’", "'").replace("\n", "\\n").replace('"', '\\"')
                answer_string += '"' + element + '"' + ", "
            else:
                answer_string += str(element) + ", "
        answer_string += '"' + answer[3] + '"' + "],\n"
        
        print(answer_string)
        writer.writelines(answer_string)

    writer.writelines('}')
    print()

def write_users(filename, users):
    writer = open(filename, 'w+', encoding='utf-8')
    writer.writelines('var users_dict = {\n')

    for user in users:
        user_string = "\t" + '"' + user[0] + '" : "' + user[1].replace('"', '\\"') + '",\n'
        print(user_string)
        writer.writelines(user_string)

    writer.writelines('}')

if __name__ == '__main__':
    connection = dbase.connect_to_database("localhost", "root", "", "yahoo_answers_archive")

    questions = dbase.read_query(connection, "SELECT * FROM questions")
    answers = dbase.read_query(connection, "SELECT * FROM answers")
    users = dbase.read_query(connection, "SELECT * FROM users")

    # write_questions("./js_dictionaries/questions.js", questions)
    # write_answers("./js_dictionaries/answers.js", answers)
    # write_users("./js_dictionaries/users.js", users)