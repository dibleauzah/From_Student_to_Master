# _#!_Day 2 of Student-to-Master (STM) Self-Challenge: Mar 13, 2024
# _//#!_Executed in algos.js file.

#!-----------------------------------------------//

# _#!_Day 3 of Student-to-Master (STM) Self-Challenge: Mar 14, 2024
# _#!_Challenge #-5 of CoderByte 18: "Implement Map and Filter"

# def map(arr, fn):
#     result = []

#     for i in arr:
#         applied = fn(i)
#         result.append(applied)
#     print(result)

# square = lambda x: x * x
# addZeroes = lambda x: int(str(x) + '00')

# map([1, 2, 3, 4], square) #_#!_ <== This should result in an output of "[1, 4, 9, 16]"
# map([1, 2, 3, 4], addZeroes) #_#!_ <== This should result in an output of "[100, 200, 300, 400]"

#!-----------------------------------------------//

#!_Day 5 of STM Self-Challenge: Mar 16 (Sat), 2024
#!_Challenge #-10__: "...Words With 3 Cont.- Vowels"

# import re
# ?_Makes sure to look this up later: is the "import **_re_** a feature/library of an older version of Python, or is...". "NM," actually.

# def threeVowels (string):
#     #?_Split string into an array of words:
#     arr = string.split('')
#     count = 0

#     #?_Search for this regex pattern:
#     for word in arr:
#         if re.search(r'[aeiou]{3, }', word) != None:
#             count = += 1

# return count
# ?_Testing suspended for later.
# ?_Rough time for completion: 5 to 10 mins. Good job, self/Se*_i_*f! ;-)

#!-----------------------------------------------//

#!_Day 7 of STM Self-Challenge: Mar 18 (Mon), 2024
#!_Challenge #-11__: "...Adjacent Matching Characters"
#!_Challenge #-12__: "...Majority Element (> n/2)"

#!_Challenge #-11__:
# //*_Carried forward to day 9.

#!_Challenge #-12__:
# //*_Carried forward to day 9.

#!-----------------------------------------------//

# *_Day 9 of STM Self-Challenge: Mar 26 (Tue), 2024
#!_Challenge #-11__: "...Adjacent Matching Characters"
#!_Challenge #-12__: "...Majority Element (> n/2)"
# ?_Tests optional. In progress as of 2:16 AM (EAT), Mar 26.
# //*_Suspended again. To be carried forward to a future date, t.b-determined later.

#!_Challenge #-11__:
# ?_Add Code Here and Lines Below.

#!_Challenge #-12__:
# ?_Add Code Here and Lines Below.

#!-----------------------------------------------//

# *_Day 10 of STM Self-Challenge: Mar 28 (Thr), 2024
#!_Challenge #-11__: "...Adjacent Matching Characters"
#!_Challenge #-12__: "...Majority Element (> n/2)"

#!_Challenge #-11__:
# ?_Add Code Here and Lines Below.

# def removePairs(string):
#     result = ''
#     i = 0

#     while i < len(string):
#         if i == len(string) - 1:
#             result += string[i]
#         elif string[i] != string[i + 1]:
#             result += string[i]
#         else:
#             i += 1
#         i += 1
#     return

# removePairs("aaagykkok")
# ?_Test Notes:
# ?____1) Test failed.
# ?____2) Details / error msg:
# Traceback (most recent call last):
#   File "/Users/seif/Desktop/From_Student_to_Master/importantAlgos/0wxOnWaxOff.py", line 95, in <module>
#     removePairs(aaagykkok)
# NameError: name 'aaagykkok' is not defined

#!_Challenge #-12__:
# ?_Add Code Here and Lines Below.

# import math
# def majorityElement(arr):

#     candidate = None
#     count = 0
#     for i in range(0, len(arr)):
#         if candidate is None or count == 0:
#             candidate = 1
#             count = 1
#         elif arr[i] == candidate:
#             count += 1
#         else:
#             count -= 1
#     count = 0
#     for el in arr:
#         if el == candidate:
#             count += 1

#         if count > math.floor(len(arr) / 2):
#             return candidate
#         else:
#             return None
# ?_Test Notes:
# ?_Test suspended for today--i.e., not done.

#!-----------------------------------------------//
# *_Day 11 of STM Self-Challenge: Mar 31 (Sun), 2024
#!_Challenge #-13__: "Switching light bulbs"

