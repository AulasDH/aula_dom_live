function exercicio1() {
    const card = `
        <div class='card'>
            <div class='card-header'>
                <div>
                    <img class='avatar' src='/img/avatar-example.png'>
                    <b>Ana Paula</b>
                </div>
                <img src='/img/icons/more-vertical.svg'>
            </div>
            <div class='card-img'>
                <img src='/img/publication_example.jpg'>
            </div>
            <div class="card-body">
                <div class="card-itens">
                    <div class="likes">
                        <img class="like" src="/img/icons/heart.svg" width="24px">
                        <strong>1</strong>
                        <strong>likes</strong>
                    </div>
                    <strong>Postado no dia: 00/00/0000</strong>
                </div>
                <div class="card-comments">
                    <p>
                        <strong>Nome comentarista</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed
                        do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris
                    </p>
                </div>
            </div>
            <form class="form-comments" action="/comentar" method="post">
                <input type="text" hidden name="postId" value="">
                <input type="text" placeholder="Adicione um comentário..." name="description">
                <button type="submit">Comentar</button>
            </form>
        </div>
    `;

    /**
    * @Description primeira forma de fazer
    */
    const moreButton = document.getElementById('more');

    // moreButton.onclick = () => {
    //     moreButton.insertAdjacentHTML('beforebegin', card);
    // }

    /**
     * @Description segunda forma de fazer 
     * nesse é necessario adicionar div com id cards no html
     */
    const cardsDiv = document.getElementById('cards');

    moreButton.onclick = () => {
        cardsDiv.innerHTML += card;
    }
}

function exercicio2() {
    /**
     * @Description primeira forma de fazer
    */
    // const imgLike = document.querySelectorAll('.likes img');

    // imgLike.onclick = () => {
    //     imgLike.src.includes('red') ?
    //         imgLike.src = './img/icons/heart.svg' :
    //         imgLike.src = './img/red-heart.png';
    // }

    /**
     * @Description segunda forma de fazer
    */
    // const like = document.querySelector('.likes img');
    // const white = 'heart.svg';
    // const red = 'red-heart.png';
    // like.onclick = () => {
    //     const path = like.src.split('/');
    //     const heart = path.pop();
    //     path.push(heart === white ? red : white);
    //     like.src = path.join('/');
    // };

    /**
     * @description terceira forma de fazer
     * para essa é necessario adicionar outra tag img com o outro
     * icone e alter a visibilidade entre eles através da classe is-invisible
     */
    // const likes = document.querySelectorAll('.likes img');
    // const likesDiv = document.querySelector('.likes');

    // likesDiv.onclick = () => {
    //     likes.forEach((like) => {
    //         like.classList.toggle('is-invisible');
    //     })
    // }
}

function exercicio3() {
    const divSearch = document.querySelector('.busca');

    divSearch.onmouseover = () => {
        divSearch.style.boxShadow = '0px 1px 3px black';
    }

    divSearch.onmouseout = () => {
        divSearch.style.boxShadow = 'none';
    }
}

function extra() {
    const cardsContainer = document.getElementById('cards');

    cardsContainer.onclick = (event) => {
        // buscando elemento que foi clicado
        const itemClicado = event.target;

        if (itemClicado.classList.contains('like')) {
            // nodeList -> pesquisem sobre pq é legal
            const likeImgs = document.querySelectorAll('#cards .likes img');

            // nodelist {} para array []
            const likeImgsArray = [...likeImgs];

            const index = likeImgsArray.indexOf(itemClicado);

            likeImgs[index].src.includes('red') ?
                likeImgs[index].src = './img/icons/heart.svg' :
                likeImgs[index].src = './img/red-heart.png';
        }
    }
}

exercicio1();
exercicio2();
exercicio3();
extra();