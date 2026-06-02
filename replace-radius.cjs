const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    
    // Replace any rounded classes with rounded-none
    content = content.replace(/rounded-(?:sm|md|lg|xl|2xl|3xl|4xl|5xl|full|pill|none|\[[^\]]+\])|\brounded\b(?!\-)/g, 'rounded-none');
    
    // Set borderRadius={...} props to borderRadius={0} or --border-radius to 0px
    content = content.replace(/borderRadius=\{\d+\}/g, 'borderRadius={0}');
    content = content.replace(/--border-radius:\s*\d+px/g, '--border-radius: 0px');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
console.log('Done replacing rounded classes and variables');