'''
**_Problem Details_**

#!_Scenario:
___>> There are 100 light bulbs, numbered 1 to 100, lined up, and all set to "Off" initially. There are also 100 people, each numbered 1 to 100 as well. 
___>> Person 1 will go through all the light bulbs and flip the switch, turning all of them on. 
___>> Then person 2 will go through the switches, turning each other 2nd bulb off--i.e., 2, 4, 6, 8, etc.
___>> Then person 3 will go and flip to "Off" position the 3rd, 6th, 9th, ...(etc.) bulbs.

#!_Questions:
___>> How many light bulbs will be on after 100 people have gone through them?
___>> What is that status of a given "N_th"--e.g. 34th, or 62nd, etc.; is it "On," or "Off"?
___>> How many people need to go through the line of bulbs until precisely "K" bulbs are set to on?

#!_Game-Plan / Strategy:
#?_According the Book...
>> To answer these questions, we need a function to iterate through all "N" buls and perform each operation for every person labelled 1 to N. 
>> We'll set up an array of N elements, all set to "FALSE"--i.e., representing the light-bulb in the "Off" position.
>> Then we'll loop through every person--1 to "N"--and within that loop, create another loop that will multiply each person's number by a particular ["i_th" / bulb] number; i.e.:
___>>> For current iteration, i = 1, 2, 3, 4, 5...etc.
___>>> ________''_________, i = 2, 4, 6, 8...etc.  
___>>> ________''_________, i = 3, 6, 9, 12...etc. 

#?_My own consideration, to be solved/answered later; what's the run-time of the above solution--i.e., re: "0 of N"? And if the runtime is inefficient, can(n't) we do better? Random brainstormed-solution: how about using a hash table?
'''


def lightBulb(N):
    # ?_Create N bulbs, set to "Off".
    lightbulbs = [False for i in range(0, N)]

    # ?_Each person i sets each Kth bulb to "On" or "Off" position; k = 2 * i, 3 * i, etc.
    #!_Very Important (!): "w" is merely a counter symbol! The letters/symbols that matter more importantly are k--the current/given person, and i--the current ith-iterative system--i.e., 1 += 1, or 2 (i.e. 2, 4, 6, etc.), or 3(i.e. 3, 6, 9, etc.).
    # for i in range(1, N + 1):
    #     w = 1
    #     k = w * i
    #     while k <= N:
    #         lightbulbs[k - 1] = not lightbulbs[k - 1]
    #         w += 1
    #         k = w * i

    # return lightbulbs
# ?_Test suspended for today--i.e., not done.

#!-----------------------------------------------//

# *_Day 12 of STM Self-Challenge: April 14, 2024
#!_1)--Challenge #-14__: "List of integers that overlap in 2 ranges".
#!_2)--Challenge #-15__: "Return mean, median, and mode of an array".
# *_//==========//

#!_1)
# def overLapperNumbers(range1, range2):
#     overlap = []
#     #?_Check whether each number within range 1 is also within the numbers of range 2.
#     for i in range(range1[0], range1[1] + 1):
#         if i >= range2[0] and i <= range2[1]:
#             overlap.append(i)
#     return overlap
# ?_Functionality Test(s): Suspended for the day.

#!_2)

# def meanMedianMode(arr):

#     #?_For mean, use the appropriate formula; i.e., sum of all arr-items / array-length.
#     mean = sum(arr) / float(len(arr))

#     #?_For median: Sort the array and return the middle element.

#     arr = sorted(arr)
#     median = arr[int(len(arr) / 2)]

#     #?_Mode: Store all elements in a hash table; keep a count, and keep updating the largest value of the count.

#     mode = None
#     hashTable = {}
#     for i in arr:
#         if i in hashTable:
#             hashTable[i] += 1
#         else:
#             hashTable[i] = 1
#         if mode is None or hashTable[i] > mode:
#             mode = i

#     return{'mean': mean, 'median': median, 'mode': mode}

# ?_Test suspended.

#!-----------------------------------------------//

# *_Day 13 of STM Self-Challenge: April 15, 2024
#!_1)--Challenge #-16__: "Encode consonants within a string".
# *_//==========//

#!_1)

# def encodeConsonats(string):

#     result = ''

#     #?_Store an array of vowels for later use:
#     vowels = ['a', 'e', 'i', 'o', 'u']

#     #?_Loop through the entire string:
#     for i in string:
#         #?_Special case for 'z':
#         if i == 'z':
#             result += 'b'
#             break
#         #?_If letter is not a vowel, or is a space:
#         elif i not in vowels and i != ' ':
#             #?_Convert each letter to its character code.
#             newCode = ord(i) + 1
#             #?_Perform a check to ensure the new letter is not a vowel; does it exist in our earlier-saved array?
#             if chr(newCode) in vowels:
#                 newCode += 1
#             #?_Get new letter and add it to the new string:
#             result += chr(newCode)
#         #?_Otherwise, the character is a vowel or a space.
#         else:
#             result += i
#     return result
#?_Functionality Test(s): Suspended for the day.
#!-----------------------------------------------//

