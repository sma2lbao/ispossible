"use client";

import { Button, Upload } from "@design/core";

const CreateArtists: React.FC = () => {
  return (
    <div>
      <Upload action="/api/upload/files">
        <Button>点击上传</Button>
      </Upload>
    </div>
  );
};

export default CreateArtists;
