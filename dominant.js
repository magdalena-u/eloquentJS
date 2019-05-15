const dominantDirection = word => {
    let tab = [];
    let rlt = 0;
    let ltr = 0;

    const code = word.split('').map((item) => item.codePointAt());
    tab.push(code);

    for (let script of SCRIPTS) {
        tab.map(item => {
            if (script.ranges.some(([from, to]) => {
                    return (item >= from && item < to)
                })) {
                script.direction === "rlt" ? rlt++ : ltr++
            }
        })
    }
    rlt > ltr ? rlt : ltr
}
