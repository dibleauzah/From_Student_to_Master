# _#!_Day 1 of Student-to-Master (STM) Self-Challenge: Feb 20, 2024
# _#*_Self-encouragement note: Don't focus on sites or tools that discourage you. For instance: **IGNORE Hackerrank!**

# _#!_Challenge #-2 (of STM Day 1); Coding: Reverse String

# def reverse_string(string):
#     def reverse_string(string):
#         return string[::-1]
# # ?_Testing function:
# input_string = "Hello world! :-)"
# print(reverse_string(input_string))

# ?_Test result: Unsuccessful.

#_#!-----------------------------------------------//
# _#!_Challenge #-3 (of STM Day 1); Data Science: Student Average Scores

# def calculate_average(scores):
#     average_scores = {}
#     for student, scores_list in scores.items():
#         average_scores[student] = sum(scores_list) / len(scores_list)
#     return average_scores

# ?_Testing function:
# student_scores = {
#     'Alice': [80, 75, 90],
#     'Bob': [85, 90, 95],
#     'Charlie': [70, 75, 80]
# }
# print(calculate_average(student_scores))
# ?_Test result: Successful.

#!-----------------------------------------------//

# _#!_Day 2 of Student-to-Master (STM) Self-Challenge: Mar 13, 2024
#_//#!_Executed in algos.js file.

#!-----------------------------------------------//

# _#!_Day 3 of Student-to-Master (STM) Self-Challenge: Mar 14, 2024
# _#!_Challenge #-5 of CoderByte 18: "Is N a Prime Number?"

import math
def isNprime(n):
    if n < 2:
            print ("Hi! Because this number is less than 2, it CANNOT BE a prime number. Sorry / thanks, and goodbye! :-)")
    for i in range (2, int(math.ceil(math.sqrt(n)))):
        if n % i == 0:
            print ("Hi! Sorry, but this number is NOT a prime number. Thanks, and goodbye! :-)")
    print ("Hi! Apparently, it's true! This number is a prime number. Thanks, and goodbye! :-)")

isNprime(1) 

#_#! <== Note I have done this last iteration--"10, 9, 8"--on purpose. I was curious to see if the prescribed statements will be returned. And I knew that more-than-likely, I would get an error message. 
#_#!_And voila (!): I was right. The error msg = TypeError: isNprime() takes exactly 1 argument (3 given)

#!-----------------------------------------------//
