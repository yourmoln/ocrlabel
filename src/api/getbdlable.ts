// 假设你有一个名为 'data.json' 的文件，位于同一目录下

// 使用 fetch API 发起请求
const getlable = (file: string = "/bd_label.json") => {
  fetch(file)
    .then((response) => {
      // 确保响应是ok的
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // 返回JSON解析后的数据
      return response.json();
    })
    .then((data) => {
      // 在这里处理你的数据
      console.log(data["10"]);
      return data;
    })
    .catch((error) => {
      // 在这里处理错误
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      return {'error':error,};
    });
};
export default getlable;
