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
# from statistics import mean

# # Create a list of numbers
# numbers = [1, 2, 3, 4, 5]

# # Find the minimum value
# min_value = min(numbers)

# # Find the maximum value
# max_value = max(numbers)

# # Find the average value
# average_value = mean(numbers)

# # Print the results
# print("Minimum value: ", min_value)
# print("Maximum value: ", max_value)
# print("Average value: ", average_value)

#!_//---------------------------------------------------//
'''
//_Oct 16 to 17

___Goal: 4 of CoderByte 18.
'''
# //* 1)--"Is N Prime?"--Page 21:
# import math
# def isPrime(n):
#     #?_All numbers less than 2 are not primes:
#     if n < 2:
#         return False
#     #?_Loop from 2 to square-root n:
#     for i in range(2, int(math.ceil(math.sqrt(n)))):
#         #?_Check if (n mod i) is equal to 0; if so, then there are 2 numbers--a and b, that can multiply to give n.
#         if n % i == 0:
#             return False
#         #?_...else:
#         return True

# print(isPrime(400))
# ?_Test successful. Current "n" = False. Changing to odd number gets you True. Side-bar: math is amazing/fun; apparently, I just looked up and confirmed the fact that all prime numbers are odd, but not all odd numbers are odd! [**_Mind-Blown Emoji_**]

# //* 2)--First non-repeating character; page 31.

# def firstNonRepChar(string):
#     hashTable = {}

#     #?_Store each character in the hash table with the frequency of times it occurs:
#     for c in string:
#         if c not in hashTable:
#             hashTable[c] = 1
#         else:
#             hashTable[c] += 1

#     #?_Loop through the string and return the first character with a count of 1 in the hash table:
#     for c in string:
#         if hashTable[c] == 1:
#             return c

#     #?_Return -1 if no unique character exists:
#     return -1

# print(firstNonRepChar("Abdacadabra!"))
# ?_Testing partially successful. Details to be discussed later with a pair-code session-mate.

#!_//---------------------------------------------------//


'''
//!_Nov 3

___Random Goal: FizzBuzz
___Instructions:
Print out all the numbers from 1 to 100. But for every number divisible by 3 print replace it with the word “Fizz,” for any number divisible by 5 replace it with the word “Buzz” and for a number divisible by both 3 and 5 replace it with the word “FizzBuzz.”
'''


def fizzBuzz(n):

    # ?_First, we store the resulting numbers in an array.
    result = []

    # ?_Next, we loop from 1 to our chosen/given "n" number.

    for i in range(1, n + 1):

        add = ''

        # ?_Next, we check to see if we get a remainder when dividing by 3. If we don't, we'll know that this number is divisible by 3.
        if i % 3 == 0:
            add += 'Fizz'

        # ?_We then check for divisibility by 5.
        if i % 5 == 0:
            add += 'Buzz'

        # ?_Finally, we check for divisibility for both 3 and 5.
        if add == '':
            result.append(i)
        else:
            result.append(add)

    return result

# ?_Testing suspended.

#!_//---------------------------------------------------//


'''
//!_Dec 12

___Random Goal: FizzBuzz
___Instructions:
Print out all the numbers from 1 to 100. But for every number divisible by 3 print replace it with the word “Fizz,” for any number divisible by 5 replace it with the word “Buzz” and for a number divisible by both 3 and 5 replace it with the word “FizzBuzz.”
'''

#//!_ zx


#!_//---------------------------------------------------//

