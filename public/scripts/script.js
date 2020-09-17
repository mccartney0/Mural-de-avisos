document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    // Pegando os dados do servidor
    fetch("http://localhost:3000/api/all")
        .then((res) => {
            return res.json()
        }).then(json => {
            let postElements = '';
            let posts = JSON.parse(json);
            console.log(posts);
            posts.forEach(post => {
                let postElement = `<div  class="card-title">
                    ${post.title}
                    <span id=${post.id} class="close" onclick="deletePost(this)">X</span>
                </div>
                <div class="card-body">
                    ${post.description}
                </div>
                </div>`
                postElements += postElement;
            })
            document.getElementById("posts").innerHTML = postElements;
        })
}

function newPost() {

    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    // if(title == '' || description == ''){
    //     alert('Insira um Título e uma Descrição');
    //     return;
    // }
    let post = {title, description};

    const options = {method:"POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post)
                }

    fetch('http://localhost:3000/api/new', options)
            .then(res=>{
                updatePosts();
                document.getElementById('title').value = '';
                document.getElementById('desc').value = '';
                console.log('Aviso adicionado.');
            })
}

function deletePost(id) {
    // let id = document.getElementById('id');

    console.log(id)
    let ids = id.id
    let post = {id:ids};
    // let post = {ids}

    const options = {method:"DELETE",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post)
                }

    fetch('http://localhost:3000/api/del', options)
                .then(res=>{
                    updatePosts();
                })
}