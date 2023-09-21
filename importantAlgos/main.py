'''
//!_Sep 20
___Goal: to keep up the momemtum with the final learning/practice. 
___Specifically, for today, to update the directory before midnight. 
Algo for practice: one of the "CoderByte 18"; "FizzBuzz". 
___Testing suspended.
'''

def fizzBuzz(n):
    result = []
    
    for i in range(1, n + 1):  
        add = ''
        if i % 3 == 0:
            add += 'Fizz'
        
        if i % 5 == 0:
            add += 'Buzz'
        
        if add == '':
            result.append(i)
        else:
            result.append(add)
    
    return result 
        
