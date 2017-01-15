import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostComponent} from '../components/post.component.js';

let $page = document.getElementById('page');

routie('post/:id', controller);

export function controller(id) {
    let postPromise = PostService.get(id).then(post=>{
        return PostService.getComments(post.id).then(comments=>{
            post.comments = comments;
            return post;
        });
    })

    postPromise.then(post => PostComponent.render({post}, $page))
}