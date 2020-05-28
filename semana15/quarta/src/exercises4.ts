//EXERCÍCIO 4
//a. será do tipo void, pois nao terá nenhum valor como retorno

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type newsBody = {
    title: string,
    content: string,
    date: number,
}

const body : newsBody = {
    title: "Typescript is the new Back",
    content: "Typescript se tornou a linguagem queridinha dos programadores de backend",
    date: Date.now()
}

const createNews = async (
    title: string,
    content: string,
    date: number,
) : Promise<void> => {
    await axios.put (
        `${baseUrl}/news`, 
        body
        )
}