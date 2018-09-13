import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PageTitle from '../../components/elements/PageTitle';

storiesOf('PageTitle', module)
  .add('with short title', () => (
    <PageTitle title="Short title" />
  ))
  .add('with long title', () => (
    <PageTitle title="Very looooooooooooooooooooooooooooooooooong title" />
  ));
