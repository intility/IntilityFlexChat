import { Manager } from '@twilio/flex-webchat-ui';

export type ConfigProps = {
    flexFlowSid?: string;
    flexAccountSid?: string;
    user: UserConfigProps;
};

export type UserConfigProps = {
    userPrincipalName: string;
    mail: string;
    mobilePhone: string;
    preferredLanguage: string;
    [key: string]: string | number | boolean;
};

export type ManagerState = {
    loading: boolean;
    manager?: Manager;
    error?: string;
};
