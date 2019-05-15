const dominantDirection = word => {
    let rtl = 0;
    let ltr = 0;

    const arr = word.split('').map(item => item.codePointAt());

    for (let script of SCRIPTS) {
        arr.forEach(item => {
            if (script.ranges.some(([from, to]) => item >= from && item <= to)) {
                script.direction === 'rtl' ? rtl++ : ltr++;
            }
        });
    }
    return rtl > ltr ? 'rtl' : 'ltr';
};
