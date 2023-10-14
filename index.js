function createInterface(obj) {
    if(Array.isArray(obj)) return interfaceFromArray(obj);
    if(!obj) return String(obj);
    return `{\n${Object.keys(obj).map(k => {
        let keyStr = `${k.includes('-') ? "'" + k + "'" : k}:`;
        if(typeof obj[k] != 'object')
            return `/**\n * ${obj[k]}\n */\n` + keyStr + typeof obj[k];
        return keyStr + createInterface(obj[k])
    }).join('\n')}\n}`
};

function interfaceFromArray(arr, noArr) {
    let validArr = arr.filter(o => o && (typeof o == 'object'));
    let allKeys = validArr.reduce((p, c) => Object.keys(c).filter(k => !p.includes(k)).concat(p), []);
    let optionals = allKeys.filter(k => !validArr.every(o => o && Object.keys(o).includes(k)));
    let output = allKeys.map(k => {
        let allObjs = validArr.filter(o => Object.getOwnPropertyDescriptor(o, k));
        let types = allObjs.reduce((p, c) => {
            let type = typeof c[k] ? ((Array.isArray(c[k]) && 'array') || typeof c[k]) : c[k];
            if(!p.find(t => t.type == type)) return p.concat({ type, item: c[k] });
            return p;
        }, []);
        let keyStr = (k.includes('-') ? "'" + k + "'" : k)+ (optionals.includes(k) ? '?' : '') + ': ';
        if(types.find(t => t.type == 'array'))
            return keyStr + interfaceFromArray(allObjs.reduce((p, c) => p.concat(c[k]), []));
        if(types.find(t => t.type == 'object'))
            return keyStr + interfaceFromArray(allObjs.map(obj => obj[k]), true);
        let goodTypes = types.filter(t => t.item).map(t => t.item);
        let exampleStr = goodTypes.length ? `/**\n * ${goodTypes.join(' | ')}\n */\n` : '';
        return exampleStr + keyStr + types.map(t => t.type).join(' | ') + ';'
    });
    let extraTypes = arr.reduce((p, o) => {
        let type = !typeof o ? String(o) : typeof o;
        let noObj = (!o || typeof o != 'object');
        if(noObj && !p.includes(type)) return p.concat(type);
        else return p;
    }, []);
    let outStr = (output.length ? `{\n${output.join('\n')}\n}` : '{}') + (!noArr ? '[]' : '')
    if(!extraTypes.length) return outStr + ';';
    else return outStr + ' | ' + extraTypes.join(' | ') + ';';
};


let interface = createInterface(JSON.parse(fs.readFileSync('input.json', 'utf-8')));

fs.writeFileSync('output.txt', interface)