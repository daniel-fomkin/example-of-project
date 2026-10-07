class PostDeck {
    constructor(el) {
        this.el = el
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    getHtml() {
        let result = ""

        this.cards.forEach(card => {
            result += card.getBasic();
        });

        return result
    }

    render() {
        this.el.innerHTML = this.getHtml();
    }
}

class Post {
    constructor({ id, message, created_at }) {
        this.id = id
        this.message = message
        this.createdAt = created_at
    }

    getBasic() {
        return `<div class="post"> <p>${this.message}</p> <p>${this.createdAt}</p> </div>`
    }

}

const postBox = new PostDeck(document.querySelector("#post-deck"));

async function getPosts() {
    try {
        const response = fetch("../api/posts");
        if((await response).redirected){
            location.href = "../login.html"
        }
        const result = (await response).json();

        await result.then(result => {
            result.forEach(el => {
                const post = new Post(el);
                postBox.addCard(post);
            })
        });

        postBox.render();
    }
    catch (err) {
        console.error(err);
    }
}

getPosts();


