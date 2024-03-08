import axios from "axios";

const getid = () => {
  axios
    .post("./user/getid.php", {
    })
    .then(function (response) {
      if (response.data != "请先登录"){
        
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};

export default getid;
