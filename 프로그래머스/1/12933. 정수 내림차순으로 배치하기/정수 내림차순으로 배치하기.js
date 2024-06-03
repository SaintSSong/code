function solution(n) {
    const a = n.toString();
    
    const b = a.split('');
    
    b.sort((y,z) => z - y);
    
    const c = b.join('');
    
    const d = parseInt(c);
    
    return d;
}