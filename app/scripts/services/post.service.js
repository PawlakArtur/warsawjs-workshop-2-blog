
let posts = [
    {id: 1, title: 'pierwszy post', text: 'tresc posta'},
    {id: 2, title: 'drugi post', text: 'tresc posta drugiego'},
    {id: 3, title: 'trzeci post', text: 'tresc posta trzeciego'}
]
export class PostService {

    static list() {
        return new Promise((resolve, reject) => {
            resolve(posts);
        })
    }

    static create(data) {
        data.id = posts.length+1;
        posts.push(data);
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }

    static get(id) {
        return new Promise((resolve, reject) => {
            resolve(posts[parseInt(id)-1]);
        })
    }

    static delete(id) {
        console.log("delete " + id);
    }
}