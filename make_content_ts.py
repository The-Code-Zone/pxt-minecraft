import json

with open("content.json", "r") as c:
    j = json.load(c)

# double dumps
escaped = json.dumps(json.dumps(j, separators=(',', ':')))

with open("populator/content.ts", "w") as c:
    c.write("const content=" + escaped)

print("done")
