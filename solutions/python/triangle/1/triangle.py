def equilateral(sides):
    # equilateral: every sides have same size
    # a, b, c has the same value so there wont be inequality
    if all(side == 0 for side in sides):
        return False
    if all(side == sides[0] for side in sides):
        return True
    return False


def isosceles(sides):
    # isosceles: equal triangle legs
    # check for inequality
    a, b, c = sides

    if (a + b >= c) and (b + c >= a) and (a + c >= b):
        if len(set(sides)) == 1:
            return True
        if len(set(sides)) == 2:
            return True
    return False


def scalene(sides):
    # scalene: all sides different
    # check for inequality
    a, b, c = sides
    
    if (a + b >= c) and (b + c >= a) and (a + c >= b):
        if len(set(sides)) == 3:
            return True
    return False