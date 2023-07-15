import Airtable from 'airtable'

async function POST(event: any) {
  console.log(event)
  const base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appcUH0p5UGV7xyQY')
  base('Subscribers').create([
    {
      "fields": {
        "CreatedAt": "2023-07-14T22:18:00.000Z",
        "Name": "Test Eric",
        "Email": "bosung90@gmail.com"
      }
    },
    {
      "fields": {
        "CreatedAt": "2023-07-14T22:18:00.000Z",
        "Name": "Test Eric",
        "Email": "bosung90@gmail.com"
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records?.forEach(function (record) {
      console.log(record.getId());
    });
  })
}

export {POST}