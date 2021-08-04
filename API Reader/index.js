const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello";

var data;

function soundOn(no) {
    console.log("sound");
    let i = 1;
    data[0]["phonetics"].forEach(v => {

        if (no == i) {
            var audio = new Audio(v["audio"]);
            audio.play();
        }
        i++;
    })

}


async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    data = await response.json();
    let word = `<h2 class="text-success" ><b>Word</b>: ${data[0]["word"]}</h2>`;

    var i = 1;

    data[0]["phonetics"].forEach(v => {
        word = word + `<p title="click on it to learn to pronounce" class="hover" onclick="soundOn(${i})"><svg class="text-primary " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
      </svg> ${v["text"]}</p>`;
        i++;
    })

    word = word + `<h3>Meanings</h3>`;

    i = 1;
    data[0]["meanings"].forEach(v => {
        word = word + `<p title="click on it to view the details" id="pos${i}" class="hover" onclick="clicked(${i})"> <b>${v["partOfSpeech"]}  </b>  - ${v["definitions"][0]["definition"]}</p>`;
        i++;
    })

    document.getElementById("word").innerHTML = word;
    return data;
}

function clicked(value) {
    
    let s = document.getElementById("pageNo");
    let form = document.getElementById("meanForm");
    s.value = value;
    form.submit();

}

let a = getapi(url);

