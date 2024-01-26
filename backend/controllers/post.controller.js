const PostModel = require('../models/post_model');

//Read
module.exports.getPosts = async (req,res)=>{
    const posts = await PostModel.find(); 
    res.status(200).json(posts);
};

//Create
module.exports.setPosts= async(req,res)=>{
    // res.json ({message: "Ca fonctionne!"})
    if(!req.body.message){
        res.status(400).json({message:"Merci d'ajouter un message"});
    }
    
    //mesage que l'utilisateur envoie:méthode create native
    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author,
    });
    // //statut 200 : tout ok
    res.status(200).json(post);
};

//Edit 
module.exports.editPost = async (req,res)=>{
    const post = await PostModel.findById(req.params.id);

    if(!post){
        res.status(400).json({message: "Ce post n'existe pas!"});
    }

    const updatePost= await PostModel.findByIdAndUpdate(
        post, 
        req.body,
        {new:true}
        );
        res.status(200).json(updatePost);

};

module.exports.deletePost= async (req, res)=>{
    const post = await PostModel.findById(req.params.id); 

    if(!post){
        res.status(400).json({message: "Ce post n'existe pas!"});
    }

    await post.remove(); 
    res.status(200).json("Message supprimé avec succès : " + req.params.id); 
};

module.exports.likePost = async (req,res)=> {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$addToSet : {likers: req.body.userId }},
            {new: true}
        ).then((data) => res.status(200).send(data));

    }
    catch(err){
        res.status(400).json(err);

    }
};

module.exports.dislikePost = async (req,res)=> {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull : {likers: req.body.userId }},
            {new: true}
        ).then((data) => res.status(200).send(data));

    }
    catch(err){
        res.status(400).json(err);

    }
};

//gérer l'import d'image

// module.exports.image = async (req,res)=>{
//     try {
//         if(!req.file){
//             res.status(400).json({message: "Aucune image trouvée"});

//         }
//         const imageFile=Image({
//             filename: req.file.filename,
//             filepath: req.file.path,
//         });

//         const saveImage= await imageFile.save();
//         res.status(200).json(saveImage);

//     } catch (err) {
//         res.status(400).json(err);

//     }
// };



