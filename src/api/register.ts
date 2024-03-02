import axios from "axios";
import { HmacSHA256 } from "crypto-js";

const register = (usname: string, psw: string, inv: string, sch: number) => {
  axios
    .post("./login/register.php", {
      username: usname,
      password: HmacSHA256(psw, "ocr").toString(),
      inv: inv,
      school: sch,
    })
    .then(function (response) {
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};

export default register;
