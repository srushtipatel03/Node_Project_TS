import express from "express";
const FavoriteRoutes = express.Router();
import {userVerifyToken} from "../../helpers/userVerifyToken";

import { addNewFavorite,  deleteFavorite, getAllFavorite } from "../../controller/user/favorite.controller";


FavoriteRoutes.post('/add-New-Favorite' , userVerifyToken ,  addNewFavorite);
FavoriteRoutes.get('/get-All-Favorite', userVerifyToken, getAllFavorite);
FavoriteRoutes.delete('/delete-Favorite' , userVerifyToken , deleteFavorite);

export default FavoriteRoutes;