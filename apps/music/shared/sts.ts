import STS from "qcloud-cos-sts";

const config = {
  secretId: process.env.COS_SECRET_ID, // 固定密钥
  secretKey: process.env.COS_SECRET_KEY, // 固定密钥
  durationSeconds: 1800, // 密钥有效期
  bucket: "music-1305700162",
  region: "ap-guangzhou",
  allowPrefix: "*", // 这里改成允许的路径前缀，可以根据自己网站的用户登录态判断允许上传的具体路径，例子： a.jpg 或者 a/* 或者 * (使用通配符*存在重大安全风险, 请谨慎评估使用)
  allowActions: [
    // 简单上传
    "name/cos:PutObject",
    "name/cos:PostObject",
    // 分片上传
    "name/cos:InitiateMultipartUpload",
    "name/cos:ListMultipartUploads",
    "name/cos:ListParts",
    "name/cos:UploadPart",
    "name/cos:CompleteMultipartUpload",
    // 下载文件
    "name/cos:GetObject",
  ],
};

export function getSts() {
  const appId = config.bucket.substring(config.bucket.lastIndexOf("-") + 1);
  const policy = {
    version: "2.0",
    statement: [
      {
        action: config.allowActions,
        effect: "allow",
        resource: [
          // cos相关授权
          "qcs::cos:" +
            config.region +
            ":uid/" +
            appId +
            ":" +
            config.bucket +
            "/" +
            config.allowPrefix,
        ],
      },
    ],
  };

  return STS.getCredential({
    secretId: config.secretId!,
    secretKey: config.secretKey!,
    durationSeconds: config.durationSeconds,
    // endpoint: 'sts.internal.tencentcloudapi.com', // 支持设置sts内网域名
    policy: policy,
  });
}
