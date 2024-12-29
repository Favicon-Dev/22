interface MessageData {
  name: string;
  discordUsername: string;
  issue: string;
  hasScreenshot: boolean;
}

export async function sendDiscordMessage(data: MessageData): Promise<void> {
  const webhookUrl = 'https://discord.com/api/webhooks/1313846041870729336/cZwJU5gH36MArM75OaiB6BUokJlqgIjfapMgST-tT1o4Vh6CAxSUfUf-VtQ5Uw1cPfyD';

  const message = {
    embeds: [{
      title: 'New Support Request',
      color: 0x9C27B0,
      fields: [
        {
          name: 'Name',
          value: data.name,
          inline: true
        },
        {
          name: 'Discord Username',
          value: data.discordUsername,
          inline: true
        },
        {
          name: 'Has Screenshot',
          value: data.hasScreenshot ? 'Yes' : 'No',
          inline: true
        },
        {
          name: 'Issue Description',
          value: data.issue
        }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message)
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Discord');
  }
}