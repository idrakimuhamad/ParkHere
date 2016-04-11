import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import Finder from './components/finder.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/find', {
    name: 'finder',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Finder />)
      });
    }
  });
}
