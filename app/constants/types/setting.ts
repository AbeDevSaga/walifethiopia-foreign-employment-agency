import { TSystemSetting } from "../type";

export const sampleSettings: TSystemSetting[] = [
  {
    category: "general",
    settings: [
      {
        id: "maintenance-mode",
        name: "Maintenance Mode",
        description: "Enable to take the system offline for maintenance",
        value: false,
        type: "toggle",
      },
      {
        id: "default-theme",
        name: "Default Theme",
        description: "System-wide color scheme",
        value: "light",
        type: "select",
        options: ["light", "dark", "system"],
      },
      {
        id: "language",
        name: "Default Language",
        description: "System-wide language setting",
        value: "en-US",
        type: "select",
        options: ["en-US", "fr-FR", "es-ES", "de-DE"],
      },
    ],
  },
  {
    category: "security",
    settings: [
      {
        id: "session-timeout",
        name: "Session Timeout",
        description: "Duration before automatic logout (minutes)",
        value: 30,
        type: "input",
      },
      {
        id: "two-factor-auth",
        name: "Two-Factor Authentication",
        description: "Require 2FA for all users",
        value: false,
        type: "toggle",
      },
    ],
  },
  {
    category: "notifications",
    settings: [
      {
        id: "email-notifications",
        name: "Email Notifications",
        description: "Enable email notifications for system events",
        value: true,
        type: "toggle",
      },
      {
        id: "push-notifications",
        name: "Push Notifications",
        description: "Enable push notifications for mobile devices",
        value: false,
        type: "toggle",
      },
    ],
  },

  // ... more settings
];
