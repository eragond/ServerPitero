
import sys

from os import listdir, rename
from os.path import isfile, join, splitext

mypath = sys.argv[1]
nombre = sys.argv[2]

onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

#print(onlyfiles)
j = 0
for i, f in enumerate(onlyfiles):
    print(i, f)
    ext = splitext(f)[1]
    nuevon = join(mypath, nombre + str(i)) + ext
    print(nuevon)
    rename(join(mypath,f),nuevon) 

