# number_list = [1, 2, 3]
# avg = sum(number_list)/len(number_list)
# print("The average is ", round(avg,2))

import pandas as pd

abalone = pd.read_csv('abalone.data', header = None)

abalone.head(3)