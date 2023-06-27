import numpy

from sklearn import datasets
from sklearn.linear_model import LogisticRegression


def convertToNumber(arr):
    numberArr = []
    for character in arr:
        print(character)
        number = ord(character)
        numberArr.append(number)
    return numberArr
    
with open("data.txt","r") as file:
    data = []
    letters = []
    target = True
    for line in file:
        line = line.strip("\n")
        if target == True:
            if len(letters) == 0:
                letters.append(line)
            else:
                letters.append(line)
            target = False
        else:
            if len(data) == 0:
                data.append([line])
            else:
                data.append([line])
            target = True
    dataDict = {"target": convertToNumber(letters),
                "data": data}
    print(dataDict["target"])
    