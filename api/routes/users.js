import express from "express"
import { updateUser,deleteUser,getUser,getUsers } from "../controller/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("hello fella , you are loged in")
// });
// router.get("/checkuser/:id",verifyUser , (req,res,next)=>{
//     res.send("hello fella , you are loged in and you can also delete your account")
// });

// router.get("/checkadmin/:id",verifyAdmin , (req,res,next)=>{
//     res.send("hello admin , you are loged in and you can also delete all account")
// });

//update
router.put("/:id", verifyUser ,updateUser);
//delete

router.delete("/:id",verifyUser ,deleteUser);
//get
router.get("/:id",verifyUser, getUser);
//getall

router.get("/",verifyAdmin, getUsers);

export default router

