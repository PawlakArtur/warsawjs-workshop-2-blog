export class PostService {
    static list() {
        return $.ajax('/posts');
    }

    static create(data) {
        return $.post('/posts', data);
    }

    static get(id) {
        return $.get('/posts/' + id)
    }

    static getComments(postId) {
        return $.get('/comments?postId=' + postId);
    }

    static delete(id) {
        console.log("delete " + id);
    }
}