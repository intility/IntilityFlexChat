import './styles/FlexChatLoading.css';
import './styles/root.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './devSetup';

export * from './interfaces/FlexChat';
export { Manager } from '@twilio/flex-webchat-ui';
export type { CSSProps, FormAttributes } from '@twilio/flex-webchat-ui';
export { default as FlexChat } from './components/FlexChat';
export { default as useChatActions } from './useChatActions';
export { default as UseChatActionsFuncs } from './useChatActions';

ReactDOM.render(<App />, document.getElementById('root'));
