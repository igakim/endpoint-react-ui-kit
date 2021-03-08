import React from 'react';
import { Container, FileItemView } from '../src';

const FileItemViews = () => (
    <Container>
      <Container.Row spacing={2}>
        <Container.Item xxs={4}>
          <FileItemView
            name="KAKOE_TOIMAYA_FAILAASDASFDSAFDSFS"
            size="242kb"
            onRemove={() => console.log('wirjk')}
            progress={40}
          />
        </Container.Item>
      </Container.Row>
    </Container>
);

export default FileItemViews;
