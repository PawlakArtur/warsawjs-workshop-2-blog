import {Component} from './component.js';
import {PostService} from '../services/post.service.js';

export class PostComponent extends Component {


    template() {
        return document.querySelector('#template-post').innerHTML;
    }

    init() {
        console.log(this.data);
    }

    destroy() {

    }
}