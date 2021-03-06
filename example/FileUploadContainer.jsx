import React from 'react';
import { Container, FileUpload } from '../src';

const FileUploadContainer = () => (
    <Container>
      <Container.Row>
        <Container.Item xxs={3}>
          <FileUpload showTip tipText="upload your file" label="Upload" id="test1" size="extra-small" />
        </Container.Item>
        <Container.Item xxs={3}>
          <FileUpload state="error" tipText="error state" label="Upload" id="test2" size="small" />
        </Container.Item>
        <Container.Item xxs={3}>
          <FileUpload label="Upload" id="test3" size="medium" multiple onChange={(files) => {
            console.log(files);
          }} />
        </Container.Item>
        <Container.Item xxs={3}>
          <FileUpload label="Upload" id="test4" size="large" disabled />
        </Container.Item>
      </Container.Row>
    </Container>
);

export default FileUploadContainer;
