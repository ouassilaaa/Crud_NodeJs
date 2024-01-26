const mongoose = require('mongoose'); 
const { post } = require('../routes/post.router');

// schéma de nos posts : la bdd est un objet js => c'est la structure de base 
// qu'on donne à notre BDD MAIS on peut la modifier ajouter des éléments à tout moment

const postSchema = mongoose.Schema(
    {
        message:{
            type: String, 
            required:true,
        },
        author:{
            type: String, 
            required:true,
        },
        likers:{
            type: [String]
        },
        // fileName: {
        //     type: String, 
        //     required: true,
        // }, 
        // filePath: {
        //     type: String, 
        //     required: true,
        // }      
    }, 
     //date de création du message et de son édition
    {
        timestamps:true,
    }
);

//afin de pouvoir utiliser notre schéma on va l'exporter en lui indiquant le nom de la table ici 'post' et le nom de notre schéma en deuxième param

module.exports=mongoose.model('post',postSchema);