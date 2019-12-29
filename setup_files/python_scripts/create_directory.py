import os
import sys

ENGINE_NAME = sys.argv[1]
path = os.getcwd() + "\\" + ENGINE_NAME
print("The current working directory is %s" % path)

try:
    os.mkdir(path)
except OSError:
    print("Creation of the directory %s failed" % path)
else:
    print("Successfully created the directory %s " % path)
