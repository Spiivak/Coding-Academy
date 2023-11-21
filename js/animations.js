const codeLines = `
<pre>
<span style="color: var(--pink);">const</span> coder <span style="color: var(--pink);">=</span> <span style="color: var(--gray)">{</span>
    name: <span style="color: var(--gray);">'</span><span style="color: var(--yellow);">MisterBit</span><span style="color: var(--gray);">'</span>
    skills: <span style="color: var(--gray);">['</span><span style="color: var(--orange);">React</span><span style="color: var(--gray);">', '</span><span style="color: var(--orange);">Node</span><span style="color: var(--gray);">']</span>
    hardWorker: <span style="color: var(--orange);">true</span>
    problemSolver: <span style="color: var(--orange);">true</span>
    <span style="color: var(--green);">hireable</span><span style="color: var(--gray);">:</span> <span style="color: var(--orange);">function</span> <span style="color: var(--gray);">() {</span>
        <span style="color: var(--pink);">return</span> <span style="color: var(--gray);">(</span>
            <span style="color: var(--lightblue);">this</span><span style="color: var(--gray);">.</span>hardWorker <span style="color: var(--yellow);">&&</span>
            <span style="color: var(--lightblue);">this</span><span style="color: var(--gray);">.</span>problemSolver <span style="color: var(--yellow);">&&</span>
            <span style="color: var(--lightblue);">this</span><span style="color: var(--gray);">.</span>skills.length <span style="color: var(--orange);">>= 5</span>
        <span style="color: var(--gray);">)</span>
    <span style="color: var(--gray);">}</span>
<span style="color: var(--gray);">}</span>
</pre>
`

var timer1 = 0
var timer2 = 0
var timer3 = 0


function displayCodeWord() {
    var currString = ''
    for (let i = 0; i < codeLines.length; i++) {
        const currChar = codeLines[i]
        timer1 = setTimeout(() => {
            currString += currChar
            if (i % 2 === 0) currString = currString + '|'
            document.querySelector('.typing-container').innerHTML = currString
            if (i % 2 === 0) currString = currString.substring(0, currString.length - 1)
        }, 5 * i);
        timer2 = setTimeout(() => {
            document.querySelector('.typing-container').innerHTML = codeLines
        }, 10 * codeLines.length);

    }
    setTimeout(() => {

        clearCodeWord()
    }, 10 * codeLines.length)
}

function clearCodeWord() {
    var currString = codeLines
    for (let i = 0; i < codeLines.length; i++) {
        timer3 = setTimeout(() => {
            document.querySelector('.typing-container').innerHTML = currString
            currString = currString.substring(0, currString.length - 5)
            document.querySelector('.typing-container').innerHTML = currString
        }, 10 * i);

    }
}

displayCodeWord()
var interval = 0
interval = setInterval(() => {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    timer1 = 0
    timer2 = 0
    timer3 = 0
    displayCodeWord()
}, 40_000);

