var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'), // Required
    path: 'bodymovin/landingpage_illustration_with_bg.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Welcome to Sereal", // Name for future reference. Optional.
})