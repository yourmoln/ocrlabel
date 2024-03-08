import axios from "axios";
import { HmacSHA256 } from "crypto-js";
const login = (usname: string, psw: string) => {
  axios
    .post("./login/login.php", {
      username: usname,
      password: HmacSHA256(psw, "ocr").toString(),
    })
    .then(function (response) {
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};

export default login;
