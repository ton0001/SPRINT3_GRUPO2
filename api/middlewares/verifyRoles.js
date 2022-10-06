
const initModels = require("../../database/models/init-models");
const { sequelize } = require('../../database/models');

const models = initModels(sequelize);


/* Authentication middleware (roles = array roles autorizados)
    roles: [ 'GUESTID, 'GUEST', 'ADMINID', 'ADMIN', 'GOD  ]
*/
const isAuthenticated = (roles) => async (req, res, next) => {
    
     const result = await getRole(req, res)

    if (result.ok){
        switch (req.role){

            case "GOD":
                next();
            break
    
            case "ADMIN":
                if (roles.indexOf('ADMIN') !== -1) next()
                else if (roles.indexOf("ADMINID") !== -1){

                    if (verifyUser(req)) next()
                    else{
                        return res.status(403).json({
                            ok: false,
                            msg: "Unauthorized ID does not match with logged ID (Admin)",
                        });
                    }
                }
                else{
                    return res.status(401).json({
                        ok: false,
                        msg: "Unauthorized como (Admin)",
                    });
                }
            break
    
            case "GUEST":
                if (roles.indexOf('GUEST') !== -1) next()
                else if (roles.indexOf("GUESTID") !== -1){
                    if (verifyUser(req)) next()
                    else{
                        return res.status(403).json({
                            ok: false,
                            msg: "Unauthorized ID does not match with logged ID (Guest)",
                        });
                    }
                }
                else{
                    return res.status(401).json({
                        ok: false,
                        msg: "Unauthorized (Guest)",
                        });
                }
            break;
                    
            default:
                return res.status(401).json({
                    ok: false,
                    msg: "Unauthorized bad request",
                });
            break
            }
        }
        else{
            return res.status(result.status).json({
               ok: false,
               msg: result.message,
                });
            }

    }


const verifyUser = (req)=>{
    if (Number(req.params.id) === Number(req.tokenID)) {
        return true
    }
    else return false
}

const getRole = async (req, res) => {
    let result
    try {
        
        const idToken = req.tokenID
        const user_exist = await models.users.findByPk(idToken) 

          if (!user_exist){
            result = {
                    status: 400,
                    ok : false,
                    message: "Usuario ID no encontrado",
                    rol: req.role
                }
          }
          
          req.role = user_exist.role;
          result= {
                status: 200,
                ok : true,
                message: "Role cargado correctamente a req",
                rol: req.role
          }
        //   console.log(result);
        //   console.log(req.tokenID);
    }catch (err) {
        console.log(err)
        result = {
            status: 500,
            ok : false,
            message: "Error de servidor"
        }

    }
    return result
};

module.exports = isAuthenticated;