# *_Day 14 of STM Self-Challenge: April 23, 2024
#!_Challenge(s) waived for today. Goal: continuous practice.

# print("Today is a good day! Salut, monde! :-)")

#?_Functionality Test Result: PASS.
#?_Details (/results pasted below):
# [Running] python -u "/Users/seif/Desktop/From_Student_to_Master/importantAlgos/0wxOnWaxOff.py"
# Today is a good day! Salut, monde! :-)
# [Done] exited with code=0 in 0.105 seconds

#!-----------------------------------------------//
# *_Day 15 of STM Self-Challenge: April 26, 2024

# def convert(string):
    
#     #?_Create an empty object:
#     obj = {}

#     #?_Split the string at each person:
#     people = string.split(' ')

#     #?_Loop through all the people:
#     for p in people:
#         #?_Split information for each person:
#         info = p.split(',')

#         #?_Store this information in the user object:
#         userObj = {
#             'email': info[1] or None,
#             'age': int(info[2]) if info[2] else None,
#             'occupation': info[3] or None 
#         }
#         #?_Store the key-value [pairs] in object of users now
#         obj[info[0]] = userObj
#     return obj

# #?_Functionality Test--Part 1; Test Case(s): 
# s = "Daniel,me@test.com,56,Coder John,,,Teacher Michael,mike@test.com,," 
# people = convert(s)

# #?_Functionality Test--Part 2; Result: 

# print (people['Daniel']['age']) #?_Success! :-) Output: 56.
# # print (people['Mike'] ['occupation']) #?_Result: Fail; Reason: [See Error Msg Below]
# # Traceback (most recent call last):
# #   File "/Users/seif/Desktop/From_Student_to_Master/importantAlgos/0wxOnWaxOff.py", line 311, in <module>
# #     print (people['Mike'] ['occupation'])
# # KeyError: 'Mike'
# # [Done] exited with code=1 in 0.102 seconds

# print (people['Michael'] ['occupation']) #?_Result: Success! :-) Output: "None"

#!-----------------------------------------------//
# *_Day 16 of STM Self-Challenge: June 20, 2024

#?_Goals for today; theme: "Make It Count!"
#?_Goal 1: General python coding practice, ...
#?_G-1, cont'd: via i) ("Basic 13" or "CoderByte 18") algos--minimum: 2; 
#?_G-1, cont'd: via ii) Simple apps; source(s): online--details to be added below--minimum: 1; 


#*_G-1-ii) = Done. Via Programiz; URL: https://programiz.pro/ide/python/T13PDSRWDZ 

#*_G-1-ii)

#?_Still in progress as current date (same as line 315), approx. 3:45 / 4:00 PM, EAT. 

#!-----------------------------------------------//
# *_Day 17 of STM Self-Challenge: June 21, 2024

#?_Goals for today; theme: "Finish What You Start! [**Red Angry-Face Emoji**]"
#?_Goal 1 of 1--To be updated if necessary; continuation/completion of yesterday's goal(s), namely: 

#?_General python coding practice:
#?_Via i) ("Basic 13" or "CoderByte 18") algos--minimum: 2. 

#*_Specific challenge i): "[Find the] Min-Max-Avg"--From "Coding Dojo's 'Basic 13'"--See line 346 below; switched over to JS file ("0waxOnWaxOff.js").

#*_Specific challenge ii): "Implement Map and Filter"--From CoderByte's Basic 13'"

#!_1)

#?_Step 1: Declare and name the function:
# function PrintMinMaxAvg(arr){
#     var min = Infinity;
#     var max
# }
#?_Wowzah! I forgot I'm working with Python! [Hand-palm on face emoji.] Switching to JS file.

#!_2)

def map(arr, fn):
    
    result = []

    #?_Apply the function to each element and store the result:

    for i in arr:
        applied = fn(i)
        result.append(applied)
    
    return result 

#?_Usage-test: 
square = lambda x: x * x

addZeroes = lambda x: int(str(x) + '00')

map ([1, 2, 3, 4], square) 

#?_ For the above test, the result should be [1, 4, 9, 16]. 
#?_ Checking...: Test successful. :-) 

#!-----------------------------------------------// 

