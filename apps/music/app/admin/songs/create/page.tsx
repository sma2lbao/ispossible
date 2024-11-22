"use client";
import cos from "@/shared/cos";

const CreateSong: React.FC = () => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    console.log("file: ", file);
    if (file) {
      cos
        .uploadFile({
          Bucket: "music-1305700162", // 填写自己的 bucket，必须字段
          Region: "ap-guangzhou", // 存储桶所在地域，必须字段
          Key: "songs/" + Date.now() + "_" + file.name, // 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段
          Body: file, // 上传文件对象
          SliceSize: 1024 * 1024 * 5, // 触发分块上传的阈值，超过5MB 使用分块上传，小于5MB使用简单上传。可自行设置，非必须
          onProgress: function (progressData) {
            console.log("上传进度：", progressData);
          },
        })
        .then((result) => {
          console.log("result: ", result);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default CreateSong;
