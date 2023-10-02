
#!_Day 2 of algo-practice: June 16 (2023)--Python Version

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

# print (fizzBuzz(10))

#?_Test result successful; see below.
#?_Result: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']

#*-------------------------------------//

#!_Day 3 of algo-practice: June 23 (2023)--Python Version
#!_Testing to be done later.

# def twoSum(arr, S):
#     hashTable = {}

#     #?_Check each element in array:
#     for i in range(0, len(arr)):

#         #?_Calculate S minus current element:
#         sumMinusElement = S - arr[i]

#         #?_Check if this number exists in hash table:
#         if sumMinusElement in hashTable:
#             return True
        
#         #?_Add the current number to the hash table
#         hashTable[arr[i]] = True
    
#     return False

# #?_Printing and testing suspended:

# print twoSum([1, 2, 3, 4, 5], 7)

#*-------------------------------------//

#!_Day 4 of algo-practice: June 24 (2023)--Python Version
#!_Testing to be done later.

def sumNested(arr):
    result = 0

    #?_ sum up all numbers in the array:
    for i in range(0, len(arr)):

        #?_If element is a nested array, sum up all its elements:
        if type(arr[i]) is not int:
            result += sumNested(arr[i])
        else:
            result += arr[i]
    
    return result

print(sumNested([[1, 2, 3, 4, 5], [2, 5], 5, 90, [5, 9, 0], 4, 2]));

#*-------------------------------------//

#?_Aug 29 to 30, 2023

#?_Goals/"parameters" for this day/session's practice: 
#*_>> Per Agenda and Progress Text-Note:

#!_1)--"3 Vowels."

#!_2)--"Min, Max, Avg"

#!_3)--"Light-Bulbs".