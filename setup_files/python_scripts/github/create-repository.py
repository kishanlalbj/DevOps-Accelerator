import os
import requests
import subprocess
import sys

def main():
    if len(sys.argv) != 4:
        print("Required Parameters missing 1. USERNAME 2. PASSWORD 3. REPOSITORY_NAME")
        sys.exit(1)
    else:
        URL="https://api.github.com/"
        USERNAME=sys.argv[1]
        API_KEY=sys.argv[2]
        REPOSITORY_NAME=sys.argv[3]

        print("Creating Repository")

        req = requests.post(URL + "/users/" + USERNAME + "/repos?access_token="+ API_KEY, data={
            "name": REPOSITORY_NAME,
            "description": "Created By Repository",
            "description": "This is your first repository",
            "homepage": "https://github.com",
            "private": False,
            "has_issues": True,
            "has_projects": True,
            "has_wiki": True
        })

        data = req.json()
        print(data)

        if req.status_code !=200:
            sys.exit(1)
