//Pegando links salvos no local storage
export async function getSavedLinks(key) {
    const myLinks = await localStorage.getItem(key)
    let savedLinks = JSON.parse(myLinks) || []

    return savedLinks
}

//Salvando links no local storage
export async function saveLinks(key, newLink) {
    let linksStored = await getSavedLinks(key)

    //Se tiver um link com o mesmo id
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink) {
        console.log('Esse link já existe na sua lista!')
        return;
    }

    //Adicionando link no local storage
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo no storage')
}

//Deletando link do local storage 