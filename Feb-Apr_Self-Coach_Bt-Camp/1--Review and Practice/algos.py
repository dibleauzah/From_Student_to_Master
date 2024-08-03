# _#*_Day 1 of Student-to-Master (STM) Self-Challenge: Feb 20, 2024
# _#?_Self-encouragement note: Don't focus on sites or tools that discourage you. For instance: **IGNORE Hackerrank!**

# _#!_Challenge #-2 (of STM Day 1); Coding: Reverse String

# def reverse_string(string):
#     def reverse_string(string):
#         return string[::-1]
# # ?_Testing function:
# input_string = "Hello world! :-)"
# print(reverse_string(input_string))

# ?_Test result: Unsuccessful.

# _#!-----------------------------------------------//
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

# _#*_Day 2 of Student-to-Master (STM) Self-Challenge: Mar 13, 2024
# _//#!_Executed in algos.js file.

#!-----------------------------------------------//

# _#!_Day 3 of Student-to-Master (STM) Self-Challenge: Mar 14, 2024
# _#!_Challenge #-5 of CoderByte 18: "Is N a Prime Number?"

# import math
# def isNprime(n):
#     if n < 2:
#             print ("Hi! Because this number is less than 2, it CANNOT BE a prime number. Sorry / thanks, and goodbye! :-)")
#     for i in range (2, int(math.ceil(math.sqrt(n)))):
#         if n % i == 0:
#             print ("Hi! Sorry, but this number is NOT a prime number. Thanks, and goodbye! :-)")
#     print ("Hi! Apparently, it's true! This number is a prime number. Thanks, and goodbye! :-)")

# isNprime(1)

# _#! <== Note I have done this last iteration--"10, 9, 8"--on purpose. I was curious to see if the prescribed statements will be returned. And I knew that more-than-likely, I would get an error message.
# _#!_And voila (!): I was right. The error msg = TypeError: isNprime() takes exactly 1 argument (3 given)

#!-----------------------------------------------//

#!_============================================_//
#!_============================================_//

# *_Day 5--Continued/Concluded of Student-to-Master (STM) Self-Challenge:
# *_Also Day 9 of 25 For Summer Challenge
# ?_Aug 2, 2024

# ?_Agenda:
#*_Also via an "Open Book (-test)"-style. 

# ?_1) Valid Parentheses
# ?_2) Calculate angle on clock
# ?_3) Two sum problem
# ?_4) First Unique Character in a String
# ?_5) Sum nested arrays
# ?_6) FizzBuzz

# ?*-Extra:
# ?_To be done via JS.
#!-----------------------------------------------//

# ?_1) Valid Parentheses

# def matchingParens(string):
    
#     counter = 0

#     for c in string:
#         if c == '(':
#             counter += 1r
#         elif c == ')':
#             counter -= 1 
        
#     if counter == 0:
#         return True 
#     else:
#         return False 

#?_Functionality test suspended.

#!-----------------------------------------------//
# ?_2) Calculate angle on clock

# def clockAng(hour, mins):
#     h = 0.5 * (60 * hour + mins)
#     m = 6 * mins 
#     angle = abs(h - m)

#     if angle > 180:
#         return 360 - angle 
#     else:
#         return angle

#?_Functionality test suspended.

#!-----------------------------------------------//
# ?_3) Two-Sum Problem 

# def twoSum(arr, S):

#     hashTable = {}

#     for i in range(0, len(arr)):

#         sumMinusElement = S - arr[i]

#         if sumMinusElement in hashTable:
#             return True 

#         hashTable[arr[i]] = True 

#     return False     

#?_Functionality test suspended.

#!-----------------------------------------------//
# ?_4) First Unique Character in a String

# def firstNonRepChar(string):

#     hashTable = {}

#     for c in string:
#         if c not in hashTable:
#             hashTable[c] = 1 
#         else:
#             hashTable[c] += 1 
        
#     for c in string:
#         if hashTable[c] == 1: 
#             return c 
    
#     return -1 

#?_Functionality test suspended.

#!-----------------------------------------------//
# ?_5) Sum nested arrays

# def sumNested(arr):
     
#     result = 0 

#     for i in range(0, len(arr)):

#         if type(arr[i]) is not int:
#             result += sumNested(arr[i])
#         else:
#             result += arr[i]
        
#     return result 

#?_Functionality test suspended.

#!-----------------------------------------------//
# ?_6) FizzBuzz

# def fizzBuzz(n):

#     result = []

#     for i in range(1, n + 1):

#         add = ''

#         if i % 3 == 0:
#             add += 'Fizz'
        
#         if i % 5 == 0:
#             add += 'Buzz'
        
#         if add == '':
#             result.append(i)
#         else:
#             result.append(add)
    
#     return result

#?_Functionality test suspended.

#!_============================================_//
#!_============================================_//