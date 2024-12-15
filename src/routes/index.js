import { Router } from "express";
import menu from "../controllers/index.js";

const router = Router();

router.get("/", menu.index);

router.get('/clasificacion', menu.clasificacion)
router.get('/calendar', menu.calendar)

export default router;