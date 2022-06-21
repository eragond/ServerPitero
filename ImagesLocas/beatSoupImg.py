import requests 
from bs4 import BeautifulSoup 
from os.path import basename
import sys    

def getdata(url): 
    r = requests.get(url) 
    return r.text 

direc = sys.argv[1]
url = sys.argv[2]

htmldata = getdata(url) 
soup = BeautifulSoup(htmldata, 'html.parser') 
for item in soup.find_all('img'):
    print(item)
    lnk = item['src']
    print(lnk)
    with open(direc+'/'+basename(lnk),'wb') as f:
        f.write(requests.get(lnk).content)
