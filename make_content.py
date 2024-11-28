import json

with open("content.json", "r") as c:
    j = json.load(c)

# double dumps
escaped = json.dumps(json.dumps(j, separators=(',', ':')))

with open("populator/message.md", "r") as f:
    lines = f.readlines()
    for i in range(len(lines)):
          if lines[i].strip() == "```customts":
              lines[i+1] = "const content=" + escaped + "\n"

with open("populator/message.md", "w") as f:
    f.writelines(lines)

print("done")