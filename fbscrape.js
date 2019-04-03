function next() {
    for (let i of document.getElementsByClassName('_4sxc')) {
        i.click()
    }
    document.getElementById('pagelet_dock').scrollIntoView();
    for (let i of document.getElementsByClassName('_4sxc')) {
        i.click()
    }
    for (let i of document.getElementsByClassName('_4sxc')) {
        i.click()
    }
}

var posts = [];
var postClass = '_5pcr'
var postData = '_1ktf';
var commentClass = '_4eek'
var commentTextClass = '_3l3x';
var commentCreatorClass = '_6qw4';

function process() {
    for (let p of document.getElementsByClassName(postClass)) {
        var cp = {
            post: p.getElementsByClassName(postData)[0],
            comments: []
        }

        for (let c of p.getElementsByClassName(commentClass)) {
//             imgs = [];
//             for (let i of c.getElementsByTagName('img')) {
//                 imgs.push({
//                     src: i.attributes.src.value,
//                     alt: i.attributes.src.alt
//                 })
//             }
            cp.comments.push({
                images: imgs,
                comment: c.getElementsByClassName(commentTextClass)[0].innerText,
                authorProfile: c.getElementsByClassName(commentCreatorClass)[0].getAttribute('href'),
                authorName: c.getElementsByClassName(commentCreatorClass)[0].innerText
            });
            posts.push(cp);
            p.remove();
        }

    }
}

async function go() {
    for (x = 0; x <= 10; x++) {
        console.log('running', x);
        next();
        await sleep(700);
        process();
        await sleep(700);

    }
    downloadObjectAsJson(posts, 'posts.json');
}

function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}

  function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

go();
