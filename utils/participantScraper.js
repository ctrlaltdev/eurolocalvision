const participants = [...document.querySelectorAll('.card.card--')].map(e => {
    const image = e.querySelector('img').src.match(/[0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12}/)[0]
    const country = e.querySelector('.card__pill small').textContent.trim()
    const song = e.querySelector('.card__content > span').textContent.trim()
    const artist = e.querySelector('.card__content h3').textContent.trim()
    return {
        country,
        artist,
        song,
        image,
        "video": ""
    }
})