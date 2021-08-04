
let n = document.getElementById('pageNo');
let no = window.location.href.indexOf("pageNo");
no = window.location.href[no + 7];
console.log(no);

async function getapi(url) {

    const response = await fetch(url);
    var data = await response.json();
    var meaning = "";
    var i = 1;
    data[0]["meanings"].forEach(v => {

        if (i == no) {

            meaning = meaning + `<h2 class="m-4"><b>Part Of Speech -</b> <i>${v["partOfSpeech"]}</i></h2>`;

            meaning = meaning + `<p><b>definition -</b> ${v["definitions"][0]["definition"]}</p>
                            <p class="font-italic" ><b>example -</b> ${v["definitions"][0]["example"]}</p>`

            if (v["definitions"][0]["synonyms"] != undefined) {
                meaning = meaning + `<p><b>synonyms - </b>`
                v["definitions"][0]["synonyms"].forEach(x => { meaning = meaning + `&nbsp; ${x}  ` })
                meaning = meaning + `</p>`;
            }
        }
        i++;
    })

    document.getElementById("meaning").innerHTML = meaning;
    return data;
}
const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello";
let data = getapi(url);


