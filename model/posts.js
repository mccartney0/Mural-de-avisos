module.exports = {

    posts : [
        {
            id: 123,
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id:generateID(),title,description});

    },

    deletePost(id){
        console.log(id);
        this.posts.splice({id},1);
    }

}

function generateID(){
    return Math.random().toString().substr(2,9);
}