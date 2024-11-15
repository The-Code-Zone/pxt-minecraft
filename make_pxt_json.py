import glob
import json

exts = (".ts", ".md", ".png")

files = glob.glob("**", recursive=True)
files = [f.replace("\\", "/") for f in files if f.endswith(exts)]

with open("pxt.json", "r") as p:
    j = json.load(p)

j["files"] = files

with open("pxt.json", "w") as p:
    json.dump(j, p, indent=4)

print("done, " + str(len(files)) + " files")
