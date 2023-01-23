import {Router} from "express"
import { methods as userController } from "../controllers/user.controller"
const router=Router()

router.get("/",userController.getUsers)
router.post("/",userController.addUser)
router.get("/:id",userController.getByIdUser)
router.put("/:id",userController.editUser)
router.delete("/:id",userController.deleteUser)

export default router