import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostComponent} from '../components/post.component.js';

let $page = document.getElementById('page');

routie('post/:id', controller);

export function controller(id) {
    PostService.get(id).then(post=>{
        PostComponent.render({post}, $page);
    });
}