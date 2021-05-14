import mysql.connector

def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
    except Exception as err:
        print(f"Error: '{err}")

# This is mainly for MySQL
def connect_to_database(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("MySQL Database connection successful")
    except Exception as err:
        print(f"Error: '{err}'")

    return connection

def insert_user(connection, u_id, username):
    insert_statement = """
    INSERT INTO users VALUES\n
    """
    insert_statement += "({}, {})\n".format(u_id, username)
    
    execute_query(connection, insert_statement)
    
    connection.commit()

def insert_question(connection, q_id, title, num_of_answers, category, rating, u_id):
    insert_statement = """
    INSERT INTO questions VALUES\n
    """
    insert_statement += "({}, {}, {}, {}, {}, {})\n".format(q_id, title, num_of_answers, category, rating, u_id)
    execute_query(connection, insert_statement)

    connection.commit()

def insert_answer(connection, a_id, description, q_id, u_id):
    insert_statement = """
    INSERT INTO answers VALUES\n
    """
    insert_statement += "({}, {}, {}, {})\n".format(a_id, description, q_id, u_id)
    execute_query(connection, insert_statement)

    connection.commit()

def read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Exception as err:
        print(f"Error: '{err}'")

def test():
    print("test,")

if __name__ == '__main__':
    connection = connect_to_database("localhost", "root", "", "yahoo_answers_archive")
    # insert_user(connection, "'HJK235HKJAER'", "'dummy_user_1'")
    # insert_question(connection, "1", "'Do you remember the hippo in our campus?'", "1", "'Psychology'", "10", "'HJK235HKJAER'")
    # insert_answer(connection, "2", "'Hell yeah brother!'", "1", "'HJK235HKJAER'")
    results = read_query(connection, "SELECT * FROM users WHERE u_id = {}".format("'MPiq2Ovqaa'"))

    print(results)