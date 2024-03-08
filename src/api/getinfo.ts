import axios from "axios";

const getinfo = () => {
  axios
    .post("./user/info.php", {
    })
    .then(function (response) {
      alert(response.data)
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};

export default getinfo;
