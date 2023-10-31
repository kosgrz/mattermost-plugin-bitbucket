// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "bitbucket",
    "name": "Bitbucket",
    "description": "Bitbucket plugin for Mattermost.",
    "homepage_url": "https://github.com/mattermost/mattermost-plugin-bitbucket",
    "support_url": "https://github.com/mattermost/mattermost-plugin-bitbucket/issues",
    "release_notes_url": "https://github.com/mattermost/mattermost-plugin-bitbucket/releases/tag/v1.1.1",
    "icon_path": "assets/icon.svg",
    "version": "1.1.1",
    "min_server_version": "5.37.0",
    "server": {
        "executables": {
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "To set up the Bitbucket plugin, you need to register a Bitbucket OAuth consumer here https://bitbucket.org/YOURWORKSPACE/workspace/settings/oauth-consumers/new.",
        "footer": "* To report an issue, make a suggestion or a contribution, [check the repository](https://github.com/mattermost/mattermost-plugin-bitbucket).",
        "settings": [
            {
                "key": "BitbucketOAuthClientID",
                "display_name": "Bitbucket OAuth Client ID (Key)",
                "type": "text",
                "help_text": "The client ID for the OAuth app registered with Bitbucket.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "BitbucketOAuthClientSecret",
                "display_name": "Bitbucket OAuth Client Secret",
                "type": "text",
                "help_text": "The client secret for the OAuth app registered with Bitbucket.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "WebhookSecret",
                "display_name": "Webhook Secret",
                "type": "generated",
                "help_text": "The webhook secret set in Bitbucket.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "EncryptionKey",
                "display_name": "At Rest Encryption Key",
                "type": "generated",
                "help_text": "The AES encryption key used to encrypt stored access tokens.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "BitbucketOrg",
                "display_name": "Bitbucket Organization",
                "type": "text",
                "help_text": "(Optional) Set to lock the plugin to a single Bitbucket organization.",
                "placeholder": "",
                "default": null
            }
        ]
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
