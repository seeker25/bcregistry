export default async function (context) {

  if (context.$config.gtagId && context.$config.gtmId) {

    const gtagID = context.$config.gtagId
    const gtagDebug = context.$config.gtagDebug ? true : false


    console.info(`Initializing gtag...${gtagID} ${gtagDebug}`)

    // first check to see if our script is already in the DOM
    const myScriptExists = Boolean(
        document.querySelector(
            `head > script[src="https://www.googletagmanager.com/gtag/js?id=${gtagID}"]`
        )
    )

    if (!myScriptExists) {
        // if it isn't already in the DOM, create and insert our script
        const myScript = document.createElement('script')
        myScript.type = 'text/javascript'
        myScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtagID}`
        //myScript.hid = 'gtm'
        myScript.async = true
        document.head.appendChild(myScript);

        const myScriptExists1 = Boolean(
        document.querySelector(
            `head > script[src="https://www.googletagmanager.com/gtag/js?id=${gtagID}"]`
        )
        )

        console.info(`gtag header set...${myScriptExists1}`)
    }

    //part 2 of Google Analytics script
    function gtag(...args: any[]){window['dataLayer'].push(arguments);}
    gtag('js', new Date());
    gtag('config', `${gtagID}`, { 'debug_mode': `${gtagDebug}` });
  }
}