def positive_sum(arr):
    
    if arr != []:
        sum =0
        for i in arr:
            if (i>0):
                sum += i
            else:
                return(0)
    else:
        return 0

positive_sum([-1,2,5,-3,-2])

#partial solution
