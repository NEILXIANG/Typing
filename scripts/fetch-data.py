import concurrent.futures,json,pathlib,re,urllib.parse,subprocess
root=pathlib.Path(__file__).parent.parent/'public/assets'
chars=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {WORDS} from './public/data.js';console.log(JSON.stringify(WORDS.map(w=>w.char)))"],cwd=root.parent.parent))
(root/'characters').mkdir(exist_ok=True)
def get(c):
    if (root/'characters'/f'{c}.json').exists(): return
    url='https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/'+urllib.parse.quote(c)+'.json'
    data=subprocess.check_output(['curl','-fsSL','--retry','2','--max-time','30',url])
    obj=json.loads(data)
    assert obj['strokes'] and obj['medians']
    (root/'characters'/f'{c}.json').write_bytes(data)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as e:list(e.map(get,sorted(set(chars))))
print(f'Downloaded {len(set(chars))} character stroke files')
