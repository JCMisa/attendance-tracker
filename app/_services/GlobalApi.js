const { default: axios } = require("axios")

const getAllGrades = async () => {
    await axios.get('/api/grade')
}

export default {
    getAllGrades
}