import bcryptjs from 'bcryptjs';
import AuthModel from '../models/userModel.js ';

export const createUserAuth = async (req, res) => {
    try {
        const { Cor_User, Pas_User } = req.body
        console.log(Pas_User)

        let passHash = await bcryptjs.hash(Pas_User, 8)

        await AuthModel.create({
            "Cor_User": Cor_User,
            "Pas_User": passHash
        })

        res.json({ message: "Usuario creado exitosamente!" })
    } catch (error) {
        res.json({ "message": error })
    }
}

v 