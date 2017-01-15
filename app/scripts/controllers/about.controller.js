import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';
import {AboutComponent} from '../components/about.component.js';

let $page = document.getElementById('page');

routie('about', controller);

export function controller() {
    AboutComponent.render({}, $page)
}


// import routie from 'libs/routie.js';
// import {PostListComponent} from '../components/post-list.component.js';
// import {AboutComponent} from '../components/about.component.js';
// let $page = document.getElementById('page');
// let $about = document.getElementById('template-about').innerHTML;
//
// routie('o-mnie', controller);
//
// export function controller(){
//     $page.innerHTML = "";
//     $page.innerHTML = Mustache.render($about, {name: 'name moje resre'});
//     console.log("o mnie");
// }