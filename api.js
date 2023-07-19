module.exports = async (question) => {
    console.log(question)
    const response = await fetch(process.env.CHATGPT_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+process.env.CHATGPT_TOKEN
        },
        body: JSON.stringify({
            "prompt": question,
            "max_tokens": 2000,
            "temperature": 0.9
        })
    })
    const json = await response.json()
    console.log(json)
    return json.answer
}
