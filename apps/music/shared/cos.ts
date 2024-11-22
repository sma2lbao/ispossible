"use client";
import COS from "cos-js-sdk-v5";

type STSData = {
  startTime: number;
  expiredTime: number;
  requestId: string;
  expiration: string;
  credentials: {
    tmpSecretId: string;
    tmpSecretKey: string;
    sessionToken: string;
  };
};

const cos = new COS({
  async getAuthorization(options, callback) {
    const fileApi = "/api/cos/sts";
    const data: STSData = await fetch(fileApi)
      .then((response) => response.json())
      .then((result) => result.data);
    callback({
      TmpSecretId: data.credentials.tmpSecretId,
      TmpSecretKey: data.credentials.tmpSecretKey,
      SecurityToken: data.credentials.sessionToken,
      StartTime: data.startTime,
      ExpiredTime: data.expiredTime,
    });
  },
});

export default cos;
