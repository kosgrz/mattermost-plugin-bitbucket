## Configuration

Configuration is started in Bitbucket and completed in Mattermost.

### Step 1: Register an OAuth Application in Bitbucket

1. Go to https://bitbucket.org and log in.
2. Go the **Settings** page for your organization.
3. Go to **Access Management > OAuth**.
4. Select **Add consumer** and set the following values:
  * **Name:** `Mattermost Bitbucket Plugin - <your company name>`.
  * **Callback URL:** `https://your-mattermost-url.com/plugins/bitbucket/oauth/complete`, replacing `https://your-mattermost-url.com` with your Mattermost deployment's Site URL.
  * URL: https://github.com/mattermost/mattermost-plugin-bitbucket.
5. Set:
  * **Account:** `Email` and `Read` permissions.
  * **Projects:** `Read` permission.
  * **Repositories:** `Read` and `Write` permissions.
  * **Pull requests:** `Read permission`.
  * **Issues:** `Read` and `Write` permissions.
6. Save the **Key** and **Secret** in the resulting screen.
7. Go to **System Console > Plugins > Bitbucket** 
8. Enter the Bitbucket **OAuth Client ID** and **Bitbucket OAuth Client Secret** you copied in a previous step.
9. Select **Save**.

### Step 2: Create a webhook in Bitbucket

You must create a webhook for each repository you want to receive notifications for or subscribe to.

1. Go to the **Repository settings** page of the Bitbucket organization you want to send notifications from, then select **Webhooks** in the sidebar.
2. Select **Add Webhook**.
3. Set the following values:
  * **Title:** `Mattermost Bitbucket Webhook - <repository_name>`, replacing `repository_name` with the name of your repository.
  * **URL:** `https://your-mattermost-url.com/plugins/bitbucket/webhook`, replacing `https://your-mattermost-url.com` with your Mattermost deployment's Site URL.
4. Select **Choose from a full list of triggers**.
5. Select:
  * **Repository:** `Push`.
  * **Pull Request:** `Created`, `Updated`, `Approved`, `Approval removed`, `Merged`, `Declined`, `Comment created`.
  * **Issue:** `Created`, `Updated`, `Comment created`.
6. Select **Save**.

If you have multiple repositories, repeat the process to create a webhook for each repository.

### Step 3: Configure the plugin in Mattermost

If you have an existing Mattermost user account with the name `bitbucket`, the plugin will post using the `bitbucket` account but without a BOT tag.

To prevent this, either:

1. Convert the `bitbucket` user to a bot account by running `mattermost user convert bitbucket --bot` in the CLI.

or

2. If the user is an existing user account you want to preserve, change its username and restart the Mattermost server. Once restarted, the plugin will create a bot 
account with the name `bitbucket`.

### Generate a Key

Open **System Console > Plugins > Bitbucket** and do the following:

1. Generate a new value for **At Rest Encryption Key**.
2. (Optional) **Bitbucket Organization:** Lock the plugin to a single Bitbucket organization by setting this field to the name of your Bitbucket organization.
3. (Optional) **Enable Private Repositories:** Allow the plugin to receive notifications from private repositories by setting this value to true.
4. Select **Save**.
5. Go to **System Console > Plugins > Management** and select **Enable** to enable the Bitbucket plugin.

You're all set!
