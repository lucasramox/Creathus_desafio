const connection = require('../database/connection');

const digimon = require('../json/digimon.json');

module.exports = {

    async index(request, response) {

        const responsetype = request.body['name', 'img', 'level'];
        

        const result = await connection('tbl_digimons').select('id');

        if (result.length === 0){

            digimon.map(async (obj)=> {
                var data = {
                    name: obj.name,
                    img: obj.img,
                    level: obj.level
                };

                try {
                    await connection('tbl_digimons').insert(data);
                } catch (error) {
                    console.log(error);
                }
            });
        }

        const aux = await connection('tbl_digimons').select(responsetype);
        return response.json(aux);
    }

}