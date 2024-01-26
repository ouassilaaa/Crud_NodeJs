const express= require("express"); 
const { setPosts, getPosts, editPost , deletePost, likePost, dislikePost} = require("../controllers/post.controller");
const { upload } = require("../config/upload");
const router= express.Router(); 

//CRUD
//READ
// router.get("/", (req,res)=>{
//     res.json({
//         message: "Je suis la partie router"
//     });
// });

router.get("/", getPosts);

//CREATE
// router.post("/", (req,res)=>{
//     console.log(req.body);
//     res.json({
//         message: req.body.message
//     });
// });
router.post("/",setPosts);
router.put("/:id",editPost);
router.delete("/:id",deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);
// router.post("/",upload.single('images'),image);








// router.put("/:id", (req,res)=>{
//     res.json({
//         messageId: req.params.id
//     });
// });

router.delete("/:id", (req,res)=>{
    res.json({
        messageId: "post supprimé id:" + req.params.id
    });
});

//LIKE DISLIKE
router.patch("/like-post/:id", (req,res)=>{
    res.json({
        message:"Post liké : id : " + req.params.id 
    });
});

router.patch("/dislike-post/:id", (req,res)=>{
    res.json({
        message:"Post disliké : id : " + req.params.id 
    });
});

module.exports= router;