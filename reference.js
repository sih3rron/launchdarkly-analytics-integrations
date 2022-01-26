// This destinations sends data to https://requestbin.com/ for introspection
// Create a request bin and update this endpoint
const endpoint = new URL("https://events.launchdarkly.com/events/bulk")

/**
 * onTrack takes a Track event and POSTs it to an external API with fetch()
 *
 * @param {SpecTrack} event The track event
 * @param {Object.<string, any>} settings Custom settings
 * @return any
 */

async function onTrack(event, settings) {
 
  const key = event.event
  const userKey = event.userId ? event.userId : event.anonymousId
  const properties = event.properties ? event.properties : {}
  const metricValue = properties.revenue ? properties.revenue : properties.value
  const creationDate = 0 + Date.parse(event.timestamp)
  
  return await sendDataToLD(settings.apiKey,[{
      kind: "custom",
      key,
      userKey,
      creationDate,
      metricValue,
      data: properties,
    }])
}

async function sendDataToLD(apiKey, eventArray) {
  const endpoint = new URL(`https://events.launchdarkly.com/events/bulk/${apiKey}`)
  const res = await fetch(endpoint, {
    body: JSON.stringify(eventArray),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "post",
  })

  return res.text()
}