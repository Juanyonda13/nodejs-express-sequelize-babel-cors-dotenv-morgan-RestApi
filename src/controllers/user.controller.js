import User from "../model/User.js"

const getUsers = async (req, res) => {
    const users = await User.findAll()
    res.json(users)
}

const addUser = async (req, res) => {
    const { name, email } = req.body
    if (!name || !email) {
        return res.status(400).json({
            code: 400,
            status: "error",
            mensagge: "fatal error--require parameter",
            results: null
        })
    }
    const user = await User.create({ name, email })
    res.json({
        code: 200,
        status: "success",
        message: "suuccess full result",
        results: user
    })
}

const getByIdUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)
    res.json({
        code: 200,
        status: "success",
        message: "suuccess full result",
        results: user
    })
}

const editUser = async (req, res) => {
    const { id } = req.params
    await User.update(req.body, {
        where: { id: id }
    })
    const user = req.body
    res.json({
        code: 200,
        status: "success",
        message: "suuccess full result",
        results: user
    })
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    await User.destroy({
        where: { id: id }
    })
    res.json({
        code: 200,
        status: "success",
        message: "suuccess full result",
        results: null
    })
}
export const methods = {
    getUsers,
    addUser,
    getByIdUser,
    editUser,
    deleteUser
}

