const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const userController = require("../controllers/userController");
const pedidoController = require("../controllers/pedidoController");
const upload = require("../middleware/storage");

router.get("/session", userController.store);
router.post("/session", userController.loginSession);
router.post("/login", userController.index);
router.post("/record", userController.record);
router.post("/newuser", userController.login);
router.post("/newpedido", pedidoController.pageNewPedido);
router.get("/clientes", userController.clientesAdmin);
router.get("/pendientes", userController.pendientesAdmin);
router.get("/realizados", userController.realizadosAdmin);
router.get("/estadisticas", userController.estadisticasAdmin);
router.post("/estadisticasMes", userController.estadisticasAdminMes);
router.get("/finanzas", userController.finanzasAdmin);
router.post("/administrador", userController.loginSessionAdmin);
router.get("/updateuser:username", userController.userUpdate);
router.post("/deleteuser:username", userController.deleteUser);
router.post("/refresh", userController.updateUser);
router.post("/deletepedido:username", pedidoController.deletePedido);
router.post("/realizadosBusqueda", userController.realizadosBusqueda);
router.get("/updatepedido:username", pedidoController.pedidoUpdate);
router.post("/refreshpedido", pedidoController.updatePedido);
module.exports = router;
