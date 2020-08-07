import { theme } from '../theme/theme';
import { DeepPartial, Theme } from '@twilio/flex-webchat-ui';
import { ThemeConfig } from '../../interfaces/FlexChat';

const primaryColors = {
    background: theme.primaryColor,
    color: theme.textLight,
};

const primaryColorsHover = {
    background: theme.primaryColor,
    color: theme.textLight,
};

export const generateTheme = (
    isDarkMode: boolean,
    themeConfig: ThemeConfig = {},
): DeepPartial<Theme> => ({
    MainContainer: {
        ...themeConfig.MainContainer,
        width: themeConfig.MainContainer?.width || '500px',
        height: themeConfig.MainContainer?.height,
    },
    Chat: {
        MessagingCanvas: {
            Container: {
                background: isDarkMode ? theme.darkGreyBackground : theme.lightBackground,
            },
        },
        MessageList: {
            DateSeparatorLine: {
                color: isDarkMode ? theme.textLight : theme.textDark,
            },
            TypingIndicator: {
                color: isDarkMode ? theme.textLight : theme.textDark,
            },
            DateSeparatorText: {
                color: isDarkMode ? theme.textLight : theme.textDark,
            },
        },
        WelcomeMessage: {
            Container: {
                color: isDarkMode ? theme.textLight : theme.textDark,
                fontSize: '14px !important',
            },
            Icon: {
                color: isDarkMode ? theme.textLight : theme.textDark,
                fontSize: '14px !important',
            },
        },
        MessageListItem: {
            FromOthers: {
                Bubble: {
                    background: isDarkMode ? theme.mediumGreyBackground : theme.lightGreyBackground,
                    color: isDarkMode ? theme.textLight : theme.textDark,
                },
                Avatar: {
                    background: isDarkMode ? theme.mediumGreyBackground : theme.lightGreyBackground,
                    color: isDarkMode ? theme.textLight : theme.textDark,
                },
                Header: {
                    color: isDarkMode ? theme.textLight : theme.textDark,
                },
            },
            FromMe: {
                Bubble: {
                    ...primaryColors,
                },
                Avatar: {
                    ...primaryColors,
                },
                Header: {
                    ...primaryColors,
                },
            },
            ReadStatus: {
                color: isDarkMode ? theme.textLight : theme.textDark,
            },
        },
        MessageInput: {
            Container: {
                background: isDarkMode ? theme.mediumGreyBackground : theme.lightGreyBackground,
                color: isDarkMode ? theme.textLight : theme.textDark,
                fontSize: '14px !important',
                '::placeholder': {
                    color: isDarkMode ? theme.textLight : theme.textDark,
                },
            },
            Button: {
                ...primaryColors,
                '&:hover': {
                    ...primaryColorsHover,
                    backgroundBlendMode: 'color',
                },
            },
        },

        MessageCanvasTray: {
            Button: {
                ...primaryColors,
                borderRadius: '4px',
            },
            Container: {
                background: isDarkMode ? theme.mediumGreyBackground : theme.lightGreyBackground,
                color: isDarkMode ? theme.textLight : theme.textDark,
                fontSize: '1rem',
            },
        },
    },

    MainHeader: {
        Container: {
            background: isDarkMode ? theme.darkBackground : theme.darkGreyBackground,
            color: theme.textLight,
            '&:hover': {
                cursor: 'default',
            },
        },
    },

    EntryPoint: {
        Container: {
            ...themeConfig.EntryPoint,
            ...primaryColors,
            boxShadow: 'none',
            '&:hover': {
                ...primaryColorsHover,
                backgroundBlendMode: 'color',
            },
        },
    },
    FormComponents: {
        TextArea: {
            maxWidth: '80%',
            marginLeft: '2px',
            '& div textarea': {
                borderRadius: '4px',
            },
            '& div textarea:focus': {},
        },
    },
    PreEngagementCanvas: {
        Container: {
            left: '0px',
        },
        Footer: {
            backgroundColor: 'blue',
        },
        Form: {
            Label: {
                fontWeight: 600,
            },
            SubmitButton: {
                ...primaryColors,
                borderRadius: '4px',
            },
        },
    },
    PendingEngagementCanvas: {
        Container: {
            backgroundColor: isDarkMode ? theme.darkGreyBackground : theme.lightBackground,
        },
    },
});
