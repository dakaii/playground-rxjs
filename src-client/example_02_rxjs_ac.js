import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe(results => {
        $results.empty();
        $results.append(items.map(i => $('<li />').text(i)));
    })

// const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
// const queries$ = keyUps$
// .map(e => e.target.value)
// .distinctUntilChanged()
// .debounceTime(250);

// queries$.subscribe(query => {
//     getItems(query)
//     .then(items => {
//         $results.empty();
//         $results.append(items.map(r => $(`<li>`).text(r)));
//     });
// });

//----------------
// Library
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random() }`]);
        }, 500 + (Math.random() * 200));
    });
}