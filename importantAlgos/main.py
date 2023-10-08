'''
//!_Sep 20
___Goal: to keep up the momemtum with the final learning/practice. 
___Specifically, for today, to update the directory before midnight. 
Algo for practice: one of the "CoderByte 18"; "FizzBuzz". 
___Testing suspended.
'''

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

#!_//---------------------------------------------------// 

'''
//!_Oct 4
___Same goal as previous entry above; i.e., keep up the momemtum with the final learning/practice.
___"Is N a Prime Number?"
'''
# print("Testing-testing, 1-2-3...");

# import math
# def isNPrime (n):
#     #?_Declaration of fact that all numbers less than 2 are not primes:
#     if n < 2:
#         return False
    
#     #?_Loop from 2 to sqrt(n):
#     for i in range(2, int(math.ceil(math.sqrt(n)))):
#         #?_Check if (n modulo i) is equal to 0, if so then there are two numbers--a and b, that can multiply to give n.    
#         if n % i == 0:
#             return False
#         return True 

#!_//---------------------------------------------------// 

'''
//!_Oct 7
___Same goal as previous entries above; i.e., keep up the momemtum with the final learning/practice.
___"Challenge: Given a random array (e.g., [1, 2, 3, 4, 5], find the min, max, and average of that array."
___Answer-Source: Google-Bard (Generative AI); link: https://rb.gy/8dbn4 
'''

# Import the statistics module
from statistics import mean

# Create a list of numbers
numbers = [1, 2, 3, 4, 5]

# Find the minimum value
min_value = min(numbers)

# Find the maximum value
max_value = max(numbers)

# Find the average value
average_value = mean(numbers)

# Print the results
print("Minimum value: ", min_value)
print("Maximum value: ", max_value)
print("Average value: ", average_value)

#!_//---------------------------------------------------// 

