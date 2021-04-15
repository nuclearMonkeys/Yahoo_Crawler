import mysql.connector
from datetime import datetime

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="root",
    database="testdatabase"
)

mycursor = db.cursor()

users = [("tim", "techwithtim"),
         ("Joe", "joey123"),
         ("sarah", "sarah1234")]

user_scores = [(45,100),
               (30,200),
               (46,124)]

mycursor = db.cursor()

Q1 = "CREATE TABLE Users (id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), passwd VARCHAR(50))"
Q2 = "CREATE TABLE Scores (userId int PRIMARY KEY, FOREIGN KEY(userId) REFERENCES Users(id), game1 int DEFAULT 0, game2 int DEFAULT 0)"

# mycursor.execute("CREATE DATABASE testdatabase")
# mycursor.execute("CREATE TABLE Person (name VARCHAR(50), age smallint UNSIGNED, personID int PRIMARY KEY AUTO_INCREMENT)")
# mycursor.execute("DESCRIBE Person")
# mycursor.execute("INSERT INTO Person (name, age) VALUES (%s,%s)", ("Joe", 22))
# db.commit()

# mycursor.execute("CREATE TABLE Test (name varchar(50) NOT NULL, created datetime NOT NULL, gender ENUM('M', 'F', 'O') NOT NULL, id int PRIMARY KEY NOT NULL AUTO_INCREMENT)")
# mycursor.execute("INSERT INTO Test (name, created, gender) VALUES (%s,%s,%s)", ("JOE", datetime.now(), "M"))
# mycursor.execute("ALTER TABLE Test ADD COLUMN food VARCHAR(50) NOT NULL")
# mycursor.execute("ALTER TABLE Test CHANGE first_name first_name VARCHAR(5)")
# mycursor.execute("DESCRIBE Test")
# print(mycursor.fetchone())

# mycursor.execute("DROP TABLE IF EXISTS Person")
# mycursor.execute("DROP TABLE IF EXISTS Test")

# mycursor.execute(Q1)
# mycursor.execute(Q2)


# mycursor.execute("SELECT * FROM Person")

Q3 = "INSERT INTO Users (name, passwd) VALUES (%s, %s)"
Q4 = "INSERT INTO Scores (userId, game1, game2) VALUES (%s, %s, %s)"

# for x, user in enumerate(users):
#     mycursor.execute(Q3, user)
#     last_id = mycursor.lastrowid
#     mycursor.execute(Q4, (last_id,) + user_scores[x])


mycursor.execute("SELECT * FROM Scores")
for x in mycursor:
    print(x)


mycursor.execute("SELECT * FROM Users")
for x in mycursor:
    print(x)

db.commit()