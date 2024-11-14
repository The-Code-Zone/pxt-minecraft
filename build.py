import glob
import json

files = glob.glob("**", recursive=True)
mds = [f.replace("\\", "/") for f in files if ".md" in f]

with open("pxt.json", "r") as p:
    j = json.load(p)

j["files"] = mds

with open("pxt.json", "w") as p:
    json.dump(j, p, indent=4)

print("done")
